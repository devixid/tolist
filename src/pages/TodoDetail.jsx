/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-undef */
import { memo, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import { BackButtonIcon, Pen, Plus, Sort } from "@/assets";
import {
  useCreateTodoMutation,
  useEditActivityMutation,
  useGetDetailActivityQuery,
} from "@/service";
import { Button, Figures, ModalListItem, Portal } from "@/exports";

function TodoDetail() {
  const [detail, setDetail] = useState(null);
  // const [temp, setTemp] = useState(null);
  const [temp] = useState(null);

  const [title, setTitle] = useState("");
  const [isTitleEdited, setEditTitle] = useState(false);
  const [isShowModalListItem, setShowModalListItem] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const { data, refetch, isLoading } = useGetDetailActivityQuery(id, {
    skip: !id,
  });
  const [updateActivity] = useEditActivityMutation();
  const [createTodo] = useCreateTodoMutation();

  const handleEditTitle = () => {
    updateActivity({
      id,
      body: {
        title,
      },
    })
      .unwrap()
      .then(() => {
        setDetail((prevState) => ({
          ...prevState,
          title,
        }));
        setEditTitle(false);
      })
      .catch((err) => console.error(err))
      .finally(() => refetch());
  };

  const handleOnSubmit = (formData) => {
    // console.log(formData);
    createTodo({
      ...formData,
      activity_group_id: id,
    })
      .unwrap()
      .then(() => {
        setShowModalListItem(false);
      })
      .catch((err) => console.error(err))
      .finally(() => refetch());
  };

  useEffect(() => {
    if (data) {
      setDetail(data);
      setTitle(data.title);
    }
  }, [data]);

  if (!id) {
    return navigate("/");
  }

  return (
    <div className="container mt-11 p-4">
      {isLoading ? (
        <div className="container p-4">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <header className="flex w-full items-center justify-between gap-4">
            <div className="flex items-center justify-start">
              <Link
                to={-1}
                className="mr-4"
                data-cy="todo-back-button"
              >
                <BackButtonIcon className="h-9 w-9" />
              </Link>

              <div className="flex items-center">
                {isTitleEdited ? (
                  <input
                    className="w-full max-w-lg border-b border-b-black text-4xl font-bold outline-0"
                    data-cy="todo-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    autoFocus
                    onBlur={handleEditTitle}
                    onKeyDown={(e) => {
                      const { code } = e;

                      if (code.toLowerCase() === "enter") {
                        handleEditTitle();
                      }
                    }}
                  />
                ) : (
                  <h1
                    data-cy="todo-title"
                    className="max-w-lg break-all text-4xl font-bold"
                    onClick={() => setEditTitle(true)}
                  >
                    {detail?.title ?? ""}
                  </h1>
                )}

                <button
                  type="button"
                  className="ml-4"
                  data-cy="todo-title-edit-button"
                  onClick={() => {
                    setEditTitle(true);
                  }}
                >
                  <Pen className="h-8 w-8" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end gap-4">
              <button
                type="button"
                data-cy="todo-sort-button"
              >
                <Sort className="h-14 w-14" />
              </button>

              <Button
                data-cy="todo-add-button"
                onClick={() => setShowModalListItem(true)}
              >
                <Plus className="h-4 w-4" />
                <span className="text-lg font-semibold">Tambah</span>
              </Button>
            </div>
          </header>

          <div className="mt-11">
            {detail?.todo_items.length > 0 ? (
              <pre className="whitespace-pre-wrap">
                {JSON.stringify(detail.todo_items, null, 2)}
              </pre>
            ) : (
              <Figures
                src="https://ik.imagekit.io/mlnzyx/devcode-todo/new-todos_icWrDUS4D0.webp?updatedAt=1641870367004"
                data-cy="todo-empty-state"
              />
            )}
          </div>
        </>
      )}

      <Portal>
        {isShowModalListItem && (
          <ModalListItem
            data={temp}
            onSubmit={handleOnSubmit}
            onClose={() => setShowModalListItem(false)}
          />
        )}
      </Portal>
    </div>
  );
}

export default memo(TodoDetail);
