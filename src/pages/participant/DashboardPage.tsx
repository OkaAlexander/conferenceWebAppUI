import {
  makeStyles,
  Paper,
  Container,
  Dialog,
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { colors } from "../../constants/colors";

import { InfoCard } from "../../components/member";
import { useAppDispatch, useAppSelector } from "./../../app/hooks";
import SpinnerLoader from "./../../components/frontend/SpinnerLoader";
import { UpdateInfoThunk } from "../../functions/member";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTimes } from "react-icons/fa";
import { IParticipant } from "../../interface/IModel";
const styles = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
    },

    header: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.spacing(2),
      margin: theme.spacing(2, 0),
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      width: "100%",
    },
    update_container: {
      padding: theme.spacing(1),
      width: 600,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    form_input: {
      width: "100%",
      margin: theme.spacing(0, 1),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(1),
    },
    input: {
      margin: theme.spacing(0.5, 0),
      width: "100%",
    },
    update_button: {
      width: "100%",
      margin: theme.spacing(1, 0),
      marginRight: 5,
    },
    buttons: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
    },
  }),
  { index: 1 }
);
export default function HomePage() {
  const classes = styles();
  const navigation = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const { error, message, loading } = useAppSelector(
    (state) => state.ResponseReducer
  );
  const { info } = useAppSelector((state) => state.MemberReducer);
  const dispatch = useAppDispatch();
  const [form, setForm] = useState<IParticipant>({
    name: "",
    email: "",
    id: "",
    phone: "",
    gender: "",
    diet: "",
    position: "",
    organization: "",
    accomodation: 0,
    location: "",
    conference_id: "",
    picture: "",
    disability: "",
    disabled: 0,
  });

  useEffect(() => {
    !info && navigation("uenr-conference/member/login");
    info && setForm({ ...form, ...info });
  }, [info]);

  return (
    <div className={classes.root}>
      <SpinnerLoader open={loading} />

      <Paper className={classes.header}>
        <Box></Box>
        <Box>
          <Button
            onClick={() => setOpen(true)}
            variant="outlined"
            size="small"
            color="primary"
          >
            <FaEdit /> Edit
          </Button>
        </Box>
      </Paper>
      <Dialog open={open}>
        <Box component={Paper}>
          {error && (
            <Typography
              color="error"
              style={{
                width: "100%",
                textAlign: "center",
                padding: 10,
              }}
              variant="body1"
            >
              {error}
            </Typography>
          )}
          {message && (
            <Typography
              style={{
                color: "seagreen",
                width: "100%",
                textAlign: "center",
                padding: 10,
              }}
              variant="body1"
            >
              {message}
            </Typography>
          )}
          <Paper className={classes.update_container}>
            <Box className={classes.form_input}>
              <TextField
                variant="outlined"
                className={classes.input}
                size="small"
                label="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <TextField
                variant="outlined"
                className={classes.input}
                size="small"
                label="Email"
                value={form.email}
                type="email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <TextField
                variant="outlined"
                className={classes.input}
                size="small"
                label="Phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <TextField
                variant="outlined"
                className={classes.input}
                size="small"
                label="Require Accommodation"
                select
                onChange={(e) =>
                  setForm({ ...form, accomodation: parseInt(e.target.value) })
                }
              >
                <MenuItem value={0}>No</MenuItem>
                <MenuItem value={1}>Yes</MenuItem>
              </TextField>
              <TextField
                variant="outlined"
                className={classes.input}
                size="small"
                label="Prefered Diet"
                value={form.diet}
                onChange={(e) => setForm({ ...form, diet: e.target.value })}
              />
            </Box>
            <Box className={classes.form_input}>
              <TextField
                variant="outlined"
                className={classes.input}
                size="small"
                label="Organization / Institution"
                value={form.organization}
                onChange={(e) =>
                  setForm({ ...form, organization: e.target.value })
                }
              />
              <TextField
                variant="outlined"
                className={classes.input}
                size="small"
                label="City / Town"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
              />
              <TextField
                variant="outlined"
                className={classes.input}
                size="small"
                label="Position"
                value={form.position}
                onChange={(e) => setForm({ ...form, position: e.target.value })}
              />
              <TextField
                variant="outlined"
                className={classes.input}
                size="small"
                label="Gender"
                select
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
              >
                <MenuItem value="MALE">Male</MenuItem>
                <MenuItem value="FEMALE">Female</MenuItem>
              </TextField>
              <Box className={classes.buttons}>
                <Button
                  className={classes.update_button}
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={() => {
                    dispatch(UpdateInfoThunk(form));
                  }}
                >
                  Update
                </Button>
                <Button
                  onClick={() => setOpen(false)}
                  variant="outlined"
                  size="small"
                  color="secondary"
                >
                  <FaTimes size={24} />
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Dialog>
      <Container className={classes.container}>
        {info ? <InfoCard info={info} /> : <Box />}
      </Container>
    </div>
  );
}
