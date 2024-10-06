import React from "react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import bts_sio from "./assets/images/bts_sio.webp";
import user from "./assets/images/icons/moi.png";
import doigt from "./assets/images/icons/doigt-leve.png"

const AboutMe = () => {
  const aboutMeRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Vérifie si l'état contient une ancre vers laquelle scroller
    if (location.state?.scrollTo && aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div ref={aboutMeRef}>
      {/* Contenu de la section */}
      <div
        className="flex space-x-2 space-y-2 items-center justify-center"
      >
        <h1 className="text-3xl">À propos de moi</h1>
        <img src={user} className="w-12" />
      </div>
      <br />
      <p className="ml-[25%] mr-[25%] text-justify border-4 border-sky-500">
        Actuellement étudiant de 21 ans en développement web, je détiens un
         <a 
          href="https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers" 
          target="_blank"
          className="font-bold underline italic hover:not-italic inline-block"
        >
        BTS services informatiques aux organisation option B solutions logicielles et applications métiers (SIO SLAM)
        </a>
        <br /><br />
        
        <div className="text-center">
          <img src={doigt} className="w-6 inline-block"/>Vous pouvez cliquez sur ce lien de l'Onisep concernant le BTS SIO.<img src={doigt} className="w-6 inline-block"/>
        </div>     

        <br />
        Je suis actuellement en auto-formation via des projets et des cours sur internet, visant à me familiariser aux différents langages et frameworks qui pourrait m'aider dans la recherche d'un emploi.
      </p>
      <br />
      <p>Centres d'intérêts</p>
      <p>
        Développement web
        <br />
        Mangas
        <br />
        Jeux vidéos
        <br />
        Badminton / Pétanque
        <br />
      </p>
      <br />
      <p>BTS SIO</p>
      <p>
        Le Brevet de Technicien Supérieur Services informatique aux
        Organisations (SIO) s’adresse à ceux qui souhaitent se former en deux
        ans aux métiers d’administrateur réseau (SISR) ou de développeur (SLAM)
        pour intégrer directement le marché du travail ou continuer des études
        dans le domaine de l’informatique.
      </p>
      <img src={bts_sio} alt="BTS_SIO" width="50%" height="auto" />
    </div>
  );
};

export default AboutMe;
