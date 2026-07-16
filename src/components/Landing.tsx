import { PropsWithChildren } from "react";
import MagneticButton from "./MagneticButton";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              SYED ABUBAKAR
              <br />
              <span>SIDDIQUE</span>
            </h1>
          </div>
          <div className="landing-info">
            <div className="landing-h2-info" style={{ fontSize: "16px", letterSpacing: "3px", fontWeight: 400, color: "var(--textColorSecondary)", marginBottom: "10px", textTransform: "uppercase" }}>Software Developer • AI Enthusiast • Problem Solver</div>
            <h2 className="landing-info-h2" style={{ margin: 0, fontSize: "clamp(28px, 4.5vw, 50px)", lineHeight: 1.1, fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", color: "var(--textColor)" }}>
              Creating Premium <br />
              <span style={{ color: "var(--accentColor)" }}>Digital Products</span>
            </h2>
            <div style={{ position: 'absolute', bottom: '-100px', left: '0', width: 'max-content' }}>
              <MagneticButton href="#work">
                Explore My Work
              </MagneticButton>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
