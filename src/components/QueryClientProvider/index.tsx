import React from "react";
import { QueryClient, QueryClientProvider as QCP } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QCP client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QCP>
  );
};
