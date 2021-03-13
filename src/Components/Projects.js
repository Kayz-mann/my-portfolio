import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardText,
} from "react-mdl";
import "./Projects.css";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle className="nice-card3">Netflix Clone</CardTitle>
          <CardText></CardText>
          <CardActions border>
            <a
              href="https://netflix-clone-react-bab60.web.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <Button colored>Live Demo</Button>
            </a>
          </CardActions>
        </Card>

        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle className="nice-card4">Amazon Clone</CardTitle>
          <CardText></CardText>
          <CardActions border>
            <a
              href="https://clone-react-ce3d8.web.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <Button colored>Live Demo</Button>
            </a>
          </CardActions>
        </Card>

        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle className="nice-card5 center / cover">
            Chat App
          </CardTitle>
          <CardText></CardText>
          <CardActions border>
            <a
              href="https://facebook-messenger-clone-f93a1.web.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <Button colored>Live Demo</Button>
            </a>
          </CardActions>
        </Card>
      </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        
        // https://kayz-mann.github.io/Login-form/
<div className="projects-grid">
<Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
  <CardTitle className="nice-card">Google Clone</CardTitle>
  <CardText></CardText>
  <CardActions border>
    <a
      href="https://clone-97385.web.app/"
      rel="noopener noreferrer"
      target="_blank"
      
    >
      {" "}
      <Button colored>Live Demo</Button>
    </a>
  </CardActions>
</Card>

<Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
  <CardTitle className="nice-card1">
    Spotify Clone
  </CardTitle>
  <CardText></CardText>
  <CardActions border>
    <a
      href="https://spotifyng-clone.herokuapp.com/"
      rel="noopener noreferrer"
      target="_blank"
    >
      {" "}
      <Button colored>Live Demo</Button>
    </a>
  </CardActions>
</Card>

<Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
  <CardTitle className="nice-card2">Whatsappweb Clone</CardTitle>
  <CardText></CardText>
  <CardActions border>
    <a
      href="https://whatsapp-web-2c2ab.web.app/"
      rel="noopener noreferrer"
      target="_blank"
    >
      {" "}
      <Button colored>Live Demo</Button>
    </a>
  </CardActions>
</Card>
</div>
      );
    }
  }

  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <div className="background2"></div>
        <div className="category-tabs">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={(tabId) => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>Slide1</Tab>
            <Tab>Slide2</Tab>
          </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </div>
        <div className="background"></div>
        {/* files */}
      </div>
    );
  }
}

export default Projects;
