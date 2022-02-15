import {
  Avatar,
  Box,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { participants_styles } from "../../styles/admin";
import { useAppDispatch, useAppSelector } from "./../../app/hooks";
import {
  ConferenceIdModal,
  ParticipantCard,
  SpinnerLoader,
} from "../../components";
import { GetConferencesThunk, GetParticipantsThunk } from "../../functions";
import { ICsvRows } from "../../interface/IServices";
import { ExportServices } from "../../services";
import { resources } from "../../resources/resources";
import { FaUsers } from "react-icons/fa";
import { IParticipant } from "../../interface/IModel";
export default function ParticipantsPage() {
  const classes = participants_styles();
  const dispatch = useAppDispatch();
  const { participants } = useAppSelector((state) => state.ParticipantsReducer);
  const { conferences } = useAppSelector((state) => state.ConferencesReducer);
  const { loading } = useAppSelector((state) => state.ResponseReducer);
  const [Participants, setParticipants] = useState<ICsvRows[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedParticipant, setSelectedParticipant] =
    useState<IParticipant | null>(null);
  var totalMale = 0;
  var totalFemale = 0;
  var totalParticipant = 0;

  participants.forEach((element) => {
    if (element.gender === "MALE") {
      totalMale += 1;
    } else {
      totalFemale += 1;
    }
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
          Name: part.name,
          PhoneNumber: part.phone,
          Email: part.email,
          Gender: part.gender,
          Location: part.location,
          SpecialDiet: part.diet,
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
      {showModal && (
        <ConferenceIdModal
          info={selectedParticipant}
          handleClose={() => setShowModal(false)}
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

        <Box className={classes.header_right}>
          {Participants.length > 0 && (
            <ExportServices
              DataSource={Participants}
              fileName="ParticipantsList"
            />
          )}
          {/* <Box component={Button} className={classes.header_right_action}>
            <FaFileCsv size={14} style={{ marginRight: 2, fontSize: 14 }} />
            <Typography variant="caption" component="caption">
              Export to Excel
            </Typography>
          </Box> */}
        </Box>
      </Box>
      <Divider orientation="horizontal" />
      <Grid
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          paddingBottom: 40,
        }}
        container
        component={Paper}
      >
        {participants.map((part) => (
          <ParticipantCard
            handleCard={() => {
              setSelectedParticipant(part);
              setShowModal(true);
            }}
            conference_title={getConferenceTitle(part.conference_id)?.title}
            info={part}
            key={part.id}
          />
        ))}
      </Grid>
    </Box>
  );
}
