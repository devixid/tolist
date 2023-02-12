/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-undef */
import { memo, useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { priorities, sort } from "@/apps";
import { BackButtonIcon, Check, Pen, Plus, Sort } from "@/assets";
import {
  Button,
  Figures,
  ModalListItem,
  ModalDelete,
  ModalInfo,
  Portal,
  TodoCard,
} from "@/exports";
import {
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useEditActivityMutation,
  useGetDetailActivityQuery,
  useUpdateTodoMutation,
} from "@/service";

function TodoDetail() {
  const [detail, setDetail] = useState(null);
  const [temp, setTemp] = useState(null);
  const [sortBy, setSortBy] = useState("latest");

  const [title, setTitle] = useState("");
  const [isTitleEdited, setEditTitle] = useState(false);
  const [isShowModalListItem, setShowModalListItem] = useState(false);
  const [isShowDropdown, setShowDropdown] = useState(false);
  const [isShowModalDelete, setShowModalDelete] = useState(false);
  const [isShowModalInfo, setShowModalInfo] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const { data, refetch, isLoading } = useGetDetailActivityQuery(id, {
    skip: !id,
  });
  const [updateActivity] = useEditActivityMutation();
  const [createTodo] = useCreateTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const todoItems = useMemo(() => {
    if (!detail) return [];

    const todos = [...detail.todo_items];

    return todos.sort((a, b) => {
      if (sortBy === "oldest") {
        return a.id - b.id;
      }

      if (sortBy === "a-to-z") {
        const x = a.title.toLowerCase();
        const y = b.title.toLowerCase();

        if (x < y) return -1;
        return 0;
      }

      if (sortBy === "z-to-a") {
        const x = a.title.toLowerCase();
        const y = b.title.toLowerCase();

        if (y < x) return -1;
        return 0;
      }

      if (sortBy === "unfinished") {
        const x = a.is_active === 1;
        const y = b.is_active === 1;

        return x - y;
      }

      return b.id - a.id;
    });
  }, [detail, sortBy]);

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

  const handleSort = (sort_id) => {
    setSortBy(sort_id);
    setShowDropdown(false);
  };

  const handleOnSubmit = (formData) => {
    if (temp) {
      updateTodo({
        ...formData,
        id: temp.id,
      })
        .unwrap()
        .then(() => setShowModalListItem(false))
        .catch((err) => console.error(err))
        .finally(() => refetch());
    } else {
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
    }
  };

  const handleOnClickDelete = () => {
    if (!temp?.id) return;

    deleteTodo(temp.id)
      .unwrap()
      .then(() => {
        setShowModalDelete(false);
        setShowModalInfo(true);
        refetch();
      })
      .catch((err) => console.error(err))
      .finally(() => setTemp(null));
  };

  const handleOnCheck = (todoId) => {
    const todo = detail?.todo_items.find(({ id: itemId }) => itemId === todoId);
    if (!todo) return;

    updateTodo({
      ...todo,
      is_active: todo.is_active === 1 ? 0 : 1,
    })
      .unwrap()
      .then(() => refetch());
  };

  useEffect(() => {
    if (data) {
      setDetail(data);
      setTitle(data.title);
    }
  }, [data]);

  useEffect(() => {
    if (!isShowModalListItem) {
      setTemp(null);
    }
  }, [isShowModalListItem]);

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
              <div className="relative">
                <button
                  type="button"
                  data-cy="todo-sort-button"
                  onClick={() => setShowDropdown((prevState) => !prevState)}
                >
                  <Sort className="h-14 w-14" />
                </button>

                {isShowDropdown && (
                  <div
                    className="absolute top-16 right-0 w-64 rounded-lg border border-custom-white-700 bg-white shadow-lg"
                    data-cy="sort-parent"
                  >
                    {sort.map(({ id: sortId, label, Icon }) => (
                      <button
                        type="button"
                        key={sortId}
                        className="flex w-full flex-row items-center justify-start gap-4 border-b border-b-custom-white-700 p-4 last:border-b-0"
                        onClick={() => handleSort(sortId)}
                        data-cy={
                          sortId === "a-to-z"
                            ? "sort-az"
                            : sortId === "z-to-a"
                            ? "sort-za"
                            : `sort-${sortId}`
                        }
                      >
                        <Icon className="h-4 w-4" />

                        <span>{label}</span>

                        {sortBy === sortId && (
                          <Check className="absolute right-4 h-6 w-6" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

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
              todoItems.map(
                (
                  { id: todoId, title: todoTitle, is_active, priority },
                  index,
                ) => {
                  const key = index.toString();

                  return (
                    <TodoCard
                      key={key}
                      id={todoId}
                      title={todoTitle}
                      dataCy={index}
                      priority={
                        priorities.find(({ id: itemId }) => itemId === priority)
                          ?.color || null
                      }
                      is_active={is_active}
                      onDelete={() => {
                        setTemp({
                          id: todoId,
                          title: todoTitle,
                        });
                        setShowModalDelete(true);
                      }}
                      onCheck={() => handleOnCheck(todoId)}
                      onEdit={() => {
                        setTemp({
                          id: todoId,
                          title: todoTitle,
                          priority,
                        });
                        setShowModalListItem(true);
                      }}
                    />
                  );
                },
              )
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

        {isShowModalInfo && (
          <ModalInfo
            type="List Item"
            onClose={() => setShowModalInfo(false)}
          />
        )}

        {isShowModalDelete && (
          <ModalDelete
            onClickCancel={() => {
              setShowModalDelete(false);
              setTemp(null);
            }}
            type="list-item"
            title={temp.title}
            onClickDelete={() => handleOnClickDelete()}
          />
        )}
      </Portal>
    </div>
  );
}

export default memo(TodoDetail);
