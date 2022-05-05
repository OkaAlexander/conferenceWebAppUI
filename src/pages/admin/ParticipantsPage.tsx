import {
  Avatar,
  Box,
  Button,
  colors,
  Divider,
  Grid,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { participants_styles } from "../../styles/admin";
import { useAppDispatch, useAppSelector } from "./../../app/hooks";
import {
  ConferenceIdModal,
  ConfirmModal,
  ParticipantCard,
  ResponseDisplayCard,
  SpinnerLoader,
} from "../../components";
import { GetConferencesThunk, GetParticipantsThunk } from "../../functions";
import { ICsvRows } from "../../interface/IServices";
import { ExportServices } from "../../services";
import { resources } from "../../resources/resources";
import { FaIdCard, FaUsers } from "react-icons/fa";
import { IParticipant } from "../../interface/IModel";
import CloseIcon from "@material-ui/icons/Close";
import { RemoveMemberThunk } from "../../functions/member";
import { ResetResponse } from "../../features/slice/ResponseSlice";
export default function ParticipantsPage() {
  const classes = participants_styles();
  const dispatch = useAppDispatch();
  const { participants } = useAppSelector((state) => state.ParticipantsReducer);
  const { conferences } = useAppSelector((state) => state.ConferencesReducer);
  const { loading, message, error } = useAppSelector(
    (state) => state.ResponseReducer
  );
  const [Participants, setParticipants] = useState<ICsvRows[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [part, setPart] = useState<IParticipant | null>(null);
  const [selectedParticipant, setSelectedParticipant] =
    useState<IParticipant | null>(null);
  var totalMale = 0;
  var totalFemale = 0;
  var totalParticipant = 0;

  /////
  function HandleConfirmationModal(response: number) {
    setShowModal(!showModal);
    if (Boolean(response) && Boolean(part)) {
      part && dispatch(RemoveMemberThunk(part));
    }
  }
  participants.forEach((element) => {
    element.gender === "MALE" ? (totalMale += 1) : (totalFemale += 1);
  });
  useEffect(() => {
    dispatch(GetParticipantsThunk());
    dispatch(GetConferencesThunk());
  }, []);

  function getConferenceTitle(id: string) {
    return conferences.find((conf) => conf.id === id);
  }

  useEffect(() => {
    if (participants.length > 0) {
      const FilteredParts: ICsvRows[] = [];
      for (let i = 0; i < participants.length; i++) {
        let part = participants[i];
        FilteredParts.push({
          Name: part.name.toUpperCase(),
          PhoneNumber: part.phone,
          Email: part.email.toLowerCase(),
          Gender: part.gender,
          Town_City: part.location.toUpperCase(),
          Organization: part.organization.toUpperCase(),
          SpecialDiet: part.diet.toUpperCase(),
          Disability: part.disabled === 0 ? "No" : "Yes",
          DisabledType: part.disability,
          AccommodationRequired: part.accomodation === 0 ? "No" : "Yes",
        });
      }
      setParticipants(FilteredParts);
    }
  }, [participants]);

  return (
    <Box className={classes.root}>
      <SpinnerLoader open={loading} />
      <ConfirmModal
        open={showModal}
        handleModal={HandleConfirmationModal}
        title="Delete Participant"
        message="Do you want to delete this participant???"
      />
      {Boolean(selectedParticipant) && (
        <ConferenceIdModal
          info={selectedParticipant}
          handleClose={() => setSelectedParticipant(null)}
        />
      )}
      <SpinnerLoader open={loading} />
      <Box
        component={Paper}
        className={classes.header}
        style={{ padding: "0,10px" }}
      >
        <Box className={classes.header_left}>
          <FaUsers />
          <Typography variant="caption" component="strong">
            Participants
          </Typography>
        </Box>
        <Box className={classes.cat_counter}>
          <Avatar
            variant="circular"
            sizes="medium"
            src={resources.male_avatar}
          />
          <Typography variant="h6" component="strong">
            {totalMale}
          </Typography>
        </Box>
        <Box className={classes.cat_counter}>
          <Avatar
            variant="circular"
            sizes="medium"
            src={resources.female_avatar}
          />
          <Typography variant="h6" component="strong">
            {totalFemale}
          </Typography>
        </Box>
        <Box className={classes.cat_counter}>
          <Avatar
            variant="circular"
            sizes="medium"
            src={resources.group_avator}
          />
          <Typography variant="h6" component="strong">
            {(totalParticipant = totalFemale + totalMale)}
          </Typography>
        </Box>
        <ResponseDisplayCard
          error={error}
          message={message}
          handleClose={() => {
            dispatch(ResetResponse());
          }}
        />
        <Box className={classes.header_right}>
          {Participants.length > 0 && (
            <ExportServices
              DataSource={Participants}
              fileName="ParticipantsList"
            />
          )}
        </Box>
      </Box>
      <Divider orientation="horizontal" />
      <TableContainer
        style={{ paddingBottom: 100, height: "100%" }}
        component={Paper}
        elevation={0}
      >
        <Table style={{ overflowY: "auto", paddingBottom: 100 }}>
          <TableHead
            style={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              background: "#fff",
            }}
          >
            <TableRow>
              <TableCell
                style={{ fontSize: 15, color: "#000", fontWeight: "bold" }}
                align="left"
                width="30%"
              >
                Name
              </TableCell>
              <TableCell
                style={{ fontSize: 15, color: "#000", fontWeight: "bold" }}
                align="left"
              >
                Phone
              </TableCell>
              <TableCell
                style={{ fontSize: 15, color: "#000", fontWeight: "bold" }}
                align="left"
              >
                Email
              </TableCell>
              <TableCell
                style={{ fontSize: 15, color: "#000", fontWeight: "bold" }}
                align="left"
              >
                Gender
              </TableCell>
              <TableCell
                style={{ fontSize: 15, color: "#000", fontWeight: "bold" }}
                align="left"
              >
                City/Town
              </TableCell>
              <TableCell
                style={{ fontSize: 15, color: "#000", fontWeight: "bold" }}
                align="left"
              >
                Participant_ID
              </TableCell>
              <TableCell
                style={{ fontSize: 15, color: "#000", fontWeight: "bold" }}
                align="left"
              >
                Card
              </TableCell>
              <TableCell
                style={{ fontSize: 15, color: "#000", fontWeight: "bold" }}
                align="left"
              >
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {participants.length > 0 &&
              participants.map((part) => (
                <TableRow key={part.id}>
                  <TableCell align="left">{part.name}</TableCell>
                  <TableCell align="left">{part.phone}</TableCell>
                  <TableCell align="left">{part.email}</TableCell>
                  <TableCell align="left">{part.gender}</TableCell>
                  <TableCell align="left">{part.location}</TableCell>
                  <TableCell align="left">{part.id}</TableCell>
                  <TableCell align="left">
                    <IconButton
                      onClick={() => setSelectedParticipant(part)}
                      size="small"
                    >
                      <FaIdCard />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => {
                        setPart(part);
                        setShowModal(!showModal);
                      }}
                      style={{
                        fontSize: 15,
                        color: "#000",
                        fontWeight: "bold",
                      }}
                    >
                      <CloseIcon color="error" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
