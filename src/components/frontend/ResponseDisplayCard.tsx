import React from "react";
import { Paper, Box, IconButton, Typography } from "@material-ui/core";
import { MdClose } from "react-icons/md";
////
interface IProps {
  message: any;
  error: any;
  handleClose: () => void;
}
export default function ResponseDisplayCard({
  message,
  error,
  handleClose,
}: IProps) {
  return Boolean(error || message) ? (
    <Paper style={{ alignSelf: "center", marginLeft: 50 }} elevation={1}>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 5,
        }}
      >
        {message && (
          <Typography
            color="primary"
            style={{ marginRight: 5, fontWeight: "bold", color: "green" }}
            variant="body1"
          >
            {message}
          </Typography>
        )}
        {error && (
          <Typography
            color="error"
            style={{ marginRight: 5, fontWeight: "bold" }}
            variant="body1"
          >
            {error}
          </Typography>
        )}
        <IconButton onClick={handleClose} size="small">
          <MdClose />
        </IconButton>
      </Box>
    </Paper>
  ) : null;
}
