import React from "react";
import { RouteObject } from "react-router-dom";

const MainPage = React.lazy(() => import("./pages/main"));

export const createRouter = (): RouteObject[] => {
  return [
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/matcher",
      element: <div>Hello it is matcher page</div>,
    },
  ];
};
