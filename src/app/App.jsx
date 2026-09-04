import Header from '../features/navigation/components/Header';
import HeroSection from '../features/home/components/HeroSection';
import Skills from '../features/skills/components/Skills';
import Experience from '../features/experience/components/Experience';
import Projects from '../features/projects/components/Projects';
import Contact from '../features/contact/components/Contact';
import Footer from '../features/navigation/components/Footer';
import { personalData } from '../shared/data/personalData';
import './App.css';

import meImage from '../features/home/assets/me2.jpeg';

function App() {
  const profileData = {
    profileImage: meImage,
    quotes: personalData.quotes,
    playlist: personalData.playlist,
  };

  return (
    <div className="App">
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
