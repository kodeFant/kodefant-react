import React from "react";
import Project from "../Project/Project";

var Projects = [
  {
    title: "luftehund.no",
    image: "/img/hund-bg-1.jpg",
    imgText: "Bilde av hund",
    desc:
      "Enkel nettside for hundelufte-tjenester i Grenland. Responsivt design og fungerende kontaktskjema.",
    tech: ["CSS"],
    link: "http://www.luftehund.no",
    //Ikke endre denne
    tekNo: ""
  },
  {
    title: "Kle deg etter været",
    image: "/img/weather.jpeg",
    imgText: "Bilde av prosjektet om klestips ved værmelding",
    desc: "Gir råd om hvordan du burde kle deg ut fra værmeldingene for dagen.",
    tech: ["JavaScript", "CSS"],
    link: "",
    //Ikke endre denne
    tekNo: ""
  },
  {
    title: "Arrangement-modul",
    image: "/img/conference.jpeg",
    imgText: "Bilde av eksempel-prosjekt",
    desc:
      "Arrangementer for en utadrettet virksomhet. Med kart, påmeldingsmodu og visning av antall påmeldte.",
    tech: ["CSS", "JavaScript", "Historie"],
    link: "",
    //Ikke endre denne
    tekNo: ""
  },
  {
    title: "Kle deg etter været",
    image: "/img/weather.jpeg",
    imgText: "Bilde av prosjektet om klestips ved værmelding",
    desc: "Gir råd om hvordan du burde kle deg ut fra værmeldingene for dagen.",
    tech: ["JavaScript", "CSS"],
    link: "",
    //Ikke endre denne
    tekNo: ""
  },
  {
    title: "Bussavganger",
    image: "/img/bus.jpeg",
    imgText: "Bilde av buss-app",
    desc: "Skjerm som viser sanntids avganger på valgte bussstopp.",
    tech: ["CSS", "React"],
    link: "",
    //Ikke endre denne
    tekNo: ""
  },
  {
    title: "Arrangement-modul",
    image: "/img/conference.jpeg",
    imgText: "Bilde av eksempel-prosjekt",
    desc:
      "Arrangementer for en utadrettet virksomhet. Med kart, påmeldingsmodu og visning av antall påmeldte.",
    tech: ["CSS", "JavaScript", "Historie"],
    link: "",
    //Ikke endre denne
    tekNo: ""
  }
];

const list = Projects.map(obj => {
  return (
    <Project
      title={obj.title}
      image={obj.image}
      imgText={obj.imgText}
      description={obj.desc}
      tech={obj.tech}
      link={obj.link}
    />
  );
});

const projectsBox = props => {
  return (
    <div className="container prosjektRad">
      <div className="kortstokk row">{list}</div>
    </div>
  );
};

export default projectsBox;
