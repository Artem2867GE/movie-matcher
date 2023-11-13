import React from "react";
import { RouteObject } from "react-router-dom";

export const createRouter = (): RouteObject[] => {
  return [
    {
      path: "/",
      element: <div>Hello it is main page</div>,
    },
    {
      path: "/matcher",
      element: <div>Hello it is matcher page</div>,
    },
  ];
};
