/* eslint-disable react/prop-types */
import { memo } from "react";

function Button({
  children,
  className = "bg-sky-500 hover:bg-sky-600 text-white ",
  ...props
}) {
  return (
    <button
      type="button"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      className={`inline-flex items-center justify-center space-x-1 rounded-full py-2 px-2 active:scale-95 sm:px-4 md:space-x-1.5 md:py-3 md:px-5 ${className}`}
    >
      {children}
    </button>
  );
}

export default memo(Button);
