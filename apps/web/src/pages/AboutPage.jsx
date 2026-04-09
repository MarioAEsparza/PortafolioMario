import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Terminal, Briefcase, GraduationCap, Server } from 'lucide-react';

const SKILLS = [
  { cat: 'Backend', icon: Server, items: ['Node.js', 'Python', 'Java', 'Google Sheets API', 'Django', 'Spring Boot', 'Manejo lógica/servidor'] },
  { cat: 'Frontend', icon: Code, items: ['React', 'Vue.js', 'TypeScript', 'TailwindCSS', 'Next.js', 'HTML5', 'CSS3', 'Javascript', 'JSON', 'UX/UI', 'Consumo APIs REST','Bootstrap','Vite'] },
  { cat: 'DevOps', icon: Cloud, items: ['Docker', 'Git', 'GitHub', 'AWS', 'Postman', 'WordPress (CMS Management)'] },
  { cat: 'Databases', icon: Database, items: ['PostgreSQL', 'MongoDB', 'MySQL', 'GitHub Pages', 'CI/CD Básico con GitHub', 'Linux básico'] },
];

const EXPERIENCE = [
  { company: 'BUARTRA Plataforma Web Informativa', role: 'Desarrollador Web Freelance', duration: '2025', desc: 'Desarrollo completo de sitio web informativo utilizando HTML, CSS y JavaScript, implementación de lógica en JavaScript para el manejo dinámico de datos, integración de Google Sheets como fuente de datos para la administración y actualización de información, optimización del sitio para mejorar rendimiento, usabilidad y compatibilidad multiplataforma, y publicación junto con mantenimiento del sitio en entorno productivo.' },
  { company: 'Saving the Amazon', role: ' Creador de Contenido Gráfico y Multimedia (Voluntariado)', duration: '2024', desc: 'Diseño de piezas gráficas y material visual para redes sociales. Desarrollo de contenido digital con enfoque educativo y ambiental. Uso de herramientas gráficas y audiovisuales para campañas digitales.' },
  { company: 'UFPS Facultad Ingeniería de Sistemas', role: ' Desarrollador Web (Prácticas)', duration: '2023', desc: 'Rediseño y mantenimiento del sitio web del Departamento de Ingeniería de Sistemas. Implementación y administración de contenidos mediante CMS WordPress. Mejora de la experiencia de usuario, navegación y estructura visual del sitio. Trabajo colaborativo con docentes bajo requerimientos funcionales definidos.' },
];

const EDUCATION = [
  { degree: 'Ingeniería de Sistemas', inst: 'Universidad Francisco de Paula Santander', year: '2018 - 2026', desc: 'Especialización en desarrollo de software y arquitectura de sistemas con enfoque Java.' },
  { degree: 'Certificado Cisco CCNA', inst: 'CCNA', year: '2026', desc: 'Certificación profesional en redes de datos CISCO.' },
  { degree: 'Bachillerato', inst: 'Colegio Sagrado Corazón de Jesús', year: '2016', desc: 'Titulo Bachiller Académico' },
];

const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

const AboutPage = () => (
  <>
    <Helmet>
      <title>Sobre mí - Ingeniero de Sistemas</title>
      <meta name="description" content="Conoce más sobre mi experiencia profesional, habilidades técnicas y formación académica." />
    </Helmet>

    <div className="min-h-screen bg-dark-900 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-16">
          <h1 className="text-white mb-6">Sobre <span className="text-gradient">Mí</span></h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Ingeniero de Sistemas apasionado por la tecnología y el desarrollo de soluciones innovadoras</p>
        </motion.div>

        <motion.section initial="hidden" animate="visible" variants={fadeInUp} className="mb-20">
          <div className="glass-effect p-8 md:p-12 rounded-2xl">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Resumen Profesional</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4 text-center">Ingeniero de Sistemas con experiencia como Desarrollador Junior en desarrollo web Frontend y conocimientos en Backend. He participado en el diseño e implementación de aplicaciones web utilizando HTML, CSS y JavaScript, aplicando buenas prácticas de desarrollo, diseño responsivo y control de versiones. Cuento con experiencia en soluciones FullStack, consumo y creación de APIs, manejo de bases de datos y trabajo colaborativo. Me caracterizo por mi capacidad de aprendizaje, adaptabilidad y compromiso con la calidad del software.</p>
          </div>
        </motion.section>

        <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Habilidades Técnicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map(({ cat, icon: Icon, items }) => (
              <motion.div key={cat} variants={fadeInUp} className="bg-dark-800 p-6 rounded-xl border border-dark-700 card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex-center"><Icon className="w-5 h-5 text-blue-400" /></div>
                  <h3 className="text-xl font-semibold text-white">{cat}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => <span key={skill} className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">{skill}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Experiencia Laboral</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {EXPERIENCE.map((job, i) => (
              <motion.div key={i} variants={fadeInUp} className="relative bg-dark-800 p-6 md:p-8 rounded-xl border border-dark-700 card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex-center flex-shrink-0"><Briefcase className="w-6 h-6 text-blue-400" /></div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{job.role}</h3>
                      <span className="text-sm text-blue-400 font-medium">{job.duration}</span>
                    </div>
                    <p className="text-gray-400 font-medium mb-3">{job.company}</p>
                    <p className="text-gray-300 leading-relaxed">{job.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Educación</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-dark-800 p-6 rounded-xl border border-dark-700 card-hover">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex-center flex-shrink-0"><GraduationCap className="w-6 h-6 text-blue-400" /></div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-gray-400 font-medium">{edu.inst}</p>
                    <span className="text-sm text-blue-400">{edu.year}</span>
                  </div>
                </div>
                <p className="text-gray-300">{edu.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  </>
);

export default AboutPage;