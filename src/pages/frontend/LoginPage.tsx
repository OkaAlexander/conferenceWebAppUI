import {
  Container,
  makeStyles,
  TextField,
  Typography,
  Box,
  Paper,
  Button,
  Toolbar,
  AppBar,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { SpinnerLoader } from "../../components";
import { colors } from "../../constants/colors";
import { ResponseFail } from "../../features/slice/ResponseSlice";
import { UserLoginThunk } from "../../functions";
import { resources } from "../../resources/resources";

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
      justifyContent: "center",
      background: `linear-gradient(0deg,rgba(0,0,0,0.65),rgba(0,0,0,0.35),rgba(0,0,0,0.75)),url(${resources.Meeting})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "transparent",
    },
    form: {
      background: "#fff",
      width: 250,
      borderRadius: 15,
      padding: 0,
      overflow: "hidden",
      minHeight: 280,
    },
    form_group: {
      padding: theme.spacing(2, 1),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    input_group: {
      borderRadius: 30,
      height: 40,
      padding: theme.spacing(1),
      width: "100%",
      border: "1px solid rgba(0,0,0,0.45)",
      margin: theme.spacing(1, 0),
      overflow: "hidden",
    },
    input: {
      borderStyle: "none",
      outline: "none",
      fontFamily: "georgia",
      fontSize: 18,
      padding: theme.spacing(0, 1),
    },
    header: {
      height: 60,
      padding: theme.spacing(2),
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      background: colors.logo_brown,
    },
    text_label: {
      color: "#fff",
      textAlign: "center",
      fontFamily: "Whiskey Girls 3D",
      textTransform: "uppercase",
      fontSize: 24,
    },
    button: {
      width: 150,
      borderRadius: 15,
      background: colors.logo_brown,
      alignSelf: "center",
      margin: theme.spacing(1, 0),
      padding: theme.spacing(0.5, 0),
    },
    button_container: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    appbar: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      with: "100%",
      background: "transparent",
    },
    toolbar: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
  }),

  { index: 1 }
);
export default function LoginPage() {
  const classes = styles();
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  const { error, loading } = useAppSelector((state) => state.ResponseReducer);
  const { user } = useAppSelector((state) => state.UserReducer);
  const [form, setForm] = useState<{ username: string; password: string }>({
    username: "",
    password: "",
  });

  function HandleLogin() {
    if (form.username.length <= 0) {
      dispatch(ResponseFail("Username Required"));
    } else if (form.password.length <= 0) {
      dispatch(ResponseFail("Password Required"));
    } else {
      dispatch(UserLoginThunk(form));
    }
  }
  useEffect(() => {
    user && navigation("/home");
  }, []);
  return (
    <div className={classes.root}>
      <SpinnerLoader open={loading} />
      <AppBar position="fixed" elevation={0} className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Box>
            <img className="img" src={resources.Logo} alt="logo-asset" />
          </Box>
        </Toolbar>
      </AppBar>
      <Container className={classes.container}>
        <Paper className={classes.form}>
          <Box className={classes.header}>
            <Typography className={classes.text_label}>Login</Typography>
          </Box>
          <Box className={classes.form_group}>
            <Box className={classes.input_group}>
              <input
                className={classes.input}
                placeholder="username"
                onChange={(e) => setForm({ ...form, username: e.target.value })}
              />
            </Box>
            <Box className={classes.input_group}>
              <input
                className={classes.input}
                placeholder="password"
                type="password"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </Box>
            <Box>
              <Button
                variant="contained"
                size="small"
                className={classes.button}
                color="primary"
                onClick={HandleLogin}
              >
                Login
              </Button>
            </Box>
            {error && (
              <Typography
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  textAlign: "center",
                  alignSelf: "center",
                  flex: 1,
                  marginTop: 5,
                }}
                variant="caption"
                component="caption"
                color="error"
              >
                {error}
              </Typography>
            )}
          </Box>
        </Paper>
      </Container>
    </div>
  );
}
