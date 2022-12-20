import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import DashboardError from "./components/DashboardError";
import EnvironmentError from "./components/EnvironmentError";
import Dashboard, { loader as dashboardLoader } from "./routes/Dashboard";
import Environment, { loader as environmentLoader } from "./routes/Environment";
import Home from "./routes/Home";
import Root, { loader as rootLoader } from "./routes/Root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" loader={rootLoader} element={<Root />}>
      <Route index element={<Home />} />
      <Route
        path=":environment"
        loader={environmentLoader}
        errorElement={<EnvironmentError />}
        element={<Environment />}
      >
        <Route path=":dashboard" loader={dashboardLoader} errorElement={<DashboardError />} element={<Dashboard />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
