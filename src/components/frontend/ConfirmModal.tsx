import React from "react";
import {
  Modal,
  Box,
  Paper,
  Button,
  Typography,
  Divider,
  makeStyles,
} from "@material-ui/core";
import { MdDelete } from "react-icons/md";
import {} from "react-icons/fa";
import { TitleRounded } from "@material-ui/icons";

const styles = makeStyles(
  (theme) => ({
    modal: {
      width: "100%",
      height: "100%",
      zIndex: 1,
      backdropFilter: "blur(3px)",
      background: "rgba(255,255,255,0.45)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    modal_header_container: {
      marginBottom: 15,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      width: "100%",
    },
    header_top: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: 5,
    },
    buttons_container: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
    },
  }),
  { index: 1 }
);

interface IProps {
  open: boolean;
  handleModal: (response: number) => void;
  message: string;
  title: string;
}
export default function ConfirmModal({
  open,
  handleModal,
  title,
  message,
}: IProps) {
  const classes = styles();
  return (
    <Modal open={open} className={classes.modal}>
      <Paper style={{ width: 500, height: 150, borderRadius: 0, padding: 10 }}>
        <Box className={classes.modal_header_container}>
          <Box className={classes.header_top}>
            <Typography
              style={{ marginBottom: 8 }}
              variant="h5"
              component="caption"
            >
              {title}
            </Typography>
          </Box>
          <Typography variant="body1" component="strong">
            {message}
          </Typography>
        </Box>
        <Divider />
        <Box className={classes.buttons_container}>
          <Button
            style={{ marginRight: 10, flex: 1 }}
            color="primary"
            variant="contained"
            size="small"
            onClick={() => handleModal(1)}
          >
            Yes
          </Button>
          <Button
            style={{ flex: 0.85 }}
            color="secondary"
            size="small"
            variant="contained"
            onClick={() => handleModal(0)}
          >
            No
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
}
