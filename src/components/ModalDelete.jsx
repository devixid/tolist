/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { memo } from "react";
import PropTypes from "prop-types";

import Button from "./Button";
import { Danger } from "@/assets";

function ModalAlert({ onClickDelete, onClickCancel, title }) {
  return (
    <div
      className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-25 p-4"
      onClick={onClickCancel}
    >
      <div
        data-cy="modal-delete"
        className="flex w-full max-w-md flex-col items-center justify-center gap-y-8 rounded bg-white py-8"
        onClick={(e) => e.stopPropagation()}
      >
        <Danger
          data-cy="modal-delete-icon"
          className="h-20 w-20"
        />

        <h3
          data-cy="modal-delete-title"
          className="px-8 text-center font-normal"
        >
          Apakah anda yakin ingin menghapus <strong>&quot;{title}&quot;</strong>
          ?
        </h3>

        <div className="flex h-full w-full items-center justify-center space-x-2 md:space-x-3">
          <Button
            data-cy="modal-delete-cancel-button"
            onClick={onClickCancel}
            className="bg-neutral-200 px-8 font-semibold text-neutral-900 md:px-12"
          >
            Batal
          </Button>
          <Button
            data-cy="modal-delete-confirm-button"
            onClick={onClickDelete}
            className="bg-red-500 px-8 font-semibold text-white md:px-12"
          >
            Hapus
          </Button>
        </div>
      </div>
    </div>
  );
}

ModalAlert.propTypes = {
  title: PropTypes.string,
  onClickDelete: PropTypes.func.isRequired,
  onClickCancel: PropTypes.func.isRequired,
};

export default memo(ModalAlert);
