import { memo } from "react";
import { Header } from "@/exports";

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-start bg-custom-blue p-5">
        <h1 className="text-2xl font-bold text-white">Todo List App</h1>
      </nav>
      <Header />
    </>
  );
}

export default memo(Navbar);
