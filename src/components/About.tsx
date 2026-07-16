import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Hello! I'm Syed Abubakar Siddique.
          {"\n\n"}
          I'm a BCA student and software developer passionate about building meaningful digital products that solve real-world problems.
          {"\n\n"}
          My interests include mobile application development, AI-powered software, modern web development, UI/UX design, and interactive digital experiences.
          {"\n\n"}
          I enjoy turning ideas into working products through continuous learning, experimentation, and hands-on development. Every project I build helps me improve my technical skills while creating solutions that are practical, reliable, and user-focused.
          {"\n\n"}
          I believe great software combines clean design, smooth user experiences, and strong engineering to make technology accessible and useful for everyone.
        </p>
      </div>
    </div>
  );
};

export default About;
