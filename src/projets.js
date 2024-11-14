import React from "react";
import ScrollToTopButton from "./components/ScrollToTopButton";
import airbnb from "./assets/images/projets/airbnb.png";
import pp from "./assets/images/projets/partenaires-particuliers.png";
import memoryAnime from "./assets/images/projets/memory-anime.png";
import qfap from "./assets/images/projets/qfap.png";
import portfolio from "./assets/images/projets/portfolio.png";

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
    <div ref={projetsRef} className="bg-gray-900 text-white">
      <h1 className="text-3xl text-center p-8 mb-12">Mes projets</h1>

      <div className="flex flex-wrap justify-center">
        {/* PORTFOLIO */}
        <div className="relative w-[25%] h-auto mr-8 mb-8 transform transition-transform duration-300 hover:scale-105">
          <img
            src={portfolio}
            alt="portfolio"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold mb-2">Portfolio</h2>
              <p className="text-sm">
                J'ai décidé de développer mon portfolio en utilisant React et
                Tailwind pour m'entrainer avec ces langages.
              </p>
            </div>
          </div>
        </div>

        {/* APIqfap */}
        <div className="relative w-[25%] h-auto mr-8 mb-8 transform transition-transform duration-300 hover:scale-105">
          <img src={qfap} alt="api qfap" className="w-full h-auto rounded-lg" />
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold mb-2">Projet API</h2>
              <p className="text-sm">
                Groupe de 4 étudiants pendant ma 3e année de Bachelor, notre
                mission était de construire une API en une semaine basée sur une
                extraction 2023/2024 des données de l'API opendata.paris.fr. «
                Que Faire à Paris ?
              </p>
            </div>
          </div>
        </div>

        {/* MEMORY ANIME */}
        <div className="relative w-[25%] h-auto mr-8 mb-8 transform transition-transform duration-300 hover:scale-105">
          <img
            src={memoryAnime}
            alt="memory anime"
            className="w-full h-auto rounded-lg"
          />

          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold mb-2">Matchs the pairs</h2>
              <p className="text-sm">
                Ce projet à été réalisé durant ma 3e année de Bachelor. C'est un
                système qui consiste à retrouver les paires de cartes et qui se
                réinitialise si l'on se trompe. Pour ce projet j'ai utilisé
                React.
              </p>
            </div>
          </div>
        </div>

        {/* PARTENAIRES PARTICULIERS */}
        <div className="relative w-[25%] h-auto mr-8 mb-8 transform transition-transform duration-300 hover:scale-105">
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
                >
                  Partenaires Particuliers
                </a>
              </h2>
              <p className="text-sm">
                Refonte du site web de l'entreprise durant mon stage de BTS.
                Utilisation des MediaQueries, pour ce projet j'ai utiliser les
                langages HTML / CSS et JavaScript.
              </p>
            </div>
          </div>
        </div>

        {/* PROJET AIRBNB */}
        <div className="relative w-[25%] h-auto mr-8 mb-8 transform transition-transform duration-300 hover:scale-105">
          <img src={airbnb} alt="airbnb" className="w-full h-auto rounded-lg" />

          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold mb-2">Projet Airbnb</h2>
              <p className="text-sm">
                Ce projet à été réalisé durant ma première année de BTS. Il
                consiste en la gestion de clients qui réserve un logement dans
                une région qu'ils choisissent. Pour ce projet j'ai utilisé HTML
                / CSS pour la partie front-end et PHP et MySql pour la partie
                back-end / base de données.
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
