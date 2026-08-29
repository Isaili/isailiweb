import ExperienceTimeline from './ExperienceTimeline';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Desarrollador Frontend — Sistema de Gestión de Bienes Comunales',
      company: 'Casa de Bienes Comunales, Copainalá, Chiapas',
      period: 'Julio 2026 - Presente',
      location: 'Presencial',
      description: 'Desarrollé el frontend de una aplicación web para la gestión integral de tierras comunales, utilizando Next.js, TypeScript y arquitectura basada en features. Construí los módulos de interfaz para el registro de comuneros, parcelas, lotes, pagos y multas, incluyendo un kiosco de check-in por QR y formularios con validaciones complejas (posesión en hectáreas, estatus de comunero, etc.). Implementé la autenticación de usuarios y el diseño de dashboards con estadísticas y mapas integrados, y resolví integraciones del lado del cliente como generación de códigos QR y acceso a cámara vía HTTPS. Proyecto actualmente en desarrollo.',
      technologies: ['Next.js', 'TypeScript', 'React', 'JWT', 'Cookies', 'Vercel', 'Turbopack', 'React Hook Form', 'Yup'],
    },
    {
      title: 'Desarrollador Full Stack — MatchBit',
      company: 'Cloudteen Technologies',
      period: 'Abr 2026 - Ago 2026',
      location: 'Remoto',
      description: 'Desarrollé full stack de MatchBit, una plataforma de monetización deportiva. En el backend, implementé el subdominio de Integraciones (IntegrationsSubdomain) con arquitectura hexagonal usando FastAPI, SQLAlchemy y Alembic, cubriendo los casos de uso de creación, listado, instalación, configuración, activación y desinstalación de integraciones por tenant. En el frontend, construí el flujo completo de registro a eventos deportivos, el módulo de selección de planes para negocios B2B, el login y panel de control del administrador (dashboard de clientes, eventos, carreras y clubes), y un componente Wizard de registro condicionado por tipo de negocio (club, gimnasio, evento) con pasos dinámicos y sub-componentes interactivos. También desarrollé el módulo de listado de usuarios registrados, formularios de pre-registro e inscripción con validación (react-hook-form + Yup), la vista de detalle de evento, y la landing del módulo "Carreras" con renderizado híbrido SSR/ISR, incluyendo un template reutilizable y escalable para cada carrera publicada.',
      technologies:  ['Python', 'FastAPI', 'SQLAlchemy', 'Alembic', 'Docker', 'React', 'Next.js', 'React Hook Form', 'Yup'],
    },
    {
      title: 'Desarrollador Full Stack — Sistema de Gestión de Apoyos y Programas Sociales',
      company: '"INPI"',
      period: 'Dic 2025 - Mar 2026',
      location: 'Tuxtla Gutiérrez, Chiapas',
      description: 'Desarrollé una plataforma web para la gestión, monitoreo y análisis de programas sociales dirigidos a comunidades indígenas, con el objetivo de mejorar la transparencia, trazabilidad y toma de decisiones en la asignación de apoyos gubernamentales. Construí APIs RESTful para el registro y administración de beneficiarios, proyectos comunitarios y asignación de apoyos. Implementé un sistema de geolocalización de comunidades mediante integración con APIs de mapas para visualizar la distribución geográfica de los programas. Desarrollé módulos de reportes y análisis de impacto social que permiten visualizar estadísticas sobre beneficiarios, proyectos activos y uso de recursos.',
      technologies: ['React', 'Node.js', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      title: 'Desarrollador Backend — Juntos por Salud',
      company: 'Proyecto académico',
      period: 'Sep 2025 - Dic 2025',
      location: 'Universidad Politécnica de Chiapas',
      description: 'Desarrollé el backend de una aplicación móvil de salud utilizando Procesamiento de Lenguaje Natural (NLP) y Machine Learning para el análisis de síntomas reportados en lenguaje coloquial. Diseñé e implementé modelos de clasificación para la identificación de enfermedades endémicas, incluyendo dengue (clásico y hemorrágico), zika, chikungunya y malaria, así como sistemas de prevención y recomendación basados en riesgos regionales del estado de Chiapas. Implementé APIs REST, autenticación y autorización (RBAC) para usuarios y administradores, e integré un sistema de geolocalización de los 124 municipios de Chiapas para mostrar automáticamente las clínicas del IMSS más cercanas. Enfoqué el desarrollo en arquitectura escalable, manejo seguro de datos, integración de modelos ML y alto rendimiento del backend.',
      technologies: ['Python', 'NLP', 'Machine Learning', 'REST APIs', 'RBAC', 'Geolocalización', 'Arquitectura Escalable'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-soft-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Experiencia Profesional
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Un panorama de mi trayectoria en el desarrollo de software y los proyectos que he tenido el privilegio de construir.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <ExperienceTimeline experiences={experiences} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
