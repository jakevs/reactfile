// import React from "react";
// import Header from "./components/Header";
// import About from "./components/About";
// import MainFeaturedPost from "./components/Title";
// import AdvancedGridList from "./components/Body";
// import Skills from "./components/Skills/Skills";
// import Footer from "./components/Footer";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       title: "James Van Slyke",
//       subtitle: "Full-Stack Web Developer",
//       text: "Check out my skills"
//     };
//   }
//   render() {
//     return (
//       <>
//         <Header />
//         <About />
//         <MainFeaturedPost />
//         <AdvancedGridList />
//         <Skills />
//         <Footer />
//       </>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import resumeData from "./resumeData";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <Testimonials resumeData={resumeData} />
        <ContactMe resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}
export default App;
