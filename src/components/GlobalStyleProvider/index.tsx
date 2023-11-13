import React from "react";
import { CssBaseline } from "@mui/material";

export const GlobalStyleProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CssBaseline />
      {children}
    </>
  );
};
