import playaImage from '../assets/playa.jpg';
import escuelaImage from '../assets/escuela.jpg';

export const personalData = {
  name: 'Isai AbeL lOPEZ Sanchez',
  title: 'Full Stack Developer | especializado en Backend',
  bio: 'Desarrollador Full Stack apasionado por crear experiencias digitales auténticas',
  description: '  Fundador de Softvana y desarrollador de software con experiencia en backend y full stack. He trabajado en el desarrollo end-to-end de sistemas de gestión para instituciones agrarias y municipales, desde UI/UX hasta backend con FastAPI, NestJS, PostgreSQL y despliegue en Vercel. Dominio de arquitecturas hexagonales, modelado de reglas de negocio y desarrollo frontend y móvil con Next.js, TypeScript y React.',
  
  email: 'iramazaliar@gmail.com',
  phone: '+52 961 376 2202',
  location: 'Tuxtla Gutiérrez, Chiapas - 29014, México',
  portfolio: 'Curriculum Vitae',
  github: 'maruchanazalia',
  
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
    linkedin: 'https://www.linkedin.com/in/iram-azalia-ruiz-aparicio-81209b24a/',
    github: 'https://github.com/maruchanazalia',
    twitter: 'https://twitter.com',
    instagram: 'https://www.instagram.com/ruiz.iram/',
  },
  
  education: {
    university: 'Universidad Politécnica de Chiapas',
    degree: 'Ingeniería en Software',
    location: 'Suchiapa, México',
    period: 'Sep 2022 - Jul 2025',
    score: 89,
    specialization: 'Especialidad: Aplicaciones Contables, Sistemas Financieros',
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
    'Bailar',
    'Pintar en acuarelas',
    'Fotografía',
    'Leer',
    'Ver películas',
  ],
  youtube: {
    channel: 'https://www.youtube.com/@azaliasFilms',
    description: "azalia's films, just for me, My dreams."
  },
  coolPhotos: [
    { src: playaImage, alt: 'Playa' },
    { src: escuelaImage, alt: 'Uni' },
  ],
};
