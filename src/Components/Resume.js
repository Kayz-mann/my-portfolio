import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Resume extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <div className="background-cover">
          <Grid>
            <Cell col={12}>
              <div className="resume">
                <p>
                  Institution : Olabisi Onabanjo University,OgunState, Nigeria
                </p>
                <p>Discipline: Physics with Electronics</p>
                <p>Courses: Software Engineering at Torillo Academy Nigeria</p>
                <p>
                  Languages/Technologies: HTML, CSS,Bootstrap, Javascript,
                  jQuery, ReactJS, Github,Heroku,Python, Adobe XD, Wordpress
                </p>
                <p>
                  Work Experience: Web developer @63 WebStudio Jun 2020 - September 2020
                                   System Integrator/ Software developer Patheon Technology September 2020- till date
                  date
                </p>
              </div>
            </Cell>
          </Grid>
        </div>
        <div className="background-1"></div>
        <div className="background2-1"></div>
      </div>
    );
  }
}

export default Resume;
