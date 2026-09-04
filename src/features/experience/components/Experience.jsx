import ExperienceTimeline from './ExperienceTimeline';
import { personalData } from '../../../shared/data/personalData';
import './Experience.css';

const Experience = () => {
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
          <ExperienceTimeline experiences={personalData.experiences} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
