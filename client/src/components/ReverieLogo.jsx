import React from 'react';

/**
 * Reverie Emblem Logo Component
 * Authentic vintage billiards brand icon featuring crossed cue sticks,
 * a central 8-ball / cueist medallion, precision angle tick marks, and geometric diamond accents.
 */
const ReverieLogo = ({ className = "w-8 h-8", showText = false, textClassName = "" }) => {
  return (
    <div className="inline-flex items-center space-x-3 group cursor-pointer select-none">
      {/* SVG Emblem Icon */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} transition-transform duration-300 group-hover:scale-105`}
        aria-label="Reverie Billiards Brand Emblem"
      >
        {/* Outer Precision Circular Ring with Tick Marks */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#C5A059"
          strokeWidth="2"
          strokeDasharray="4 3"
          className="opacity-60"
        />

        {/* Outer Solid Brass Border Ring */}
        <circle
          cx="50"
          cy="50"
          r="41"
          stroke="#C5A059"
          strokeWidth="2"
          className="group-hover:stroke-[#D4B36A] transition-colors"
        />

        {/* Crossed Vintage Cue Sticks (X Motif) */}
        <g stroke="#C5A059" strokeWidth="2.5" strokeLinecap="round">
          {/* Cue Stick 1: Top-Left to Bottom-Right */}
          <line x1="20" y1="20" x2="80" y2="80" opacity="0.85" />
          {/* Cue Tip & Joint Accent */}
          <circle cx="23" cy="23" r="2" fill="#C5A059" />
          <circle cx="77" cy="77" r="2.5" fill="#1E4337" stroke="#C5A059" strokeWidth="1" />

          {/* Cue Stick 2: Top-Right to Bottom-Left */}
          <line x1="80" y1="20" x2="20" y2="80" opacity="0.85" />
          {/* Cue Tip & Joint Accent */}
          <circle cx="77" cy="23" r="2" fill="#C5A059" />
          <circle cx="23" cy="80" r="2.5" fill="#1E4337" stroke="#C5A059" strokeWidth="1" />
        </g>

        {/* Central Billiards Medallion (8-Ball Shield) */}
        <circle
          cx="50"
          cy="50"
          r="20"
          fill="#18121E"
          stroke="#C5A059"
          strokeWidth="2"
        />

        {/* Inner White/Cream Cue Ball Circle */}
        <circle
          cx="50"
          cy="50"
          r="10"
          fill="#F4EFE6"
        />

        {/* Iconic Number 8 in Center */}
        <text
          x="50"
          y="54"
          textAnchor="middle"
          fontSize="11"
          fontWeight="900"
          fontFamily="Playfair Display, Georgia, serif"
          fill="#18121E"
        >
          8
        </text>

        {/* Geometric Diamond Accents (Top, Bottom, Left, Right) */}
        <path d="M50 4 L53 8 L50 12 L47 8 Z" fill="#C5A059" />
        <path d="M50 88 L53 92 L50 96 L47 92 Z" fill="#C5A059" />
        <path d="M4 50 L8 47 L12 50 L8 53 Z" fill="#C5A059" />
        <path d="M88 50 L92 47 L96 50 L92 53 Z" fill="#C5A059" />
      </svg>

      {/* Optional Brand Wordmark */}
      {showText && (
        <div className={textClassName}>
          <span className="font-serif text-xl font-bold tracking-widest text-reverie-cream group-hover:text-reverie-brass transition-colors block leading-none">
            REVERIE
          </span>
          <span className="text-[9px] tracking-[0.22em] text-reverie-brass uppercase font-sans font-semibold block mt-1">
            Precision Cueists • 1928
          </span>
        </div>
      )}
    </div>
  );
};

export default ReverieLogo;
