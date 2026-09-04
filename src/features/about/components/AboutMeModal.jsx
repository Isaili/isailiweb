import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { FaDumbbell, FaRunning, FaMusic, FaCamera, FaBook, FaFilm, FaPlane, FaVideo, FaFutbol, FaMountain, FaTimes, FaYoutube } from 'react-icons/fa';
import { MdParagliding } from 'react-icons/md';
import { personalData } from '../../../shared/data/personalData';
import cuerpoImage from '../assets/isailime.jpeg';
import './AboutMeModal.css';

const AboutMeModal = ({ isOpen, onClose }) => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const resetTimer = setTimeout(() => {
        setShowVideo(false);
      }, 0);

      const videoTimer = setTimeout(() => {
        setShowVideo(true);
      }, 8000);

      return () => {
        clearTimeout(resetTimer);
        clearTimeout(videoTimer);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const hobbyIcons = {
  'Hacer ejercicio': FaDumbbell,
  'Correr': FaRunning,
  'Cantar': FaMusic,
  'Fotografía': FaCamera,
  'Leer': FaBook,
  'Ver películas': FaFilm,
  'Viajar': FaPlane,
  'Documentar': FaVideo,
  'Fútbol': FaFutbol,
  'Hiking': FaMountain,
  'Parapente': MdParagliding,
};

  const modalContent = (
    <div className="about-me-modal-overlay" onClick={onClose}>
      <div className="about-me-modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="about-me-close-btn"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <FaTimes className="text-2xl" />
        </button>

        <div className="about-me-header">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Sobre Mí :3
          </h2>
          <p className="text-gray-600">
            Un poco más sobre quién soy en el mundo
          </p>
        </div>

        <div className="about-me-photo-section">
          {showVideo ? (
            <div className="about-me-video-wrapper">
              <iframe
                src="https://www.youtube-nocookie.com/embed/SvwmRTgL20U?autoplay=1&rel=0"
                title="Tutorial sobre mí"
                className="about-me-video"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <img
              src={cuerpoImage}
              alt="Isai Lopez"
              className="about-me-photo"
            />
          )}
        </div>

        <div className="about-me-section">
          <h3 className="about-me-section-title">Mis Hobbies </h3>
          <div className="hobbies-grid">
            {personalData.hobbies.map((hobby, index) => {
              const Icon = hobbyIcons[hobby] || FaMusic;
              return (
                <div key={index} className="hobby-card">
                  <Icon className="hobby-icon" />
                  <span className="hobby-text">{hobby}</span>
                </div>
              );
            })}
          </div>
        </div>

        {personalData.youtube && (
          <div className="about-me-section">
            <h3 className="about-me-section-title">Mi Canal de YouTube </h3>
            <p className="about-me-description">
              {personalData.youtube.description}
            </p>
            <a
              href={personalData.youtube.channel}
              target="_blank"
              rel="noopener noreferrer"
              className="youtube-link"
            >
              <FaYoutube className="youtube-icon" />
              <span>Visitar mi canal</span>
            </a>
          </div>
        )}

        {personalData.coolPhotos && personalData.coolPhotos.length > 0 && (
          <div className="about-me-section">
            <h3 className="about-me-section-title">Mis Fotos Cool </h3>
            <div className="photos-grid">
              {personalData.coolPhotos.map((photo, index) => (
                <img
                  key={index}
                  src={photo.src}
                  alt={photo.alt || `Foto ${index + 1}`}
                  className="cool-photo"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default AboutMeModal;
