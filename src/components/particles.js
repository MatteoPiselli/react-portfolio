import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles"; // Remplacez loadFull par loadSlim
import image from "../assets/images/header.png"

const ParticlesBackground = () => {
  

const particlesInit = async (main) => {
  await loadFull(main); // Utilisez loadSlim pour des fonctionnalités basiques
};


  return (
    <div className="relative w-full h-screen bg-gray-800 overflow-hidden">
      {/* Image de fond */}
      <img
        src={image} // Remplacez par le chemin de votre image
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Particules */}
      <Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800,
        },
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
        random: true,
      },
      move: {
        enable: true,
        speed: 1,
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
      modes: {
        grab: {
          distance: 140,
          lineLinked: {
            opacity: 0.5,
          },
        },
      },
    },
    detectRetina: true,
  }}
  className="absolute top-0 left-0 w-full h-full pointer-events-none"
/>

      
      </div>
  );
};

export default ParticlesBackground;
