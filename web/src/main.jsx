import React, { Suspense,lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from 'react-query'
import "./index.css";

// Pages routes
const Landing = React.lazy(() => import("./pages/Landing"));

const Home = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./pages/Home")), 1050);
  });
});

const CommingSoon = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./pages/CommingSoon")), 1050);
  });
});

const Players = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./pages/Players")), 1000);
  });
});

const PlayerInHeadline = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./pages/PlayerInHeadline")), 1000);
  });
});

const MeetThePlayers = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./pages/MeetThePlayers")), 1000);
  });
});

const Teams = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./pages/Teams")), 1000);
  });
});

const Conference = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./pages/Conference")), 1000);
  });
});

const Games = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./pages/Games")), 1000);
  });
});

const LakersCelebration = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./pages/LakersCelebration")), 800);
  });
});

const Arenas = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./pages/Arenas")), 1000);
  });
});


// Page Loader
import PageLoader from "./components/Common/PageLoader";

const queryClient = new QueryClient();
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
    element: <Games />,
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
    path: "/nba-arenas",
    element: <Arenas />,
  },
  {
    path: "/about-us",
    element: <CommingSoon />,
  },
  {
    path: '/comming-soon',
    element: <CommingSoon />,
  },
  {
    path: "/lakers-75",
    element: <LakersCelebration />,
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
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Suspense fallback={<PageLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </React.StrictMode>
  </QueryClientProvider>
);
