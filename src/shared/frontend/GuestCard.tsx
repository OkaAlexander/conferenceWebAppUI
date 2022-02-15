import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { baseUrl } from "../../configuration/Configuration";
import { colors } from "../../constants/colors";
import { IGuestInfo } from "../../interface/IModel";
import { resources } from "../../resources/resources";

const styles = makeStyles(
  (theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: theme.spacing(2),
    },
    card: {
      width: "85%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: 10,
    },
  }),
  { index: 1 }
);

interface Props {
  info: IGuestInfo;
}
export default function GuestCard({ info }: Props) {
  const classes = styles();
  return (
    <Grid sm={6} md={4} xs={12} lg={3} xl={2} item className={classes.root}>
      <Box className={`guest_info_box ${classes.card}`}>
        <Box
          style={{
            width: 100,
            height: 100,
            borderRadius: "100%",
            overflow: "hidden",
          }}
          className="guest_image_container"
        >
          <img src={baseUrl + info.picture} alt="guest-asset" className="img" />
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Typography
            style={{
              fontWeight: "bold",
              color: colors.logo_brown,
              width: "100%",
              margin: "5px 0",
              textAlign: "center",
              fontFamily: "georgia",
              marginBottom: 0,
            }}
            variant="body1"
            component="strong"
          >
            {info.name}
          </Typography>
          <Typography
            style={{
              fontWeight: 400,
              color: colors.logo_brown,
              width: "100%",
              margin: "5px 0",
              textAlign: "center",
              marginBottom: 0,
            }}
            variant="body1"
            component="caption"
          >
            {info.role}
          </Typography>
          <Typography variant="caption" component="caption">
            {info.portfolio}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}
