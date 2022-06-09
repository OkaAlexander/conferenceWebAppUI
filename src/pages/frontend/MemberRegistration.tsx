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
import {
  DisabilityData,
  GenderData,
  initialParticipantInfo,
} from "./../../data/form";
import { resources } from "./../../resources/resources";
import { colors } from "../../constants/colors";
import { Zoom } from "react-awesome-reveal";
import { useAppDispatch, useAppSelector } from "./../../app/hooks";
import { IConferencePackage, IParticipant } from "../../interface/IModel";
import { InputFiles } from "typescript";
import {
  AddConferenceMemberThunk,
  AddParticipantThunk,
  GetConferencePackagesThunk,
  GetConferencesThunk,
} from "../../functions";
import { Navbar } from "../../shared";
import { useNavigate } from "react-router-dom";
import { Visibility } from "@material-ui/icons";
import { Modal, PackageInfoView } from "../../views";
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
export default function MemberRegistration() {
  const classes = styles();
  const navigation = useNavigate();
  const [view, setView] = useState<boolean>(false);
  const [packages, setPackages] = useState<IConferencePackage[]>([]);
  const { conference_packages } = useAppSelector(
    (state) => state.ConferencePackagesReducer
  );
  const { conferences } = useAppSelector((state) => state.ConferencesReducer);
  const { loading, error, message } = useAppSelector(
    (state) => state.ResponseReducer
  );
  const dispatch = useAppDispatch();
  const { info } = useAppSelector((state) => state.MemberReducer);
  const [formFile, setFile] = useState<{ file: File | null; image: any }>({
    file: null,
    image: "",
  });
  const [form, setForm] = useState<IParticipant>(initialParticipantInfo);

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
    dispatch(GetConferencePackagesThunk());
  }, []);

  useEffect(() => {
    info && navigation("/uenr-conference/member/info");
  }, [info]);

  useEffect(() => {
    let confs = conferences.filter((c) => c.status === 0);
    if (confs.length > 0) {
      setForm({ ...form, conference_id: confs[confs.length - 1].id });
    }
  }, []);
  useEffect(() => {
    setPackages(
      conference_packages.filter((cp) => cp.conferenceId === form.conference_id)
    );
  }, [conference_packages, form.conference_id]);
  const [packInfo, setPackage] = useState<IConferencePackage | null>(null);

  function HandleSubmit() {
    const formdata = new FormData();
    const f: any = formFile.file;
    formdata.append("file", f);
    formdata.append("name", form.name);
    formdata.append("email", form.email);
    formdata.append("phone", form.phone);
    formdata.append("disabled", form.disabled.toString());
    formdata.append("disability", form.disability);
    formdata.append("position", form.position);
    formdata.append("gender", form.gender);
    formdata.append("diet", form.diet);
    formdata.append("organization", form.organization);
    formdata.append("location", form.location);
    formdata.append("conference_id", form.conference_id);
    formdata.append("accomodation", form.accomodation.toString());
    formdata.append("package_id", form.package_id);
    dispatch(AddConferenceMemberThunk(formdata));
  }
  return (
    <div className={classes.root}>
      <Navbar home />
      <SpinnerLoader open={loading} />
      <Container className={classes.container}>
        {packInfo && (
          <Modal
            open={view}
            width={500}
            title="Conference Package Info"
            handleClose={() => setView(false)}
            children={<PackageInfoView info={packInfo} />}
          />
        )}
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
              <Box className={classes.input_group}>
                <TextField
                  variant="outlined"
                  size="small"
                  className={`${classes.diet} ${classes.input}`}
                  label="Prefered Diet"
                  fullWidth
                  onChange={(e) =>
                    setForm({ ...form, diet: e.target.value.toString() })
                  }
                />
                <TextField
                  className={classes.input}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      disabled: parseInt(e.target.value.toString()),
                    })
                  }
                  label="Disabled"
                  variant="outlined"
                  select
                  size="small"
                >
                  {DisabilityData.map((dis) => (
                    <MenuItem value={dis.value} key={dis.value}>
                      {dis.title}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </Box>
          </Zoom>
          <Zoom duration={750} delay={200} style={{ width: "100%" }}>
            <Box className={classes.input_container}>
              {form.disabled === 1 && (
                <Input
                  label="Disability Type"
                  change={(e) =>
                    setForm({
                      ...form,
                      disability: e.target.value.toUpperCase(),
                    })
                  }
                />
              )}
              <Input
                change={(e) =>
                  setForm({ ...form, location: e.target.value.toUpperCase() })
                }
                label="City / Town"
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
              <Box className={classes.input_group}>
                <TextField
                  className={classes.input}
                  variant="outlined"
                  size="small"
                  label="Conference"
                  select
                  onChange={(e) =>
                    setForm({ ...form, conference_id: e.target.value })
                  }
                >
                  <MenuItem
                    key={conferences[conferences.length - 1].id}
                    value={conferences[conferences.length - 1].id}
                  >
                    {conferences[conferences.length - 1].title}
                  </MenuItem>
                </TextField>
                <TextField
                  variant="outlined"
                  size="small"
                  className={`${classes.diet1} ${classes.input}`}
                  label="Do you require Accomodation?"
                  fullWidth
                  select
                  onChange={(e) =>
                    setForm({
                      ...form,
                      accomodation: parseInt(e.target.value.toString()),
                    })
                  }
                >
                  {DisabilityData.map((ac) => (
                    <MenuItem value={ac.value} key={ac.value.toString()}>
                      {ac.title}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>

              <Box
                style={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TextField
                  disabled={Boolean(packages.length === 0)}
                  fullWidth
                  variant="outlined"
                  size="small"
                  label="Conference Package"
                  select
                  onChange={(e) =>
                    setForm({ ...form, package_id: e.target.value })
                  }
                >
                  {packages.map((p) => (
                    <MenuItem
                      onClick={() => {
                        setPackage(p);
                      }}
                      value={p.id}
                    >
                      {p.title}
                    </MenuItem>
                  ))}
                </TextField>
                <Button
                  style={{ marginLeft: 10, height: 38 }}
                  size="small"
                  variant="outlined"
                  color="default"
                  disabled={Boolean(!packInfo)}
                  onClick={() => setView(true)}
                >
                  <Visibility htmlColor={colors.logo_brown} />
                </Button>
              </Box>

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
