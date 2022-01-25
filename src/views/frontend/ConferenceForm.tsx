import {
  Box,
  Button,
  makeStyles,
  Paper,
  TextareaAutosize,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Input } from "../../components";
import { colors } from "../../constants/colors";
import { AddConferenceThunk } from "../../functions";

const styles = makeStyles(
  (theme) => ({
    textarea: {
      width: "100%",
      outline: "none",
      borderStyle: "none",
      padding: 5,
      fontFamily: "Georgia",
    },
    form: {
      padding: theme.spacing(2),
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },
    action_button: {
      textTransform: "none",
      background: colors.logo_brown,
      margin: theme.spacing(1, 0),
      alignSelf: "flex-end",
      width: 150,
      ["&:hover"]: {
        backgroundColor: colors.logo_green,
      },
    },
  }),
  { index: 1 }
);
export default function ConferenceForm() {
  const classes = styles();
  const [form, setForm] = useState<{
    title: string;
    description: string;
    date: string;
    venue: string;
    time: string;
  }>({ title: "", description: "", venue: "", date: "", time: "" });
  const { error } = useAppSelector((state) => state.ResponseReducer);
  const dispatch = useAppDispatch();
  return (
    <Box>
      <Box className={classes.form}>
        {error && (
          <Paper
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "5px 0",
            }}
          >
            <Typography
              style={{ width: "100%", textAlign: "center", flex: 1 }}
              color="error"
              variant="body1"
              component="caption"
            >
              {error}
            </Typography>
          </Paper>
        )}
        <Input
          change={(e) =>
            setForm({ ...form, title: e.target.value.toUpperCase() })
          }
          label="Conference Heading"
          row_child
        />
        <Input
          label="Conference Venue"
          change={(e) =>
            setForm({ ...form, venue: e.target.value.toUpperCase() })
          }
        />
        <Input
          label="Conference Date"
          type="date"
          change={(e) => setForm({ ...form, date: e.target.value })}
        />
        <Input
          label="Conference Time"
          type="time"
          change={(e) => setForm({ ...form, time: e.target.value })}
        />
        <Paper style={{ padding: 10 }}>
          <TextareaAutosize
            className={classes.textarea}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            minRows={4}
            maxRows={10}
            placeholder="Brief Introduction of Conference"
          />
        </Paper>
        <Button
          className={classes.action_button}
          variant="contained"
          size="small"
          color="primary"
          onClick={() => dispatch(AddConferenceThunk(form))}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
