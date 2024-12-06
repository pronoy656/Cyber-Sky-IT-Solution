import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Component/Root/Root.jsx";
import Home from "./Component/Pages/Home/Home.jsx";
import Blog from "./Component/Pages/Blog/Blog.jsx";
import Comment from "./Component/Pages/Comment/Comment.jsx";
import Video from "./Component/Pages/Video/Video.jsx";
import AllItems from "./Component/Pages/AllItems/AllItems.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/comment",
        element: <Comment></Comment>,
      },
      {
        path: "/video",
        element: <Video></Video>,
      },
      {
        path: "/allItems",
        element: <AllItems></AllItems>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
