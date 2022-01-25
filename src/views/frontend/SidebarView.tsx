import * as React from "react";
import {
  Box,
  Drawer,
  ListItem,
  List,
  ListItemText,
  makeStyles,
  Divider,
  ListItemIcon,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { IDrawer } from "../../interface/IViews";
import { resources } from "../../resources/resources";
import { FaTimes } from "react-icons/fa";
import { DrawerLink } from "../../components";
import { useNavigate } from "react-router-dom";

const styles = makeStyles(
  (theme) => ({
    root: {
      width: 240,
      padding: 0,
      margin: 0,
    },
    drawer_header: {
      height: 60,
      padding: theme.spacing(1),
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingLeft: theme.spacing(5),
    },
    routes_container: {
      width: 240,
      height: "100%",
    },
  }),
  { index: 1 }
);

export default function SidebarView({
  routes,
  open,
  handleClose,
  base,
}: IDrawer) {
  const navigation = useNavigate();
  const classes = styles();
  const mobile = useMediaQuery(useTheme().breakpoints.down("sm"));
  return (
    <Drawer
      className={classes.root}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <Box className={classes.drawer_header}>
        <Box style={{ height: 40, width: 100 }}>
          <img
            alt="drawer-header"
            src={resources.DrawerHeader}
            className="img"
          />
        </Box>
        <FaTimes onClick={handleClose} />
      </Box>
      <Divider />
      <Box className={classes.routes_container}>
        <List style={{ width: "100%" }}>
          {routes.map((info) => (
            <DrawerLink
              route={info}
              base={base}
              handleLink={() => {
                navigation(info.route ? info.route : "/home");
                mobile && handleClose();
              }}
            />
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
