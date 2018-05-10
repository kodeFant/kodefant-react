import React, { Component } from "react";
import Technologies from "./Technologies";

class Projects extends Component {
  render() {
    return (
      <div className="container prosjektRad">
        <div className="row p-3 pt-0">
          <div className="col-12">
            <h2 className="pt-3 pb-2 display-4" id="prosjekter">
              Prosjekter
            </h2>
            <p>
              <i>
                Prosjekter kommer her etter hvert som jeg begynner å bygge dem.
              </i>
            </p>
            <p>
              <i>
                Klikk på de fargede knappene under for å velge eller filtrere
                vekk kriteriene du er ute etter.
              </i>
            </p>
            <Technologies />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
