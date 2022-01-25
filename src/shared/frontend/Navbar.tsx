import { AppBar, Box, makeStyles, Toolbar } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React from "react";
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
    },
    image_container: {
      height: 40,
      width: 100,
      alignSelf: "center",
    },
  }),
  { index: 1 }
);
export default function Navbar({ sidebar, menu, handleMenu }: INavbar) {
  const classes = styles();
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
          }}
        >
          <Box className={classes.image_container}>
            <img className="img" src={resources.Logo} alt="logo" />
          </Box>
        </Box>
        {menu && !sidebar && (
          <Menu onClick={handleMenu} style={{ alignSelf: "center" }} />
        )}
      </Toolbar>
    </AppBar>
  );
}
