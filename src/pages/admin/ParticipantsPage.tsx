import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { FaUserPlus, FaUsers } from "react-icons/fa";
import { participantsTableHeadData } from "../../data/table";
import { participants_styles } from "../../styles/admin";
import { useAppDispatch, useAppSelector } from "./../../app/hooks";
import { SpinnerLoader } from "../../components";
import { GetConferencesThunk, GetParticipantsThunk } from "../../functions";

export default function ParticipantsPage() {
  const classes = participants_styles();
  const dispatch = useAppDispatch();
  const { participants } = useAppSelector((state) => state.ParticipantsReducer);
  const { conferences } = useAppSelector((state) => state.ConferencesReducer);
  const { loading, error } = useAppSelector((state) => state.ResponseReducer);

  useEffect(() => {
    dispatch(GetParticipantsThunk());
    dispatch(GetConferencesThunk());
  }, []);

  function getConferenceTitle(id: string) {
    return conferences.find((conf) => conf.id === id);
  }
  return (
    <Box className={classes.root}>
      <SpinnerLoader open={loading} />
      <Box component={Paper} className={classes.header}>
        <Box className={classes.header_left}>
          <FaUsers />
          <Typography variant="caption" component="strong">
            Participants
          </Typography>
        </Box>
        <Box className={classes.header_right}>
          <Box className={classes.header_right_action}>
            <FaUserPlus size={14} style={{ marginRight: 2, fontSize: 14 }} />
            <Typography variant="caption" component="strong">
              Add
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box component={Paper} className={classes.content_container}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {participantsTableHeadData.map((col) => (
                  <TableCell
                    style={{ fontFamily: "georgia", fontWeight: "bold" }}
                    key={col.value}
                  >
                    {col.title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {participants.map((part) => (
                <TableRow key={part.id}>
                  <TableCell>{part.name}</TableCell>
                  <TableCell>{part.phone}</TableCell>
                  <TableCell>{part.email}</TableCell>
                  <TableCell>{part.gender}</TableCell>
                  <TableCell style={{ wordWrap: "break-word" }}>
                    {getConferenceTitle(part.conference_id)?.title}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
