import React, { useState, useRef, useEffect } from 'react';
import { MdEmail, MdApi, MdStorage, MdCheckCircle } from 'react-icons/md';
import { FaRobot } from 'react-icons/fa';
import { useSound } from './SoundContext';
import { playPowerUp } from './utils/SoundEngine';
import './styles/WorkflowSandbox.css';

interface NodeData {
  id: string;
  type: string;
  icon: React.ReactNode;
  label: string;
  x: number;
  y: number;
  isSnapped: boolean;
}

const WorkflowSandbox = () => {
  const { isMuted } = useSound();
  const containerRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes] = useState<NodeData[]>([
    { id: 'email', type: 'trigger', icon: <MdEmail />, label: 'Email Trigger', x: 40, y: 200, isSnapped: false },
    { id: 'ai', type: 'action', icon: <FaRobot />, label: 'AI Sentiment', x: 260, y: 240, isSnapped: false },
    { id: 'db', type: 'action', icon: <MdStorage />, label: 'Save to DB', x: 480, y: 180, isSnapped: false },
  ]);

  const [isSuccess, setIsSuccess] = useState(false);
  const [draggingId, setDraggingId] = useState<string | null>(null);

  // Define target sockets (fixed positions for pills: 150x50)
  const sockets = [
    { id: 'email', expectedType: 'email', x: 50, y: 50, label: 'Trigger' },
    { id: 'ai', expectedType: 'ai', x: 275, y: 50, label: 'Action 1' },
    { id: 'db', expectedType: 'db', x: 500, y: 50, label: 'Action 2' },
  ];

  const handlePointerDown = (e: React.PointerEvent, id: string) => {
    if (isSuccess) return;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setDraggingId(id);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!draggingId || isSuccess) return;
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - 75; // offset for center of 150px wide pill
    const y = e.clientY - rect.top - 25; // offset for center of 50px tall pill

    setNodes((prev) =>
      prev.map((n) => (n.id === draggingId ? { ...n, x, y, isSnapped: false } : n))
    );
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!draggingId) return;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    
    // Check for snap
    setNodes((prev) => {
      let allSnapped = true;
      const newNodes = prev.map((n) => {
        if (n.id === draggingId) {
          const targetSocket = sockets.find((s) => s.expectedType === n.id);
          if (targetSocket) {
            const dist = Math.hypot(n.x - targetSocket.x, n.y - targetSocket.y);
            if (dist < 60) {
              // Snap to socket
              return { ...n, x: targetSocket.x, y: targetSocket.y, isSnapped: true };
            }
          }
        }
        if (!n.isSnapped) allSnapped = false;
        return n;
      });

      // Check if the current drop caused all 3 to be snapped
      const allThreeSnapped = newNodes.every(n => n.isSnapped);
      if (allThreeSnapped && !isSuccess) {
        setIsSuccess(true);
        playPowerUp(isMuted);
      }

      return newNodes;
    });

    setDraggingId(null);
  };

  return (
    <div className="sandbox-section section-container">
      <div className="sandbox-header">
        <h2>
          Build It <span>Yourself</span>
        </h2>
        <p>Drag the automation nodes into the correct logical order to trigger the workflow.</p>
      </div>

      <div 
        className={`sandbox-canvas ${isSuccess ? 'success-pulse' : ''}`} 
        ref={containerRef}
      >
        {/* Draw connection lines between sockets */}
        <svg className="sandbox-lines">
          <line x1="200" y1="75" x2="275" y2="75" className={`socket-line ${isSuccess ? 'line-active' : ''}`} />
          <line x1="425" y1="75" x2="500" y2="75" className={`socket-line ${isSuccess ? 'line-active' : ''}`} />
        </svg>

        {/* Sockets */}
        {sockets.map((s) => (
          <div 
            key={s.id} 
            className="sandbox-socket" 
            style={{ left: s.x, top: s.y }}
          >
            <span>{s.label}</span>
          </div>
        ))}

        {/* Draggable Nodes */}
        {nodes.map((n) => (
          <div
            key={n.id}
            className={`sandbox-node ${n.isSnapped ? 'snapped' : ''} ${isSuccess ? 'success-node' : ''}`}
            style={{ left: n.x, top: n.y, touchAction: 'none' }}
            onPointerDown={(e) => handlePointerDown(e, n.id)}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            <div className="node-icon">{n.icon}</div>
            <div className="node-label">{n.label}</div>
          </div>
        ))}

        {/* Success Overlay */}
        <div className={`sandbox-success-overlay ${isSuccess ? 'visible' : ''}`}>
          <div className="success-banner">
            <MdCheckCircle className="success-icon" />
            <h3>Workflow Automated!</h3>
            <p>You're ready to hire Syed Abubakar Siddique.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowSandbox;
