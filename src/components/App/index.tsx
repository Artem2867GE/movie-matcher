import React from "react";
import { RouterProvider } from "../RouterProvider";
import { QueryClientProvider } from "../QueryClientProvider";
import { RouteObject } from "react-router-dom";
import { Container } from "../UI/Container";
import { globalStyles } from "../../globalStyles";
import { Global } from "@emotion/react";

function App({ createRouter }: { createRouter: () => RouteObject[] }) {
  return (
    <>
      <Global styles={globalStyles} />
      <QueryClientProvider>
        <Container>
          <RouterProvider createRouter={createRouter} />
        </Container>
      </QueryClientProvider>
    </>
  );
}

export default App;
