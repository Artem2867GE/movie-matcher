import React from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import { RouterProvider as RP } from "react-router-dom";

export const RouterProvider = ({
  createRouter,
  fallback,
}: {
  createRouter: () => RouteObject[];
  fallback?: React.ReactNode;
}) => {
  const router = React.useMemo(() => createBrowserRouter(createRouter()), [createRouter]);
  return <RP router={router} fallbackElement={fallback} />;
};
