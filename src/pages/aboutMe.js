import React from "react";
import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollToTopButton";
import bts_sio from "../assets/images/bts_sio.webp";
import aboutMe from "../assets/images/icons/a-propos.png";
import doigt from "../assets/images/icons/doigt-leve.png";
import ImageLoader from "../components/ImageLoader";

const AboutMe = () => {
  const aboutMeRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo && aboutMeRef.current) {
      setTimeout(() => {
        aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location]);

  return (
    <ImageLoader>
      <div ref={aboutMeRef} className="relative bg-gray-900">
        <div className="md:ml-[25%] md:mr-[25%] text-white text-center p-8">
          <div className="flex space-y-2 items-center justify-center mb-4">
            <h1 className="text-3xl mr-2">À propos de moi</h1>
            <img src={aboutMe} alt="à propos" className="w-12 ml-2 invert" />
          </div>
          <span>Actuellement en formation Coding Bootcamp à</span>
          <a
            href="https://www.lacapsule.academy/formation-developpeur-web/full-time"
            alt="la-capsule-formation"
            className="underline font-bold italic hover:opacity-75 hover:scale-110 inline-block pl-2 pr-2"
            target="_blank"
            rel="noreferrer"
          >
            La Capsule
          </a>
          <span>
            en tant que Développeur Fullstack afin d'obtenir un Titre RNCP 6
            (Bac+3/4) - Concepteur Développeur d'Applications Web et Mobile.
            <a
              href="https://www.linkedin.com/in/matteo-piselli-354a27231/"
              className="underline font-bold hover:opacity-75 hover:scale-110 inline-block"
            >
              (voir mon Linkedin 😉)
            </a>
          </span>
          . <br />
          <br />
          Je détiens un
          <a
            href="https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers"
            target="_blank"
            className="underline italic hover:not-italic inline-block"
            rel="noreferrer"
          >
            BTS services informatiques aux organisation option B solutions
            logicielles et applications métiers (SIO SLAM)
          </a>
          <br />
          <br />
          <div className="text-center">
            <img
              src={doigt}
              alt="doigt vers le haut"
              className="w-8 inline-block"
            />
            (Cliquez sur ce lien de l'Onisep pour en savoir plus sur le BTS
            SIO.)
            <img
              src={doigt}
              alt="doigt vers le haut"
              className="w-8 inline-block"
            />
          </div>
          <br />
          <p></p>
        </div>

        <div className="relative m-4 md:mt-8 md:ml-[25%] md:mr-[25%] rounded-3xl overflow-hidden">
          <img src={bts_sio} alt="BTS SIO" className="w-full h-auto" />

          {/* Conteneur pour le texte superposé */}
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
            <p className="text-center text-2xl font-bold">BTS SIO</p>
            <p className="mt-2 mx-[10%] font-bold text-xs md:text-lg text-justify">
              Le Brevet de Technicien Supérieur Services informatique aux
              Organisations (SIO) s’adresse à ceux qui souhaitent se former en
              deux ans aux métiers d’administrateur réseau (SISR) ou de
              développeur (SLAM) pour intégrer directement le marché du travail
              ou continuer des études dans le domaine de l’informatique.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <ScrollToTopButton />
      </div>
    </ImageLoader>
  );
};

export default AboutMe;
