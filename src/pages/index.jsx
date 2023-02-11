import { memo, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Plus } from "@/assets";

import {
  Button,
  Figures,
  Portal,
  ModalDelete,
  Card,
  ModalInfo,
} from "@/exports";
import {
  useAddActivityMutation,
  useGetAllActivityQuery,
  useRemoveActivityMutation,
} from "@/service";

const newActivity = {
  title: "New Activity",
  email: "dragdimas9@gmail.com",
  _comment: "",
};

function Home() {
  const [temp, setTemp] = useState(null);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);

  const { data, refetch, isLoading } = useGetAllActivityQuery();
  const [addActivity] = useAddActivityMutation();
  const [removeActivity] = useRemoveActivityMutation();

  const navigate = useNavigate();

  const activities = useMemo(() => {
    return data?.data ?? [];
  }, [data?.data]);

  const handleAddNewActivity = () => {
    addActivity(newActivity)
      .unwrap()
      .then(() => {
        refetch();
      })
      .catch((err) => console.error(err));
  };

  const handleDeleteActivity = () => {
    removeActivity(temp?.id)
      .unwrap()
      .then(() => {
        refetch();
        setTemp(null);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setShowModalDelete(false);
        setShowModalInfo(true);
      });
  };

  return (
    <div className="container p-4">
      <Portal>
        {showModalDelete && (
          <ModalDelete
            type="activity"
            title={temp?.title}
            onClickCancel={() => {
              setShowModalDelete("");
              setTemp(null);
            }}
            onClickDelete={handleDeleteActivity}
          />
        )}

        {showModalInfo && (
          <ModalInfo
            type="Activity"
            onClose={() => setShowModalInfo(false)}
          />
        )}
      </Portal>

      <header className="md:itens-center mt-11 flex flex-row items-start justify-between">
        <h1
          data-cy="activity-title"
          className="text-4xl font-bold text-[#111111]"
        >
          Activity
        </h1>

        <Button
          data-cy="activity-add-button"
          onClick={handleAddNewActivity}
        >
          <Plus className="h-4 w-4" />
          <span className="text-lg font-semibold">Tambah</span>
        </Button>
      </header>

      {activities.length === 0 && isLoading ? (
        <div className="container p-4">
          <p>Loading...</p>
        </div>
      ) : (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
          {activities.length > 0 ? (
            <div className="mt-11 flex flex-row flex-wrap gap-4">
              {activities.map(({ title, id, created_at }) => (
                <Card
                  key={id}
                  title={title}
                  id={id}
                  created_at={created_at}
                  onClick={() => navigate(`/detail/${id}`)}
                  onClickDelete={() => {
                    setShowModalDelete(true);
                    setTemp({
                      title,
                      id,
                    });
                  }}
                  className="w-full sm:max-w-[calc(50%-16px)] lg:max-w-[calc(33.33333%-16px)] xl:max-w-[calc(25%-16px)]"
                />
              ))}
            </div>
          ) : (
            <Figures src="https://ik.imagekit.io/mlnzyx/devcode-todo/new-activity_OP7NGluCh3.webp?updatedAt=1641870436456" />
          )}
        </>
      )}
    </div>
  );
}

export default memo(Home);
