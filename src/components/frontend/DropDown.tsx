import { makeStyles, MenuItem, TextField } from "@material-ui/core";
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
export default function DropDown({
  full,
  row_child,
  col_child,
  label,
  data,
  required,
  change,
}: IInput) {
  const classes = styles();
  return (
    <TextField
      className={classes.root}
      variant="outlined"
      size="small"
      style={{ marginRight: row_child ? 0.5 : 0 }}
      fullWidth={full}
      label={label}
      select
      required={required}
      onChange={change}
    >
      <MenuItem value="">
        <small>None</small>
      </MenuItem>
      {data &&
        data.map((info) => (
          <MenuItem value={info.value}>{info.title}</MenuItem>
        ))}
    </TextField>
  );
}
