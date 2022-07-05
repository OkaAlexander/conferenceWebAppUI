import { Menu, MenuItem } from "@material-ui/core";
import React from "react";

interface IProps {
  handleClose: (name: string) => void;
  anchorEl: HTMLElement | null;
}
export default function ParticipantActionMenu({
  handleClose,
  anchorEl,
}: IProps) {
  return (
    <Menu open={Boolean(anchorEl)} anchorEl={anchorEl}>
      <MenuItem onClick={() => handleClose("id")}>Membership ID</MenuItem>
      <MenuItem onClick={() => handleClose("cert")}>Certificate</MenuItem>
    </Menu>
  );
}
