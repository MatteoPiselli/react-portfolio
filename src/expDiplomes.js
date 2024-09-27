import React from 'react';
import engie from './assets/images/stages/engie.jpeg';
import pp from './assets/images/stages/pp.png';
import bsp from './assets/images/stages/pc.jpeg';
import telephone from './assets/images/stages/telephone.jpeg';
import inter from './assets/images/travail/intermarcheHyper.png';
import verd from './assets/images/travail/verd.jpeg';
import relaisColis from './assets/images/travail/relaisColis.jpeg';

function ExperiencesDiplomes() {
  return(
    <div>
      <h1>Expériences professionnelles & Formations / Diplômes</h1>
        <p>
          <img 
            src={inter}
            alt="Intermarché Hyper"
            width="10%"
            height="auto"
          />
            Intermarché HYPER (Loriol-sur-Drôme - 26270) | Septembre 2024
        </p>
        <p>
          CDD préparateur de commandes drive :
        </p>
        <p>
          <li>Préparation des commandes clients. Prélèvement des articles commandés selon les consignes du PDA.</li>
          <li>Stockage des commandes dans les frigos.</li>
        </p>

        <p>
          <img
            src={verd}
            alt="les vergers"
            width="10%"
            height="auto"
          />
            Les Vergers d’Ici (Livron-sur-Drôme - 26250) | Juin-Août 2024
        </p>
        <p>
          CDD ouvrier agricole :
        </p>
        <p>
          <li>Travail à l’expédition des fruits (pêches, nectarines, abricots).</li>
          <li>Rangement des fruits dans les frigos.</li>
          <li>Utilisation du transpalette électrique, du gerbeur.</li>
        </p>

        <p>
          <img 
            src={relaisColis}
            alt="relais colis"
            width="10%"
            height="auto"
          />
            Relais Colis (Combs-la-Ville - 77380) | Février 2024
        </p>
        <p>
          Intérim manutention :
        </p>
        <p>
          <li>Manutention de charges lourdes (meubles, électroménager, cartons, etc.).</li>
          <li>Utilisation du transpalette manuel, filmage de manurack.</li>
          <li>Tri des colis en fonction des différentes agences.</li>
        </p>

        <p>
          <img
            src={pp}
            alt="partenaires particuliers"
            width="10%"
            height="auto"
          />
            Partenaires Particuliers (Reims - 51100) | Février - Mars 2023
        </p>
        <p>
          Stage de 5 semaines :
        </p>
        <p>
          <li>Refonte / redesign du site web de l'entreprise.</li>
          <li>Utilisation des langages HTML / CSS / Javascript.</li>
          <li>Utilisation des MediaQueries pour le responsive design du site.</li>
        </p>

        <p>
          <img
            src={bsp}
            alt="pc"
            width="10%"
            height="auto"
          />
            Business Services Partenaires - BSP (Valenton - 94460) | Juin - Juillet 2022
        </p>
        <p>
          Stage de 5 semaines :
        </p>
        <p>
          <li>Auto formation sur Javascript. MOOC d’Openclassroom pour cette formation.</li>
          <li>Appris la manipulation du DOM.</li>
        </p>

        <p>
          <img
            src={telephone}
            alt="telephone"
            width="10%"
            height="auto"
          />
            Cyber Carnot (Alfortville - 94140) | Janvier Février 2021
        </p>
        <p>
          Stage de 4 semaines :
        </p>
        <p>
          <li>Réparation de divers composants de smartphone, ainsi qu’ordinateur portable</li>
          <li>Formatage d’ordinateurs, soudure…</li>
        </p>

        <p>
          <img
            src={engie}
            alt="engie"
            width="10%"
            height="auto"
          />
            Engie Ineo (Asnières-sur-Seine - 92600) | Novembre - Décembre 2020
        </p>
        <p>
          Stage de 4 semaines :
        </p>
        <p>
          <li>Travail sur la sûreté, sécurité incendie, contrôle d’accès avec badge.</li>
          <li>Réalisation de plusieurs maintenances sur ces équipements.</li>
        </p>

        <p>
          <img
            src={telephone}
            alt="telephone"
            width="10%"
            height="auto"
          />
            L’Atelier du Phone (Villecresnes - 94440) | Novembre - Décembre 2019
        </p>
        <p>
          Stage de 4 semaines :
        </p>
        <p>
          <li>Réparation de téléphones, tablettes...</li>
          <li>Conseils aux clients.</li>
        </p>
        
        <p>
        <img
            src={bsp}
            alt="pc"
            width="10%"
            height="auto"
          />
            Business Services Partenaires - BSP (Valenton - 94460) Février 2018
        </p>
        <p>
          Stage d'une semaine en classe de 3e :
        </p>
        <p>
          <li>Aide au dépannage des utilisateurs au sein de l’entreprise ainsi qu'aux utilisateurs à distance.</li>
          <li>Entretien du site web de l’entreprise.</li>
        </p>

        <h1>Formations / Diplômes</h1>
          <p>
            2023 - 2024
          </p>
          <p>
            Bachelor Développeur Web (Non Abouti)
          </p>
          <p>
            ESD (Ecole Supérieure du Digital - Paris 75007) | 2023 - 2024<br />
            Formation en alternance que je n'ai pas pu finir sans contrat d'apprentissage.
          </p>
          <p>
            2021 - 2023
          </p>
          <p>
            BTS SIO
          </p>
          <p>
            BTS Services Informatiques aux Organisation option (SLAM) Solutions Logicielles et Applications Métiers<br />
            Lycée René Descartes (Champs sur Marne - 77420)
          </p>

          <p>
            2018 - 2021
          </p>
          <p>
            Bac Pro SN, mention Bien
          </p>
          <p>
            Baccalauréat professionnel Systèmes Numériques option (RISC) Réseaux Informatiques Systèmes Communicants<br />
            Lycée Gourdou Leseurre (Saint-Maur-des-Fossés - 94100)
          </p>

          <p>
            2017 - 2018 
          </p>
          <p>
            DNB - Collège Georges Brassens (Villeneuve-le-Roi - 94290)
          </p>
    </div>
  );
    
}

export default ExperiencesDiplomes;
