import React, { Component } from "react";
import Header from "./components/structure/Header";
import Content from "./components/structure/Content";
import Resume from "./resume.json";

class App extends Component {
  componentDidMount() {
    document.title = [
      Resume.basics.name,
      Resume.basics.jobTitle,
      [Resume.basics.location.region, Resume.basics.location.country].join(", ")
    ].join(" | ");
  }

  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
