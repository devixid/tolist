import { memo } from "react";
import { Button } from "@/exports";

function Header() {
  return (
    <div className="flex items-center justify-around">
      <h1 data-cy="activity-title">Activity</h1>
      <Button />
    </div>
  );
}

export default memo(Header);
