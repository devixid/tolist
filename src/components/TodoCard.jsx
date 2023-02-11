/* eslint-disable camelcase */
import { memo } from "react";
import Indicator from "@/components/atoms/Indicator";
import Pen from "@/components/atoms/icons/Pen";
import Trash from "@/components/atoms/icons/Trash";

// eslint-disable-next-line react/prop-types, no-unused-vars
function TodoCard({ id, title, priority, is_active }) {
  return (
    <div
      data-cy="todo-item"
      className="flex h-14 w-full items-center justify-between rounded-lg bg-white px-4 shadow md:h-16 lg:px-8"
    >
      <div className="flex h-full w-full items-center space-x-2 lg:space-x-4">
        <input
          data-cy="todo-item-checkbox"
          type="checkbox"
        />
        <Indicator type={priority} />
        <h3
          data-cy="todo-item-title"
          className="text-fontColor-900 font-semibold lg:text-lg "
        >
          {title}
        </h3>

        <Pen
          className="h-5 w-5"
          data-cy="todo-item-edit-button"
        />
      </div>

      <Trash
        data-cy="todo-item-delete-button"
        className="cursor-pointer text-xl text-gray-600 lg:text-2xl"
      />
    </div>
  );
}

export default memo(TodoCard);
