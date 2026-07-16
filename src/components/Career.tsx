import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./styles/Career.css";

gsap.registerPlugin(ScrollTrigger);

const Career = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !timelineRef.current) return;

    // Animate the central timeline beam height based on scroll
    gsap.to(timelineRef.current, {
      maxHeight: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 0.5,
      },
    });

    // Animate individual milestone boxes to glow when reached
    const boxes = gsap.utils.toArray<HTMLElement>(".career-info-box");
    boxes.forEach((box) => {
      ScrollTrigger.create({
        trigger: box,
        start: "top center",
        toggleClass: { targets: box, className: "active-milestone" },
      });
    });

    // Animate skill cards
    const skillCards = gsap.utils.toArray<HTMLElement>(".skill-group-card");
    skillCards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: (index % 3) * 0.1,
        ease: "power3.out"
      });
    });
  }, { scope: containerRef });

  return (
    <div className="career-section section-container" ref={containerRef}>
      <div className="career-container">
        <h2>
          MY SKILLS <span>&</span>
          <br /> ACHIEVEMENTS
        </h2>
        <div className="career-info">
          {/* The glowing beam background */}
          <div className="career-timeline-bg"></div>
          {/* The animated growing beam */}
          <div className="career-timeline" ref={timelineRef}>
            <div className="career-dot"></div>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Completed SSLC</h4>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed a strong interest in programming, technology, and software development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Academic Achievement</h4>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Scored 93.33% in 2nd PUC and secured 5th Rank, demonstrating dedication, discipline, and consistent learning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Building Real-World Projects</h4>
              </div>
              <h3>Present</h3>
            </div>
            <p>
              Currently developing AI-powered applications, modern websites, productivity software, and interactive digital experiences while pursuing a Bachelor's degree in Computer Applications (BCA).
            </p>
          </div>
        </div>

        {/* Grouped Skills Section */}
        <div className="skills-grid-container">
          <div className="skills-bg-elements">
            <div className="skill-glow-1"></div>
            <div className="skill-glow-2"></div>
          </div>
          <h3 className="skills-grid-title">Technical Expertise</h3>
          <div className="skills-grid">
            <div className="skill-group-card">
              <h4>💻 Programming Languages</h4>
              <div className="skill-tags">
                <span>Python</span><span>JavaScript</span><span>SQL</span><span>HTML5</span><span>CSS3</span>
              </div>
            </div>
            <div className="skill-group-card">
              <h4>📱 Mobile App Development</h4>
              <div className="skill-tags">
                <span>Flutter</span><span>Android SDK</span><span>Firebase</span><span>Supabase</span><span>SQLite</span><span>Capacitor</span><span>Responsive Mobile UI</span>
              </div>
            </div>
            <div className="skill-group-card">
              <h4>🌐 Web Development</h4>
              <div className="skill-tags">
                <span>React</span><span>Flask</span><span>REST APIs</span><span>Responsive Design</span><span>Tailwind CSS</span><span>Vite</span>
              </div>
            </div>
            <div className="skill-group-card">
              <h4>🤖 Artificial Intelligence</h4>
              <div className="skill-tags">
                <span>Prompt Engineering</span><span>Offline AI</span><span>Google Gemini API</span><span>Local LLM Integration</span><span>AI Assistant Development</span><span>AI Workflow Design</span><span>Natural Language Processing</span><span>AI Automation</span>
              </div>
            </div>
            <div className="skill-group-card">
              <h4>☁️ Backend & Database</h4>
              <div className="skill-tags">
                <span>Firebase Authentication</span><span>Firestore</span><span>Supabase Database</span><span>SQLite</span><span>API Integration</span><span>JSON</span><span>CRUD Operations</span>
              </div>
            </div>
            <div className="skill-group-card">
              <h4>🛠 Development Tools</h4>
              <div className="skill-tags">
                <span>Git</span><span>GitHub</span><span>VS Code</span><span>Android Studio</span><span>Firebase Console</span><span>Supabase Dashboard</span><span>Postman</span>
              </div>
            </div>
            <div className="skill-group-card">
              <h4>🎨 UI / UX Design</h4>
              <div className="skill-tags">
                <span>Liquid Glass UI</span><span>Glassmorphism</span><span>Mobile UI Design</span><span>Responsive Design</span><span>User Experience Design</span><span>Prototyping</span>
              </div>
            </div>
            <div className="skill-group-card">
              <h4>⚡ Automation</h4>
              <div className="skill-tags">
                <span>Telegram Bot Development</span><span>Workflow Automation</span><span>Form Automation</span><span>Database Integration</span><span>Productivity Solutions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="professional-summary-card">
          <p>
            I'm continuously learning new technologies and building projects that strengthen my skills in software engineering, artificial intelligence, and user experience design.
          </p>
          <p>
            My goal is to create software that is not only technically strong but also intuitive, reliable, and impactful.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Career;
