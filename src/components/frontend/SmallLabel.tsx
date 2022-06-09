import { Typography } from "@material-ui/core";
import React from "react";

interface IProps {
  text: string;
  color?: any;
}
export default function SmallLabel({ text, color }: IProps) {
  return (
    <Typography
      variant="body2"
      style={{ marginBottom: 2.5, color: color ? color : "GrayText" }}
    >
      {text}
    </Typography>
  );
}
