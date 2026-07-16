import { useSound } from "./SoundContext";
import { playTick } from "./utils/SoundEngine";
import "./styles/style.css";

const HoverLinks = ({ text, cursor }: { text: string; cursor?: boolean }) => {
  const { isMuted } = useSound();
  
  return (
    <div 
      className="hover-link" 
      data-cursor={!cursor && `disable`}
      onMouseEnter={() => playTick(isMuted)}
    >
      <div className="hover-in">
        {text} <div>{text}</div>
      </div>
    </div>
  );
};

export default HoverLinks;
