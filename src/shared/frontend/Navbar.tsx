import { AppBar, Box, makeStyles, Toolbar } from "@material-ui/core";
import { Menu, Navigation } from "@material-ui/icons";
import React from "react";
import { FaHome, FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { colors } from "../../constants/colors";
import { INavbar } from "../../interface/IShared";
import { resources } from "../../resources/resources";

const styles = makeStyles(
  (theme) => ({
    toolbar: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    appbar: {
      background: colors.logo_brown,
      width: "100%",
      padding: theme.spacing(0, 2),
    },
    image_container: {
      height: 40,
      width: 100,
      alignSelf: "center",
    },
  }),
  { index: 1 }
);
export default function Navbar({
  sidebar,
  menu,
  handleMenu,
  user,
  home,
}: INavbar) {
  const classes = styles();
  const navigation = useNavigate();
  return (
    <AppBar
      style={{ paddingLeft: sidebar ? 240 : 0, height: 60 }}
      className={classes.appbar}
      position="relative"
      color="primary"
    >
      <Toolbar className={classes.toolbar}>
        <Box
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Box
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box className={classes.image_container}>
              <img className="img" src={resources.Logo} alt="logo" />
            </Box>
          </Box>
          {home && (
            <Box
              style={{
                alignSelf: "center",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaHome
                onClick={() => navigation("/")}
                style={{ cursor: "pointer" }}
                color="#fff"
                size={24}
              />
            </Box>
          )}
          {user && (
            <Box
              style={{
                alignSelf: "center",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaUserPlus
                onClick={() => navigation("/login")}
                style={{ cursor: "pointer" }}
                color="#fff"
                size={24}
              />
            </Box>
          )}
        </Box>
        {menu && !sidebar && (
          <Menu onClick={handleMenu} style={{ alignSelf: "center" }} />
        )}
      </Toolbar>
    </AppBar>
  );
}
