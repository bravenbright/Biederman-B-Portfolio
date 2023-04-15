import React from "react";
import { Typography, Grid, Link } from "@mui/material";

export default function Resume() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">Hello Brigita Biederman</Typography>
        <Typography variant="subtitle1">
          4100 Briar Cliff Rd, Temple TX, 76502
        </Typography>
        <Typography variant="subtitle1">(512) 993-0613</Typography>
        <Typography variant="subtitle1">bbryantcs@gmail.com</Typography>
        <Typography variant="subtitle1">
          Github:{" "}
          <Link href="https://github.com/bravenbright">bravenbright</Link>
        </Typography>
        <Typography variant="subtitle1">
          Portfolio:{" "}
          <Link href="https://bravenbright.github.io/Brigita-Bryant/">
            https://bravenbright.github.io/Brigita-Bryant/
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">Skills</Typography>
        <Typography variant="body1">
          Great Work Ethic, Basic Coding and Computer Proficiency, Written and
          Verbal Communication.
        </Typography>
        <Typography variant="body1">
          Adaptability, Positivity, Critical Thinking, Conflict Resolution, and
          Dependability.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">Experience</Typography>
        <Typography variant="subtitle1">FEBRUARY 2020 - MAY 2020</Typography>
        <Typography variant="subtitle1">
          Simply Nuc, Round Rock, TX - OEM Technician
        </Typography>
        <Typography variant="body1">
          Responsible for effective time management Detail orientation was
          necessary to fulfill complex orders Proficiency following a complex
          list of tasks to completion and shipment Built NUC computers,
          installed OS, and QA tested units.
        </Typography>
        <Typography variant="subtitle1">JUNE 2017 - JUNE 2019</Typography>
        <Typography variant="subtitle1">
          Sushi Junai 2, Austin TX - Server
        </Typography>
        <Typography variant="body1">
          Provide Excellent Customer Service Managed 3 phone lines and
          facilitated over 20+ calls per day while fulfilling orders and
          reservations.
        </Typography>
        <Typography variant="subtitle1">
          DECEMBER 2013 - NOVEMBER 2015
        </Typography>
        <Typography variant="subtitle1">
          Hawaiian Artists Shows, Orangeburg, NY - Entertainer (Team Lead)
        </Typography>
        <Typography variant="body1">
          Quick Paced location changes requiring adaptability and team
          leadership to stay on task Delivered Excellent customer service to
          ensure satisfaction of the client until the end of the contract. Was
          able to maintain positive energy and team spirit in a stressful,
          chaotic, work atmosphere.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">Education</Typography>
        <Typography variant="subtitle1">
          OCT 2022 - PRESENTLY ENROLLED
        </Typography>
        <Typography variant="subtitle1">
          UT school of Business, Austin, TX - Full-stack Web Development
          Certificate
        </Typography>
        <Typography variant="body1">
          This is a bootcamp I am currently enrolled part time in that covers
          front-end and back-end web development.
        </Typography>
      </Grid>
    </Grid>
  );
}
