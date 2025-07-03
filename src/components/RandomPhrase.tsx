import React, { useState } from 'react';
import { Shuffle } from 'lucide-react';
import { getRandomDunePhrase } from '../data/duneLanguage';

interface RandomPhraseProps {
  onPhraseSelect: (phrase: string) => void;
}

export function RandomPhrase({ onPhraseSelect }: RandomPhraseProps) {
  const [currentPhrase, setCurrentPhrase] = useState(getRandomDunePhrase());

  const getNewPhrase = () => {
    const newPhrase = getRandomDunePhrase();
    setCurrentPhrase(newPhrase);
  };

  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-medium text-amber-200">Try this phrase:</h4>
        <button
          onClick={getNewPhrase}
          className="p-1 rounded-full bg-amber-500/20 hover:bg-amber-500/30 transition-all duration-300 hover:scale-110"
        >
          <Shuffle className="w-4 h-4 text-amber-400" />
        </button>
      </div>
      
      <button
        onClick={() => onPhraseSelect(currentPhrase.english)}
        className="w-full text-left p-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 transition-all duration-300 border border-amber-500/20 hover:border-amber-500/40"
      >
        <p className="text-white text-sm mb-1">{currentPhrase.english}</p>
        <p className="text-amber-300 text-xs italic">{currentPhrase.dune}</p>
      </button>
    </div>
  );
}