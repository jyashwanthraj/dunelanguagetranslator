import React from 'react';
import { ArrowLeftRight } from 'lucide-react';

interface LanguageSwitchProps {
  fromDune: boolean;
  onSwitch: () => void;
}

export function LanguageSwitch({ fromDune, onSwitch }: LanguageSwitchProps) {
  return (
    <div className="flex items-center justify-center my-8">
      <div className="flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-2xl p-4 border border-amber-500/20">
        <div className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
          !fromDune ? 'bg-amber-500 text-black' : 'text-amber-200 hover:text-amber-100'
        }`}>
          English
        </div>
        
        <button
          onClick={onSwitch}
          className="p-2 rounded-full bg-amber-500/20 hover:bg-amber-500/30 transition-all duration-300 hover:scale-110"
        >
          <ArrowLeftRight className="w-5 h-5 text-amber-400" />
        </button>
        
        <div className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
          fromDune ? 'bg-amber-500 text-black' : 'text-amber-200 hover:text-amber-100'
        }`}>
          Dune
        </div>
      </div>
    </div>
  );
}