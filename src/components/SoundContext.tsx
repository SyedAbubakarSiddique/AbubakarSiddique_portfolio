import React, { createContext, useContext, useState, useEffect } from 'react';

interface SoundContextType {
  isMuted: boolean;
  toggleMute: () => void;
}

const SoundContext = createContext<SoundContextType>({
  isMuted: false,
  toggleMute: () => {},
});

export const useSound = () => useContext(SoundContext);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try to load from localStorage, default to false (sound on)
  const [isMuted, setIsMuted] = useState(() => {
    const saved = localStorage.getItem('portfolio-muted');
    return saved === null ? true : saved === 'true';
  });

  const toggleMute = () => {
    setIsMuted((prev) => {
      const newVal = !prev;
      localStorage.setItem('portfolio-muted', String(newVal));
      return newVal;
    });
  };

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute }}>
      {children}
    </SoundContext.Provider>
  );
};
