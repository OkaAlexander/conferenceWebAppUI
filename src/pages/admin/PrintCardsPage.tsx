import {
  Box,
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
import { IParticipant } from "../../interface/IModel";
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
      width: "100%",
      height: "100%",
      padding: theme.spacing(2),
      paddingBottom: theme.spacing(4),
    },
    grid: {
      alignItems: "center",
      justifyContent: "center",
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
  const [Participants, setParticipants] = useState<IParticipant[]>([]);

  useEffect(() => {
    dispatch(GetParticipantsThunk());
  }, []);

  useEffect(() => {
    dispatch(setValues(InitValues({ ...values, total: participants.length })));
  }, []);

  useEffect(() => {
    // const parts: IParticipant[] = [];
    // for (let i = values.value; i < values.value + values.count; i++) {
    //   parts.push(participants[i]);
    // }
    // setParticipants(parts);
    console.log(values);
  }, [values.value]);

  useEffect(() => {
    dispatch(setValues(InitValues({ ...values, total: participants.length })));
  }, [participants]);

  function HandleLeft() {
    dispatch(setValues(handleDecrement(values)));
  }

  function HandleRefresh() {
    dispatch(
      setValues({
        count: 4,
        total: participants.length,
        value: values.count,
        start_at: values.value,
      })
    );
  }
  function HandleRight() {
    dispatch(setValues(handleIncrement(values)));
  }
  return (
    <div className={classes.root}>
      <SpinnerLoader open={loading} />
      <Paper className={classes.header}>
        <Box className={classes.header_content}>
          <Typography className={classes.text} variant="body1">
            {values.value}
          </Typography>
          <Typography className={classes.text} variant="body2">
            of
          </Typography>
          <Typography className={classes.text} variant="body1">
            {values.total}
          </Typography>
          <IconButton
            onClick={HandleLeft}
            className={classes.buttons}
            size="small"
          >
            <ChevronLeft />
          </IconButton>
          <Typography className={classes.text} variant="body1">
            {values.total - values.value}
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
          {participants.length > 0 &&
            participants.map((info) => (
              <MemberCard info={info} key={info.id} />
            ))}
        </Grid>
      </Box>
    </div>
  );
}
