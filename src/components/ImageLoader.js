import React, { useState, useEffect } from "react";

const ImageLoader = ({ children }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const images = document.querySelectorAll("img");
    let loadedImages = 0;

    // Fonction pour vérifier si toutes les images sont chargées
    const checkImagesLoaded = () => {
      if (loadedImages === images.length) {
        setImagesLoaded(true);
      }
    };

    // Cas où il n'y a pas d'images
    if (images.length === 0) {
      setImagesLoaded(true);
      return;
    }

    images.forEach((image) => {
      // Si l'image est déjà chargée, on incrémente le compteur
      if (image.complete) {
        loadedImages++;
        checkImagesLoaded(); // Vérifie si toutes les images sont chargées
      } else {
        // Sinon, on ajoute un eventListener pour chaque image
        image.addEventListener("load", () => {
          loadedImages++;
          checkImagesLoaded(); // Vérifie si toutes les images sont chargées
        });

        // Gérer les erreurs de chargement d'image
        image.addEventListener("error", () => {
          loadedImages++;
          checkImagesLoaded(); // Vérifie si toutes les images sont chargées
        });
      }
    });

    checkImagesLoaded(); // Vérifie immédiatement si toutes les images sont dans le cache
  }, []);

  return <div className={imagesLoaded ? "" : "no-scroll"}>{children}</div>;
};

export default ImageLoader;
