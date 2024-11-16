import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  // Variants pour le menu latéral
  const sidebarVariants = {
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    closed: {
      x: "-100%",
      transition: { type: "spring", stiffness: 300, damping: 30 }
    }
  };

  // Variants pour les éléments de menu (avec décalage)
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Toggle du menu
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="relative h-screen bg-gradient-to-b from-blue-500 to-blue-700">
      {/* Fond semi-transparent pour fermer le menu en cliquant à l'extérieur */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={handleToggle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* Menu latéral avec animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            className="fixed top-0 left-0 h-full w-2/3 bg-white shadow-lg z-20"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
          >
            {/* Bouton de fermeture à l'intérieur du menu */}
            <motion.button
              onClick={handleToggle}
              className="absolute top-5 left-5 text-2xl"
            >
              &times;
            </motion.button>

            {/* Navigation du menu */}
            <nav className="flex flex-col items-start p-5 space-y-4 mt-12">
              {["Accueil", "À propos", "Compétences", "Projets", "Contact"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="text-lg font-semibold"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ delay: index * 0.1 }} // Décalage entre les éléments
                    onClick={handleToggle} // Ferme le menu en cliquant sur un lien
                  >
                    {item}
                  </motion.a>
                )
              )}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Bouton pour ouvrir le menu */}
      {!isOpen && (
        <motion.button
          onClick={handleToggle}
          className="absolute top-5 left-5 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg z-30"
        >
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </div>
        </motion.button>
      )}
    </div>
  );
}

export default App;
