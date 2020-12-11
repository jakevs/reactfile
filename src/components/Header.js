import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import Link from "@material-ui/core/Link";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    color: "white",
    marginRight: theme.spacing(2)
  },
  toolbar: {
    minHeight: 128,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    backgroundColor: "#1569C7"
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
    fontFamily: "'Cinzel', serif"
  }
}));

const options = [
  "About",
  "Contact",
  "Education",
  "Work",
  "Skills",
  "Projects",
  "Testimonials"
];

const ITEM_HEIGHT = 48;

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Link
            color="inherit"
            href="https://jakevs.github.io/responsiveportfolio/"
          >
            <HomeIcon />
          </Link>{" "}
          <Typography className={classes.title} variant="h5" noWrap>
            Hello! I'm James Van Slyke!
          </Typography>
          <div>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              color="inherit"
              onClick={handleClick}
            >
              <MoreVertIcon color="white" />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch"
                }
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// import React, { Component } from "react";

// export default class Header extends Component {
//   render() {
//     let resumeData = this.props.resumeData;
//     const mystyle = {
//       minHeight: 128,
//       alignItems: "flex-start",

//       backgroundColor: "#1569C7"
//     };

//     return (
//       <React.Fragment>
//         <header style={mystyle} id="home">
//           <nav id="nav-wrap">
//             <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
//               Show navigation
//             </a>
//             <a className="mobile-btn" href="#" title="Hide navigation">
//               Hide navigation
//             </a>
//             <ul id="nav" className="nav">
//               <li className="current">
//                 <a className="smoothscroll" href="#home">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a className="smoothscroll" href="#about">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a className="smoothscroll" href="#resume">
//                   Resume
//                 </a>
//               </li>
//               <li>
//                 <a className="smoothscroll" href="#portfolio">
//                   Works
//                 </a>
//               </li>
//               <li>
//                 <a className="smoothscroll" href="#testimonials">
//                   Stuff
//                 </a>
//               </li>
//               <li>
//                 <a className="smoothscroll" href="#contact">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </nav>
//           <div className="row banner">
//             <div className="banner-text">
//               <h1 className="responsive-headline">I am {resumeData.name}.</h1>
//               <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
//                 I am a {resumeData.role}.{resumeData.roleDescription}
//               </h3>
//               <hr />
//               <ul className="social">
//                 {resumeData.socialLinks &&
//                   resumeData.socialLinks.map((item) => {
//                     return (
//                       <li key={item.name}>
//                         <a href={item.url} target="">
//                           <i className={item.className}></i>
//                         </a>
//                       </li>
//                     );
//                   })}
//               </ul>
//             </div>
//           </div>
//           <p className="scrolldown">
//             <a className="smoothscroll" href="#about">
//               <i className="icon-down-circle"></i>
//             </a>
//           </p>
//         </header>
//       </React.Fragment>
//     );
//   }
// }
