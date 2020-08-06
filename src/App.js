import React from "react";
import Header from "./components/Header";
import AdvancedGridList from "./components/Body";
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
        <AdvancedGridList />
        <Footer />
      </>
    );
  }
}

export default App;
