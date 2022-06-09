import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { AddConferenceThunk } from "../../functions";
import { AddPackageItemForm, ConferenceForm, Modal } from "../../views";
import { INewConferenceInfo } from "../../views/interface";

const styles = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
      padding: 0,
      margin: 0,
      height: "100vh",
    },
    header: {
      padding: theme.spacing(2),
      width: "100%",
      borderRadius: 0,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      boxShadow: theme.shadows[2],
      margin: theme.spacing(1),
    },
    container: {
      padding: theme.spacing(2),
    },
  }),
  { index: 1 }
);
export default function AddEventPage() {
  const classes = styles();
  const [modal, setModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [form, setForm] = useState<INewConferenceInfo>({
    title: "",
    description: "",
    venue: "",
    start_date: "",
    end_date: "",
    package: [],
  });

  return (
    <Box className={classes.root}>
      <Modal
        open={modal}
        width={500}
        title="Conference Details"
        handleClose={() => setModal(false)}
        children={
          <AddPackageItemForm
            form={form}
            handleForm={(info) => setForm(info)}
          />
        }
      />
      <Box className={classes.header}>
        <Box>
          <Typography variant="body1">Add Event</Typography>
        </Box>
        <Box>
          <Button
            onClick={() => setModal(true)}
            size="small"
            variant="outlined"
          >
            Add +
          </Button>
        </Box>
      </Box>
      <Box>
        <ConferenceForm
          form={form}
          handleForm={(info) => setForm(info)}
          handleSubmit={() => {
            dispatch(AddConferenceThunk(form));
            setForm({
              title: "",
              description: "",
              venue: "",
              start_date: "",
              end_date: "",
              package: [],
            });
          }}
        />
      </Box>
    </Box>
  );
}
