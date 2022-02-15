import {
  Box,
  makeStyles,
  Typography,
  Paper,
  Grid,
  Container,
  Button,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { colors } from "../../constants/colors";
import { resources } from "../../resources/resources";
import { Zoom } from "react-awesome-reveal";
import { MeetingGuest, Navbar } from "../../shared";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./../../app/hooks";
import { GetConferencesThunk, GetGuestThunk } from "../../functions";
import { FaCalendarAlt, FaHome } from "react-icons/fa";
import { Footer } from "../../views";

const styles = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
      height: "100%",
      padding: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
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
      width: "100%",
      height: "100%",
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
    guest: {},

    guest_info_container: {
      width: "25%",
      alignSelf: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        width: "70%",
      },
    },
  }),
  { index: 1 }
);
export default function LandingPage() {
  const classes = styles();
  const dispatch = useAppDispatch();
  const { conferences } = useAppSelector((state) => state.ConferencesReducer);
  const { guest } = useAppSelector((state) => state.GuestReducer);
  const navigation = useNavigate();
  const { user } = useAppSelector((state) => state.UserReducer);

  //
  useEffect(() => {
    dispatch(GetConferencesThunk());
    dispatch(GetGuestThunk());
  }, []);

  function GetActiveConference() {
    let conf = conferences.filter((con) => con.status === 0);
    if (conf) {
      return conf[conf.length - 1];
    } else {
      return conferences[conferences.length - 1];
    }
  }
  return (
    <Box
      className={classes.root}
      style={{
        backgroundImage: `linear-gradient(180deg,rgba(255,255,255,0.4),rgba(255,255,255,0.6),rgba(255,255,255,0.8)),url(${resources.Bg3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar user={Boolean(!user)} />

      <Zoom duration={750} delay={100} className={classes.zoom}>
        <Box component={Paper} className={classes.top_container}>
          {GetActiveConference() ? (
            <Typography
              className={classes.meeting_title}
              variant="h4"
              component="strong"
            >
              {GetActiveConference()?.title}
            </Typography>
          ) : (
            <Typography
              className={classes.meeting_title}
              variant="h3"
              component="strong"
            >
              "No Conference To Show"
            </Typography>
          )}
        </Box>
      </Zoom>
      <Box
        component={Paper}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: colors.logo_brown,
          marginTop: 20,
          padding: 10,
        }}
      >
        <Box className={classes.time_container}>
          <FaHome size={25} color="#fff" />
          <Typography
            style={{ color: "#fff", fontSize: 20, fontFamily: "georgia" }}
            variant="h5"
            component="strong"
          >
            {GetActiveConference()
              ? GetActiveConference().venue.toString()
              : "-------"}
          </Typography>
        </Box>
        <Box className={classes.date_container}>
          <FaCalendarAlt size={25} color="#fff" />
          <Typography
            style={{ color: "#fff", fontSize: 20, fontFamily: "georgia" }}
            variant="h5"
            component="strong"
          >
            {GetActiveConference()
              ? `${GetActiveConference().start_date} - ${
                  GetActiveConference().end_date
                }`
              : "-------"}
          </Typography>
        </Box>
      </Box>
      <Container>
        <Box
          style={{
            padding: 10,
            borderRadius: 5,
            width: "100%",
            background: "rgba(0,0,0,0.65)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px 0",
          }}
        >
          <Typography
            variant="body1"
            style={{
              width: "100%",
              flex: 1,
              color: "#fff",
              textAlign: "center",
              padding: 10,
            }}
            component="caption"
          >
            {GetActiveConference()
              ? `${GetActiveConference().description}`
              : "-------"}
          </Typography>
        </Box>
      </Container>
      <Container>
        <Box
          style={{
            padding: 10,
            width: "100%",
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px 0",
          }}
        >
          <Button
            variant="contained"
            size="small"
            className={classes.join_button}
            color="primary"
            onClick={() => navigation("/uenr-conference/participant/register")}
          >
            Register Now
          </Button>
          <Button
            variant="contained"
            size="small"
            className={classes.join_button}
            color="primary"
            style={{ background: "steelblue" }}
            onClick={() => navigation("/uenr-conference/member/login")}
          >
            Sign In
          </Button>
        </Box>
      </Container>

      <Grid
        container
        style={{
          background: "transparent",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {guest.length > 0 &&
          guest.map((g) => <MeetingGuest key={g.id} info={g} />)}
      </Grid>

      <Footer />
    </Box>
  );
}
