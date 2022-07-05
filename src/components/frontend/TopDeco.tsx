import { Box } from "@mui/material";
import React from "react";
import { colors } from "../../constants/colors";

interface IProps {
  h?: number;
  w?: number;
}
export default function TopDeco({ w, h }: IProps) {
  return (
    <Box
      style={{
        height: h ? h : 60,
        width: w ? w : 100,
        backgroundColor: colors.logo_brown,
        clipPath: "polygon(0 39%, 100% 50%, 83% 100%, 1% 40%)",
        marginTop: -70,
      }}
    />
  );
}
