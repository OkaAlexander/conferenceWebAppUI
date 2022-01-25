import { Box } from "@material-ui/core";
import React, { ReactElement, ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function RowContainer({ children }: Props) {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
}
