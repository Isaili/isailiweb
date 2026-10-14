import { useEffect, useState } from 'react';
import Header from '../features/navigation/components/Header';
import HeroSection from '../features/home/components/HeroSection';
import Skills from '../features/skills/components/Skills';
import Experience from '../features/experience/components/Experience';
import Projects from '../features/projects/components/Projects';
import Contact from '../features/contact/components/Contact';
import Footer from '../features/navigation/components/Footer';
import OrbLoader from '../shared/components/OrbLoader';
import { personalData } from '../shared/data/personalData';
import './App.css';
import meImage from '../features/home/assets/me2.jpeg';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // El loader dura mínimo 2 segundos; si la página tarda más (internet lento), se queda hasta que termine de cargar
  useEffect(() => {
    const minDelay = new Promise((resolve) => setTimeout(resolve, 2000));
    const pageLoaded = new Promise((resolve) => {
      if (document.readyState === 'complete') resolve();
      else window.addEventListener('load', resolve, { once: true });
    });
    let cancelled = false;
    Promise.all([minDelay, pageLoaded]).then(() => {
      if (!cancelled) setIsLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const profileData = {
    profileImage: meImage,
    quotes: personalData.quotes,
    playlist: personalData.playlist,
  };

  return (
    <div className="App">
      {isLoading && <OrbLoader fullScreen text="Cargando portafolio..." />}
      <Header />
      <HeroSection
        profileImage={profileData.profileImage}
        quotes={profileData.quotes}
        playlist={profileData.playlist}
      />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
