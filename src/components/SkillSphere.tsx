import React, { useEffect, useRef } from 'react';
import './styles/SkillSphere.css';

const TAGS = [
  "Python", "JavaScript", "SQL", "Flutter", 
  "Firebase", "Supabase", "HTML", "CSS", 
  "React", "Flask", "Google Gemini", "AI APIs", 
  "Prompt Engineering", "AI Workflow Design", "GitHub", 
  "VS Code", "Android Studio"
];

const SkillSphere = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const radius = window.innerWidth > 768 ? 220 : 150;
    const maxSpeed = 0.05;
    const initSpeed = 0.01;
    const size = 1.2;

    let mouseX = initSpeed;
    let mouseY = initSpeed;
    let currentX = initSpeed;
    let currentY = initSpeed;

    const tags: HTMLSpanElement[] = [];

    // Initialize tags
    TAGS.forEach((text) => {
      const span = document.createElement('span');
      span.className = 'sphere-tag';
      span.innerText = text;
      container.appendChild(span);
      tags.push(span);
    });

    // Fibonacci sphere distribution
    const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle
    const elements: { x: number, y: number, z: number, el: HTMLSpanElement }[] = [];

    tags.forEach((tag, i) => {
      const y = 1 - (i / (tags.length - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      elements.push({ x, y, z, el: tag });
    });

    const updatePositions = () => {
      const sinX = Math.sin(currentX);
      const cosX = Math.cos(currentX);
      const sinY = Math.sin(currentY);
      const cosY = Math.cos(currentY);

      elements.forEach(item => {
        // Rotate around Y axis
        let x1 = item.x * cosY + item.z * sinY;
        let z1 = -item.x * sinY + item.z * cosY;

        // Rotate around X axis
        let y1 = item.y * cosX - z1 * sinX;
        let z2 = item.y * sinX + z1 * cosX;

        item.x = x1;
        item.y = y1;
        item.z = z2;

        // Apply perspective
        const scale = (radius + item.z) / (radius * 2);
        const alpha = scale * scale;

        item.el.style.transform = `translate3d(${item.x * radius}px, ${item.y * radius}px, ${item.z * radius}px) scale(${scale * size})`;
        item.el.style.opacity = Math.max(0.1, alpha).toString();
        item.el.style.zIndex = Math.floor(scale * 100).toString();
        
        // Add brightness to elements in front using performant class toggles
        if (scale > 0.6) {
          item.el.classList.add('sphere-front');
        } else {
          item.el.classList.remove('sphere-front');
        }
      });
    };

    let animationFrame: number;
    
    const animate = () => {
      currentX += (mouseY - currentX) * 0.05;
      currentY += (mouseX - currentY) * 0.05;

      updatePositions();
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      mouseX = (x / rect.width) * maxSpeed * 2;
      mouseY = -(y / rect.height) * maxSpeed * 2;
    };
    
    const handleMouseLeave = () => {
      mouseX = initSpeed;
      mouseY = initSpeed;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      tags.forEach(tag => tag.remove());
    };
  }, []);

  return (
    <div className="skill-sphere-section section-container">
      <h2 className="work-heading">My <span>Tech Stack</span></h2>
      <div className="skill-sphere-wrapper">
        <div className="skill-sphere" ref={containerRef}></div>
      </div>
    </div>
  );
};

export default SkillSphere;
