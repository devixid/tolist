import { memo } from "react";
import { useSelector } from "react-redux";
import DropDownItem from "@/components/atoms/DropDownItem";
import Priorities from "@/helpers/priority";

function DropDown() {
  const modalForm = useSelector((state) => state.modalForm);

  if (modalForm.isDropDownOpen) {
    return (
      <div
        data-cy="modal-add-priority-dropdown"
        className="absolute mt-2 flex h-72 w-40 flex-col divide-y divide-neutral-300 rounded-lg border bg-white lg:w-48"
      >
        {Priorities.map((item) => (
          <DropDownItem
            key={item.id}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...item}
          />
        ))}
      </div>
    );
  }

  return null;
}

export default memo(DropDown);
