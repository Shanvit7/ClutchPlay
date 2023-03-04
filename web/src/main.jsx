import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";

// Pages routes
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import CommingSoon from "./pages/CommingSoon";
import Players from "./pages/Players";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/players",
    element: <Players />,
  },
  {
    path: "/games",
    element: <CommingSoon />,
  },
  {
    path: "/teams",
    element: <CommingSoon />,
  },
  {
    path: "/statistics",
    element: <CommingSoon />,
  },
  {
    path: "/seasons",
    element: <CommingSoon />,
  },
  {
    path: "/about-us",
    element: <CommingSoon />,
  },
  {
    path: "/lakers-75",
    element: <CommingSoon />,
  },
  {
    path: "/players-in-news",
    element: <CommingSoon />,
  },
  {
    path: "/player-search",
    element: <CommingSoon />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
