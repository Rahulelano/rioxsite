import React, { useState } from 'react';
import { Cpu } from 'lucide-react';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fallbackLabel?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  className = '',
  priority = false,
  fallbackLabel,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-[#071426] bg-circuit-grid text-[#A8B3C2] p-6 overflow-hidden ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-12 h-12 rounded-lg border border-[#1677FF]/30 bg-[#1677FF]/10 flex items-center justify-center mb-3">
          <Cpu className="w-6 h-6 text-[#1677FF]" />
        </div>
        <span className="text-xs font-medium text-white/90 text-center max-w-xs">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
