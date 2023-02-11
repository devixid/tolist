import { memo, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Home, Navbar, Loading, TodoDetail } from "@/exports";

function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<Loading />}>
      {location !== "/" && location !== "/loading" && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/detail"
          element={<TodoDetail to="/" />}
        />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </Suspense>
  );
}

export default memo(App);
