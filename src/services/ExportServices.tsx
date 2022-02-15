import { Box, Button } from "@material-ui/core";
import React from "react";
import { CSVLink } from "react-csv";
import { ICsvRows } from "../interface/IServices";

type Props = {
  DataSource: ICsvRows[];
  fileName: string;
};
export default function ExportServices({ DataSource, fileName }: Props) {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <Button
        variant="outlined"
        size="small"
        color="default"
        style={{
          marginRight: 10,
          color: "black",
          fontWeight: "normal",
          fontFamily: "callibri",
          textTransform: "none",
        }}
      >
        <CSVLink
          style={{
            textDecoration: "none",
            color: "rgb(59, 89, 153)",
            fontWeight: "bold",
            margin: 5,
          }}
          filename={`${fileName}.csv`}
          data={DataSource}
          className="btn btn-primary"
        >
          EXPORT TO EXCEL
        </CSVLink>
      </Button>
    </Box>
  );
}
