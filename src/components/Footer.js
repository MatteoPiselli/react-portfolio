const Footer = () => {
    return (
      <footer className="relative bg-gray-900 text-white border-t border-white py-8">
        <div className="container mx-auto px-4 mt-4 flex flex-col md:flex-row justify-between items-center">
          {/* Informations de contact */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold">Matteo PISELLI</h2>
            <p>Développeur Web</p>
            <p>Email: <a href="mailto:pro.matteo.piselli@gmail.com" className="text-blue-400">pro.matteo.piselli@gmail.com</a></p>
            <p>Téléphone: 06 48 35 73 19</p>
          </div>
  
          {/* Liens de réseaux sociaux */}
          <div className="flex space-x-6">
            <a href="https://github.com/MatteoPiselli" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github text-2xl hover:text-gray-400"></i>
            </a>
            <a href="https://linkedin.com/in/matteo-piselli-354a27231" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin text-2xl hover:text-gray-400"></i>
            </a>
          </div>
  
          {/* Copyright */}
          <div className="text-center mt-4 md:mt-0">
            <p>© {new Date().getFullYear()} Matteo PISELLI. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  