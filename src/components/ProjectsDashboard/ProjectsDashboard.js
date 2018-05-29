import React, { Component } from "react";
import Technologies from "../Technologies/Technologies";

class Projects extends Component {
  render() {
    return (
      <div className="container prosjektRad">
        <div className="row p-3 pt-0">
          <div className="col-12">
            <h2 className="pt-3 pb-2 display-4" id="prosjekter">
              Prosjekter
            </h2>
            <Technologies />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
