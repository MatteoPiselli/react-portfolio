import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ContactForm from "../components/ContactForm";

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
    <div
      ref={contactRef}
      className="min-h-screen bg-gray-100 flex items-center justify-center"
    >
      <ContactForm />
    </div>
  );
};

export default Contact;
