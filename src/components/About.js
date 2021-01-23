import React, { Component } from "react";
import styled from "styled-components";
import bike from "./images/bikeCliffs.jpeg";
// import "../About.css";

const Section = styled.div`
  // background-color: red;
`;

const StyledImg = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: auto;
  z-index: -1;
`;

const About = (props) => {
  let resumeData = props?.resumeData;
  // const mystyle = {
  //   color: "black",
  //   padding: "10px",
  //   fontFamily: "Arial",
  //   backgroundImage: "url('./bikeCliffs.jpeg')"
  // };
  return (
    <Section id="about">
      <StyledImg src={bike} />
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src="Images/profile pic.jpeg" alt="" />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{resumeData.aboutme}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{resumeData.name}</span>
                <br></br>
                <span>{resumeData.address}</span>
                <br></br>
                <span>{resumeData.website}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
