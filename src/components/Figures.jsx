import { memo } from "react";

function Figures({ ...props }) {
  return (
    <figure className="mx-auto w-1/2 cursor-pointer">
      <img
        className="aspect-square w-full object-contain"
        alt="activity"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </figure>
  );
}

export default memo(Figures);
