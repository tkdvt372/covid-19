import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import HighlightCard from "./HighLightCard";

export default function Highlight({ report }) {
  const data = report && report.length ? report[report.length - 1] : [];
  const summary = [
    {
      title: "Số ca nhiễm",
      count: data.Confirmed,
      type: "Confirmed",
    },
    {
      title: "Số ca khỏi",
      count: data.Recovered,
      type: "Recovered",
    },
    {
      title: "Số ca tử vong",
      count: data.Deaths,
      type: "Deaths",
    },
  ];
  return (
    <Grid container spacing={3}>
      {summary.map((data) => (
        <Grid item sm={4} xs={12}>
          <HighlightCard
            title={data.title}
            count={data.count}
            type={data.type}
          />
        </Grid>
      ))}
    </Grid>
  );
}
