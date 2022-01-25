import { makeStyles, TextField } from "@material-ui/core";
import React from "react";
import { IInput } from "../../interface/IComponent";

const styles = makeStyles(
  (theme) => ({
    root: {
      margin: theme.spacing(0.5, 0),
      width: "100%",
    },
  }),
  { index: 1 }
);
export default function Input({
  full,
  row_child,
  required,
  label,
  type,
  change,
}: IInput) {
  const classes = styles();
  return (
    <TextField
      type={type ? type : "text"}
      className={classes.root}
      variant="outlined"
      required={required}
      size="small"
      style={{ marginRight: row_child ? 5 : 0 }}
      fullWidth={full}
      label={label}
      onChange={change}
    />
  );
}
