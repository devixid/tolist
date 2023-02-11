/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";
import { memo, useEffect, useState } from "react";

import { Check, ChevronDown, Close } from "@/assets";
import Button from "./Button";

const newTodoList = {
  title: "",
  priority: "very-high",
};

const priorities = [
  {
    id: "very-high",
    label: "Very High",
    color: "#ED4C5C",
  },
  {
    id: "high",
    label: "High",
    color: "#F8A541",
  },
  {
    id: "normal",
    label: "Normal",
    color: "#00A790",
  },
  {
    id: "low",
    label: "Low",
    color: "#428BC1",
  },
  {
    id: "very-low",
    label: "Very Low",
    color: "#8942C1",
  },
];

function ModalListItem({ data, onSubmit, onClose }) {
  const [formData, setFormData] = useState(newTodoList);
  const [isShowDropdown, setShowDropdown] = useState(false);

  const getCurrentPriority = () => {
    return priorities.find(({ id }) => id === formData.priority);
  };

  const handleOnChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      title: e.target.value,
    }));
  };

  const handleSetPriority = (id) => {
    setFormData((prevState) => ({
      ...prevState,
      priority: id,
    }));
    setShowDropdown(false);
  };

  useEffect(() => {
    if (data) {
      setFormData((prevState) => ({
        ...prevState,
        title: data.title,
        priority: data.priority,
      }));
    }
  }, [data]);

  return (
    <div
      className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-25 p-4"
      onClick={onClose}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(formData);
        }}
        data-cy="modal-add"
        className="w-full max-w-2xl rounded-xl bg-white shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex flex-row items-center justify-between border-b border-b-custom-white-700 px-4 py-6 md:px-6">
          <span
            className="text-lg font-semibold"
            data-cy="modal-add-title"
          >
            {data ? "Edit" : "Tambah"} List Item
          </span>
          <button
            type="button"
            onClick={onClose}
            data-cy="modal-add-close-button"
          >
            <Close className="h-6 w-6" />
          </button>
        </header>

        <div className="flex flex-col gap-6 px-4 py-6 md:px-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="todo-title"
              data-cy="modal-add-name-title"
              className="text-xs font-semibold uppercase"
            >
              Nama list item
            </label>

            <input
              className="rounded-md border-custom-white-700 p-4 outline-none focus:border-custom-blue focus:outline-none"
              type="text"
              id="todo-title"
              data-cy="modal-add-name-input"
              placeholder="Tambahkan nama list item"
              onChange={handleOnChange}
              autoFocus
            />
          </div>

          <div className="flex flex-col items-start gap-2">
            <span
              className="text-xs font-semibold uppercase"
              data-cy="modal-add-priority-title"
            >
              Priority
            </span>

            <div className="relative w-full max-w-[250px]">
              <button
                type="button"
                data-cy={isShowDropdown ? "" : "modal-add-priority-dropdown"}
                className="flex w-full flex-row items-center gap-4 rounded-md border border-custom-white-700 p-4"
                onClick={() => setShowDropdown((prevState) => !prevState)}
              >
                <div
                  className="flex flex-row items-center gap-4"
                  data-cy="modal-add-priority-item"
                >
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{
                      background: getCurrentPriority().color || "#ED4C5C",
                    }}
                  />
                  <span>{getCurrentPriority().label}</span>
                </div>
                <ChevronDown
                  className={`absolute right-4 h-6 w-6 ${
                    isShowDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isShowDropdown && (
                <ul
                  className="absolute top-0 left-0 z-10 w-full rounded-md border border-custom-white-700 bg-white"
                  data-cy="modal-add-priority-dropdown"
                >
                  <li
                    className="flex flex-row items-center gap-4 bg-custom-white-700 p-4"
                    onClick={() => setShowDropdown((prevState) => !prevState)}
                  >
                    <span>Pilih priority</span>
                    <ChevronDown className="absolute right-4 h-6 w-6 rotate-180" />
                  </li>

                  {priorities.map(({ id, label, color }) => (
                    <li
                      className="flex cursor-pointer flex-row items-center gap-4 border-b border-b-custom-white-700 p-4 last:rounded-md last:border-b-0 hover:bg-custom-white-800"
                      onClick={() => handleSetPriority(id)}
                      key={id}
                      data-cy={`modal-add-priority-${id}`}
                    >
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{
                          background: color,
                        }}
                      />
                      <span>{label}</span>
                      {formData.priority === id && (
                        <Check className="absolute right-4 h-6 w-6" />
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <footer className="flex justify-end border-t border-t-custom-white-700 py-6 px-4 md:px-6">
          <Button type="submit">Simpan</Button>
        </footer>
      </form>
    </div>
  );
}

ModalListItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.any,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default memo(ModalListItem);
