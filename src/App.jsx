import { memo, Suspense } from "react";
import {
  Navigate,
  Route,
  Routes,
  // useLocation
} from "react-router-dom";
import {
  Home,
  //  Navbar,
  Loading,
  TodoDetail,
} from "@/exports";
import PageLayout from "./components/PageLayout";

function App() {
  // const location = useLocation();

  return (
    <PageLayout>
      <Suspense fallback={<Loading />}>
        {/* {location !== "/" && location !== "/loading" && <Navbar />} */}
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/detail/:id"
            element={<TodoDetail to="/" />}
          />
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </Suspense>
    </PageLayout>
  );
}

export default memo(App);
