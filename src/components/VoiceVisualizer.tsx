import React, { useEffect, useState } from 'react';
import { Mic } from 'lucide-react';

interface VoiceVisualizerProps {
  isActive: boolean;
  className?: string;
}

export function VoiceVisualizer({ isActive, className = '' }: VoiceVisualizerProps) {
  const [bars, setBars] = useState(Array(5).fill(0));

  useEffect(() => {
    if (!isActive) {
      setBars(Array(5).fill(0));
      return;
    }

    const interval = setInterval(() => {
      setBars(prev => prev.map(() => Math.random() * 100));
    }, 150);

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div className={`flex items-center justify-center space-x-1 ${className}`}>
      <Mic className="w-4 h-4 text-amber-400" />
      {bars.map((height, index) => (
        <div
          key={index}
          className="w-1 bg-gradient-to-t from-amber-500 to-amber-300 rounded-full transition-all duration-150"
          style={{
            height: `${Math.max(8, height * 0.3)}px`,
            opacity: isActive ? 1 : 0.3
          }}
        />
      ))}
    </div>
  );
}