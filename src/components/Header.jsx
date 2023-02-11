import { memo } from "react";
import { Button } from "@/exports";

function Header() {
  return (
    <div className="flex items-center justify-around p-5">
      <h1
        data-cy="activity-title"
        className="text-4xl font-bold"
      >
        Activity
      </h1>
      <Button />
    </div>
  );
}

export default memo(Header);
