import { 
  FaAws,
  FaDiscord,
  FaFigma,
  FaWordpress,
  FaRaspberryPi,
  FaGithub,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
  FaTwitter,
  FaInstagram,
  FaPhp,
} from 'react-icons/fa';
import { 
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiExpress,
  SiAdobephotoshop,
  SiAdobexd,
  SiAdobeillustrator,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiTypescript,
  SiGmail,
  SiFlutter,
  SiAngular,
  SiKotlin,
  SiNextdotjs,
} from 'react-icons/si';
import SkillCard from './SkillCard';
import { useScrollAnimation } from '../../../shared/hooks/useScrollAnimation';
import './Skills.css';

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const skills = [
    { name: 'AWS', icon: FaAws, level: 'intermediate' },
    { name: 'HTML5', icon: SiHtml5, level: 'advanced' },
    { name: 'CSS3', icon: SiCss3, level: 'advanced' },
    { name: 'Discord', icon: FaDiscord, level: 'advanced' },
    { name: 'PostgreSQL', icon: SiPostgresql, level: 'advanced' },
    { name: 'Express', icon: SiExpress, level: 'advanced' },
    { name: 'Figma', icon: FaFigma, level: 'intermediate' },
    { name: 'Photoshop', icon: SiAdobephotoshop, level: 'intermediate' },
    { name: 'WordPress', icon: FaWordpress, level: 'intermediate' },
    { name: 'Adobe XD', icon: SiAdobexd, level: 'intermediate' },
    { name: 'Illustrator', icon: SiAdobeillustrator, level: 'intermediate' },
    { name: 'Raspberry Pi', icon: FaRaspberryPi, level: 'intermediate' },
    { name: 'GitHub', icon: FaGithub, level: 'advanced' },
    { name: 'Java', icon: FaJava, level: 'intermediate' },
    { name: 'JavaScript', icon: SiJavascript, level: 'advanced' },
    { name: 'MongoDB', icon: SiMongodb, level: 'intermediate' },
    { name: 'MySQL', icon: SiMysql, level: 'advanced' },
    { name: 'Node.js', icon: FaNodeJs, level: 'advanced' },
    { name: 'Postman', icon: SiPostman, level: 'advanced' },
    { name: 'Python', icon: FaPython, level: 'intermediate' },
    { name: 'React', icon: FaReact, level: 'advanced' },
    { name: 'React Native', icon: FaReact, level: 'intermediate' },
    { name: 'TypeScript', icon: SiTypescript, level: 'advanced' },
    { name: 'Twitter', icon: FaTwitter, level: 'advanced' },
    { name: 'Gmail', icon: SiGmail, level: 'advanced' },
    { name: 'Instagram', icon: FaInstagram, level: 'advanced' },
    { name: 'Flutter', icon: SiFlutter, level: 'intermediate' },
    { name: 'Angular', icon: SiAngular, level: 'advanced' },
    { name: 'Kotlin', icon: SiKotlin, level: 'intermediate' },
    { name: 'Next.js', icon: SiNextdotjs, level: 'advanced' },
    { name: 'PHP', icon: FaPhp, level: 'intermediate' },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-white/50">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Skills & Tecnologías
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stack tecnológico y competencias técnicas que aplico en el desarrollo de soluciones robustas y escalables.
          </p>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill.name}
              icon={skill.icon}
              level={skill.level}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;