import React from 'react';
import './styles/NodeFlowMap.css';
import { MdApi, MdEmail, MdDataObject } from 'react-icons/md';
import { FaRobot, FaDatabase } from 'react-icons/fa';

const NodeFlowMap = () => {
  return (
    <div className="node-flow-container">
      {/* SVG Background Lines */}
      <svg className="node-flow-svg" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Paths connecting nodes */}
        <path id="path-db" className="flow-line" d="M 150 200 C 250 200, 300 200, 400 200" />
        <path id="path-ai" className="flow-line" d="M 400 200 C 400 100, 500 100, 650 100" />
        <path id="path-email" className="flow-line" d="M 400 200 C 400 300, 500 300, 650 300" />
        <path id="path-api" className="flow-line" d="M 400 200 C 500 200, 550 200, 650 200" />

        {/* Animated Particles travelling along paths */}
        <circle r="4" className="flow-packet" filter="url(#glow)">
          <animateMotion dur="2.5s" repeatCount="indefinite">
            <mpath href="#path-db" />
          </animateMotion>
        </circle>
        
        <circle r="4" className="flow-packet" filter="url(#glow)">
          <animateMotion dur="2s" repeatCount="indefinite" begin="1s">
            <mpath href="#path-ai" />
          </animateMotion>
        </circle>
        
        <circle r="4" className="flow-packet" filter="url(#glow)">
          <animateMotion dur="3s" repeatCount="indefinite" begin="0.5s">
            <mpath href="#path-email" />
          </animateMotion>
        </circle>
        
        <circle r="4" className="flow-packet" filter="url(#glow)">
          <animateMotion dur="1.5s" repeatCount="indefinite" begin="1.5s">
            <mpath href="#path-api" />
          </animateMotion>
        </circle>
        
        {/* Additional particles for dense traffic */}
        <circle r="3" className="flow-packet" style={{ opacity: 0.6 }} filter="url(#glow)">
          <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.2s">
            <mpath href="#path-db" />
          </animateMotion>
        </circle>
        <circle r="3" className="flow-packet" style={{ opacity: 0.6 }} filter="url(#glow)">
          <animateMotion dur="2s" repeatCount="indefinite" begin="0.2s">
            <mpath href="#path-ai" />
          </animateMotion>
        </circle>
      </svg>

      {/* Nodes matching SVG path coordinates (absolute positioning) */}
      <div className="node" style={{ left: '18.75%', top: '50%' }}>
        <div className="node-icon-wrapper"><FaDatabase /></div>
        <div className="node-label">Supabase</div>
      </div>

      <div className="node node-core" style={{ left: '50%', top: '50%' }}>
        <div className="node-icon-wrapper"><MdDataObject /></div>
        <div className="node-label">n8n Engine</div>
      </div>

      <div className="node" style={{ left: '81.25%', top: '25%' }}>
        <div className="node-icon-wrapper"><FaRobot /></div>
        <div className="node-label">OpenAI</div>
      </div>

      <div className="node" style={{ left: '81.25%', top: '50%' }}>
        <div className="node-icon-wrapper"><MdApi /></div>
        <div className="node-label">External API</div>
      </div>

      <div className="node" style={{ left: '81.25%', top: '75%' }}>
        <div className="node-icon-wrapper"><MdEmail /></div>
        <div className="node-label">Gmail SMTP</div>
      </div>
    </div>
  );
};

export default NodeFlowMap;
