import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import MainFeaturedPost from "./components/Title";
import AdvancedGridList from "./components/Body";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "James Van Slyke",
      subtitle: "Full-Stack Web Developer",
      text: "Check out my skills"
    };
  }
  render() {
    return (
      <>
        <Header />
        <About />
        <MainFeaturedPost />
        <AdvancedGridList />
        <Skills />
        <Footer />
      </>
    );
  }
}

export default App;
