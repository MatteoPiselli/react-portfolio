import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef(); // Création de la référence pour le formulaire

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          alert("Email envoyé avec succès !");
          form.current.reset(); // Réinitialiser le formulaire après envoi
        },
        (error) => {
          alert("Échec de l'envoi...", error.text);
        }
      );
  };

  return (
    <form
      ref={form} // Associer le formulaire à useRef()
      onSubmit={sendEmail}
      className="w-1/3 mx-auto p-4 bg-white rounded shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Contactez-moi</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Nom</label>
        <input
          type="text"
          name="to_name"
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Email</label>
        <input
          type="email"
          name="from_name"
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Message</label>
        <textarea
          name="message"
          className="w-full px-3 py-2 border rounded"
          rows={5}
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Envoyer
      </button>
    </form>
  );
};

export default ContactForm;
