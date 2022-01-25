import { makeStyles } from "@material-ui/core";

const styles = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.spacing(2),
      margin: theme.spacing(0),
      width: "100%",
      borderRadius: 0,
    },
    header_left: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    header_right: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
    },
    header_right_action: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      margin: theme.spacing(0, 0.5),
    },
    content_container: {
      margin: theme.spacing(2, 0),
      borderRadius: 0,
      width: "100%",
    },
  }),
  { index: 1 }
);

export default styles;
