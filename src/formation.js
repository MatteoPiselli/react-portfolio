import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Formation = () => {
  const formationRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Vérifie si l'état contient une ancre vers laquelle scroller
    if (location.state?.scrollTo && formationRef.current) {
      formationRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div ref={formationRef} className="text-white bg-gray-900">
      <br />
      <br />
      <h1 className="text-center text-3xl mb-12">Formations & Diplômes</h1>

      <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 px-12 mb-4">
        
          <div className="text-sm mt-8">2023-2024</div>
          <h2 className="font-semibold text-lg text-slate-600 mt-2">
            Bachelor Développeur Web (Non Abouti)
          </h2>
          <h3 className="font-medium opacity-75">
            ESD (Ecole Supérieure du Digital - Paris 75007)
          </h3>
          <p className="mt-2 mb-12">
            Formation en alternance que je n'ai pas pu finir sans contrat
            d'apprentissage.
          </p>
      
        </div>

        <div className="w-full md:w-1/2 px-12 mb-4">
   
          <div className="text-sm mt-8">2021 - 2023</div>
          <h2 className="font-semibold text-lg text-slate-600 mt-2">BTS SIO</h2>
          <h3 className="font-medium opacity-75">
            Lycée René Descartes (Champs sur Marne - 77420)
          </h3>
          <p className="mt-2 mb-12">
            BTS Services Informatiques aux Organisation option (SLAM) Solutions
            Logicielles et Applications Métiers
          </p>
        
        </div>

        <div className="w-full md:w-1/2 px-12 mb-4">
     
          <div className="text-sm mt-8">2018 - 2021</div>
          <h2 className="font-semibold text-lg text-slate-600 mt-2">
            Bac Pro SN, mention Bien
          </h2>
          <h3 className="font-medium opacity-75">
            Lycée Gourdou Leseurre (Saint-Maur-des-Fossés - 94100)
          </h3>
          <p className="mt-2 mb-12">
            Baccalauréat professionnel Systèmes Numériques option (RISC) Réseaux
            Informatiques Systèmes Communicants
          </p>
        
        </div>

        <div className="w-full md:w-1/2 px-12 mb-4">
        
          <div className="text-sm mt-8">2017 - 2018</div>
          <h2 className="font-semibold text-lg text-slate-600 mt-2">Brevet</h2>
          <h3 className="font-medium opacity-75 mb-12">
            Collège Georges Brassens (Villeneuve-le-Roi - 94290)
          </h3>
        
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Formation;
