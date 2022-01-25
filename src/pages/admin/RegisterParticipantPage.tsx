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
} from "@material-ui/core";
import { Input, SpinnerLoader } from "../../components";
import DropDown from "./../../components/frontend/DropDown";
import { GenderData } from "./../../data/form";
import { resources } from "./../../resources/resources";
import { colors } from "../../constants/colors";
import { Zoom } from "react-awesome-reveal";
import { useAppDispatch, useAppSelector } from "./../../app/hooks";
import { IParticipant } from "../../interface/IModel";
import { InputFiles } from "typescript";
import { AddParticipantThunk, GetConferencesThunk } from "../../functions";
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
  }),
  { index: 1 }
);
export default function RegisterParticipantPage() {
  const classes = styles();
  const { conferences } = useAppSelector((state) => state.ConferencesReducer);
  const { loading, error, message } = useAppSelector(
    (state) => state.ResponseReducer
  );
  const dispatch = useAppDispatch();
  const [formFile, setFile] = useState<{ file: File | null; image: any }>({
    file: null,
    image: "",
  });
  const [form, setForm] = useState<IParticipant>({
    name: "",
    phone: "",
    email: "",
    gender: "",
    hotel: "",
    room: "",
    organization: "",
    position: "",
    special_need: "",
    remark: "",
    conference_id: "",
    id: "",
    picture: "",
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
    dispatch(GetConferencesThunk());
  }, []);

  useEffect(() => {
    let confs = conferences.filter((c) => c.status === 0);
    if (confs.length > 0) {
      setForm({ ...form, conference_id: confs[confs.length - 1].id });
    }
  }, []);
  function HandleSubmit() {
    const formdata = new FormData();
    const f: any = formFile.file;
    formdata.append("file", f);
    formdata.append("name", form.name);
    formdata.append("email", form.email);
    formdata.append("phone", form.phone);
    formdata.append("hotel", form.hotel);
    formdata.append("room", form.room);
    formdata.append("position", form.position);
    formdata.append("gender", form.gender);
    formdata.append("special_need", form.special_need);
    formdata.append("organization", form.organization);
    formdata.append("remark", form.remark);
    formdata.append("conference_id", form.conference_id);
    dispatch(AddParticipantThunk(formdata));
  }
  return (
    <div className={classes.root}>
      <SpinnerLoader open={loading} />
      <Container className={classes.container}>
        <Box className={classes.form_container}>
          <Zoom duration={750} delay={100} style={{ width: "100%" }}>
            <Box className={classes.input_container}>
              <Input
                change={(e) =>
                  setForm({ ...form, name: e.target.value.toUpperCase() })
                }
                label="Name"
                required
              />
              <Input
                change={(e) =>
                  setForm({ ...form, email: e.target.value.toLowerCase() })
                }
                label="Email"
                required
              />
              <Input
                change={(e) => setForm({ ...form, phone: e.target.value })}
                label="Phone"
                required
              />
              <DropDown
                change={(e) =>
                  setForm({ ...form, gender: e.target.value.toUpperCase() })
                }
                label="Gender"
                required
                data={GenderData}
              />
              <Input
                change={(e) =>
                  setForm({
                    ...form,
                    organization: e.target.value.toUpperCase(),
                  })
                }
                label="Name of Organization"
              />
              <Input
                change={(e) =>
                  setForm({ ...form, position: e.target.value.toUpperCase() })
                }
                label="Position / Rank"
              />
              <Input
                change={(e) =>
                  setForm({ ...form, hotel: e.target.value.toUpperCase() })
                }
                label="Hotel Name"
              />
            </Box>
          </Zoom>
          <Zoom duration={750} delay={200} style={{ width: "100%" }}>
            <Box className={classes.input_container}>
              <Input
                label="Room Number"
                change={(e) =>
                  setForm({ ...form, room: e.target.value.toUpperCase() })
                }
              />
              <Input
                change={(e) =>
                  setForm({ ...form, position: e.target.value.toUpperCase() })
                }
                label="Remarks"
              />
              {/* <Input
                change={(e) =>
                  setForm({
                    ...form,
                    special_need: e.target.value.toUpperCase(),
                  })
                }
                label="Special Need"
              /> */}
              <TextField
                className={classes.input}
                variant="outlined"
                size="small"
                label="Conference"
                select
              >
                <MenuItem value="">
                  <small>None</small>
                </MenuItem>
                {conferences.map((conf) => (
                  <MenuItem key={conf.id} value={conf.id}>
                    {conf.title}
                  </MenuItem>
                ))}
              </TextField>
              <Box className={classes.form_container}>
                <Box style={{ justifyContent: "flex-start" }}>
                  <Box style={{ width: 200, height: 180 }} component={Paper}>
                    <img
                      alt="test"
                      src={formFile.image ? formFile.image : resources.Passport}
                      className="img"
                    />
                  </Box>
                </Box>
                <Box className={classes.action_container}>
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
            </Box>
          </Zoom>
        </Box>
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
    </div>
  );
}
