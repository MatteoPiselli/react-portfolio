import React from "react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTopButton from "./components/ScrollToTopButton";

const Experiences = () => {
  const experiencesRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Vérifie si l'état contient une ancre vers laquelle scroller
    if (location.state?.scrollTo && experiencesRef.current) {
      experiencesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div ref={experiencesRef} className="bg-gray-900 text-white">
      <br />
      <br />
      <h1 className="text-center text-3xl mb-12">
        Expériences professionnelles
      </h1>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-12 mb-12">
          <span className="text-sm">Septembre 2024</span>
          <h3 className="font-semibold text-lg text-slate-600 mt-2">
            Intermarché HYPER (Loriol-sur-Drôme - 26270)
          </h3>
          <p className="font-medium opacity-75">
            CDD préparateur de commandes drive :
          </p>
          <ul className="list-disc ml-5">
            <li>Préparation des commandes clients.</li>
            <li>
              Prélèvement des articles commandés selon les consignes du PDA.
            </li>
            <li>Stockage des commandes dans les frigos.</li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 px-12 mb-12">
          <span className="text-sm">Juin-Août 2024</span>
          <h3 className="font-semibold text-lg text-slate-600 mt-2">
            Les Vergers d’Ici (Livron-sur-Drôme - 26250)
          </h3>
          <span className="font-medium opacity-75">CDD ouvrier agricole :</span>
          <ul className="list-disc ml-5">
            <li>
              Travail à l'expédition des fruits (pêches, nectarines, abricots).
            </li>
            <li>Rangement des fruits dans les frigos.</li>
            <li>Utilisation du transpalette électrique, du gerbeur.</li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 px-12 mb-12">
          <span className="text-sm">Février 2024</span>
          <h3 className="font-semibold text-lg text-slate-600 mt-2">
            Relais Colis (Combs-la-Ville - 77380)
          </h3>
          <span className="font-medium opacity-75">Intérim manutention :</span>
          <ul className="list-disc ml-5">
            <li>
              Manutention de charges lourdes (meubles, électroménager, cartons,
              etc.).
            </li>
            <li>Utilisation du transpalette manuel, filmage de manurack.</li>
            <li>Tri des colis en fonction des différentes agences.</li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 px-12 mb-12">
          <span className="text-sm">Février - Mars 2023</span>
          <h3 className="font-semibold text-lg text-slate-600 mt-2">
            Partenaires Particuliers (Reims - 51100)
          </h3>
          <span className="font-medium opacity-75">Stage de 5 semaines :</span>
          <ul className="list-disc ml-5">
            <li>Refonte / redesign du site web de l'entreprise.</li>
            <li>Utilisation des langages HTML / CSS / Javascript.</li>
            <li>
              Utilisation des MediaQueries pour le responsive design du site.
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 px-12 mb-12">
          <span className="text-sm">Juin - Juillet 2022</span>
          <h3 className="font-semibold text-lg text-slate-600 mt-2">
            Business Services Partenaires - BSP (Valenton - 94460)
          </h3>
          <span className="font-medium opacity-75">Stage de 5 semaines :</span>
          <ul className="list-disc ml-5">
            <li>
              Auto formation sur Javascript. MOOC d’Openclassroom pour cette
              formation.
            </li>
            <li>Appris la manipulation du DOM.</li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 px-12 mb-12">
          <span className="text-sm">Janvier - Février 2021</span>
          <h3 className="font-semibold text-lg text-slate-600 mt-2">
            Cyber Carnot (Alfortville - 94140)
          </h3>
          <span className="font-medium opacity-75">Stage de 4 semaines :</span>
          <ul className="list-disc ml-5">
            <li>
              Réparation de divers composants de smartphone, ainsi qu’ordinateur
              portable
            </li>
            <li>Formatage d’ordinateurs, soudure…</li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 px-12 mb-12">
          <span className="text-sm">Novembre - Décembre 2020</span>
          <h3 className="font-semibold text-lg text-slate-600 mt-2">
            Engie Ineo (Asnières-sur-Seine - 92600)
          </h3>
          <span className="font-medium opacity-75">Stage de 4 semaines :</span>
          <ul className="list-disc ml-5">
            <li>
              Travail sur la sûreté, sécurité incendie, contrôle d’accès avec
              badge.
            </li>
            <li>Réalisation de plusieurs maintenances sur ces équipements.</li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 px-12 mb-12">
          <span className="text-sm">Novembre - Décembre 2019</span>
          <h3 className="font-semibold text-lg text-slate-600 mt-2">
            L’Atelier du Phone (Villecresnes - 94440)
          </h3>
          <span className="font-medium opacity-75">Stage de 4 semaines :</span>
          <ul className="list-disc ml-5">
            <li>Réparation de téléphones, tablettes...</li>
            <li>Conseils aux clients.</li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 px-12 mb-12">
          <span className="text-sm">Février 2018</span>
          <h3 className="font-semibold text-lg text-slate-600 mt-2">
            Business Services Partenaires - BSP (Valenton - 94460)
          </h3>
          <span className="font-medium opacity-75">
            Stage d'une semaine en classe de 3e :
          </span>
          <ul className="list-disc ml-5">
            <li>
              Aide au dépannage des utilisateurs au sein de l’entreprise ainsi
              qu'aux utilisateurs à distance.
            </li>
            <li>Entretien du site web de l’entreprise.</li>
          </ul>
        </div>
      </div>
      <br />
      <br />
      <br />
      <ScrollToTopButton />
    </div>
  );
};

export default Experiences;
