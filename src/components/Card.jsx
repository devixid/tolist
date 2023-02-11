import { format } from "date-fns";
import PropTypes from "prop-types";
import { memo } from "react";

import { Trash } from "@/assets";

function Card({ id, title, created_at, onClick, onClickDelete, className }) {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      onClick={onClick}
      onKeyDown={() => {}}
      data-cy="activity-item"
      id={`card-${id}`}
      className={`flex min-h-[14rem] flex-col items-center justify-between rounded bg-white p-4 shadow md:cursor-pointer ${className}`}
    >
      <h3
        data-cy="activity-item-title"
        className="w-full"
      >
        {title}
      </h3>

      <div className="flex w-full items-center justify-between">
        <time
          dateTime={created_at}
          data-cy="activity-item-date"
        >
          {format(new Date(created_at), "dd MMMM yyyy")}
        </time>

        <button
          type="button"
          className="z-10"
          onClick={(e) => {
            e.stopPropagation();
            onClickDelete();
          }}
        >
          <Trash data-cy="activity-item-delete-button" />
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

export default memo(Card);
