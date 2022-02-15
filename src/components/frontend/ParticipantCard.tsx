import {
  Box,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Zoom } from "react-awesome-reveal";
import { FaIdCard, FaPhoneAlt } from "react-icons/fa";
import { colors } from "../../constants/colors";
import { IParticipant } from "../../interface/IModel";
const styles = makeStyles(
  (theme) => ({
    root: {
      borderRadius: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.palette.common.white,
      margin: theme.spacing(1.5),
      position: "relative",
    },
    header: {
      padding: theme.spacing(1),
      background: colors.logo_brown,
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    gender_box: {
      width: 40,
      height: 40,
      borderRadius: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    info_container: {
      margin: theme.spacing(0, 1),
      color: theme.palette.common.white,
      flex: 1,
    },
    name: {
      fontSize: 15,
      textTransform: "capitalize",
      whiteSpace: "normal",
    },
    body: {
      padding: theme.spacing(1),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.common.black,
    },
    meeting_title: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.common.black,
      fontSize: 14,
    },
    email_container: {
      padding: theme.spacing(1),
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      background: "rgba(211,211,211,0.45)",
      borderRadius: 30,
      width: "100%",
      color: theme.palette.common.black,
      justifyContent: "center",
      fontWeight: "bold",
    },
    id_print_container: {
      margin: theme.spacing(0, 1),
      color: "#fff",
    },
    email: {
      fontWeight: 200,
      fontSize: 12,
    },
  }),
  { index: 1 }
);

interface Props {
  info: IParticipant;
  conference_title?: string;
  handleCard: () => void;
}
export default function ParticipantCard({
  info,
  conference_title,
  handleCard,
}: Props) {
  const classes = styles();
  return (
    <Grid item xs={8} sm={6} md={4} lg={3} xl={3}>
      <Zoom duration={650} delay={100}>
        <Paper className={classes.root} elevation={3}>
          <Box className={classes.header}>
            <Box className={classes.gender_box}>
              <Typography>{info.gender.charAt(0).toUpperCase()}</Typography>
            </Box>
            <Box className={classes.info_container}>
              <Typography className={classes.name}>{info.name}</Typography>
              <Typography>
                <FaPhoneAlt size={14} color="#fff" style={{ marginRight: 5 }} />
                {info.phone}
              </Typography>
            </Box>
            <Box className={classes.id_print_container}>
              <IconButton onClick={handleCard} size="small">
                <FaIdCard color="#fff" />
              </IconButton>
            </Box>
          </Box>
          <Box className={classes.body}>
            <Typography className={classes.meeting_title}>
              {conference_title}
            </Typography>
            <Box className={classes.email_container}>
              <Typography className={classes.email}>{info.email}</Typography>
            </Box>
          </Box>
        </Paper>
      </Zoom>
    </Grid>
  );
}
