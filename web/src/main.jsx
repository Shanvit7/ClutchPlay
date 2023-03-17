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
import PlayerInHeadline from "./pages/PlayerInHeadline";
import MeetThePlayers from "./pages/MeetThePlayers";
import Teams from "./pages/Teams";
import Conference from "./pages/Conference";
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
    element: <Teams />,
  },
  {
    path: "/teams/:conferenceId",
    element: <Conference />,
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
    path: "/player-in-headline",
    element: <PlayerInHeadline />,
  },
  {
    path: "/meet-the-players",
    element: <MeetThePlayers />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
