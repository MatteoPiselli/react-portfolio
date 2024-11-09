import React, { useState, useEffect } from "react";
import header from "../assets/images/header.png";
import DropdownMenu from "./DropdownMenu";
import Particles from "react-tsparticles";
import ParticlesBackground from "react-tsparticles";

const ImageWithText = () => {
  const [text, setText] = useState(""); // État pour le texte affiché progressivement
  const [currentIndex, setCurrentIndex] = useState(0); // État pour suivre l'index actuel des lettres
  const [isDeleting, setIsDeleting] = useState(false); // État pour savoir si on est en train de supprimer les lettres
  const fullText = "N'hésitez pas à explorer mon portfolio !"; // Texte complet à afficher
  const typingSpeed = 90; // Vitesse d'apparition des lettres (en millisecondes)
  const pauseTime = 1000; // Temps de pause avant de redémarrer la boucle (en millisecondes)

  useEffect(() => {
    let timeoutId;

    if (!isDeleting && currentIndex < fullText.length) {
      // Cas où on ajoute des lettres
      timeoutId = setTimeout(() => {
        setText((prev) => prev + fullText[currentIndex]); // Ajoute la lettre suivante
        setCurrentIndex(currentIndex + 1); // Incrémente l'index
      }, typingSpeed);
    } else if (!isDeleting && currentIndex === fullText.length) {
      // Quand tout le texte est affiché, mettre une pause avant de commencer à supprimer
      timeoutId = setTimeout(() => setIsDeleting(true), pauseTime); // Active la suppression après une pause
    } else if (isDeleting && currentIndex > 0) {
      // Cas où on supprime des lettres
      timeoutId = setTimeout(() => {
        setText((prev) => prev.slice(0, -1)); // Supprime la dernière lettre
        setCurrentIndex(currentIndex - 1); // Décrémente l'index
      }, typingSpeed);
    } else if (isDeleting && currentIndex === 0) {
      // Quand tout le texte est supprimé, mettre une pause avant de recommencer à ajouter les lettres
      timeoutId = setTimeout(() => setIsDeleting(false), pauseTime); // Désactive la suppression pour recommencer
    }

    // Nettoyage du timeout à chaque itération pour éviter les fuites
    return () => clearTimeout(timeoutId);
  }, [currentIndex, isDeleting, fullText, typingSpeed, pauseTime]);

  return (
    <div>
      {/* Image d'en-tête */}
      <div className="relative w-full h-screen">
        <img src={header} alt="Header" className="w-full h-full" />

        <div className="absolute top-0 left-0 w-full h-full">
          <ParticlesBackground />
        </div>

        {/* Bouton en haut à droite */}
        <DropdownMenu />

        {/* Conteneur du texte sur de l'image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Texte principal */}
          <h1 className="text-white text-5xl font-bold">Matteo PISELLI</h1>

          {/* Espacement entre les deux éléments, si nécessaire */}
          <div className="h-10" />

          {/* Texte qui s'affiche lettre par lettre */}
          <h3 className="text-white text-3xl font-bold">
            {text} {/* Affichage progressif et régressif du texte */}
          </h3>

          <a
            href="/cv.pdf"
            download
            className="bg-gray-600 hover:bg-sky-400 text-white font-bold py-2 px-4 rounded absolute bottom-[5%] right-4"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageWithText;
