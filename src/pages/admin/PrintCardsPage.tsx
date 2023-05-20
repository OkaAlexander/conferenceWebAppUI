import {
  Box,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { ChevronLeft, ChevronRight, Print, Refresh } from "@material-ui/icons";
import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { MemberCard, SpinnerLoader } from "../../components";
import { GetParticipantsThunk } from "../../functions";
import ReactPrint from "react-to-print";
import { IParticipant, IPrintValues } from "../../interface/IModel";
import { setValues } from "../../features/slice/PrintSlice";
import {
  formatValues,
  handleDecrement,
  handleIncrement,
  InitValues,
} from "../services/services";

const styles = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
      height: "100%",
      background: "#f5f5f5",
      overflowX: "hidden",
      overflowY: "auto",
    },
    header: {
      padding: theme.spacing(2),
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      margin: theme.spacing(1, 0),
      borderRadius: 0,
      position: "sticky",
      top: 0,
      zIndex: 1,
    },
    buttons: {
      margin: theme.spacing(0, 2),
    },
    text: {
      margin: theme.spacing(0, 1),
    },
    header_content: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
    },
    content: {
      height: "100%",
      width: "100%",
      overflowY: "auto",
      padding: theme.spacing(1),
      paddingBottom: 100,
      justifyContent: "center",
      alignItems: "center",
    },
    grid: {
      width: "100%",
      padding: theme.spacing(1),
      height: "inherit",
      alignItems: "center",
      justifyContent: "space-between", // to remove space between the cards, use justifyContent:"center"
      display: "flex",
    },
  }),
  { index: 1 }
);
export default function PrintCardsPage() {
  const classes = styles();
  const { participants } = useAppSelector((state) => state.ParticipantsReducer);
  const { loading } = useAppSelector((state) => state.ResponseReducer);
  const dispatch = useAppDispatch();
  const paperRef = useRef(null);
  const { values } = useAppSelector((state) => state.PrintReducer);
  const [Content, setContent] = useState<IParticipant[]>([]);
  useEffect(() => {
    dispatch(GetParticipantsThunk());
  }, []);

  useEffect(() => {
    dispatch(
      setValues(
        InitValues(
          { ...values, total: participants.length },
          participants.length
        )
      )
    );
  }, []);

  useEffect(() => {
    dispatch(
      setValues(
        InitValues(
          { ...values, total: participants.length },
          participants.length
        )
      )
    );
  }, [participants]);

  function HandleLeft() {
    dispatch(setValues(handleDecrement(values, participants.length)));
  }

  function HandleRefresh() {}
  function HandleRight() {
    dispatch(setValues(handleIncrement(values, participants.length)));
  }

  useEffect(() => {
    const con: IParticipant[] = [];
    for (let i = values.start; i < values.end; i++) {
      con.push(participants[i]);
    }
    setContent(con);
  }, [values]);
  return (
    <div className={classes.root}>
      <SpinnerLoader open={loading} />
      <Paper className={classes.header}>
        <Box className={classes.header_content}>
          <Typography className={classes.text} variant="body1">
            {values.start}
          </Typography>
          <Typography className={classes.text} variant="body2">
            of
          </Typography>
          <Typography className={classes.text} variant="body1">
            {values.end}
          </Typography>
          <IconButton
            onClick={HandleLeft}
            className={classes.buttons}
            size="small"
          >
            <ChevronLeft />
          </IconButton>
          <Typography className={classes.text} variant="body1">
            {values.total - values.end}
          </Typography>
          <IconButton
            onClick={HandleRight}
            className={classes.buttons}
            size="small"
          >
            <ChevronRight />
          </IconButton>

          <ReactPrint
            documentTitle={"membertags"}
            trigger={() => (
              <IconButton className={classes.buttons} size="small">
                <Print />
              </IconButton>
            )}
            content={() => paperRef.current}
          />

          <IconButton
            onClick={HandleRefresh}
            className={classes.buttons}
            style={{ margin: "0px 20px" }}
            size="small"
          >
            <Refresh />
          </IconButton>
        </Box>
      </Paper>
      <Box className={classes.content}>
        <Grid className={classes.grid} innerRef={paperRef} container>
          {Content.map((info) => (
            <MemberCard info={info} key={info.id} />
          ))}
        </Grid>
      </Box>
    </div>
  );
}
