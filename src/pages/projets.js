import React from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";
import airbnb from "../assets/images/projets/airbnb.png";
import pp from "../assets/images/projets/partenaires-particuliers.png";
import memoryAnime from "../assets/images/projets/memory-anime.png";
import qfap from "../assets/images/projets/qfap.png";
import portfolio from "../assets/images/projets/portfolio.png";
import riotApi from "../assets/images/projets/riot-api.png";

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Projets = () => {
  const projetsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Vérifie si l'état contient une ancre vers laquelle scroller
    if (location.state?.scrollTo && projetsRef.current) {
      setTimeout(() => {
        projetsRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <div ref={projetsRef} className="relative bg-gray-900 text-white">
      <h1 className="text-3xl text-center p-8 mb-4">Mes projets</h1>

      <div className="flex flex-col items-center md:flex-wrap md:flex-row md:justify-center">
        {/* RIOT API */}
        <div className="relative w-[90%] md:w-[25%] h-auto m-8 transform transition-transform duration-300 hover:scale-105">
          <img
            src={riotApi}
            alt="riot api"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold mb-2">Riot API</h2>
              <p className="text-sm">
                J'ai développé un projet de recherche de joueurs basé sur l'API
                League of Legends de Riot Games, en prenant{" "}
                <a
                  href="https://www.op.gg/"
                  className="underline font-bold italic"
                  target="_blank"
                  rel="noreferrer"
                >
                  OP.GG
                </a>{" "}
                comme référence pour l'affichage des données.
                <br />
                <u>Stack Technique :</u>{" "}
                <strong>React.js, Tailwind CSS, Node.js</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* PORTFOLIO */}
        <div className="relative w-[90%] md:w-[25%] h-auto m-8 transform transition-transform duration-300 hover:scale-105">
          <img
            src={portfolio}
            alt="portfolio"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold mb-2">Portfolio</h2>
              <p className="text-sm">
                J'ai développé mon portfolio responsive en utilisant{" "}
                <strong>Tailwind CSS</strong>, car il est simple d'utilisation.
                <br />
                <u>Stack technique :</u> <strong>React.js</strong>,{" "}
                <strong>Tailwind CSS</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* APIqfap */}
        <div className="relative w-[90%] md:w-[25%] h-auto m-8 transform transition-transform duration-300 hover:scale-105">
          <img src={qfap} alt="api qfap" className="w-full h-auto rounded-lg" />
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold mb-2">Projet API QFAP</h2>
              <p className="text-sm">
                En groupe de 4 étudiants durant ma 3ᵉ année de Bachelor, notre
                mission était de construire une API en une semaine, basée sur
                l'extraction 2023/2024 des données de l'API opendata.paris.fr
                <br /> "Que Faire à Paris ?".
                <br />
                <u>Stack Technique :</u>{" "}
                <strong>React.js, Tailwind CSS, Node.js, MySQL</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* MEMORY ANIME */}
        <div className="relative w-[90%] md:w-[25%] h-auto m-8 transform transition-transform duration-300 hover:scale-105">
          <img
            src={memoryAnime}
            alt="memory anime"
            className="w-full h-auto rounded-lg"
          />

          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold mb-2">Matchs the pairs</h2>
              <p className="text-sm">
                Ce projet a été réalisé durant ma 3ᵉ année de Bachelor. Il
                s'agit d'un système permettant de retrouver les paires de
                cartes, qui se réinitialise en cas d'erreur.
                <br />
                <u>Stack Technique :</u> <strong>React.js</strong>
              </p>
            </div>
          </div>
        </div>

        {/* PARTENAIRES PARTICULIERS */}
        <div className="relative w-[90%] md:w-[25%] h-auto m-8 transform transition-transform duration-300 hover:scale-105">
          <img
            src={pp}
            alt="partenaires-particuliers"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold mb-2">
                <a
                  href="https://www.partenaires-particuliers.fr/"
                  target="_blank"
                  className="italic underline"
                  rel="noreferrer"
                >
                  Partenaires Particuliers
                </a>
              </h2>
              <p className="text-sm">
                Refonte du site web de l'entreprise durant mon stage de BTS.
                Utilisation des Media Queries.
                <br />
                <u>Stack Technique :</u> <strong>HTML, CSS, JavaScript</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* PROJET AIRBNB */}
        <div className="relative w-[90%] md:w-[25%] h-auto m-8 transform transition-transform duration-300 hover:scale-105">
          <img src={airbnb} alt="airbnb" className="w-full h-auto rounded-lg" />

          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold mb-2">Projet Airbnb</h2>
              <p className="text-sm">
                Ce projet a été réalisé durant ma 1ᵉ année de BTS. Il consiste
                en la gestion de clients qui réservent un logement dans une
                région de leur choix.
                <br />
                <u>Stack Technique :</u> <strong>HTML, CSS, PHP, MySQL</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <ScrollToTopButton />
    </div>
  );
};

export default Projets;
