import React from "react";
import { makeStyles, Typography, Box, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridImages: {
    position: "relative",
    "@media (max-width: 600px)": {
      display: "none",
      justifyContent: "center"
    }
  },
  description: {
    fontFamily: "'Lexend Peta', sans-serif",
    fontSize: theme.spacing(2.5),
    textAlign: "center"
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item md={12}>
        <Typography paragraph className={classes.description}>
          <Box lineHeight={3}>
            I am a MERN developer with a real love for React. I enjoy all of the
            possibilities available in front-end devlopment, but also enjoy
            working with back-end code and databases as well.
          </Box>
          <br />
          <Box lineHeight={3}>
            I have always enjoyed working with computers, and developing
            documents with tools like Word and Excel. Javascript has really
            showed me how much more is possible, and I am excited for what the
            future holds.
          </Box>
        </Typography>
      </Grid>
    </Grid>
  );
}
