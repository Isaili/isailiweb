import { Orb } from '@yogesharc/thinking-orbs';
import './OrbLoader.css';

const OrbLoader = ({ text = 'Cargando...', fullScreen = false, state = 'reasoning' }) => (
  <div className={fullScreen ? 'orb-loader orb-loader--fullscreen' : 'orb-loader'} role="status">
    <Orb state={state} size={64} label={text} className="text-gray-700" />
    <span className="orb-loader-text">{text}</span>
  </div>
);

export default OrbLoader;
