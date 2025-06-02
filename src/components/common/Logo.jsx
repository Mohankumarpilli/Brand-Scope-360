// src/components/common/Logo.jsx
import React from 'react';

const Logo = ({ className = "h-12", variant = "default" }) => {
  // For dark backgrounds, use white text. For light backgrounds, use original colors
  const isLight = variant === "light";
  
  return (
    <svg 
      className={className}
      viewBox="0 0 400 150" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Brand Scope 360 Text */}
      {/* <g> */}
        {/* "Brand" text */}
        {/* <text 
          x="10" 
          y="50" 
          fontFamily="Arial, sans-serif" 
          fontSize="48" 
          fontWeight="bold" 
          fill={isLight ? "#000000" : "#FFFFFF"}
        >
          Brand
        </text>
         */}
        {/* "Scope" text - changed from Scop to Scope */}
        {/* <text 
          x="10" 
          y="95" 
          fontFamily="Arial, sans-serif" 
          fontSize="48" 
          fontWeight="bold" 
          fill={isLight ? "#000000" : "#FFFFFF"}
        >
          Scope
        </text>
         */}
        {/* "360" text */}
        {/* <text 
          x="10" 
          y="140" 
          fontFamily="Arial, sans-serif" 
          fontSize="48" 
          fontWeight="bold" 
          fill="#DC2626"
        >
          360
        </text>
      </g> */}
      
      {/* Crosshair/Target Design */}
      <g transform="translate(250, 75)">
        {/* Outer circle segments */}
        <path 
          d="M 0 -50 A 50 50 0 0 1 50 0" 
          stroke={isLight ? "#1A1A1A" : "#E5E5E5"} 
          strokeWidth="8" 
          fill="none"
          strokeLinecap="round"
        />
        <path 
          d="M 50 0 A 50 50 0 0 1 0 50" 
          stroke={isLight ? "#1A1A1A" : "#E5E5E5"} 
          strokeWidth="8" 
          fill="none"
          strokeLinecap="round"
        />
        <path 
          d="M 0 50 A 50 50 0 0 1 -50 0" 
          stroke={isLight ? "#1A1A1A" : "#E5E5E5"} 
          strokeWidth="8" 
          fill="none"
          strokeLinecap="round"
        />
        <path 
          d="M -50 0 A 50 50 0 0 1 0 -50" 
          stroke={isLight ? "#1A1A1A" : "#E5E5E5"} 
          strokeWidth="8" 
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Center circle with dot */}
        <circle 
          cx="0" 
          cy="0" 
          r="20" 
          fill="#DC2626" 
          opacity="0.9"
        />
        <circle 
          cx="0" 
          cy="0" 
          r="8" 
          fill={isLight ? "#000000" : "#FFFFFF"}
        />
        
        {/* Crosshair lines */}
        <line 
          x1="0" 
          y1="-60" 
          x2="0" 
          y2="-30" 
          stroke={isLight ? "#1A1A1A" : "#E5E5E5"} 
          strokeWidth="3"
        />
        <line 
          x1="0" 
          y1="60" 
          x2="0" 
          y2="30" 
          stroke={isLight ? "#1A1A1A" : "#E5E5E5"} 
          strokeWidth="3"
        />
        <line 
          x1="-60" 
          y1="0" 
          x2="-30" 
          y2="0" 
          stroke={isLight ? "#1A1A1A" : "#E5E5E5"} 
          strokeWidth="3"
        />
        <line 
          x1="60" 
          y1="0" 
          x2="30" 
          y2="0" 
          stroke={isLight ? "#1A1A1A" : "#E5E5E5"} 
          strokeWidth="3"
        />
      </g>
    </svg>
  );
};

export default Logo;