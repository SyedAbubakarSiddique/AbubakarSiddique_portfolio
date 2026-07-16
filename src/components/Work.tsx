import { useState } from "react";
import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MdArrowOutward, MdChevronLeft, MdChevronRight, MdSchool, MdCheckCircle } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import NodeFlowMap from "./NodeFlowMap";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "SPACE FIGHTER",
    category: "Game Development",
    description: "A 2D action space shooting game converted into an APK application with gameplay mechanics and interactive animations LIVE DEMO: https://space-fighter-23d86.web.app/.",
    tools: ["HTML", "java script", "firebase"],
    images: 6, // Number of placeholder image containers
    imageUrls: [
      "/images/space-fighter1.jpeg",
      "/images/space-fighter2.jpeg",
      "/images/space-fighter3.jpeg",
      "/images/space-fighter4.jpeg",
      "/images/space-fighter5.jpeg",
      "/images/space-fighter6.jpeg",
    ]
  },
  {
    title: "AI WORKFLOW AUTOMATION SYSTEM",
    category: "AI & AUTOMATION",
    description: "An intelligent workflow automation system built using n8n for task automation, reminders, notifications, and productivity management. The system connects multiple services and automates repetitive workflows using AI-powered logic and triggers.",
    tools: ["n8n", "Automation", "AI Workflows", "API Integration", "Productivity"],
    images: 2,
    imageUrls: [
      "/images/workflow1.png",
      "/images/workflow2.png"
    ]
  },
  {
    title: "CERTIFICATES & ACHIEVEMENTS",
    category: "CERTIFICATIONS",
    description: "A collection of academic, technical, and quiz participation certificates showcasing my learning journey, technical skills, and extracurricular achievements.",
    tools: ["Web UI", "Interactive Forms"],
    images: 5,
    imageUrls: [
      "/images/2nd puc certificate.png",
      "/images/certicate1.jpeg",
      "/images/certicate2.jpeg",
      "/images/certicate3.jpeg",
      "/images/certicate4.jpeg"
    ],
    imageTitles: [
      "II PUC Academic Excellence Certificate (93%)",
      "Microsoft Excel Associate Certificate",
      "Indian Navy THINQ 2025 quiz Certificate",
      "Literary Presentation Competition Certificate",
      "MAHE BLRU Inter School Quiz Certificate"
    ]
  },
  {
    title: "TROPHIES & ACHIEVEMENTS",
    category: "AWARDS & RECOGNITION",
    description: "A collection of my academic awards, competition trophies, literary recognitions, quiz participation certificates, and educational achievements earned throughout my student journey.",
    tools: ["Gallery", "CSS Grid"],
    images: 4,
    imageUrls: [
      "/images/2nd puc trophy.png",
      "/images/trophy1.jpeg",
      "/images/trophy2.jpeg",
      "/images/trophy3.jpeg"
    ],
    imageTitles: [
      "Academic Excellence Award (2026)",
      "Academic & Literary Achievement Collection",
      "Academic and quiz trophy show case",
      "MAHE BLRU Quiz & Achievement Awards"
    ],
    imageDescriptions: [
      "Awarded by Al-Ameen Pre-University College for outstanding academic performance in the II PUC Board Examination (Commerce), securing 93% and being recognized among the top-performing students.",
      "A collection of trophies and medals awarded for consistent academic excellence and literary presentations.",
      "A showcase of various academic, sports, and quiz trophies earned throughout my educational journey.",
      "Recognized for exceptional performance in the MAHE BLRU Inter School Quiz 3.0, demonstrating strong general knowledge and critical thinking."
    ]
  }
];

const mobileProjects = [
  {
    title: "LifeFlow AI",
    category: "Mobile App & AI",
    description: "LifeFlow AI is a premium, privacy-first productivity assistant designed to organize your tasks, habits, finances, and sleep records in one beautiful place. Powered by Aura, an advanced offline AI brain, you can chat with the app naturally to add, track, search, or bulk-delete your records instantly without needing the internet. Since everything runs 100% offline, your personal data stays completely private and secure on your device. Wrapped in a stunning glassmorphic design with fluid animations and customizable themes, LifeFlow AI makes managing your daily routines, budget, and goals effortless and rewarding.",
    tools: ["Flutter", "SQLite", "Local LLM", "Aura AI"],
    brandColor: "16, 185, 129",
    imageUrls: [
      "/images/LifeFlow_AI/Lifeflow_AI1.jpeg",
      "/images/LifeFlow_AI/Lifeflow_AI2.jpeg",
      "/images/LifeFlow_AI/Lifeflow_AI3.jpeg",
      "/images/LifeFlow_AI/Lifeflow_AI4.jpeg",
      "/images/LifeFlow_AI/Lifeflow_AI5.jpeg",
    ]
  },
  {
    title: "StudyFlow AI",
    category: "Web App & Education",
    description: "StudyFlow AI is a premium, AI-powered academic planner and virtual study coach built with React and Zustand. It helps students track their syllabus, manage daily timetables, and earn XP and study streaks to stay motivated. The app features a powerful \"Projects\" tab that automatically breaks down assignments into milestones and generates interactive, zoomable React Flow architecture diagrams. At the core of the app is the \"AI Coach\" chat interface, powered by Groq (Llama 3) or Google Gemini. This intelligent assistant doesn't just answer questions—it can dynamically generate quizzes, instantly schedule tasks onto your calendar, draw diagrams, and summarize notes on the fly. The entire experience is wrapped in a highly responsive, modern glassmorphic UI with smooth animations and dynamic theming.",
    tools: ["React", "Zustand", "React Flow", "Gemini API", "Groq"],
    brandColor: "16, 201, 150",
    imageUrls: [
      "/images/StudyFlow_AI/StudyFlowAi_1.jpeg",
      "/images/StudyFlow_AI/StudyFlowAi_2.jpeg",
      "/images/StudyFlow_AI/StudyFlowAi_3.jpeg",
      "/images/StudyFlow_AI/StudyFlowAi_4.jpeg",
      "/images/StudyFlow_AI/StudyFlowAi_5.jpeg",
      "/images/StudyFlow_AI/StudyFlowAi_6.jpeg",
      "/images/StudyFlow_AI/StudyFlowAi_7.jpeg",
      "/images/StudyFlow_AI/StudyFlowAi_8.jpeg",
      "/images/StudyFlow_AI/StudyFlowAi_9.jpeg",
      "/images/StudyFlow_AI/StudyFlowAi_10.jpeg",
    ]
  },
  {
    title: "Naxora",
    category: "Web & Mobile Workflow",
    description: "Naxora is a real-time team collaboration and task management application built using React, Tailwind CSS, and Firebase for secure, instantaneous cross-device synchronization. I engineered a role-based architecture that allows team owners to generate invite codes, onboard members, and oversee operations from a centralized dashboard. To maximize productivity, the app features a proprietary Urgency Engine that algorithmically ranks tasks based on dynamic deadlines and priority weights. The web platform is compiled into a fully native Android APK using Capacitor to leverage mobile capabilities. Additionally, I designed a hybrid notification infrastructure utilizing Firebase Cloud Messaging for background push alerts and a custom event-driven In-App Toast system for live UI updates with audio triggers. The app ensures data integrity via 24-hour edit locks on completed tasks and delivers a premium user experience through an interactive calendar timeline and modern micro-animations.",
    tools: ["React", "Tailwind CSS", "Firebase", "Capacitor", "FCM"],
    brandColor: "0, 113, 227",
    imageUrls: [
      "/images/Naxora/Naxora1.jpeg",
      "/images/Naxora/Naxora2.jpeg",
      "/images/Naxora/Naxora3.jpeg",
      "/images/Naxora/Naxora4.jpeg",
      "/images/Naxora/Naxora5.jpeg",
      "/images/Naxora/Naxora6.jpeg",
      "/images/Naxora/Naxora7.jpeg",
    ]
  }
];

const Work = () => {
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [selectedTrophy, setSelectedTrophy] = useState<number | null>(null);
  useGSAP(() => {
    const cards = gsap.utils.toArray(".project-card, .space-fighter-showcase, .mobile-lab-showcase");

    cards.forEach((card: any, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    });
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2 className="work-heading">
          My <span>Projects</span>
        </h2>

        <div className="projects-wrapper">
          {/* 1. Space Fighter Project Card */}
          <div className="space-fighter-showcase">
            <div className="sf-content">
              <span className="sf-category">{projects[0].category}</span>
              <h3 className="sf-title">{projects[0].title}</h3>
              <p className="sf-desc">{projects[0].description.replace(' LIVE DEMO: https://space-fighter-23d86.web.app/.', '')}</p>
              <div className="sf-tools">
                {projects[0].tools.map((tool, i) => (
                  <span key={i} className="sf-tool">{tool}</span>
                ))}
              </div>
              <a href="https://space-fighter-23d86.web.app/" target="_blank" className="sf-live-btn" data-cursor="icons">
                PLAY LIVE DEMO <MdArrowOutward />
              </a>
            </div>
            <div className="sf-visuals">
              <div className="macbook-mockup">
                <div className="macbook-screen">
                  <div className="macbook-slider" style={{ width: `${projects[0].imageUrls ? projects[0].imageUrls.length * 100 : 100}%` }}>
                    {projects[0].imageUrls?.map((url, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="macbook-slide"
                        style={{
                          backgroundImage: `url(${url})`,
                          width: `${100 / (projects[0].imageUrls ? projects[0].imageUrls.length : 1)}%`
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="macbook-base">
                  <div className="macbook-notch"></div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. AI Workflow Automation System Card */}
          <div className="project-card">
            <div className="project-info">
              <div className="project-header">
                <h3>{projects[1].title}</h3>
                <span className="project-category">{projects[1].category}</span>
              </div>
              <p className="project-desc">{projects[1].description}</p>
              <div className="project-tools">
                {projects[1].tools.map((tool, i) => (
                  <span key={i} className="tool-tag">{tool}</span>
                ))}
              </div>
            </div>
            <NodeFlowMap />
          </div>

          {/* 3. Mobile Applications Lab (Interactive iPhone Simulator) */}
          <div className="mobile-lab-showcase">
            <div className="mobile-lab-content">
              <span className="mobile-lab-category">Mobile APPLICATIONS</span>
              <h3 className="mobile-lab-title">PROJECTS I HAVE BUILT</h3>
              <p className="mobile-lab-desc">
                Explore applications designed to improve productivity, learning, and digital collaboration. Each project combines thoughtful design, practical functionality, and modern technology to solve real-world problems while delivering a smooth user experience
              </p>

              {/* iOS style dock switcher */}
              <div className="app-switcher-dock">
                {mobileProjects.map((app, idx) => (
                  <button
                    key={idx}
                    className={`app-dock-item ${activeAppIndex === idx ? 'active' : ''}`}
                    onClick={() => {
                      setActiveAppIndex(idx);
                      setActiveSlideIndex(0);
                    }}
                    data-cursor="disable"
                  >
                    <div className="app-dock-icon" style={{ borderColor: `rgba(${app.brandColor}, 0.3)` }}>
                      {idx === 0 ? <FaRobot style={{ color: '#10b981' }} /> :
                        idx === 1 ? <MdSchool style={{ color: '#10c996' }} /> :
                          <MdCheckCircle style={{ color: '#0071e3' }} />}
                    </div>
                    <span className="app-dock-label">{app.title}</span>
                  </button>
                ))}
              </div>

              {/* Active App Text Details */}
              <div className="active-app-details">
                <h4 style={{ color: `rgb(${mobileProjects[activeAppIndex].brandColor})` }}>
                  {mobileProjects[activeAppIndex].title}
                </h4>
                <span className="active-app-category">{mobileProjects[activeAppIndex].category}</span>
                <p>{mobileProjects[activeAppIndex].description}</p>

                <div className="active-app-tools">
                  {mobileProjects[activeAppIndex].tools.map((tool, i) => (
                    <span key={i} className="sf-tool">{tool}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* iPhone Simulator Panel */}
            <div className="mobile-lab-visuals">
              {/* Brand Accent Glowing Orb behind the phone */}
              <div
                className="iphone-glow-orb"
                style={{
                  background: `radial-gradient(circle, rgba(${mobileProjects[activeAppIndex].brandColor}, 0.25) 0%, transparent 70%)`
                }}
              />

              <div className="iphone-mockup">
                {/* iPhone Bezel / Frame */}
                <div
                  className="iphone-bezel"
                  style={{
                    boxShadow: `0px 20px 45px -10px rgba(${mobileProjects[activeAppIndex].brandColor}, 0.25), 0px 4px 12px rgba(0, 0, 0, 0.15)`
                  }}
                >
                  {/* Speaker Notch */}
                  <div className="iphone-notch">
                    <div className="iphone-camera"></div>
                    <div className="iphone-speaker"></div>
                  </div>

                  {/* Dynamic Screen */}
                  <div className="iphone-screen">
                    <div className="iphone-slider">
                      {mobileProjects[activeAppIndex].imageUrls.map((url, imgIdx) => (
                        <div
                          key={imgIdx}
                          className={`iphone-slide ${activeSlideIndex === imgIdx ? 'active' : ''}`}
                          style={{ backgroundImage: `url(${url})` }}
                        />
                      ))}
                    </div>

                    {/* Navigation controls overlayed inside the screen */}
                    <button
                      className="iphone-nav-btn prev"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveSlideIndex(prev => (prev === 0 ? mobileProjects[activeAppIndex].imageUrls.length - 1 : prev - 1));
                      }}
                      data-cursor="disable"
                    >
                      <MdChevronLeft />
                    </button>

                    <button
                      className="iphone-nav-btn next"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveSlideIndex(prev => (prev === mobileProjects[activeAppIndex].imageUrls.length - 1 ? 0 : prev + 1));
                      }}
                      data-cursor="disable"
                    >
                      <MdChevronRight />
                    </button>

                    {/* Pagination Dots */}
                    <div className="iphone-pagination">
                      {mobileProjects[activeAppIndex].imageUrls.map((_, dotIdx) => (
                        <span
                          key={dotIdx}
                          className={`pagination-dot ${activeSlideIndex === dotIdx ? 'active' : ''}`}
                          onClick={() => setActiveSlideIndex(dotIdx)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Certificates Card */}
          <div className="project-card">
            <div className="project-info">
              <div className="project-header">
                <h3>{projects[2].title}</h3>
                <span className="project-category">{projects[2].category}</span>
              </div>
              <p className="project-desc">{projects[2].description}</p>
              <div className="project-tools">
                {projects[2].tools.map((tool, i) => (
                  <span key={i} className="tool-tag">{tool}</span>
                ))}
              </div>
            </div>
            <div className="certificates-showcase">
              {projects[2].imageUrls?.map((url, imgIndex) => (
                <div className="cert-card" key={imgIndex}>
                  <div
                    className="cert-img-bg"
                    style={{ backgroundImage: `url("${url}")` }}
                  />
                  <div className="cert-info">
                    <h4>{projects[2].imageTitles?.[imgIndex]}</h4>
                    <div className="cert-view-btn">
                      <MdArrowOutward />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Trophies Card */}
          <div className="project-card">
            <div className="project-info">
              <div className="project-header">
                <h3>{projects[3].title}</h3>
                <span className="project-category">{projects[3].category}</span>
              </div>
              <p className="project-desc">{projects[3].description}</p>
              <div className="project-tools">
                {projects[3].tools.map((tool, i) => (
                  <span key={i} className="tool-tag">{tool}</span>
                ))}
              </div>
            </div>
            <div className="trophies-bento">
              {projects[3].imageUrls?.map((url, imgIndex) => (
                <div 
                  className={`trophy-card trophy-card-${imgIndex + 1} ${selectedTrophy === imgIndex ? 'expanded' : ''}`} 
                  key={imgIndex}
                  onClick={() => setSelectedTrophy(imgIndex)}
                >
                  <div
                    className="trophy-img"
                    style={{ backgroundImage: `url("${url}")` }}
                  />
                  
                  {/* Default Overlay */}
                  <div className={`trophy-overlay ${selectedTrophy === imgIndex ? 'hidden' : ''}`}>
                    <div className="trophy-glass-pill">
                      <span>{projects[3].imageTitles?.[imgIndex]}</span>
                      <MdArrowOutward className="trophy-icon" />
                    </div>
                  </div>

                  {/* Expanded Detail Overlay */}
                  {selectedTrophy === imgIndex && (
                    <div className="trophy-detail-bubble">
                      <button 
                        className="trophy-back-btn" 
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          setSelectedTrophy(null); 
                        }}
                      >
                        <MdChevronLeft /> Back
                      </button>
                      <div className="trophy-detail-content">
                        <h4>{projects[3].imageTitles?.[imgIndex]}</h4>
                        <p>{(projects[3] as any).imageDescriptions?.[imgIndex]}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
