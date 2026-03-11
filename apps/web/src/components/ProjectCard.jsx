import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from "./ui/button.jsx";

const ProjectCard = ({ image, title, description, technologies, liveDemo, github }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-blue-500/50 card-hover"
  >
    <div className="relative h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-60 group-hover:opacity-40" />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400">{title}</h3>
      <p className="text-gray-400 mb-4 line-clamp-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech) => (
          <span key={tech} className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {liveDemo && (
          <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
            <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="flex-center gap-2">
              <ExternalLink className="w-4 h-4" /> Visualizar
            </a>
          </Button>
        )}
        {github && (
          <Button asChild variant="outline" className="flex-1 border-dark-600 hover:border-blue-500 hover:bg-blue-500/10">
            <a href={github} target="_blank" rel="noopener noreferrer" className="flex-center gap-2">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </Button>
        )}
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;