import { Modal } from "@material-ui/core";
import React from "react";

type Props = {
  open: boolean;
};
export default function SpinnerLoader({ open }: Props) {
  return (
    <Modal
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={open}
    >
      <div
        style={{
          zIndex: 999,
          backgroundColor: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(5px)",
        }}
        className="lds-hourglass"
      ></div>
    </Modal>
  );
}
