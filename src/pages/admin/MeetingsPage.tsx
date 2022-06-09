import {
  Box,
  Button,
  IconButton,
  makeStyles,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TableBody,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { FaCog, FaEdit, FaFileSignature, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { SpinnerLoader } from "../../components";
import { colors } from "../../constants/colors";
import { conferenceTableHeaderData } from "../../data/table";
import { GetConferencesThunk } from "../../functions";
import { resources } from "../../resources/resources";
import { Navbar } from "../../shared";
import { ConferenceForm, Modal } from "../../views";

const styles = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
      padding: 0,
      margin: 0,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.spacing(2),
      margin: theme.spacing(2, 0),
      width: "100%",
      borderRadius: 0,
    },
    header_left: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      width: "100%",
    },
    header_right: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      justifyContent: "flex-end",
    },
    addbtn: {
      textTransform: "none",
      fontFamily: "basssline",
      height: 30,
      backgroundColor: colors.logo_brown,
      wdith: 30,
      ["&:hover"]: {
        backgroundColor: colors.logo_green,
      },
    },
  }),
  { index: 1 }
);
export default function MeetingsPage() {
  const classes = styles();
  const navigation = useNavigate();
  const [modal, setModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.ResponseReducer);
  const { conferences } = useAppSelector((state) => state.ConferencesReducer);
  const { user } = useAppSelector((state) => state.UserReducer);
  useEffect(() => {
    dispatch(GetConferencesThunk());
  }, []);
  return (
    <div className={classes.root}>
      <SpinnerLoader open={loading} />
      <Paper className={classes.header}>
        <Box className={classes.header_left}>
          <Typography
            variant="caption"
            style={{ fontFamily: "Georgia", fontWeight: "bold" }}
          >
            Conferences
          </Typography>
        </Box>
        <Box className={classes.header_right}>
          <Button
            className={classes.addbtn}
            variant="contained"
            size="small"
            color="primary"
            onClick={() => navigation("/home/event/add")}
          >
            <FaFileSignature />
          </Button>
        </Box>
      </Paper>
      <Box style={{ width: "100%" }}>
        {/* <Modal
          open={modal}
          width={800}
          title="Conference Details"
          handleClose={() => setModal(false)}
          children={<ConferenceForm />}
        /> */}

        <TableContainer style={{ width: "100%" }}>
          <Table>
            <TableHead>
              <TableRow>
                {conferenceTableHeaderData.map((cell) => (
                  <TableCell
                    style={{ fontFamily: "georgia", fontWeight: "bold" }}
                    key={cell.value}
                  >
                    {cell.title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {conferences.map((conference) => (
                <TableRow key={conference.id}>
                  <TableCell style={{ wordWrap: "break-word" }}>
                    {conference.title}
                  </TableCell>
                  <TableCell>{conference.venue}</TableCell>
                  <TableCell>
                    {conference.start_date} - {conference.end_date}
                  </TableCell>
                  <TableCell>
                    {conference.status === 0 ? "Active" : "Completed"}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="text"
                      size="small"
                      disabled={conference.status === 0 ? false : true}
                    >
                      <FaEdit />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}
