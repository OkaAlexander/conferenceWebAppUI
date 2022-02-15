import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Box,
  Paper,
  Container,
  makeStyles,
  Button,
  TextField,
  Typography,
  MenuItem,
  Grid,
} from "@material-ui/core";
import { Input, SpinnerLoader } from "../../components";
import DropDown from "./../../components/frontend/DropDown";
import { DisabilityData, GenderData } from "./../../data/form";
import { resources } from "./../../resources/resources";
import { colors } from "../../constants/colors";
import { Zoom } from "react-awesome-reveal";
import { useAppDispatch, useAppSelector } from "./../../app/hooks";
import { IParticipant } from "../../interface/IModel";
import { InputFiles } from "typescript";
import {
  AddGuestThunk,
  AddParticipantThunk,
  GetConferencesThunk,
  GetGuestThunk,
} from "../../functions";
import { Modal } from "../../views";
import { ResponseFail } from "../../features/slice/ResponseSlice";
import { FaUserPlus } from "react-icons/fa";
import { GuestCard } from "../../shared";
const styles = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
      height: "100%",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      overflowY: "auto",
      overflowX: "hidden",
    },
    container: {
      margin: theme.spacing(1, 0),
      width: "100%",
    },
    form_container: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: theme.spacing(1),
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column",
      },
    },
    input_container: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: theme.spacing(1),
      margin: theme.spacing(0, 1),
      [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(0),
      },
    },
    action_container: {
      justifyContent: "flex-start",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      padding: theme.spacing(0, 1),
      margin: theme.spacing(0, 1),
      [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(1, 0),
      },
    },
    button: {
      width: "100%",
      margin: theme.spacing(1, 0),
    },
    input: {
      width: "100%",
      margin: theme.spacing(0.5, 0),
    },
    input_group: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      margin: theme.spacing(0.5, 0),
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column",
      },
      padding: 0,
    },
    diet: {
      width: "100%",
      marginRight: theme.spacing(0.5),
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        margin: theme.spacing(0.5, 0),
      },
    },
    diet1: {
      width: "100%",
      marginLeft: theme.spacing(0.5),
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        margin: theme.spacing(0.5, 0),
      },
    },
  }),
  { index: 1 }
);
export default function GuestPage() {
  const classes = styles();
  const dispatch = useAppDispatch();

  const { loading, error, message } = useAppSelector(
    (state) => state.ResponseReducer
  );
  const { guest } = useAppSelector((state) => state.GuestReducer);
  const [open, setOpen] = useState<boolean>(false);
  const [formFile, setFile] = useState<{ file: File | null; image: any }>({
    file: null,
    image: "",
  });
  const [form, setForm] = useState<{
    name: string;
    role: string;
    portfolio: string;
  }>({
    name: "",
    role: "",
    portfolio: "",
  });

  useEffect(() => {
    if (formFile.file) {
      const fileReader: FileReader = new FileReader();
      fileReader.readAsDataURL(formFile.file);
      fileReader.addEventListener(
        "load",
        function () {
          setFile({ ...formFile, image: fileReader.result });
        },
        false
      );
    } else {
      setFile({ image: "", file: null });
    }
  }, [formFile.file]);

  useEffect(() => {
    dispatch(GetGuestThunk());
  }, []);

  function HandleSubmit() {
    if (!formFile.file) {
      return dispatch(ResponseFail("Guest Picture Required"));
    }
    const formdata = new FormData();
    const f: any = formFile.file;
    formdata.append("file", f);
    formdata.append("name", form.name);
    formdata.append("role", form.role);
    formdata.append("portfolio", form.portfolio);
    dispatch(AddGuestThunk(formdata));
  }
  return (
    <div className={classes.root}>
      <Paper
        style={{
          padding: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 0,
          width: "100%",
        }}
      >
        <Typography variant="body1" component="strong">
          Special Guest {guest.length.toString()}
        </Typography>
        <Button
          onClick={() => setOpen(true)}
          variant="text"
          size="small"
          color="default"
        >
          <FaUserPlus />
        </Button>
      </Paper>
      <Container>
        <Grid
          container
          style={{
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {guest.length > 0 &&
            guest.map((g) => <GuestCard key={g.id} info={g} />)}
        </Grid>
      </Container>
      <Modal
        title="Add Special Guest of Honor"
        width={400}
        open={open}
        handleClose={() => setOpen(false)}
      >
        <Box className={classes.form_container}>
          <Box className={classes.input_container}>
            <Box style={{ justifyContent: "flex-start" }}>
              <Box style={{ width: 200, height: 180 }} component={Paper}>
                <img
                  alt="test"
                  src={formFile.image ? formFile.image : resources.Passport}
                  className="img"
                />
              </Box>
            </Box>
            <TextField
              style={{ margin: "5px 0" }}
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) =>
                setForm({ ...form, name: e.target.value.toUpperCase() })
              }
              label="Name"
              required
            />
            <TextField
              style={{ margin: "5px 0" }}
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) =>
                setForm({ ...form, role: e.target.value.toUpperCase() })
              }
              label="Role"
              required
            />
            <TextField
              style={{ margin: "5px 0" }}
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) =>
                setForm({ ...form, portfolio: e.target.value.toUpperCase() })
              }
              label="Portfolio"
              required
            />
            <TextField
              className={classes.button}
              variant="outlined"
              size="small"
              type="file"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFile({
                  ...formFile,
                  file: e.target.files ? e.target.files[0] : null,
                })
              }
            />
            <Button
              fullWidth
              variant="contained"
              size="small"
              color="primary"
              style={{ background: colors.logo_brown }}
              className={classes.button}
              onClick={HandleSubmit}
            >
              Register
            </Button>
          </Box>
        </Box>
        <Container className={classes.container}>
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
          {message && (
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
                color="primary"
                variant="body1"
                component="caption"
              >
                {message}
              </Typography>
            </Paper>
          )}
        </Container>
      </Modal>
      <SpinnerLoader open={loading} />
    </div>
  );
}
