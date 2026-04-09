import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { Button } from "../components/ui/button.jsx";
import { useToast } from "../components/ui/use-toast.js";

const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: 'mario_esparza1@hotmail.com', link: 'mailto:mario_esparza1@hotmail.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'Mario Acosta Esparza', link: 'https://www.linkedin.com/in/mario-acosta-esparza-612963241/' },
  { icon: Github, label: 'GitHub', value: 'MarioAEsparza', link: 'https://github.com/MarioAEsparza' },
  { icon: MapPin, label: 'Ubicación', value: 'Cúcuta, Colombia', link: null },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      return toast({ title: 'Error', description: 'Por favor completa los campos requeridos.', variant: 'destructive' });
    }
    toast({ title: '¡Mensaje enviado!', description: 'Gracias por contactarme. Te responderé pronto.' });
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <>
      <Helmet>
        <title>Contacto - Ingeniero de Sistemas</title>
        <meta name="description" content="Ponte en contacto conmigo para discutir proyectos." />
      </Helmet>

      <div className="min-h-screen bg-dark-900 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-white mb-6"><span className="text-gradient">Contacto</span></h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Abierto a oportunidades laborales y nuevos desafíos profesionales.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="glass-effect p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-white mb-6">Envíame un mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {['nombre', 'email', 'asunto'].map(field => (
                  <div key={field}>
                    <label className="block text-sm font-medium text-gray-300 mb-2 capitalize">{field}</label>
                    <input type={field === 'email' ? 'email' : 'text'} name={field} value={form[field]} onChange={handleChange} className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500" required={field !== 'subject'} />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Mensaje</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={6} className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 resize-none" required />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg group">
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" /> Enviar Mensaje
                </Button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="glass-effect p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-white mb-6">Información de Contacto</h2>
                <div className="space-y-4">
                  {CONTACT_INFO.map(({ icon: Icon, label, value, link }, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-dark-800 rounded-lg">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex-center"><Icon className="w-6 h-6 text-blue-400" /></div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">{label}</p>
                        {link ? <a href={link} target="_blank" rel="noreferrer" className="text-white hover:text-blue-400">{value}</a> : <p className="text-white">{value}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;