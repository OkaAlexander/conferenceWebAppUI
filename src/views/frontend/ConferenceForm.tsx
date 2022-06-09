import {
  Box,
  Button,
  Container,
  IconButton,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextareaAutosize,
  Typography,
} from "@material-ui/core";
import { Remove } from "@material-ui/icons";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Input } from "../../components";
import { colors } from "../../constants/colors";
import { AddConferenceThunk } from "../../functions";
import { INewConferenceInfo } from "../interface";
import { calculatePackageCost } from "../services";

const styles = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
    },
    textarea: {
      width: "100%",
      outline: "none",
      borderStyle: "none",
      padding: 5,
      fontFamily: "Georgia",
    },
    form: {
      padding: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      flex: 0.65,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        flex: 1,
      },
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
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      height: "100%",
      width: "100%",
    },
    package_info: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        flex: 1,
      },
    },
  }),
  { index: 1 }
);

interface IProps {
  form: INewConferenceInfo;
  handleForm: (info: INewConferenceInfo) => void;
  handleSubmit: () => void;
}
export default function ConferenceForm({
  form,
  handleForm,
  handleSubmit,
}: IProps) {
  const classes = styles();
  const { error } = useAppSelector((state) => state.ResponseReducer);
  const dispatch = useAppDispatch();
  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Box style={{ flex: 0.85 }} className={classes.form}>
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
            value={form.title}
            change={(e) =>
              handleForm({ ...form, title: e.target.value.toUpperCase() })
            }
            label="Conference Heading"
            row_child
          />
          <Input
            value={form.venue}
            label="Conference Venue"
            change={(e) =>
              handleForm({ ...form, venue: e.target.value.toUpperCase() })
            }
          />
          <Input
            label="Start Date"
            value={form.start_date}
            type="date"
            change={(e) => handleForm({ ...form, start_date: e.target.value })}
          />
          <Input
            label="End Date"
            value={form.end_date}
            type="date"
            change={(e) => handleForm({ ...form, end_date: e.target.value })}
          />
          <Paper style={{ padding: 10 }}>
            <TextareaAutosize
              className={classes.textarea}
              onChange={(e) =>
                handleForm({ ...form, description: e.target.value })
              }
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
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
        <Paper className={classes.package_info}>
          <Box>
            <Typography variant="body1">Conference Package Details</Typography>
          </Box>
          <Box>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Registration Fee</TableCell>
                    <TableCell>Material Cost</TableCell>
                    <TableCell>Feeding</TableCell>
                    <TableCell> Accommodation</TableCell>
                    <TableCell>Duration</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {form.package.map((info, index) => (
                    <TableRow key={index.toString()}>
                      <TableCell>{info.title}</TableCell>
                      <TableCell>{info.registrationFee}</TableCell>
                      <TableCell>{info.materialCost}</TableCell>
                      <TableCell>{info.costOfFeeding}</TableCell>
                      <TableCell>{info.costOfAccomodation}</TableCell>
                      <TableCell>{info.conferenceDuration}</TableCell>
                      <TableCell>{calculatePackageCost(info)}</TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() =>
                            handleForm({
                              ...form,
                              package: form.package.filter(
                                (p) => p.title !== info.title
                              ),
                            })
                          }
                          size="small"
                        >
                          <Remove htmlColor="firebrick" fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box></Box>
        </Paper>
      </Box>
    </Box>
  );
}
