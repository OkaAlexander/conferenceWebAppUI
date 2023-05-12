import { Box, Container, IconButton, makeStyles } from "@material-ui/core";
import { Print, PrintOutlined } from "@material-ui/icons";
import { Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ReactToPrint from "react-to-print";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  BigLabel,
  BottomDeco,
  Expanded,
  SizedBox,
  SmallLabel,
  TopDeco,
} from "../../components";
import fonts from "../../constants/fonts";
import { GetConferencesThunk, GetParticipantsThunk } from "../../functions";
import { IParticipant, IProgram } from "../../interface/IModel";
import { resources } from "../../resources/resources";

const styles = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f0f0f0",
    },
    container: {
      margin: theme.spacing(1, 0),
      boxShadow: theme.shadows[0],
      background: "#fff",
      padding: 0,
      position: "relative",
      height: "100%",
    },
    row_container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      justifyContent: "center",
    },
    column_container: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    top_deco: {
      height: 70,
      width: "100%",
      marginBottom: theme.spacing(2),
      background: "#fff",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      overflow: "hidden",
    },
    header: {
      padding: theme.spacing(1),
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 0,
      boxShadow: theme.shadows[1],
      margin: theme.spacing(2, 0),
      width: "100%",
      marginTop: 0,
    },
  }),
  { index: 1 }
);
export default function CertificationPage() {
  const classes = styles();
  const params = useParams();
  const certRef = useRef(null);
  const dispatch = useAppDispatch();
  const [info, setInfo] = useState<IParticipant | null>(null);
  const [conference, setConference] = useState<IProgram | null>(null);
  const patId = params?.id;
  const { participants } = useAppSelector((state) => state.ParticipantsReducer);
  const { conferences } = useAppSelector((state) => state.ConferencesReducer);

  useEffect(() => {
    dispatch(GetParticipantsThunk());
    dispatch(GetConferencesThunk());
    const data = participants.find((p) => p.id === patId);
    if (data) {
      setInfo(data);
    }
  }, []);

  useEffect(() => {
    const data = participants.find((p) => p.id === patId);
    if (data) {
      setInfo(data);
    }
  }, [participants]);

  useEffect(() => {
    const data = conferences.find((c) => c.id === info?.conference_id);
    data && setConference(data);
  }, [info]);

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <ReactToPrint
          documentTitle={"membertags"}
          trigger={() => (
            <IconButton size="small">
              <PrintOutlined />
            </IconButton>
          )}
          content={() => certRef.current}
        />
      </Box>

      <Container
        style={{
          backgroundImage: `url(${resources.certbg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        innerRef={certRef}
        className={classes.container}
      >
        <Box className={classes.top_deco}>
          <TopDeco />
          <TopDeco h={70} w={110} />
          <TopDeco h={80} w={120} />
        </Box>
        <Box style={{ flex: 1 }}>
          <Box className={classes.row_container} style={{ marginTop: "2.8%" }}>
            <Typography
              variant="caption"
              sx={(theme) => ({
                padding: theme.spacing(0.5),
                color: "#fff",
                backgroundColor: theme.palette.primary.main,
              })}
            >
              {"DEPARTMENT OF FISHERIES AND WATER RESOURCES"}
            </Typography>
          </Box>
          <SizedBox height={2.5} />
          <Box className={classes.row_container} style={{ paddingTop: "5%" }}>
            <BigLabel bold fontsize={3.5} text="CERTIFICATE" />
            <SizedBox width={1} />
            <BigLabel bold text="of" fontfamily={fonts.font2} fontsize={3.5} />
            <SizedBox width={1} />
            <BigLabel fontsize={3.5} bold text="PARTICIPATION" />
          </Box>
          <SizedBox height={2.5} />
          <Box className={classes.row_container}>
            <SmallLabel text="This certificate is Presented to" />
          </Box>
          <SizedBox height={5} />
          <Box className={classes.column_container}>
            {info && <BigLabel text={info.name} />}
            <SizedBox height={-1} />
            <Typography
              variant="body1"
              sx={(theme) => ({
                width: info ? info.name.length * 15 : 250,
                borderBottom: "1px solid #000",
              })}
            />
          </Box>
          <SizedBox height={1.5} />
          <Box className={classes.column_container}>
            <SmallLabel text="For successfully participating in" color="#000" />
            <BigLabel centered text={` ${conference?.title}`} />

            <SizedBox height={-0.5} />
            <BigLabel
              fontfamily={fonts.font2}
              fontsize={3}
              color={"#000"}
              text="Theme"
            />
            <SizedBox height={1} />
            <Box style={{ width: "60%" }}>
              <BigLabel text={`${conference?.description}`} centered />
            </Box>
          </Box>
          <SizedBox height={1.5} />
          <Box
            style={{ position: "absolute", bottom: 80, padding: "0px 100px" }}
            className={classes.row_container}
          >
            <Expanded />
            <Box
              className={classes.column_container}
              style={{
                width: 800,
                height: 70,
                borderRadius: "5px",
                background: "transparent",
              }}
            >
              <Typography
                variant="body1"
                sx={(theme) => ({
                  width: 200,
                  borderBottom: "1px solid #000",
                })}
              />
              <SizedBox height={0.5} />
              <SmallLabel text="Prof. Elvis Asare-Bediako" />
              <SizedBox height={-0.5} />
              <BigLabel fontsize={2} text="VICE-CHANCELLOR" />
            </Box>
            <Box className={classes.column_container}>
              <Box
                style={{
                  width: 170,
                  height: 50,
                  borderRadius: "5px",
                  background: "transparent",
                  marginLeft: 50,
                }}
              >
                <img
                  src={resources.uenrlogocert}
                  alt=""
                  style={{
                    marginTop: "-10%",
                    marginLeft: "50%",
                  }}
                />
              </Box>
            </Box>
            <SizedBox width={-10} />
            <Box className={classes.column_container}>
              <Box
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "5px",
                  background: "transparent",
                }}
              >
                {/* <img src={resources.dept_logo} alt="" /> */}
              </Box>
            </Box>
            <Box
              className={classes.column_container}
              style={{
                width: 800,
                height: 70,
                borderRadius: "5px",
                background: "transparent",
              }}
            >
              <Typography
                variant="body1"
                sx={(theme) => ({
                  width: 200,
                  borderBottom: "1px solid #000",
                })}
              />

              <SizedBox height={0.5} />
              <SmallLabel text="Solomon Panford ESQ, APR" />
              <SizedBox height={-0.5} />
              <BigLabel fontsize={2} text="REGISTRAR" />
            </Box>
            <Expanded />
          </Box>
          <Box></Box>
        </Box>
        {/* <Box
          style={{
            position: "absolute",
            bottom: -16,
            left: 0,
            justifyContent: "flex-end",
          }}
          className={classes.top_deco}
        >
          <BottomDeco />
          <SizedBox width={1} />
          <BottomDeco h={70} w={110} />
          <SizedBox width={1} />
          <BottomDeco h={80} w={120} />
          <SizedBox width={1.5} />
        </Box> */}
      </Container>
    </Box>
  );
}
