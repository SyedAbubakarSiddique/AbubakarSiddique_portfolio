import { MdArrowOutward, MdCopyright } from "react-icons/md";
import MagneticButton from "./MagneticButton";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:abubakarsiddiq990084@gmail.com" data-cursor="disable">
                abubakarsiddiq990084@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+919900843363" data-cursor="disable">
                +91 9900843363
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px", alignItems: "flex-start" }}>
              <MagneticButton href="https://github.com/SyedAbubakarSiddique">
                Github <MdArrowOutward style={{ marginLeft: "8px" }} />
              </MagneticButton>
              <MagneticButton href="https://www.linkedin.com">
                Linkedin <MdArrowOutward style={{ marginLeft: "8px" }} />
              </MagneticButton>
              <MagneticButton href="https://facebook.com/syedabubakarsiddiq990084">
                Facebook <MdArrowOutward style={{ marginLeft: "8px" }} />
              </MagneticButton>
              <MagneticButton href="https://www.instagram.com/syed.abubakar_siddiq">
                Instagram <MdArrowOutward style={{ marginLeft: "8px" }} />
              </MagneticButton>
            </div>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Syed Abubakar Siddique</span>
            </h2>
            <h5>
              <MdCopyright /> 2024
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
