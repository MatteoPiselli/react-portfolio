import React from "react";
import airbnb from "./assets/images/projets/airbnb.webp";
import pp from "./assets/images/projets/partenaires-particuliers.png"

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Projets = () => {
  const projetsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Vérifie si l'état contient une ancre vers laquelle scroller
    if (location.state?.scrollTo && projetsRef.current) {
      projetsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div ref={projetsRef} className="bg-gray-900 text-white">
      <br />
      <br />
      <h1 className="text-3xl text-center mb-12">Mes projets</h1>

      {/*Portfolio; APIqfap; Memory Anime; Partenaires Particuliers; Projet Airbnb; */}

      <div className="flex flex-wrap p-5">

        {/*PORTFOLIO */}

        {/*APIqfap */}

        {/*MEMORY ANIME*/}
        

        {/*PARTENAIRES PARTICULIERS */}
        <img src={pp} alt="partenaires-particuliers" className="w-[25%] h-auto rounded-lg mr-8" />

        {/*PROJET AIRBNB */}
        <img src={airbnb} alt="airbnb" className="w-[25%] h-auto rounded-lg" />
        {/*<p>Projet Airbnb</p>
        <p>
          Ce projet à été réalisé en solo durant ma première année de BTS. Il
          consiste en la gestion de clients qui réserve un logement dans une
          région qu'ils choisissent. Pour ce projet j'ai utilisé HTML / CSS pour
          la partie front-end et PHP et MySql pour la partie back-end / base de
          données.
        </p>*/}
      </div>
    </div>
  );
};

export default Projets;
