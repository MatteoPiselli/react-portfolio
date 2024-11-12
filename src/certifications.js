import React from "react";
import anssi from "./assets/images/certifications/Anssi.webp";
import cisco from "./assets/images/certifications/cisco.webp";
import openclassroom from "./assets/images/certifications/openclassroom.webp";
import pix from "./assets/images/certifications/pix.webp";
import certifCisco from "./assets/images/certifications/cisco.pdf";
import certifOpenclassroom from "./assets/images/certifications/openclassroom.pdf";
import certifPix from "./assets/images/certifications/pix.pdf";

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
    <div ref={certificationsRef} className="bg-gray-900 text-white">
      <br />
      <br />
      <h1 className="text-3xl text-center">Certifications</h1>

      <div className="flex flex-wrap justify-center">

        <div className="relative w-[15%] h-auto">
          <img src={anssi} alt="anssi" className="w-full h-auto rounded-lg" />
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold mb-2">ANSSI</h2>
              <p className="text-sm">
                Au cours de la formation du BTS SIO, on a suivi le MOOC de
                l'ANSSI, SecNumAcademie qui a pour but de sensibiliser le plus
                grand nombre d’individus aux enjeux de la cybersécurité.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-[15%] h-auto">
          <img src={cisco} alt="cisco" className="w-full h-auto rounded-lg" />
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold mb-2">
                <a href={certifCisco}>
                Cisco
                </a>
              </h2>
              <p className="text-sm">
              Certification Cisco Networking Academy "Introduction to Cybersecurity" effectuer en
              cours de formation du BTS SIO.
              </p>
            </div>
          </div>
        </div>

       

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
          Certifications Openclassrooms effectuées en cours de formation du BTS
          SIO. Je me suis formé sur les différents métiers de développeur; sur
          la cybersécurité.
        </p>

        <img src={pix} alt="pix" width="15%" height="auto" />
        <p>
          <a href={certifPix}>PIX</a>
        </p>
        <p>Certification PIX effectuer en cours de formation du BTS SIO</p>
      </div>
    </div>
  );
};

export default Certifications;
