import {
  Box,
  Button,
  Dialog,
  Paper,
  makeStyles,
  Typography,
  TextField,
  MenuItem,
  TextareaAutosize,
  useMediaQuery,
  useTheme,
  Divider,
} from "@material-ui/core";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { DropDown, Input, RowContainer } from "../../components";
import { colors } from "../../constants/colors";
import { GenderData } from "../../data/form";
import { IModal } from "../../interface/IViews";

///
const styles = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
      height: "100%",
      background: "rgba(255,255,255,0.45)",
      backdropFilter: "blur(4px)",
    },
    content: {
      borderRadius: 0,
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.spacing(2),
      width: "100%",
    },
    input: {
      margin: theme.spacing(0.5, 0),
    },

    header_right: {
      display: "flex",
      flexDirection: "row",
      alignSelf: "center",
      justifyContent: "flex-end",
    },
    header_left: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      width: "100%",
    },
  }),
  { index: 1 }
);
export default function Modal({
  width,
  handleClose,
  open,
  title,
  children,
}: IModal) {
  const classes = styles();
  const mobile = useMediaQuery(useTheme().breakpoints.down("sm"));
  return (
    <Dialog className={classes.root} open={open}>
      <Box style={{ width: mobile ? "100%" : width }}>
        <Box className={classes.content}>
          <Box className={classes.header}>
            <Box className={classes.header_left}>
              <Typography
                style={{
                  fontFamily: "georgia",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
                variant="caption"
                component="strong"
              >
                {title}
              </Typography>
            </Box>
            <Box className={classes.header_right}>
              <FaTimes
                color="red"
                style={{
                  alignSelf: "flex-end",
                  marginRight: 10,
                  cursor: "pointer",
                }}
                onClick={handleClose}
              />
            </Box>
          </Box>
        </Box>
        <Divider
          orientation="horizontal"
          style={{ color: colors.logo_brown }}
        />
        {children}
      </Box>
    </Dialog>
  );
}
