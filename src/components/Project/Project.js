import React from "react";

const project = props => {
  return (
    <div className="col-md-6 col-lg-4 pl-3 pr-3 prosjektBoks {pTEK.coded}">
      <a href={props.link} target="_blank">
        <img
          class="sepia img-fluid"
          src={window.location.origin + props.image}
          alt={props.imgText}
        />
        <h2 class="pt-3 pb-2">
          {props.title}
          <span class="tokens">{props.tech}</span>
        </h2>
      </a>
      <p>{props.description}</p>
    </div>
  );
};

/* title = { obj.title }
image = { obj.image }
imgText = { obj.imgText }
description = { obj.desc }
tech = { obj.tech }
link = { obj.link } */

export default project;
