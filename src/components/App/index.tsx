import React from "react";
import { RouterProvider } from "../RouterProvider";
import { QueryClientProvider } from "../QueryClientProvider";
import { GlobalStyleProvider } from "../GlobalStyleProvider";
import { RouteObject } from "react-router-dom";

function App({ createRouter }: { createRouter: () => RouteObject[] }) {
  return (
    <QueryClientProvider>
      <GlobalStyleProvider>
        <RouterProvider createRouter={createRouter} />;
      </GlobalStyleProvider>
    </QueryClientProvider>
  );
}

export default App;
