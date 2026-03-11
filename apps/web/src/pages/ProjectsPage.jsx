import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import ProjectCard from "../components/ProjectCard.jsx";

const PROJECTS = [
  { id: 1, image: 'https://upload.wikimedia.org/wikipedia/commons/0/03/UFPS_Logo.png', title: 'Ing. Sistemas UFPS', description: 'Renovación de la página Ingeniería de Sistemas UFPS', technologies: ['CMS Wordpress', 'Figma', 'GitHub', 'Canva', 'HTML', 'CSS', 'JS'], liveDemo: 'https://ingsistemas.cloud.ufps.edu.co/'},
  { id: 2, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800', title: 'Analytics Dashboard', description: 'Dashboard interactivo para visualización de datos.', technologies: ['Vue.js', 'Python', 'MongoDB', 'D3.js', 'Docker'], liveDemo: 'https://example.com', github: 'https://github.com' },
  { id: 3, image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800', title: 'Task Management System', description: 'Sistema de gestión de tareas y proyectos.', technologies: ['React', 'Express.js', 'MySQL', 'Socket.io', 'Redis'], liveDemo: 'https://example.com', github: 'https://github.com' },
  { id: 4, image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800', title: 'Social Media App', description: 'Aplicación de red social con feed de publicaciones.', technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'AWS S3', 'Kubernetes'], liveDemo: 'https://example.com', github: 'https://github.com' },
];

const TOOLS = [
  'Visual Studio Code',
  'Postman',
  'GitHub',
  'MySQL Workbench',
  'Figma',
  'Canva',
  'Corel Draw',
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Adobe Premiere Pro',
  'OBS Studio',
  'Vegas Pro',
  'Microsoft Office'
];

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Proyectos y Herramientas - Portfolio de Desarrollo Web</title>
        <meta name="description" content="Explora mis proyectos de desarrollo web full-stack y las herramientas que utilizo." />
      </Helmet>

      <div className="min-h-screen bg-dark-900 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-white mb-6">Mis <span className="text-gradient">Proyectos</span></h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Una selección de proyectos que demuestran mis habilidades.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Herramientas</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {TOOLS.map(tool => (
                <div 
                  key={tool} 
                  className="px-6 py-2 rounded-full font-medium transition-all bg-dark-800 text-gray-400 border border-dark-700 hover:bg-dark-700 hover:text-white hover:border-blue-500/50 cursor-default shadow-sm"
                >
                  {tool}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map(project => <ProjectCard key={project.id} {...project} />)}
          </motion.div>

          {PROJECTS.length === 0 && (
            <div className="text-center py-20"><p className="text-gray-400 text-lg">No se encontraron proyectos.</p></div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;