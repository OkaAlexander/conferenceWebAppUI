import { Box, makeStyles, Divider } from "@material-ui/core";
import React from "react";
import { IConferencePackage } from "../../interface/IModel";
import { SmallLabel, BigLabel } from "../../components";
import { calculatePackageCost } from "../services";
import { currency } from "../../constants/constants";
const styles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  container: {
    boxShadow: theme.shadows[2],
    padding: theme.spacing(1),
    borderRadius: 0,
    display: "flex",
    flexDirection: "column",
  },
  column_container: {
    width: "100%",
    margin: theme.spacing(1, 0),
    display: "flex",
    flexDirection: "column",
  },
}));

interface IProps {
  info: IConferencePackage;
}
export default function PackageInfoView({ info }: IProps) {
  const classes = styles();
  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Box className={classes.column_container}>
          <SmallLabel text={"Package Title"} />
          <Divider />
          <BigLabel text={info.title} />
        </Box>
        <Box className={classes.column_container}>
          <SmallLabel text={"Registration Fee"} />
          <Divider />
          <BigLabel text={info.registrationFee.toString()} />
        </Box>
        <Box className={classes.column_container}>
          <SmallLabel text={"Cost Of Materials"} />
          <Divider />
          <BigLabel text={info.materialCost.toString()} />
        </Box>
        <Box className={classes.column_container}>
          <SmallLabel text={"Cost Of Feeding"} />
          <Divider />
          <BigLabel text={info.costOfFeeding.toString()} />
        </Box>
        <Box className={classes.column_container}>
          <SmallLabel text={"Cost Of Accommodation"} />
          <Divider />
          <BigLabel text={info.costOfAccomodation.toString()} />
        </Box>
        <Box className={classes.column_container}>
          <SmallLabel text={"Conference Duration"} />
          <Divider />
          <BigLabel text={info.conferenceDuration + " days"} />
        </Box>
        <Box className={classes.column_container}>
          <SmallLabel text={"Total Cost"} />
          <Divider />
          <BigLabel
            text={currency + calculatePackageCost(info).toFixed(2).toString()}
          />
        </Box>
      </Box>
    </Box>
  );
}
