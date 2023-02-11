import { memo } from "react";
import { Trash } from "@/assets";

function Card() {
  return (
    <div
      data-cy="activity-item"
      className="flex min-h-[14rem] flex-col items-center justify-between rounded bg-white shadow md:cursor-pointer"
    >
      <div className="h-full w-full p-2 md:p-4">
        <h3 data-cy="activity-item-title">New Activity</h3>
      </div>

      <div className="flex w-full items-center justify-between p-2 md:p-4">
        <p data-cy="activity-item-date">9 feb 2023</p>
        <Trash
          onClick={(e) => {
            e.stopPropagation();
          }}
          data-cy="activity-item-delete-button"
        />
      </div>
    </div>
  );
}

export default memo(Card);
