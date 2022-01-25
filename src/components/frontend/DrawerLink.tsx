import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router-dom";
import { colors } from "../../constants/colors";
import { IDrawerLink } from "../../interface/IComponent";

export default function DrawerLink({ route, base, handleLink }: IDrawerLink) {
  const location = useLocation();
  return (
    <ListItem
      style={{
        background:
          base + route.route === location.pathname ? colors.logo_brown : "",
      }}
      onClick={handleLink}
      button
      divider
      key={route.title}
    >
      <ListItemIcon
        style={{
          width: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: base + route.route === location.pathname ? "#fff" : "",
        }}
      >
        {route.icon}
      </ListItemIcon>
      <ListItemText
        primary={route.title}
        style={{
          width: "100%",
          textAlign: "left",
          flex: 1,
          color: base + route.route === location.pathname ? "#fff" : "",
        }}
      />
    </ListItem>
  );
}
