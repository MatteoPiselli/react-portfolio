import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Contact = () => {
  const contactRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    // Vérifie si l'état contient une ancre vers laquelle scroller
    if (location.state?.scrollTo && contactRef.current) {
      setTimeout(() => {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location]);
  return (
    <div className="relative">
      <div
        ref={contactRef}
        className="h-screen bg-gray-900 flex items-center justify-center"
      >
        <ContactForm />
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Contact;
