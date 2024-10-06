import React from "react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import bts_sio from "./assets/images/bts_sio.webp";
import user from "./assets/images/user.webp";

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
    <div 
      ref={aboutMeRef}
      className="bg-gray-600"
    >
      {/* Contenu de la section */}
      <p>
        Actuellement étudiant de 21 ans en développement web, je détiens un <a href="https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers" target="_blank">BTS services informatiques aux organisation option B solutions logicielles et applications métiers (SIO SLAM)</a>
        <br /> Vous pouvez cliquez sur ce lien de l'Onisep concernant le BTS SIO. <br />
        Je suis actuellement en auto-formation via des projets et des cours sur internet, visant à me familiariser aux différents langages et frameworks qui pourrait m'aider dans la recherche d'un emploi.
      </p>
      <p>Centres d'intérêts</p>
      <img src={user} alt="user" width="25%" height="auto" />
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
