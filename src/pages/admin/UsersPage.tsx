import {
  makeStyles,
  Typography,
  Paper,
  Box,
  Container,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Input, SpinnerLoader } from "../../components";
import { colors } from "../../constants/colors";
import { RegisterUserThunk } from "../../functions";

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
      padding: theme.spacing(2),
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: theme.spacing(2),
      width: "100%",
      borderRadius: 0,
    },
    header_left: {
      padding: theme.spacing(0, 1),
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      justifyContent: "flex-start",
    },
    form: {
      width: 400,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
      padding: theme.spacing(2),
      alignSelf: "center",
      display: "flex",
      flexDirection: "column",
    },
    action_button: {
      width: 100,
      margin: theme.spacing(1, 0),
      alignSelf: "center",
      background: colors.logo_brown,
    },
  }),
  { index: 1 }
);
export default function UsersPage() {
  const classes = styles();
  const dispatch = useAppDispatch();
  const { loading, error, message } = useAppSelector(
    (state) => state.ResponseReducer
  );
  const [form, setForm] = useState<{
    username: string;
    name: string;
    password: string;
  }>({
    name: "",
    username: "",
    password: "",
  });
  return (
    <div className={classes.root}>
      <SpinnerLoader open={loading} />
      <Paper className={classes.header}>
        <Box className={classes.header_left}>
          <Typography
            variant="caption"
            style={{ fontFamily: "Georgia", fontWeight: "bold" }}
          >
            Registered Users
          </Typography>
        </Box>
      </Paper>
      <Paper
        style={{
          padding: 10,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 0,
          marginTop: 15,
        }}
      >
        <Zoom duration={750} delay={100}>
          <Box className={classes.form}>
            <Input
              label="Name"
              change={(e) => setForm({ ...form, name: e.target.value })}
            />
            <Input
              label="Username"
              change={(e) => setForm({ ...form, username: e.target.value })}
            />
            <Input
              label="Password"
              type="password"
              change={(e) => setForm({ ...form, password: e.target.value })}
            />
            <Button
              variant="contained"
              size="small"
              color="primary"
              className={classes.action_button}
              onClick={() => dispatch(RegisterUserThunk(form))}
            >
              Submit
            </Button>
          </Box>
        </Zoom>
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
      </Paper>
    </div>
  );
}
