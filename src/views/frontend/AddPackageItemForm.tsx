import {
  Box,
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
  withWidth,
} from "@material-ui/core";
import React, { useState } from "react";
import { IConferencePackage } from "../../interface/IConferencePackage";
import { INewConferenceInfo } from "../interface";
import { validateConferencePackageInfo } from "../services";

const styles = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
      padding: theme.spacing(1),
      display: "flex",
      flexDirection: "column",
    },
  }),
  { index: 1 }
);

interface IProps {
  form: INewConferenceInfo;
  handleForm: (info: INewConferenceInfo) => void;
}
export default function AddPackageItemForm({ form, handleForm }: IProps) {
  const [error, setError] = useState<any>(null);
  const [info, setInfo] = useState<IConferencePackage>({
    id: "",
    conferenceDuration: 0,
    conferenceId: "",
    costOfAccomodation: 0,
    costOfFeeding: 0,
    registrationFee: 0,
    materialCost: 0,
    title: "",
  });
  return (
    <Box component={Container}>
      <TextField
        fullWidth
        style={{ margin: 5, alignSelf: "center" }}
        variant="outlined"
        size="small"
        value={info.title}
        onChange={(e) => setInfo({ ...info, title: e.target.value })}
        label="Package Title"
      />
      <TextField
        fullWidth
        value={info.registrationFee == 0 ? "" : info.registrationFee}
        style={{ margin: 5, alignSelf: "center" }}
        variant="outlined"
        size="small"
        label="Registration Fee"
        type="number"
        onChange={(e) =>
          setInfo({ ...info, registrationFee: parseFloat(e.target.value) })
        }
      />
      <TextField
        fullWidth
        value={info.materialCost == 0 ? "" : info.materialCost}
        style={{ margin: 5, alignSelf: "center" }}
        variant="outlined"
        size="small"
        label="Material Cost"
        type="number"
        onChange={(e) =>
          setInfo({ ...info, materialCost: parseFloat(e.target.value) })
        }
      />
      <TextField
        fullWidth
        value={info.costOfFeeding == 0 ? "" : info.costOfFeeding}
        style={{ margin: 5, alignSelf: "center" }}
        variant="outlined"
        size="small"
        label="Cost of Feeding"
        type="number"
        onChange={(e) =>
          setInfo({ ...info, costOfFeeding: parseFloat(e.target.value) })
        }
      />
      <TextField
        fullWidth
        value={info.costOfAccomodation == 0 ? "" : info.costOfAccomodation}
        style={{ margin: 5, alignSelf: "center" }}
        variant="outlined"
        size="small"
        label="Cost Of Accomodation"
        type="number"
        onChange={(e) =>
          setInfo({ ...info, costOfAccomodation: parseFloat(e.target.value) })
        }
      />
      <TextField
        fullWidth
        value={info.conferenceDuration == 0 ? "" : info.conferenceDuration}
        style={{ margin: 5, alignSelf: "center" }}
        variant="outlined"
        size="small"
        label="Conference Duration"
        type="number"
        onChange={(e) =>
          setInfo({ ...info, conferenceDuration: parseInt(e.target.value) })
        }
      />
      <Button
        size="small"
        color="primary"
        variant="outlined"
        style={{ marginTop: "5%", marginBottom: "5%" }}
        onClick={() => {
          try {
            validateConferencePackageInfo(info);
            handleForm({ ...form, package: [...form.package, info] });
            setInfo({
              id: "",
              conferenceDuration: 0,
              conferenceId: "",
              costOfAccomodation: 0,
              costOfFeeding: 0,
              registrationFee: 0,
              materialCost: 0,
              title: "",
            });
          } catch (err) {
            setError(err);
          }
        }}
      >
        Add To List
      </Button>

      {error && (
        <Typography
          variant="body1"
          color="error"
          style={{ margin: 10, textAlign: "center" }}
        >
          {error}
        </Typography>
      )}
    </Box>
  );
}
