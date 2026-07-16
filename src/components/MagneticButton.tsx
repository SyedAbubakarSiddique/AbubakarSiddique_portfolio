import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./styles/MagneticButton.css";

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, onClick, className = "", href }) => {
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const liquidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;
    const liquid = liquidRef.current;

    if (!button || !text || !liquid) return;

    const moveEvent = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = button.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      // Magnetic pull for the button
      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.8,
        ease: "power3.out",
      });

      // Opposite pull for the text inside (parallax)
      gsap.to(text, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.8,
        ease: "power3.out",
      });

      // Move liquid blob towards mouse
      gsap.to(liquid, {
        x: x,
        y: y,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const leaveEvent = () => {
      gsap.to(button, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
      gsap.to(text, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
      gsap.to(liquid, { x: 0, y: 0, duration: 0.8, ease: "power2.out" });
    };

    button.addEventListener("mousemove", moveEvent as EventListener);
    button.addEventListener("mouseleave", leaveEvent);

    return () => {
      button.removeEventListener("mousemove", moveEvent as EventListener);
      button.removeEventListener("mouseleave", leaveEvent);
    };
  }, []);

  const content = (
    <>
      <div className="magnetic-liquid" ref={liquidRef}></div>
      <span ref={textRef} className="magnetic-text">{children}</span>
    </>
  );

  if (href) {
    return (
      // @ts-ignore
      <a href={href} className={`magnetic-btn ${className}`} ref={buttonRef as any} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    // @ts-ignore
    <button className={`magnetic-btn ${className}`} ref={buttonRef as any} onClick={onClick}>
      {content}
    </button>
  );
};

export default MagneticButton;
