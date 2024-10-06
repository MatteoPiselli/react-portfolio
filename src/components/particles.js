// ParticlesBackground.js
import React from "react";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <Particles
  id="tsparticles"
  options={{
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse", // Mode d'interaction
        },
        onClick: {
          enable: true,
          mode: "push", // Ajouter des particules au clic
        },
      },
      modes: {
        repulse: {
          distance: 200, // Distance de répulsion au survol
        },
        push: {
          quantity: 4, // Nombre de particules ajoutées au clic
        },
      },
    },
    particles: {
      number: {
        value: 50,
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: 3,
      },
      move: {
        enable: true,
        speed: 2,
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
      },
    },
    detectRetina: true,
  }}
/>

  );
};

export default ParticlesBackground;
