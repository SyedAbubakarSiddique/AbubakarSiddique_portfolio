let audioCtx: AudioContext | null = null;

const initAudio = () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
};

export const playTick = (isMuted: boolean) => {
  if (isMuted) return;
  initAudio();
  if (!audioCtx) return;

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(800, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.05);

  gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + 0.05);
};

export const playPowerUp = (isMuted: boolean) => {
  if (isMuted) return;
  initAudio();
  if (!audioCtx) return;

  const osc1 = audioCtx.createOscillator();
  const osc2 = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc1.type = 'sine';
  osc2.type = 'square';

  osc1.frequency.setValueAtTime(200, audioCtx.currentTime);
  osc1.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.5);

  osc2.frequency.setValueAtTime(204, audioCtx.currentTime);
  osc2.frequency.exponentialRampToValueAtTime(810, audioCtx.currentTime + 0.5);

  gain.gain.setValueAtTime(0, audioCtx.currentTime);
  gain.gain.linearRampToValueAtTime(0.2, audioCtx.currentTime + 0.1);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.8);

  osc1.connect(gain);
  osc2.connect(gain);
  gain.connect(audioCtx.destination);

  osc1.start();
  osc2.start();
  osc1.stop(audioCtx.currentTime + 0.8);
  osc2.stop(audioCtx.currentTime + 0.8);
};

export const playBotChirp = (isMuted: boolean) => {
  if (isMuted) return;
  initAudio();
  if (!audioCtx) return;

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'square';
  
  // First beep
  osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
  gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
  gain.gain.setValueAtTime(0, audioCtx.currentTime + 0.05);
  
  // Second beep
  osc.frequency.setValueAtTime(1500, audioCtx.currentTime + 0.1);
  gain.gain.setValueAtTime(0.1, audioCtx.currentTime + 0.1);
  gain.gain.setValueAtTime(0, audioCtx.currentTime + 0.15);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + 0.2);
};
