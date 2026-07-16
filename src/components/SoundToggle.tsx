import React from 'react';
import { MdVolumeUp, MdVolumeOff } from 'react-icons/md';
import { useSound } from './SoundContext';
import './styles/SoundToggle.css';

const SoundToggle = () => {
  const { isMuted, toggleMute } = useSound();

  return (
    <button 
      className={`fixed-sound-toggle ${isMuted ? 'muted' : ''}`}
      onClick={toggleMute}
      title={isMuted ? "Unmute UI Sounds" : "Mute UI Sounds"}
      data-cursor="disable"
    >
      <div className="sound-toggle-icon">
        {isMuted ? <MdVolumeOff /> : <MdVolumeUp />}
      </div>
      <span className="sound-toggle-text">{isMuted ? "SOUND OFF" : "SOUND ON"}</span>
    </button>
  );
};

export default SoundToggle;
