import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
// import { adminRoutes } from "./admin.routes";
import { userPaths } from "./user.routes";
import { adminPaths } from "./admin.routes";
import { routeGenerator } from "../utils/routesGenerator";
import { facultyPaths } from "./faculty.routes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/user",
    element: <App />,
    children:routeGenerator(userPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children:routeGenerator(facultyPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default router;
