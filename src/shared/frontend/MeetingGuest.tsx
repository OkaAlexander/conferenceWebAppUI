import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { baseUrl } from "../../configuration/Configuration";
import { colors } from "../../constants/colors";
import { IGuestInfo } from "../../interface/IModel";
import { resources } from "../../resources/resources";

const styles = makeStyles(
  (theme) => ({
    root: {
      width: "100vw",
      height: "100vh",
      padding: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
    },
    top_container: {
      display: "flex",
      width: "100%",
      padding: theme.spacing(1),
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      marginTop: theme.spacing(2),
      background: "rgba(255,255,255,0.55)",
      borderRadius: 0,
    },
    meeting_title_label: {
      textAlign: "center",
      width: "100%",
    },
    meeting_title: {
      textAlign: "center",
      width: "70%",
      fontFamily: "genuine",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        margin: theme.spacing(1, 0),
      },
      color: colors.logo_brown,
      margin: theme.spacing(1, 0),
    },
    main_container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      padding: theme.spacing(2),
      height: "100%",
      background: "red",
    },
    join_button: {
      background: colors.logo_brown,
      borderRadius: 5,
      transition: "all 0.45s ease-in-out",
      alignSelf: "center",
      margin: theme.spacing(1, 0),
      width: 200,
      padding: theme.spacing(1),
    },
    image_container: {
      width: "100%",
      height: 500,
      borderRadius: theme.spacing(2),
      overflow: "hidden",
      objectFit: "fill",
    },
    meeting_details_container: {
      with: "70%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
      alignSelf: "center",
      padding: theme.spacing(4, 2),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(255,255,255,0.85)",
      borderRadius: theme.spacing(2),
      width: "70%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    content_container: {
      padding: theme.spacing(2, 4),
      margin: theme.spacing(1, 0),
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    body_text: {
      width: "80%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        textAlign: "justify",
      },
      textAlign: "justify",
      fontFamily: "bassline",
    },
    zoom: {
      width: "100%",
    },
    meeting_moment_container: {
      borderRadius: 0,
      background: colors.logo_brown,
      marginTop: 20,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      },
      width: 400,
    },
    date_container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      margin: theme.spacing(0, 1),
      [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(1, 0),
      },
    },
    time_container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      margin: theme.spacing(0, 1),
      [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(1, 0),
      },
    },
    guest: {
      width: "80%",
      display: "flex",
      flexDirection: "row",
      padding: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      margin: theme.spacing(2, 0),
      justifyContent: "center",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(5),
    },
    guest_info_container: {
      width: "100%",
      alignSelf: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        width: "80%",
        margin: theme.spacing(1, 0),
        alignSelf: "center",
      },
      margin: theme.spacing(0, 2),
    },
    grid_item: {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: theme.spacing(2),
    },
  }),
  { index: 1 }
);

interface Props {
  info: IGuestInfo;
}
export default function MeetingGuest({ info }: Props) {
  const classes = styles();
  return (
    <Grid
      className={classes.grid_item}
      item
      sm={6}
      md={4}
      xs={12}
      lg={3}
      xl={2}
    >
      <Box className={`guest_info_box ${classes.guest_info_container}`}>
        <Typography
          style={{
            fontFamily: "georgia",
            fontSize: 18,
            color: colors.logo_brown,
            marginBottom: 10,
            width: "100%",
            textAlign: "center",
            fontWeight: "bold",
          }}
          variant="body1"
          component="strong"
        >
          {info.role}
        </Typography>
        <Box
          style={{
            width: 120,
            height: 120,
            borderRadius: "100%",
            overflow: "hidden",
          }}
          className="guest_image_container"
        >
          <img src={baseUrl + info.picture} className="img" alt="guest" />
        </Box>
        <Typography
          style={{
            fontFamily: "georgia",
            fontSize: 18,
            color: colors.logo_brown,
            marginBottom: 10,
            width: "100%",
            textAlign: "center",
            marginTop: 5,
          }}
          variant="body2"
          component="caption"
        >
          {info.name}
        </Typography>
        <Typography
          style={{
            fontFamily: "maria",
            fontSize: 16,
            color: "#000",
            width: "100%",
            textAlign: "center",
          }}
          variant="caption"
          component="caption"
        >
          {info.portfolio}
        </Typography>
      </Box>
    </Grid>
  );
}
