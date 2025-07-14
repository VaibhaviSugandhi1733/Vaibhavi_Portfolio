import React from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  return (
    <div className="animated-blobs-bg" aria-hidden="true">
      <svg width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="blobs-svg">
        <g>
          <ellipse className="blob blob1" cx="300" cy="300" rx="240" ry="180" fill="#00FFFF" />
          <ellipse className="blob blob2" cx="1100" cy="400" rx="200" ry="160" fill="#FF2D95" />
          <ellipse className="blob blob3" cx="700" cy="700" rx="300" ry="200" fill="#A3E635" />
          <ellipse className="blob blob4" cx="1200" cy="800" rx="180" ry="120" fill="#4ADE80" />
        </g>
      </svg>
      <svg className="waves-svg" width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="wave wave1" d="M0 700 Q 360 650 720 700 T 1440 700" stroke="#00FFFF" strokeWidth="2" fill="none" />
        <path className="wave wave2" d="M0 750 Q 360 800 720 750 T 1440 750" stroke="#FF2D95" strokeWidth="2" fill="none" />
        <path className="wave wave3" d="M0 800 Q 360 750 720 800 T 1440 800" stroke="#A3E635" strokeWidth="2" fill="none" />
      </svg>
      <svg className="particles-svg" width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Dots */}
        <circle className="particle particle1" cx="200" cy="200" r="4" fill="#00FFFF" />
        <circle className="particle particle2" cx="400" cy="600" r="3" fill="#FF2D95" />
        <circle className="particle particle3" cx="900" cy="300" r="5" fill="#A3E635" />
        <circle className="particle particle4" cx="1200" cy="700" r="3.5" fill="#4ADE80" />
        <circle className="particle particle5" cx="700" cy="500" r="4.5" fill="#CCFF00" />
        {/* Lines */}
        <line className="particle-line line1" x1="200" y1="200" x2="400" y2="600" stroke="#00FFFF" strokeWidth="1.5" />
        <line className="particle-line line2" x1="400" y1="600" x2="900" y2="300" stroke="#FF2D95" strokeWidth="1.5" />
        <line className="particle-line line3" x1="900" y1="300" x2="1200" y2="700" stroke="#A3E635" strokeWidth="1.5" />
        <line className="particle-line line4" x1="1200" y1="700" x2="700" y2="500" stroke="#4ADE80" strokeWidth="1.5" />
        <line className="particle-line line5" x1="700" y1="500" x2="200" y2="200" stroke="#CCFF00" strokeWidth="1.5" />
      </svg>
    </div>
  );
};

export default AnimatedBackground; 