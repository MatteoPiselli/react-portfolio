import React from "react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ImageLoader from "../components/ImageLoader";
import anssi from "../assets/images/certifications/Anssi.webp";
import cisco from "../assets/images/certifications/cisco.webp";
import openclassroom from "../assets/images/certifications/openclassroom.webp";
import pix from "../assets/images/certifications/pix.webp";
import certifCisco from "../assets/images/certifications/cisco.pdf";
import certifPix from "../assets/images/certifications/pix.pdf";

const Certifications = () => {
  const certificationsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Vérifie si l'état contient une ancre vers laquelle scroller
    if (location.state?.scrollTo && certificationsRef.current) {
      setTimeout(() => {
        certificationsRef.current.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location]);

  return (
    <ImageLoader>
      <div ref={certificationsRef} className="relative bg-gray-900 text-white">
        <h1 className="text-3xl text-center p-8 mb-12">Certifications</h1>

        <div className="ml-[10%] mr-[10%] flex items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="relative transform transition-transform duration-300 hover:scale-105">
            <img src={anssi} alt="anssi" className="w-full h-auto rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="p-4 text-center">
                <h2 className="text-lg font-bold mb-2">ANSSI</h2>
                <p className="text-sm">
                  SecNumAcademie qui a pour but de sensibiliser aux enjeux de la
                  cybersécurité.
                </p>
              </div>
            </div>
          </div>

          <div className="relative transform transition-transform duration-300 hover:scale-105">
            <img src={cisco} alt="cisco" className="w-full h-auto rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="p-4 text-center">
                <h2 className="text-lg font-bold mb-2">
                  <a href={certifCisco} className="italic underline">
                    Cisco
                  </a>
                </h2>
                <p className="text-sm">"Introduction to Cybersecurity"</p>
              </div>
            </div>
          </div>

          <div className="relative transform transition-transform duration-300 hover:scale-105">
            <img src={pix} alt="pix" className="w-full h-auto rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="p-4 text-center">
                <h2 className="text-lg font-bold mb-2">
                  <a href={certifPix} className="italic underline">
                    PIX
                  </a>
                </h2>
                <p className="text-xs md:text-sm">
                  Certification PIX obligatoire effectuer en cours de formation
                  du BTS SIO.
                </p>
              </div>
            </div>
          </div>

          <div className="relative transform transition-transform duration-300 hover:scale-105">
            <img
              src={openclassroom}
              alt="openclassroom"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="p-4 text-center">
                <h2 className="text-sm font-bold">
                  Créez votre site web avec HTML5 et CSS3
                </h2>
              </div>
            </div>
          </div>

          <div className="relative transform transition-transform duration-300 hover:scale-105">
            <img
              src={openclassroom}
              alt="openclassroom"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="p-4 text-center">
                <h2 className="text-sm font-bold">
                  Concevez votre site web avec PHP et MySQL
                </h2>
              </div>
            </div>
          </div>

          <div className="relative transform transition-transform duration-300 hover:scale-105">
            <img
              src={openclassroom}
              alt="openclassroom"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="p-4 text-center">
                <h2 className="text-sm font-bold">
                  Apprenez à programmer avec JavaScript
                </h2>
              </div>
            </div>
          </div>

          <div className="relative transform transition-transform duration-300 hover:scale-105">
            <img
              src={openclassroom}
              alt="openclassroom"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="p-4 text-center">
                <h2 className="text-sm font-bold">
                  Écrivez du JavaScript pour le web
                </h2>
              </div>
            </div>
          </div>

          <div className="relative transform transition-transform duration-300 hover:scale-105">
            <img
              src={openclassroom}
              alt="openclassroom"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="p-4 text-center">
                <h2 className="text-xs md:text-sm font-bold">
                  Implémentez vos bases de données relationnelles avec SQL
                </h2>
              </div>
            </div>
          </div>

          <div className="relative transform transition-transform duration-300 hover:scale-105">
            <img
              src={openclassroom}
              alt="openclassroom"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="p-4 text-center">
                <h2 className="text-sm font-bold">
                  Gérez du code avec Git et GitHub
                </h2>
              </div>
            </div>
          </div>

          <div className="relative transform transition-transform duration-300 hover:scale-105">
            <img
              src={openclassroom}
              alt="openclassroom"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="p-4 text-center">
                <h2 className="text-sm font-bold">Comprendre le Web</h2>
              </div>
            </div>
          </div>

          <div className="relative transform transition-transform duration-300 hover:scale-105">
            <img
              src={openclassroom}
              alt="openclassroom"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="p-4 text-center">
                <h2 className="text-sm font-bold">
                  Découvrez les différents métiers de développeur
                </h2>
              </div>
            </div>
          </div>

          <div className="relative transform transition-transform duration-300 hover:scale-105">
            <img
              src={openclassroom}
              alt="openclassroom"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="p-4 text-center">
                <h2 className="text-sm font-bold">
                  Découvrez l'univers de la cybersécurité
                </h2>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <ScrollToTopButton />
      </div>
    </ImageLoader>
  );
};

export default Certifications;
