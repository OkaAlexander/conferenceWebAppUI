import { Box, useMediaQuery, useTheme } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { AdminRoutes } from "../../constants/routes";
import { Navbar } from "../../shared";
import { home_styles } from "../../styles/admin";
import { SidebarView } from "../../views";

export default function HomePage() {
  const classes = home_styles();
  const [open, setOpen] = useState<boolean>(true);
  const { user } = useAppSelector((state) => state.UserReducer);
  const mobile = useMediaQuery(useTheme().breakpoints.down("sm"));
  const navigation = useNavigate();
  useEffect(() => {
    mobile && setOpen(false);
  }, [mobile]);

  ////
  useEffect(() => {
    navigation("participant/register");
  }, []);

  useEffect(() => {
    !user && navigation("/login");
  }, [user]);
  return (
    <div className={classes.root}>
      <Navbar sidebar={open} handleMenu={() => setOpen(true)} menu={true} />
      <SidebarView
        base="/home/"
        handleClose={() => setOpen(false)}
        open={open}
        routes={AdminRoutes}
      />
      <Box
        style={{
          width: "100%",
          height: "100vh",
          overflowY: "auto",
          overflowX: "hidden",
          paddingLeft: open ? 245 : 0,
        }}
      >
        <Outlet />
      </Box>
    </div>
  );
}
