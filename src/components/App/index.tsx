import React from "react";
import { RouterProvider } from "../RouterProvider";
import { RouteObject } from "react-router-dom";

function App({ createRouter }: { createRouter: () => RouteObject[] }) {
  return <RouterProvider createRouter={createRouter} />;
}

export default App;
