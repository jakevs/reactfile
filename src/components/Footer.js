import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://jakevs.github.io/responsiveportfolio/"
      >
        JVSIII
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
  }
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
};

// import React, { Component } from "react";

// export default class Footer extends Component {
//   render() {
//     let resumeData = this.props.resumeData;
//     return (
//       <footer>
//         <div className="row">
//           <div className="twelve columns">
//             <ul className="social-links">
//               {resumeData.socialLinks &&
//                 resumeData.socialLinks.map((item) => {
//                   return (
//                     <li>
//                       <a href={item.url}>
//                         <i className={item.className} />
//                       </a>
//                     </li>
//                   );
//                 })}
//             </ul>
//           </div>
//           <div id="go-top">
//             <a className="smoothscroll" title="Back to Top" href="#home">
//               <i className="icon-up-open" />
//             </a>
//           </div>
//         </div>
//       </footer>
//     );
//   }
// }
