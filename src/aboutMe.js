import React from "react";
import bts_sio from "./assets/images/bts_sio.webp";
import user from "./assets/images/user.webp";
import contact from "./assets/images/contact.png";

function AboutMe() {
  return (
    <div>
      <p>À propos</p>
      <p>
        Actuellement en deuxième année de BTS SIO, je détiens un baccalauréat
        professionnel en Systèmes Numérique option Réseaux Informatiques et
        Systèmes Communicants avec mention BIEN. Je détiens également un Permis
        B.
      </p>
      <p>Centres d'intérêts</p>
      <img src={user} alt="user" width="25%" height="auto" />
      <p>
        Développement web
        <br />
        Mangas
        <br />
        Jeux vidéos
        <br />
        Badminton / Pétanque
        <br />
      </p>
      <p>BTS SIO</p>
      <p>
        Le Brevet de Technicien Supérieur Services informatique aux
        Organisations (SIO) s’adresse à ceux qui souhaitent se former en deux
        ans aux métiers d’administrateur réseau (SISR) ou de développeur (SLAM)
        pour intégrer directement le marché du travail ou continuer des études
        dans le domaine de l’informatique.
      </p>
      <img src={bts_sio} alt="BTS_SIO" width="50%" height="auto" />
      <p>Contact</p>
      <p>
        pro.matteo.piselli@gmail.com
        <br />
        06 48 35 73 19
        <br />
      </p>
      <img src={contact} alt="contact" width="25%" height="auto" />
    </div>
  );
}

export default AboutMe;
