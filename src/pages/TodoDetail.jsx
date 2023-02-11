/* eslint-disable no-undef */
import { memo } from "react";
import { TodoCard, Figures } from "@/exports";

function TodoDetail() {
  const todos = [];
  if (todos.length > 0) {
    return (
      <div className="flex w-full flex-col space-y-2 md:space-y-3">
        {todos.map((item) => (
          <TodoCard
            key={item.id}
            id={item.id}
            title={item.title}
            priority={item.priority}
            is_active={item.is_active}
          />
        ))}
      </div>
    );
  }

  return (
    <Figures
      data-cy="todo-empty-state"
      src="https://ik.imagekit.io/mlnzyx/devcode-todo/new-todos_icWrDUS4D0.webp?updatedAt=1641870367004"
    />
  );
}

export default memo(TodoDetail);
