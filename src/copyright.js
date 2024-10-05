import React from "react";

function Copyright() {
  return (
    <footer className="w-full text-center font-bold">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Matteo Piselli. Tous droits réservés.
      </p>
    </footer>
  );
}

export default Copyright;
