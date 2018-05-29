import React from "react";

const DisplayBox = props => {
  return (
    <div className="col-md-12 col-lg-4 pl-3 pr-3 bildeBoks sepia">
      <img className="img-fluid" src={props.img} alt="" />
      <h2 className="pt-3 pb-2">{props.title}</h2>
      {props.children}
    </div>
  );
};

export default DisplayBox;
