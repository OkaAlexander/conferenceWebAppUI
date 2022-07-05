import { Typography } from "@mui/material";
import React from "react";

interface IProps {
  text: string;
  color?: any;
  bold?: boolean;
  fontsize?: number;
  centered?: boolean;
  fontfamily?: string;
}
export default function BigLabel({
  text,
  color,
  bold,
  fontsize,
  fontfamily,
  centered,
}: IProps) {
  return (
    <Typography
      variant="body1"
      sx={(theme) => ({
        color: color ? color : "black",
        marginBottom: 2.5,
        fontWeight: bold ? "bold" : "normal",
        textAlign: centered ? "center" : "initial",
        fontSize: theme.spacing(fontsize ? fontsize : 2.5),
        fontFamily: fontfamily ? fontfamily : "Roboto",
      })}
    >
      {text}
    </Typography>
  );
}
