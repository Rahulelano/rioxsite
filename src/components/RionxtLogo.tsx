import React from 'react';
import { RoutePath } from '../data/rionxtData';

interface RionxtLogoProps {
  onNavigate: (path: RoutePath) => void;
  theme?: 'dark' | 'light';
}

export const RionxtLogo: React.FC<RionxtLogoProps> = ({ onNavigate, theme = 'dark' }) => {
  const isDark = theme === 'dark';

  return (
    <a
      href="/"
      onClick={(e) => {
        e.preventDefault();
        onNavigate('/');
      }}
      className="inline-flex items-center gap-3 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677FF] rounded"
      aria-label="RION TECHNOLOGIES (RIONXT) Home"
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <rect
          x="1"
          y="1"
          width="34"
          height="34"
          rx="6"
          fill={isDark ? '#0B1D36' : '#071426'}
          stroke="#1677FF"
          strokeWidth="1.5"
        />
        <path
          d="M10 25V11H17.5C20.2 11 22 12.6 22 15.2C22 17.3 20.7 18.8 18.6 19.2L22.5 25H19.3L15.8 19.5H13V25H10ZM13 17H17.1C18.4 17 19.1 16.3 19.1 15.2C19.1 14.1 18.4 13.5 17.1 13.5H13V17Z"
          fill="#FFFFFF"
        />
        <circle cx="26.5" cy="12.5" r="2" fill="#1677FF" />
        <path
          d="M26.5 14.5V21.5L23.5 24.5"
          stroke="#1677FF"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="23.5" cy="24.5" r="1.5" fill="#A8B3C2" />
      </svg>
      <span
        className={`font-display text-lg font-bold tracking-tight whitespace-nowrap shrink-0 ${
          isDark ? 'text-white' : 'text-[#071426]'
        }`}
      >
        RIONXT <span className="font-normal text-[#A8B3C2] mx-1">·</span>{' '}
        <span className="text-sm font-semibold tracking-normal">RION TECHNOLOGIES</span>
      </span>
    </a>
  );
};
