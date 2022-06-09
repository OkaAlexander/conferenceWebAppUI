import { Typography } from "@material-ui/core";
import React from "react";

interface IProps {
  text: string;
  color?: any;
  bold?: boolean;
}
export default function BigLabel({ text, color, bold }: IProps) {
  return (
    <Typography
      variant="body1"
      style={{ color: color ? color : "black", marginBottom: 2.5 }}
    >
      {text}
    </Typography>
  );
}
