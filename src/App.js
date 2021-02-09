import React, { Component } from "react";
import "./App.css";
import { Layout, Navigation, Drawer, Content } from "react-mdl";
import { BrowserRouter, Switch, Route,  Link } from "react-router-dom";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import 'react-mdl/extra/material.css';   
import 'react-mdl/extra/material.js';

import LandingPage from "./Components/LandingPage";

class App extends Component {
  render() {
    return (
      /* Uses a transparent header that draws on top of the layout's background */
      <div>
        
        <Layout>
          <Drawer title="My Portfolio" className="drawer">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/resume">Resume</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
          </Content>
        </Layout>
        <Switch>
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/" component={LandingPage} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
