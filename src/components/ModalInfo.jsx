/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { memo } from "react";
import PropTypes from "prop-types";
import { Info } from "@/assets";

function ModalInfo({ type, onClose }) {
  return (
    <div
      className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-25 p-4"
      onClick={onClose}
    >
      <div
        data-cy="modal-information"
        className="inline-flex w-full max-w-md items-center space-x-1 rounded-lg bg-white py-3.5 px-6 md:space-x-2 md:py-4 md:px-8"
      >
        <Info data-cy="modal-information-icon" />

        <p
          data-cy="modal-information-title"
          className="font-semibold"
        >
          {type} Berhasil dihapus
        </p>
      </div>
    </div>
  );
}

ModalInfo.propTypes = {
  type: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default memo(ModalInfo);
