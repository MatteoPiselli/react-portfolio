import React from "react";

function Footer() {
  return (
    <footer className="w-full text-center font-bold">
      <p className="text-sm">
        Copyright &copy; {new Date().getFullYear()} Matteo Piselli. Tous droits réservés.
      </p>
    </footer>
  );
}

export default Footer;
