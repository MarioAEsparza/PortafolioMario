import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const QUICK_LINKS = [
  { name: 'Inicio', path: '/' },
  { name: 'Sobre mí', path: '/sobre-mi' },
  { name: 'Proyectos', path: '/proyectos' },
  { name: 'Contacto', path: '/contacto' },
];

const SOCIAL_LINKS = [
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/mario-acosta-esparza-612963241/' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/MarioAEsparza' },
  { name: 'Email', icon: Mail, url: 'mailto:mario_esparza1@hotmail.com' },
];

const Footer = () => (
  <footer className="bg-dark-900 border-t border-dark-700 mt-auto">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <span className="text-2xl font-bold text-gradient">Portafolio</span>
          <p className="mt-4 text-gray-400 text-sm">Ingeniero de Sistemas especializado en desarrollo web full-stack y soluciones tecnológicas innovadoras.</p>
        </div>
        <div>
          <span className="text-lg font-semibold text-white mb-4 block">Enlaces Rápidos</span>
          <ul className="space-y-2">
            {QUICK_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-gray-400 hover:text-blue-400 text-sm">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="text-lg font-semibold text-white mb-4 block">Conecta Conmigo</span>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map(({ name, icon: Icon, url }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-800 rounded-lg text-gray-400 hover:text-blue-400 hover:scale-110 hover:shadow-lg" aria-label={name}>
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-dark-700 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Portafolio Mario Acosta Esparza. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;