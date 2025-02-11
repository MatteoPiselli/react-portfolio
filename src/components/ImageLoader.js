import React, { useState, useEffect } from "react";

const ImageLoader = ({ children }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const images = document.querySelectorAll("img");
    let loadedImages = 0;

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
  }, []);

  return <div className={!imagesLoaded ? "no-scroll" : ""}>{children}</div>;
};

export default ImageLoader;
