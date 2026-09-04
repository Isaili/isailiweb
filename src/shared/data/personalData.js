
import ver2027 from '../../features/about/assets/photos/2027.jpg';
import ado2027 from '../../features/about/assets/photos/ado.jpg';
import ado2026 from '../../features/about/assets/photos/ado2.jpeg';
import burrto from '../../features/about/assets/photos/burrto.jpeg'
import cafe from '../../features/about/assets/photos/cafe.jpeg'
import cafe1 from '../../features/about/assets/photos/cafe1.jpeg'
import cafe2 from '../../features/about/assets/photos/cafe2.jpeg'
import caminando from '../../features/about/assets/photos/caminando.jpeg'
import cascadas from '../../features/about/assets/photos/cascadas.jpeg'
import cata from '../../features/about/assets/photos/cata.jpeg'
import cata2 from '../../features/about/assets/photos/cata2.jpeg'
import cata3 from '../../features/about/assets/photos/cata3.jpeg'
import catedral from '../../features/about/assets/photos/catedral.jpeg'
import codigo from '../../features/about/assets/photos/codigo.jpeg'
import doblecodigo from '../../features/about/assets/photos/doblecodigo.jpeg'
import famili from '../../features/about/assets/photos/famili.jpeg'
import iglesia from '../../features/about/assets/photos/iglesia.jpeg'
import lake from '../../features/about/assets/photos/lake.jpeg'
import lake2 from '../../features/about/assets/photos/lake2.jpeg'
import malecon from '../../features/about/assets/photos/malecon.jpeg'
import mar2 from '../../features/about/assets/photos/mar2.jpeg'
import me from '../../features/about/assets/photos/me.jpeg'
import megym from '../../features/about/assets/photos/megym.jpeg'
import mex from '../../features/about/assets/photos/mex.jpeg'
import palmeras from '../../features/about/assets/photos/palmeras.jpeg'
import pm2 from '../../features/about/assets/photos/pm2.jpeg'
import surface from '../../features/about/assets/photos/surface.jpeg'
import taks from '../../features/about/assets/photos/taks.jpeg'
import telas from '../../features/about/assets/photos/telas.jpeg'
import veracruz from '../../features/about/assets/photos/veracruz.jpeg'
import viejita from '../../features/about/assets/photos/viejita.jpeg'
import volcan from '../../features/about/assets/photos/volcan.jpeg'
import volcan2 from '../../features/about/assets/photos/volcan2.jpeg'
import volcan3 from '../../features/about/assets/photos/volcan3.jpeg'
import volcan4 from '../../features/about/assets/photos/volcan4.jpeg'




export const personalData = {
  name: 'Isai AbeL Lopez Sanchez',
  title: 'Full Stack Developer | especializado en Backend',
  bio: 'Desarrollador Full Stack apasionado por crear experiencias digitales auténticas',
  description: '  Fundador de Softvana y desarrollador de software con experiencia en backend y full stack. He trabajado en el desarrollo end-to-end de sistemas de gestión para instituciones agrarias y municipales, desde UI/UX hasta backend con FastAPI, NestJS, PostgreSQL y despliegue en Vercel. Dominio de arquitecturas hexagonales, modelado de reglas de negocio y desarrollo frontend y móvil con Next.js, TypeScript y React.',

  experiences: [
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
      technologies: ['Python', 'FastAPI', 'SQLAlchemy', 'Alembic', 'Docker', 'React', 'Next.js', 'React Hook Form', 'Yup'],
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
  ],
  
  email: 'isailibanfer@gmail.com',
  phone: '+52 961 107 7541',
  location: 'Copainalá, Chiapas - 29620, México',
  portfolio: 'Curriculum Vitae',
  github: 'https://github.com/Isaili',
  
  quotes: [
    { 
      quote: 'La constancia le gana al talento cuando el talento no es constante.', 
      author: 'Isaili'
    },
    { 
      quote: 'El progreso no siempre se ve, pero siempre se acumula. ', 
      author: null 
    },
  ],
  playlist: [
  { 
    name: 'Bellavista 130', 
    artist: 'JuanPalitosChinos', 
    spotifyUrl: 'https://open.spotify.com/intl-es/track/1yXiLIBmJau1WnLruUy3k5?si=45fc870b3d334516' 
  },
  { 
    name: 'De Mentiritas', 
    artist: 'Valdo Rodriguez', 
    spotifyUrl: 'https://open.spotify.com/intl-es/track/7JsK6SwLprWuHUTPKQd3Pf?si=6db4a938501247b3' 
  },
  { 
    name: 'Relato Corto', 
    artist: 'Sabino', 
    spotifyUrl: 'https://open.spotify.com/intl-es/track/3sGO3yiBeLOIBEfLUsvTEq?si=7341391020df4d58' 
  },
  ],
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/isai-abel-lopez-sanchez-0845912a3/',
    github: 'https://github.com/Isaili',
    twitter: 'https://twitter.com',
    instagram: 'https://www.instagram.com/isaili_banfer',
  },
  
  education: {
    university: 'Universidad Politécnica de Chiapas',
    degree: 'Ingeniería en Software',
    location: 'Suchiapa, México',
    period: ' Ene 2023 - Dic 2026',
    score: 92,
    specialization: 'Desarrollo Full Stack y Diseño UI/UX',
  },
  
  certifications: [
    'Google: Diseño de Experiencia del Usuario (UX)',
    'AWS Academy: Cloud Foundations, Cloud Architecting',
    'Cisco: Networking, Cybersecurity Fundamentals',
  ],
  
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'B1 Intermedio' },
  ],
  
  availability: 'Remoto • Tiempo completo',
  
  hobbies: [
  'Hacer ejercicio',
  'Correr',
  'Cantar',
  'Fotografía',
  'Leer',
  'Ver películas',
  'Viajar',
  'Documentar',
  'Fútbol',
  'Hiking',
  'Parapente',
],
  youtube: {
    channel: 'https://www.instagram.com/isaili_banfer?igsh=dml2ZndueXcxMTVv',
    description: "isaili's films, just for me, My dreams."
  },
  coolPhotos: [
  { src: telas, alt: 'Telas' },
  { src: volcan3, alt: 'Volcán' },
  { src: me, alt: 'Yo' },
  { src: cata2, alt: 'Cata' },
  { src: malecon, alt: 'Malecón' },
  { src: ado2026, alt: 'Uni' },
  { src: iglesia, alt: 'Iglesia' },
  { src: burrto, alt: 'Burrito' },
  { src: pm2, alt: 'PM2' },
  { src: ver2027, alt: 'Playa' },
  { src: cafe2, alt: 'Café' },
  { src: volcan, alt: 'Volcán' },
  { src: famili, alt: 'Familia' },
  { src: cascadas, alt: 'Cascadas' },
  { src: catedral, alt: 'Catedral' },
  { src: mex, alt: 'México' },
  { src: doblecodigo, alt: 'Doble código' },
  { src: veracruz, alt: 'Veracruz' },
  { src: lake2, alt: 'Lago' },
  { src: cata3, alt: 'Cata' },
  { src: mar2, alt: 'Mar' },
  { src: taks, alt: 'Tareas' },
  { src: codigo, alt: 'Código' },
  { src: ado2027, alt: 'Uni' },
  { src: surface, alt: 'Surface' },
  { src: volcan4, alt: 'Volcán' },
  { src: viejita, alt: 'Viejita' },
  { src: cafe1, alt: 'Café' },
  { src: lake, alt: 'Lago' },
  { src: megym, alt: 'Gimnasio' },
  { src: palmeras, alt: 'Palmeras' },
  { src: cata, alt: 'Cata' },
  { src: caminando, alt: 'Caminando' },
  { src: cafe, alt: 'Café' },
  { src: volcan2, alt: 'Volcán' },
],
};
