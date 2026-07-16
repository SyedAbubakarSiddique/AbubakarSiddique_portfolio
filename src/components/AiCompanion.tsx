import React, { useState, useEffect } from 'react';
import { FaRobot } from 'react-icons/fa';
import { useSound } from './SoundContext';
import { playBotChirp } from './utils/SoundEngine';
import './styles/AiCompanion.css';

const AiCompanion = () => {
  const { isMuted } = useSound();
  const [message, setMessage] = useState<string>("Hi! I'm Syed's AI Assistant. Scroll down to see his work!");
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (!element) return;

      let newMessage = "";

      if (element.closest('.space-fighter-showcase')) {
        newMessage = "Syed built this entire game! A massive technical achievement.";
      } else if (element.closest('.node-flow-container')) {
        newMessage = "This is an automated workflow Syed designed using n8n and OpenAI!";
      } else if (element.closest('.certificates-showcase') || element.closest('.trophies-bento')) {
        newMessage = "Syed's certifications and achievements! Proving his dedication.";
      } else if (element.closest('.skill-sphere-section') || element.closest('.techstack')) {
        newMessage = "Look at all these technologies Syed has mastered!";
      } else if (element.closest('.contact-section')) {
        newMessage = "Ready to hire Syed? Send him a message right here!";
      } else if (element.closest('.career-timeline') || element.closest('.career-info-box')) {
        newMessage = "Syed's milestones! Currently building real-world projects.";
      }

      if (newMessage) {
        setMessage(newMessage);
        setIsVisible(true);
        clearTimeout(timeoutId);
        // Hide the message after they move away for 4 seconds
        timeoutId = setTimeout(() => {
          setIsVisible(false);
        }, 4000);
      }
    };

    // Show initial message for 5 seconds
    timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="ai-companion-wrapper">
      <div 
        className={`ai-speech-bubble ${isVisible || isHovering ? 'visible' : 'hidden'}`}
      >
        <p>{message}</p>
      </div>
      <div 
        className="ai-bot-core"
        onMouseEnter={() => {
          setIsHovering(true);
          if (!isVisible) {
            setMessage("Need help? I'm right here!");
            playBotChirp(isMuted);
          }
        }}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="ai-bot-glow"></div>
        <FaRobot className="ai-bot-icon" />
      </div>
    </div>
  );
};

export default AiCompanion;
