import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Basic from "./pages/Basic";
import Root from "./pages/Root";
import Gestures from "./pages/Gestures";
import Variants from "./pages/Variants";

const routes = [
  {
    index: true,
    label: "Basic",
    element: <Basic />,
  },
  {
    path: "gestures",
    label: "Gestures",
    element: <Gestures />,
  },
  {
    path: "variants",
    label: "Variants",
    element: <Variants />,
  },
];
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root routes={routes} />,
    children: routes,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
