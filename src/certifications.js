import React from "react";
import anssi from "./assets/images/certifications/Anssi.webp";
import cisco from "./assets/images/certifications/cisco.webp";
import openclassroom from "./assets/images/certifications/openclassroom.webp";
import pix from "./assets/images/certifications/pix.webp";
import certifCisco from "./documents/MatteoPISELLI-IntroductionCybe-certificate.pdf";
import certifOpenclassroom from "./documents/certification-openclassroom.pdf";
import certifPix from "./documents/pix.pdf";

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Certifications = () => {
  const certificationsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Vérifie si l'état contient une ancre vers laquelle scroller
    if (location.state?.scrollTo && certificationsRef.current) {
      certificationsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);


  return (
    <div ref={certificationsRef}>
      <h1>Certifications</h1>
        <img 
          src={anssi} 
          alt="anssi" 
          width="15%" 
          height="auto" 
        />
        <p>
          ANSSI
        </p>
        <p>
          Au cours de la formation du BTS SIO, on a suivi le MOOC de l'ANSSI,
          SecNumAcademie qui a pour but de sensibiliser le plus grand nombre
          d’individus aux enjeux de la cybersécurité. (pas fini)
        </p>
        
        <img
          src={cisco}
          alt="cisco cybersécurité"
          width="15%"
          height="auto"
        />
        <p>
        <a href={certifCisco}>Cybersécurité Cisco</a>
        </p>        
        <p>
        Certification Cisco sur l'introduction à la cybersécurité effectuer en cours de formation du BTS SIO.
        </p>

        <img
          src={openclassroom}
          alt="openclassroom"
          width="15%"
          height="auto"
        />
        <p>
          <a href={certifOpenclassroom}>Openclassrooms</a>
        </p>
        <p>
          Certifications Openclassrooms effectuées en cours de formation du BTS SIO. Je me suis formé sur les différents métiers de développeur; sur la cybersécurité.
        </p>

        <img
          src={pix}
          alt="pix"
          width="15%"
          height="auto"
        />
        <p>
          <a href={certifPix}>PIX</a> 
        </p>
        <p>
          Certification PIX effectuer en cours de formation du BTS SIO
        </p>
    </div>
  );
}

export default Certifications;
