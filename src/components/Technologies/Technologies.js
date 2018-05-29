import React from "react";

const Technologies = () => {
  return (
    <div>
      <p id="teknologier" className="">
        <a href="" className="btn switch btn-JavaScript">
          <i className="fab fa-js-square fa-lg" />
          <span className="tek">JavaScript</span>
        </a>{" "}
        <a href="" className="btn switch btn-React">
          <i className="fab fa-react fa-lg" />
          <span className="tek">React</span>
        </a>{" "}
        <a href="" className="btn switch btn-PHP">
          <i className="fab fa-php fa-lg" />
          <span className="tek">PHP</span>
        </a>{" "}
        <a href="" className="btn switch btn-CSS">
          <i className="fab fa-css3-alt fa-lg" />
          <span className="tek">CSS</span>
        </a>{" "}
        <a href="" className="btn switch btn-Historie">
          <i className="far fa-moon" />
          <span className="tek">Historie</span>
        </a>{" "}
        <br />
        <a href="" className="btn btn-light switch showall">
          <i className="fas fa-eye" />
          <span className="tek">Vis alle</span>
        </a>{" "}
        <a href="" className="btn btn-light switch remall">
          <i className="fas fa-eye-slash" />
          <span className="tek">Skjul alle</span>
        </a>{" "}
      </p>
    </div>
  );
};

export default Technologies;
