import React, { useState, useEffect } from "react";

const ImageLoader = ({ children }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const checkImages = () => {
      const images = document.querySelectorAll("img");
      let loadedImages = 0;

      if (images.length === 0) {
        setImagesLoaded(true);
        return;
      }

      images.forEach((image) => {
        if (image.complete) {
          loadedImages++;
        } else {
          image.addEventListener("load", () => {
            loadedImages++;
            if (loadedImages === images.length) {
              setImagesLoaded(true);
            }
          });
        }
      });

      if (loadedImages === images.length) {
        setImagesLoaded(true);
      }
    };

    // Observer les mutations du DOM pour détecter les nouvelles images chargées
    const observer = new MutationObserver(() => {
      setImagesLoaded(false);
      checkImages();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Vérifier les images existantes au premier chargement
    checkImages();

    return () => observer.disconnect();
  }, []);

  return <div className={!imagesLoaded ? "no-scroll" : ""}>{children}</div>;
};

export default ImageLoader;
