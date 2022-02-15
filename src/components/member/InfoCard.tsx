import { makeStyles, Box, Paper, Typography } from "@material-ui/core";
import React from "react";
import { colors } from "../../constants/colors";
import {
  FaEnvelope,
  FaGenderless,
  FaHome,
  FaLocationArrow,
  FaPhoneAlt,
  FaTag,
  FaUser,
  FaUserAltSlash,
} from "react-icons/fa";
import { Fastfood } from "@material-ui/icons";
import { IParticipant } from "../../interface/IModel";

const styles = makeStyles(
  (theme) => ({
    info_container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: 500,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    info_header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      padding: theme.spacing(1),
      background: colors.logo_brown,
      color: "#fff",
    },
    info_avatar_box: {
      width: 40,
      height: 40,
      borderRadius: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: theme.spacing(0, 1),
    },
    body: {
      padding: theme.spacing(1),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      width: "100%",
    },
    body_data: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      width: "100%",
      margin: theme.spacing(0.5, 0),
      padding: theme.spacing(0, 1),
    },
    icons: {
      margin: theme.spacing(0, 2),
    },
    info_header_name_box: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
    },
  }),
  { index: 1 }
);

interface Props {
  info: IParticipant;
}
export default function InfoCard({ info }: Props) {
  const classes = styles();
  return (
    <Paper className={classes.info_container}>
      <Box className={classes.info_header}>
        <Box className={classes.info_avatar_box}>
          <FaUser className={classes.icons} />
        </Box>
        <Box>
          <Typography variant="body1">{info.name}</Typography>
          <Typography variant="caption">ID:{info.id}</Typography>
        </Box>
      </Box>
      <Box className={classes.body}>
        <Box className={classes.body_data}>
          <FaPhoneAlt className={classes.icons} />
          <Typography variant="body1">{info.phone}</Typography>
        </Box>
        <Box className={classes.body_data}>
          <FaEnvelope className={classes.icons} />
          <Typography variant="body1">{info.email}</Typography>
        </Box>
        <Box className={classes.body_data}>
          <FaHome className={classes.icons} />
          <Typography variant="body1">{info.organization}</Typography>
        </Box>
        <Box className={classes.body_data}>
          <FaTag className={classes.icons} />
          <Typography variant="body1">{info.position}</Typography>
        </Box>
        {info.disabled === 1 && (
          <Box className={classes.body_data}>
            <FaUserAltSlash className={classes.icons} />
            <Typography variant="body1">{info.disability}</Typography>
          </Box>
        )}
        <Box className={classes.body_data}>
          <Fastfood className={classes.icons} />
          <Typography variant="body1">{info.diet}</Typography>
        </Box>
        <Box className={classes.body_data}>
          <FaLocationArrow className={classes.icons} />
          <Typography variant="body1">{info.location}</Typography>
        </Box>

        <Box className={classes.body_data}>
          <FaGenderless className={classes.icons} />
          <Typography variant="body1"></Typography>
        </Box>
      </Box>
    </Paper>
  );
}
