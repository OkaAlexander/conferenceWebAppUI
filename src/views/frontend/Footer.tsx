import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import moment from "moment";
const styles = makeStyles(
  (theme) => ({
    root: {
      padding: theme.spacing(1),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(0,0,0,0.65)",
      alignSelf: "flex-end",
      width: "100%",
      height: "inherit",
    },
    container: {
      background: "transparent",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  }),
  { index: 1 }
);
export default function Footer() {
  const classes = styles();
  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Box
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            style={{
              color: "#fff",
              textAlign: "center",
              fontFamily: "georgia",
            }}
            variant="body1"
            component="strong"
          >
            For More Info, Contact:
          </Typography>
          <Typography
            style={{
              color: "#fff",
              textAlign: "center",
              fontStyle: "italic",
              fontFamily: "Arial",
            }}
            variant="body2"
            component="caption"
          >
            0208155177 || 0241011388 ||0242238238.
          </Typography>
          <Typography
            style={{ color: "#fff" }}
            variant="caption"
            component="caption"
          >
            &#169; Reserved || UENR ITD || {moment().format("YYYY").toString()}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
