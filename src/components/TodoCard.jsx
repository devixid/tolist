import { memo } from "react";
import PropTypes from "prop-types";

import { Trash, Pen } from "@/assets";

function TodoCard({
  title,
  priority,
  is_active,
  onCheck,
  onEdit,
  onDelete,
  dataCy,
}) {
  return (
    <div
      data-cy={`todo-item-${dataCy}`}
      className="mb-4 flex h-14 w-full items-center justify-between rounded-lg bg-white px-4 shadow last:mb-0 md:h-16 lg:px-8"
    >
      <div className="mr-4 flex h-full w-full items-center space-x-2 lg:space-x-4">
        <input
          data-cy="todo-item-checkbox"
          type="checkbox"
          onChange={onCheck}
          checked={is_active === 1}
        />

        <div
          className="h-3 w-3 rounded-full"
          data-cy="todo-item-priority-indicator"
          style={{
            background: priority || "#ED4C5C",
          }}
        />

        <h3
          data-cy="todo-item-title"
          className={` font-semibold lg:text-lg ${
            is_active === 1 ? "text-custom-black-100 line-through" : ""
          }`}
        >
          {title}
        </h3>

        <button
          type="button"
          data-cy="todo-item-edit-button"
          onClick={onEdit}
        >
          <Pen className="h-5 w-5" />
        </button>
      </div>

      <button
        type="button"
        onClick={onDelete}
        data-cy="todo-item-delete-button"
      >
        <Trash className="cursor-pointer text-xl text-gray-600 lg:text-2xl" />
      </button>
    </div>
  );
}

TodoCard.propTypes = {
  title: PropTypes.string,
  priority: PropTypes.string.isRequired,
  is_active: PropTypes.number.isRequired,
  dataCy: PropTypes.number.isRequired,
  onCheck: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default memo(TodoCard);
