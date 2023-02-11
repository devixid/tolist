import { memo } from "react";
// import { Header } from "@/exports";

function Navbar() {
  return (
    <nav
      data-cy="header-background"
      className="flex h-[105px] items-center justify-start bg-custom-blue p-5"
    >
      <div className="container mx-auto">
        <h1
          data-cy="header-title"
          className="text-2xl font-bold text-white"
        >
          Todo List App
        </h1>
      </div>
    </nav>
  );
}

export default memo(Navbar);
