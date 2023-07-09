import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/Home";
import ErrorPage from "./error-page";
import DetailProduct from "./pages/product/detail";
import ShopPage from "./pages/shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "product/detail/:slug",
    element: <DetailProduct />,
  },
    {
    path: "shop",
    element: <ShopPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
