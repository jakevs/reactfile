import React from "react";
import {
  makeStyles,
  Container,
  Typography,
  Paper,
  Grid,
  Link
} from "@material-ui/core/";
import html from "./assets/icons8-html-5-48.png";
import css from "./assets/icons8-css3-48.png";
import javascript from "./assets/icons8-javascript-logo-64.png";
import react from "./assets/icons8-react-100.png";
import node from "./assets/logo-javascript-png-node-js-logo-javascript-vector-png-266.png";
import mongo from "./assets/icons8-mongodb-48.png";
import Title from "../Title";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTypography-root": {
      fontFamily: "'Poiret One', cursive",
      fontWeight: 800
    },
    "& .MuiGrid-item": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(10)
    },
    "& .MuiGrid-root": {
      display: "flex",
      justifyContent: "center"
    }
  },
  logos: {
    height: 60,
    filter: "grayscale(90%)",
    "&:hover": {
      filter: "grayscale(10%)"
    }
  },
  title: {
    fontWeight: "bold"
  }
}));

export default function Skills() {
  const classes = useStyles();

  return (
    <div id="skills" style={{ background: "#f2f2f2" }} className={classes.root}>
      <Title>
        <Typography>Technologies and Skills</Typography>
      </Title>
      <Typography>Projects</Typography>
      <Paper elevation={1} className={classes.paper}>
        <Grid container>
          <Grid item xs={3}>
            <Link
              href="https://jakevs.github.io/responsiveportfolio/"
              target="-blank"
            >
              <img src={html} alt="HTML" className={classes.logos} />
            </Link>
            <Typography className={classes.title}>HTML</Typography>
          </Grid>
          <Grid item xs={3}>
            <Link
              href="https://jakevs.github.io/weatherdashboard/"
              target="-blank"
            >
              <img src={css} alt="CSS" className={classes.logos} />
            </Link>
            <Typography className={classes.title}>CSS</Typography>
          </Grid>
          <Grid item xs={3}>
            <Link
              href="https://jakevs.github.io/workdayscheduler/"
              target="-blank"
            >
              <img
                src={javascript}
                alt="Javascript"
                className={classes.logos}
              />
            </Link>
            <Typography className={classes.title}>JavaScript</Typography>
          </Grid>
          <Grid item xs={3}>
            <Link
              href="https://stormy-thicket-60781.herokuapp.com/"
              target="-blank"
            >
              <img src={react} alt="React.js" className={classes.logos} />
            </Link>
            <Typography className={classes.title}>React.js</Typography>
          </Grid>

          <Grid item xs={3}>
            <Link
              href="https://github.com/jakevs/readmegenerator"
              target="-blank"
            >
              <img src={node} alt="Node" className={classes.logos} />
            </Link>
            <Typography className={classes.title}>Node</Typography>
          </Grid>
          <Grid item xs={3}>
            <Link
              href="https://stark-river-74201.herokuapp.com/"
              target="-blank"
            >
              <img src={mongo} alt="Mongo DB" className={classes.logos} />
            </Link>
            <Typography className={classes.title}>Mongo DB</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
