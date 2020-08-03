import React from "react";
import Header from "./components/Header";
// import Body from "./components/Body";
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
        <h1>Hello, my name is {this.state.title}!</h1>
        <h2>I am a {this.state.subtitle}!</h2>
        <h4>{this.state.text}</h4>
        <Footer />
      </>
    );
  }
}

export default App;
