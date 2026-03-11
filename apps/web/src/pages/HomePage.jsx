import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Server } from 'lucide-react';
import { Button } from "../components/ui/button.jsx";

const FEATURES = [
  { icon: Code, title: 'Frontend Development', desc: 'React, Vue.js, Javascript' },
  { icon: Server, title: 'Backend Development', desc: 'Node.js, Python, PostgreSQL' },
  { icon: Database, title: 'DevOps & Cloud', desc: 'Docker, AWS, GitHub' }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: custom * 0.2 } })
};

const HomePage = () => (
  <>
    <Helmet>
      <title>Portafolio Mario</title>
      <meta name="description" content="Portafolio profesional de Ingeniero de Sistemas especializado en desarrollo web full-stack, soluciones cloud y arquitectura de software." />
    </Helmet>

    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1679922193697-b053e4d720aa" alt="Professional mountain landscape" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/95 via-dark-900/90 to-blue-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div custom={1} initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
              Bienvenido a mi Portafolio
            </span>
          </motion.div>

          <motion.h1 custom={2} initial="hidden" animate="visible" variants={fadeInUp} className="text-white mb-6">
            <span className="block mb-2">Hola, soy</span>
            <span className="text-gradient">Mario Acosta Esparza</span>
          </motion.h1>

          <motion.p custom={3} initial="hidden" animate="visible" variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Especializado en desarrollo web full-stack, arquitectura de software. Transformo ideas en aplicaciones escalables y eficientes.
          </motion.p>

          <motion.div custom={4} initial="hidden" animate="visible" variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg group">
              <Link to="/proyectos" className="flex items-center gap-2">
                Ver Proyectos <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-6 text-lg">
              <Link to="/contacto">Contactar</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div custom={5} initial="hidden" animate="visible" variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
          {FEATURES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={i} custom={i + 6} initial="hidden" animate="visible" variants={fadeInUp} className="glass-effect p-6 rounded-xl hover:bg-white/10 transition-all group cursor-pointer">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex-center mb-4 group-hover:bg-blue-500/20">
                <Icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  </>
);

export default HomePage;