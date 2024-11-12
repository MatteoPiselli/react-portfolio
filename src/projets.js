import React from 'react';
import airbnb from './assets/images/projets/airbnb.webp'
import personnage from './assets/images/projets/personnage.webp'
import cvven from './assets/images/projets/cvven.webp'

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Projets = () => {
  const projetsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Vérifie si l'état contient une ancre vers laquelle scroller
    if (location.state?.scrollTo && projetsRef.current) {
      projetsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return(
    <div ref={projetsRef}>
      <h1>Présentation de mes projets</h1>

      {/*Portfolio; APIqfap; Memory Anime; Partenaires Particuliers; Projet Airbnb; */}

      <img
        src={airbnb}
        alt="airbnb"
        width="25%"
        height="auto"
      />
      <p>
        Projet Airbnb
      </p>
      <p>
        Janvier 2022 - Mai 2022
      </p>
      <p>
        Ce projet à été réalisé en solo durant ma première année de BTS. 
        Il consiste en la gestion de clients qui réserve un logement dans une région qu'ils choisissent.
        Pour ce projet j'ai utilisé HTML / CSS pour la partie front-end et PHP et MySql 
        pour la partie back-end / base de données.
      </p>
      <img
        src={personnage}
        alt="personnage"
        width="25%"
        height="auto"
      />
      <p>
        Projet Personnage
      </p>
      <p>
        Janvier 2022
      </p>
      <p>
        Ce projet à été réalisé en solo durant ma première année de BTS. 
        Le but étant de développer une histoire avec des personnages, 
        où ils prenaient des dégâts en se servant de fonction, méthodes.Pour ce projet, j'ai utilisé le langage Java.
      </p>
      <img 
        src={cvven}
        alt="cvven"
        width="25%"
        height="auto"
      />
      <p>
        Projet CVVEN (Comité pour les Villages de Vacances de l'Education Nationale)
      </p>
      <p>
        Septembre 2022 - Avril 2023
      </p>
      <p>
        Projet de 4 étudiants en seconde année de BTS consistant en la création d'un site web permettant de 
        louer un logement sur une durée. 
        On a utilisé un système de connexion/déconnexion pour que les clients puissent s'inscrire 
        et se connecter/déconnecter . Aussi pour que seul la personne authentifier en tant qu'administrateur 
        ai accès à certaines informations sur les clients.Pour ce projet nous avons utilisés HTML / CSS 
        pour la partie front-end et  PHP et MySql pour la partie back-end / base de données.
      </p>
    </div>
  );
    
}

export default Projets;
