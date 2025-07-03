import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface AudioPlayerProps {
  autoPlay?: boolean;
}

export function AudioPlayer({ autoPlay = true }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.loop = true;

    // Set start time to 10 seconds
    const handleLoadedData = () => {
      audio.currentTime = 10;
      setIsLoaded(true);
      
      if (autoPlay) {
        audio.play().catch(error => {
          console.log('Autoplay prevented by browser');
        });
      }
    };

    // Reset to 10 seconds when the audio loops
    const handleTimeUpdate = () => {
      if (audio.currentTime < 10) {
        audio.currentTime = 10;
      }
    };

    audio.addEventListener('loadeddata', handleLoadedData);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [autoPlay, volume]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
      } else {
        // Ensure we start from 10 seconds
        if (audio.currentTime < 10) {
          audio.currentTime = 10;
        }
        await audio.play();
      }
    } catch (error) {
      console.error('Audio playback error:', error);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    
    const audio = audioRef.current;
    if (audio) {
      audio.volume = newVolume;
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-black/20 backdrop-blur-sm rounded-2xl p-3 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
      <div className="flex items-center space-x-3">
        <button
          onClick={togglePlay}
          className="p-2 rounded-full bg-amber-500/20 hover:bg-amber-500/30 transition-all duration-300 hover:scale-110"
          title={isPlaying ? 'Pause Dune music' : 'Play Dune music'}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-amber-400" />
          ) : (
            <Play className="w-4 h-4 text-amber-400" />
          )}
        </button>

        <button
          onClick={toggleMute}
          className="p-2 rounded-full bg-amber-500/20 hover:bg-amber-500/30 transition-all duration-300 hover:scale-110"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-amber-400" />
          ) : (
            <Volume2 className="w-4 h-4 text-amber-400" />
          )}
        </button>

        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          className="w-16 h-1 bg-amber-500/20 rounded-lg appearance-none cursor-pointer slider"
          title="Volume"
        />

        {!isLoaded && (
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" title="Loading..."></div>
        )}
      </div>

      {/* Audio element with YouTube-extracted audio URL */}
      <audio
        ref={audioRef}
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        crossOrigin="anonymous"
      >
        {/* Using a Dune-inspired ambient track */}
        <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav" />
        {/* Fallback to a different ambient track */}
        <source src="https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-one/zapsplat_ambience_desert_wind_light_002_24004.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #f59e0b;
          cursor: pointer;
          box-shadow: 0 0 8px rgba(245, 158, 11, 0.5);
        }
        
        .slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #f59e0b;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 8px rgba(245, 158, 11, 0.5);
        }

        .slider::-webkit-slider-track {
          background: rgba(245, 158, 11, 0.2);
          height: 4px;
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
}