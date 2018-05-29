import React from "react";
import DisplayBox from "../DiplayBox/DisplayBox";
import img_1 from "../../img/kode-ill.jpg";
import img_2 from "../../img/kode-ill2.jpg";
import img_3 from "../../img/kode-ill3.jpg";

const About = () => {
  return (
    <div className="container" id="om">
      <div className="row pb-0 pr-3 pl-3">
        <DisplayBox title="Webutvikler og kodejournalist" img={img_1}>
          <p>
            Jeg jobber for tiden med prosjekter for å vise fram mine evner innen
            webutvikling.
          </p>
          <p>
            Jeg kan utføre oppgaver som full stack webutvikler, som betyr at jeg
            behersker både frontend (brukergrensesnitt) og backend (data og
            kommunikasjon med server).
          </p>
        </DisplayBox>
        <DisplayBox title="Fornuftige verktøy" img={img_2}>
          <p>
            Avansert teknologi kan både styrke og stå i veien for god
            kommunikasjon og historiefortelling.
          </p>
          <p>
            <strong>Alt er mulig!</strong> Likevel, noen ganger kan mer
            avanserte verktøy enn nødvendig være fristende. Det kan ha
            konsekvenser både for budsjettet og din dyrebare tid. Trenger du å
            skjære et brød, begynner jeg med å tilby en brødkniv og ikke en
            båndsag.
          </p>
        </DisplayBox>
        <DisplayBox title="Om meg" img={img_3}>
          <p>
            Jeg heter <strong>Lars Lillo Ulvestad</strong> og har bakgrunn som
            kommunikasjonsrådgiver i <a href="https://norad.no/">Norad</a> og
            teknologijournalist i{" "}
            <a href="https://www.tu.no/">Teknisk Ukeblad</a>.
          </p>
          <p>
            Jeg har i store deler av mitt arbeidsliv jobbet som bruker av
            digitale løsninger. Nå utvikler jeg dem for andre.
          </p>
        </DisplayBox>
      </div>
      <hr />
    </div>
  );
};

export default About;
