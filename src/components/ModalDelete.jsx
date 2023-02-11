import { memo } from "react";
import Button from "./Button";
import { Danger } from "@/assets";

function ModalAlert() {
  return (
    <div
      data-cy="modal-delete"
      className="flex aspect-[1.25/1] h-80 flex-col items-center justify-center rounded bg-white md:h-[24rem]"
    >
      <Danger data-cy="modal-delete-icon" />

      <h3
        data-cy="modal-delete-title"
        className="px-8 text-center font-normal md:px-16"
      >
        Apakah anda yakin ingin menghapus{" "}
        <strong>&quot;Beli Telur&quot;</strong>?
      </h3>
      <div className="flex h-full w-full items-center justify-center space-x-2 md:space-x-3">
        <Button
          data-cy="modal-delete-cancel-button"
          className="bg-neutral-200 px-8 font-semibold text-neutral-900 md:px-12"
        >
          Batal
        </Button>
        <Button
          data-cy="modal-delete-confirm-button"
          className="bg-red-500 px-8 font-semibold text-white md:px-12"
        >
          Hapus
        </Button>
      </div>
    </div>
  );
}

export default memo(ModalAlert);
