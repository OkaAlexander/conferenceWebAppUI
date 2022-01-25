import { makeStyles } from "@material-ui/core";

const styles = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
      padding: 0,
      margin: 0,
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
    },
  }),
  { index: 1 }
);

export default styles;
