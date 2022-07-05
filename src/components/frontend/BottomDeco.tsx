import { Box } from "@material-ui/core";
import React from "react";
import { colors } from "../../constants/colors";

interface IProps {
  h?: number;
  w?: number;
}

export default function BottomDeco({ w, h }: IProps) {
  return (
    <Box
      style={{
        height: h ? h : 60,
        width: w ? w : 100,
        backgroundColor: colors.logo_brown,
        clipPath: "polygon(16% 1%, 100% 54%, 0 53%)",
        marginTop: 65,
      }}
    />
  );
}
