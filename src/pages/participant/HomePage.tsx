import {
  AppBar,
  makeStyles,
  Toolbar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Container,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { resources } from "../../resources/resources";
import { colors } from "../../constants/colors";
import { FaCaretDown } from "react-icons/fa";

import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { baseUrl } from "../../configuration/Configuration";
import { LogoutThunk } from "../../functions/member";
import { AccountCircle } from "@material-ui/icons";
const styles = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    appbar: {
      borderRadius: 0,
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      background: colors.logo_brown,
    },
    toolbar: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      padding: theme.spacing(1),
    },
    toolbar_right: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
    },
    avatar_container: {
      height: 80,
      width: 80,
      borderRadius: 50,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      overflow: "hidden",
    },
    header: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.spacing(2),
      margin: theme.spacing(2, 0),
    },
    container: {
      padding: theme.spacing(2),
      width: "100%",
      marginTop: 50,
    },
  }),
  { index: 1 }
);
export default function HomePage() {
  const navigation = useNavigate();
  const classes = styles();
  const { info } = useAppSelector((state) => state.MemberReducer);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useAppDispatch();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    navigation("info");
  }, []);

  useEffect(() => {
    !info && navigation("/");
  }, [info]);
  return (
    <div className={classes.root}>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            dispatch(LogoutThunk());
          }}
        >
          Logout
        </MenuItem>
      </Menu>
      <AppBar elevation={1} className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Box className={classes.toolbar_right}>
            <IconButton size="medium" className={classes.avatar_container}>
              {info?.picture ? (
                <img
                  className="img"
                  style={{ borderRadius: "100%" }}
                  src={baseUrl + info?.picture}
                  alt="avatar"
                />
              ) : (
                <AccountCircle fontSize="large" color="inherit" />
              )}
            </IconButton>

            <IconButton onClick={handleClick} size="medium" color="default">
              <FaCaretDown size={30} color="#fff" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Paper className={classes.header}></Paper>
      <Box className={classes.container}>
        <Outlet />
      </Box>
    </div>
  );
}
