// ZAK SHOP — Brand Logo Component
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  width?: number;
  height?: number;
}

export default function Logo({
  className = '',
  variant = 'dark',
  width = 140,
  height = 44,
}: LogoProps) {
  const fill      = variant === 'light' ? '#FFFFFF' : '#0F0F0F';
  const accent    = '#D4AF37'; // subtle gold accent

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 140 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="ZAK SHOP"
      role="img"
    >
      {/* Left vertical bar accent */}
      <rect x="0" y="6" width="3" height="32" fill={accent} />

      {/* Brand wordmark: ZAK */}
      <text
        x="12"
        y="28"
        fontFamily="'Montserrat', 'Helvetica Neue', Arial, sans-serif"
        fontSize="20"
        fontWeight="800"
        letterSpacing="3"
        fill={fill}
      >
        ZAK
      </text>

      {/* Sub-word: SHOP */}
      <text
        x="73"
        y="28"
        fontFamily="'Montserrat', 'Helvetica Neue', Arial, sans-serif"
        fontSize="20"
        fontWeight="300"
        letterSpacing="3"
        fill={fill}
        opacity="0.75"
      >
        SHOP
      </text>

      {/* Thin line separator */}
      <rect x="12" y="33" width="120" height="1" fill={fill} opacity="0.2" />
    </svg>
  );
}

