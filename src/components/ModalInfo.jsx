/* eslint-disable react/prop-types */
import { memo } from "react";
import { Info } from "@/assets";

function ModalInfo({ type }) {
  return (
    <div
      data-cy="modal-information"
      className="inline-flex items-center space-x-1 rounded-lg bg-white py-3.5 px-6 md:space-x-2 md:py-4 md:px-8"
    >
      <Info data-cy="modal-information-icon" />
      <p
        data-cy="modal-information-title"
        className="font-semibold"
      >
        {type} Berhasil dihapus
      </p>
    </div>
  );
}

export default memo(ModalInfo);
