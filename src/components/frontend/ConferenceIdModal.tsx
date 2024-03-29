import {
  Box,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { ReactInstance, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { baseUrl } from "../../configuration/Configuration";
import { colors } from "../../constants/colors";
import { IParticipant } from "../../interface/IModel";
import { resources } from "../../resources/resources";
import { FcManager, FcPrint } from "react-icons/fc";
import ReactPrint from "react-to-print";
import { Stack } from "@mui/material";
const styles = makeStyles(
  (theme) => ({
    root: {
      backdropFilter: "blur(5px)",
    },
    container: {
      height: 400,
      borderRadius: 0,
      padding: theme.spacing(0),
      overflow: "hidden",
    },
    top_container: {
      // background: colors.logo_brown,
      padding: theme.spacing(1),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: 200,
      marginTop: 20,
      // borderBottomRightRadius: "80%",
    },
    top_container1: {
      backgroundColor: "#ffffff",
      // padding: theme.spacing(1),
      display: "flex",
      // flexDirection: "column",
      alignItems: "center",
      // justifyContent: "center",
      height: 50,

      // borderBottomRightRadius: "80%",
    },
    info_container: {
      padding: theme.spacing(0),
      width: "100%",
      position: "relative",
      overflow: "hidden",
      height: "inherit",
    },
    info_left: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.spacing(2),
      width: 250,
      height: 150,
    },
    info_right: {
      padding: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: 50,
      transform: "rotate(90deg)",
      justifyContent: "flex-start",
      width: "85%",
      position: "absolute",
      right: 0,
      top: 0,
      left: "50%",
      paddingLeft: 100,
    },
    image_container: {
      width: 150,
      height: 150,
      borderRadius: "100%",
      overflow: "hidden",
    },
    org_logo_container: {
      height: 40,
    },
    name_role_container: {
      width: "100%",
    },
    name: {
      fontFamily: "Bahnschrift",
      fontWeight: "bolder",
      textTransform: "uppercase",
      fontSize: 18,
      marginBottom: -2,
    },
    id_info: {
      fontSize: 12,
      fontFamily: "arial",
      marginTop: 30,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    close_container: {
      position: "absolute",
      top: 10,
      background: "black",
      height: 60,
      width: 60,
      borderRadius: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
    },
    box: {
      width: "100vw",
      height: "100vh",
      position: "absolute",
      zIndex: 1010,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "rgba(0,0,0,0.65)",
      backdropFilter: "blur(5px)",
      overflow: "hidden",
    },
  }),
  { index: 1 }
);

interface Props {
  info: IParticipant | null;
  handleClose: () => void;
}

export default function ConferenceIdModal({ handleClose, info }: Props) {
  const classes = styles();
  const paperRef = useRef(null);
  function GetName() {
    let name = "";
    let len = info?.name.split(" ").length || 0;
    for (let i = 0; i < len; i++) {
      name = name + info?.name.split(" ")[i].toLocaleLowerCase();
    }
    return name;
  }
  return (
    <Box className={classes.box}>
      <Box className={classes.close_container}>
        <IconButton onClick={handleClose} size="medium">
          <FaTimes color="#fff" />
        </IconButton>
      </Box>

      <ReactPrint
        documentTitle={`${GetName()}_card`}
        trigger={() => (
          <Box
            style={{ background: "seagreen", marginRight: 200 }}
            className={classes.close_container}
          >
            <IconButton size="medium">
              <FcPrint color="#fff" />
            </IconButton>
          </Box>
        )}
        content={() => paperRef.current}
      />
      <Paper ref={paperRef} className={classes.container}>
        <Box className={classes.top_container1}>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              height: "80%",
            }}
          >
            <img
              src={resources.gaaeLogo}
              alt="logo"
              style={{
                height: "100%",
                width: "15%",
              }}
            />
            <Typography
              variant="body1"
              style={{
                fontSize: 12,
                fontWeight: "bolder",
                color: "#1B5E20",
                textTransform: "uppercase",
              }}
            >
              Ghana Association of Agricultural Economists - GAAE
            </Typography>
          </Stack>
        </Box>
        <Box
          className={classes.top_container}
          style={{
            backgroundImage: `url(${resources.gaaftarg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/* <Box className={classes.image_container}>
            <img
              src={baseUrl + info?.picture}
              alt="participant-avatar"
              className="img"
            />
          </Box> */}
        </Box>
        <Box className={classes.info_container}>
          <Box className={classes.info_left}>
            <Box className={classes.name_role_container}>
              <Typography className={classes.name} variant="body1">
                <FcManager />
                {info?.name}
              </Typography>
              {/* <Typography variant="caption" component="small">
                Participant
              </Typography> */}
            </Box>
            <Box
              style={{
                height: 1,
                width: "100%",
                background: "rgba(0,0,0,0.15)",
                padding: 1,
              }}
            />
            <Box
              style={{
                width: "100%",
              }}
            >
              <Typography
                style={{
                  marginBottom: 10,
                  fontSize: 18,
                  fontWeight: "bolder",
                  color: "#1B5E20",
                  textTransform: "uppercase",
                }}
              >
                PARTICIPANT
              </Typography>
            </Box>
          </Box>
          {/* <Box className={classes.info_right}>
            <Box className={classes.org_logo_container}>
              <img src={resources.PartCardLogo} alt="logo" className="img" />
            </Box>
          </Box> */}
        </Box>
      </Paper>
    </Box>
  );
}
