import React, { useState } from 'react';
import { Mic, MicOff, Volume2, Copy, Check } from 'lucide-react';
import { VoiceVisualizer } from './VoiceVisualizer';

interface TranslationBoxProps {
  title: string;
  text: string;
  setText: (text: string) => void;
  placeholder: string;
  isInput: boolean;
  onMicClick?: () => void;
  isListening?: boolean;
  onSpeakClick?: () => void;
  isSpeaking?: boolean;
  micSupported?: boolean;
  speakSupported?: boolean;
}

export function TranslationBox({
  title,
  text,
  setText,
  placeholder,
  isInput,
  onMicClick,
  isListening = false,
  onSpeakClick,
  isSpeaking = false,
  micSupported = false,
  speakSupported = false
}: TranslationBoxProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    if (!text) return;
    
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative">
      <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 group">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-amber-200">{title}</h3>
          
          <div className="flex items-center space-x-2">
            {isInput && micSupported && (
              <button
                onClick={onMicClick}
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isListening 
                    ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' 
                    : 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/30'
                }`}
              >
                {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </button>
            )}
            
            {!isInput && speakSupported && text && (
              <button
                onClick={onSpeakClick}
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isSpeaking 
                    ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' 
                    : 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/30'
                }`}
              >
                <Volume2 className="w-5 h-5" />
              </button>
            )}
            
            {text && (
              <button
                onClick={copyToClipboard}
                className="p-2 rounded-full bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 transition-all duration-300 hover:scale-110"
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </button>
            )}
          </div>
        </div>
        
        {isInput ? (
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={placeholder}
            className="w-full h-32 bg-transparent border-none outline-none resize-none text-white placeholder-gray-400 text-lg leading-relaxed"
          />
        ) : (
          <div className="h-32 overflow-y-auto">
            <p className="text-white text-lg leading-relaxed whitespace-pre-wrap">
              {text || (
                <span className="text-gray-400">{placeholder}</span>
              )}
            </p>
          </div>
        )}
        
        {isListening && (
          <div className="absolute -top-2 -right-2">
            <VoiceVisualizer isActive={isListening} className="bg-black/50 backdrop-blur-sm rounded-full p-2" />
          </div>
        )}
      </div>
    </div>
  );
}