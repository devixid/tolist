import { memo } from "react";
import { Card } from "@/exports";

function Home() {
  const activity = 1;

  if (activity.length > 0) {
    return (
      <div className="grid flex-[1_1_auto] gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 xl:grid-cols-4">
        <Card />
      </div>
    );
  }

  return (
    <figure className="mx-auto w-1/2 cursor-pointer">
      <img
        data-cy="activity-empty-state"
        src="https://ik.imagekit.io/mlnzyx/devcode-todo/new-activity_OP7NGluCh3.webp?updatedAt=1641870436456"
        alt="empty-activity"
        className="aspect-square w-full object-contain"
      />
    </figure>
  );
}

export default memo(Home);
