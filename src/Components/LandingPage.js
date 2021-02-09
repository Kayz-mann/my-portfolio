import React, { Component } from "react";
import { Grid, Layout } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        
        <logo className="logo-portfolio"> My Portfolio</logo>

        <h1 className="introduction">
          Front End <br />
          Web Developer
        </h1>
        <h1 className="introduction2"></h1>
        <h2 className="introduction3">
          I am a multi-disciplinary developer, always ready to create
          <br /> easy to understand and interactive web designs.
          <br /> I specialize in web development and User interface designs.
        </h2>
        <p className="underlay-text">HELLO</p>
        <div
          style={{ height: "100vh", width: "100%", background: "cover" }}
          className="first-half container"
        ></div>
        <a
          href="https://github.com/Kayz-mann"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          <i class="fa fa-github icon1" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/balogun-kayode-b29438170/"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          <i class="fa fa-linkedin icon2" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.instagram.com/bee_ndakrafts/"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          <i class="fa fa-instagram icon3" aria-hidden="true"></i>
        </a>
        <a
          href="https://codepen.io/kayz-mann/pen/abdLvKd"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          <i class="fa fa-codepen icon4" aria-hidden="true"></i>
        </a>
        <p className="my-name">HELLO I'M KAYODE BALOGUN</p>
        <div
          style={{ height: "100vh", width: "50%" }}
          className="second-half grid-50"
        >
          <div className="second-half2"></div>
        </div>
        
      </div>
    );
  }
}

export default LandingPage;
