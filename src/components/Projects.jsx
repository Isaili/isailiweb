import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';


import orderflowImage from '../assets/orderflow.png';

import comuner from '../assets/comuneros.png';
import zoqueImage from '../assets/zoque.png';
import cafeImage from '../assets/cafe.png';


const Projects = () => {
  const projects = [
    {
      title: 'CDBC-Sistema de Gestión de Bienes Comunales',
      description: 'Aplicación web que digitaliza el control de tierras comunales, reemplazando registros manuales por una plataforma centralizada con gestión de comuneros, parcelas, lotes, pagos, multas y check-in por QR, incluyendo reglas de negocio agrarias formalizadas y reportes.',
      technologies: ['Next.js', 'TypeScript', 'React', 'JWT', 'Vercel', 'Turbopack'],
      image: comuner,
      githubUrl: 'https://github.com/Isaili/comuneros.git',
      liveUrl: 'https://comuneros.vercel.app',
    },
    {
      title: 'Landing Page — Auto Transportes Zoque',
      description: 'Landing page para Auto Transportes Zoque, empresa de transporte en Chiapas, con catálogo de destinos, horarios y precios por ruta, proceso de compra de boletos, mapa de cobertura, testimonios, promociones y formulario de contacto.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      image: zoqueImage,
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Grano y Grano - Aplicación móvil',
      description: 'Aplicación multiplataforma para la gestión y trazabilidad de compras de café y pimienta, con registro de transacciones por tipo de producto (seco/verde), cálculo automático de totales y merma, historial filtrable y panel de estadísticas de inversión.',
      technologies: ['Flutter', 'Dart'],
      image: cafeImage, 
      githubUrl: 'https://github.com/Isaili/Cafe-Pimienta.git',
      liveUrl: '#',
    },
    {
      title: ' - E-commerce Notifications',
      description: 'Sistema de automatización que integra Lightspeed HQ con WhatsApp API mediante webhooks para enviar actualizaciones en tiempo real del estado de pedidos a clientes.',
      technologies: ['TypeScript', 'NestJS', 'Arquitectura Hexagonal', 'Docker', 'Lightspeed API', 'WhatsApp API'],
      image: orderflowImage,
      githubUrl: 'https://github.com/maruchanazalia/OrderFlow.git',
      liveUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Algunos de los proyectos en los que he trabajado y de los que me siento orgulloso
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="neuromorphic overflow-hidden group hover:neuromorphic-hover transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neuromorphic-sm p-3 bg-white/90 hover:bg-white transition-colors"
                        aria-label="Ver código en GitHub"
                      >
                        <FaGithub className="text-gray-800" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neuromorphic-sm p-3 bg-white/90 hover:bg-white transition-colors"
                        aria-label="Ver proyecto en vivo"
                      >
                        <FaExternalLinkAlt className="text-gray-800" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-pastel-blue rounded-full text-xs font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

