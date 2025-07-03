import React, { useState, useEffect } from 'react';
import { Languages, BookOpen, Zap } from 'lucide-react';
import { TranslationBox } from './components/TranslationBox';
import { LanguageSwitch } from './components/LanguageSwitch';
import { RandomPhrase } from './components/RandomPhrase';
import { AudioPlayer } from './components/AudioPlayer';
import { useSpeechRecognition } from './hooks/useSpeechRecognition';
import { useSpeechSynthesis } from './hooks/useSpeechSynthesis';
import { translateText } from './data/duneLanguage';

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [fromDune, setFromDune] = useState(false);
  
  const {
    isListening,
    transcript,
    startListening,
    stopListening,
    resetTranscript,
    isSupported: speechRecognitionSupported
  } = useSpeechRecognition();
  
  const {
    speak,
    isSpeaking,
    isSupported: speechSynthesisSupported
  } = useSpeechSynthesis();

  // Update input text when transcript changes
  useEffect(() => {
    if (transcript) {
      setInputText(prev => prev + ' ' + transcript);
      resetTranscript();
    }
  }, [transcript, resetTranscript]);

  // Translate text when input changes
  useEffect(() => {
    if (inputText.trim()) {
      const translated = translateText(inputText, fromDune);
      setOutputText(translated);
    } else {
      setOutputText('');
    }
  }, [inputText, fromDune]);

  const handleMicClick = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const handleSpeakClick = () => {
    if (outputText) {
      speak(outputText);
    }
  };

  const handleLanguageSwitch = () => {
    setFromDune(!fromDune);
    // Swap input and output
    const temp = inputText;
    setInputText(outputText);
    setOutputText(temp);
  };

  const handlePhraseSelect = (phrase: string) => {
    setInputText(phrase);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900/20 to-slate-900 relative overflow-hidden">
      {/* Audio Player */}
      <AudioPlayer autoPlay={true} />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 20}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="p-4 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 animate-pulse">
              <Languages className="w-8 h-8 text-amber-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent animate-fade-in">
            Dune Translator
          </h1>
          <p className="text-lg text-amber-200/80 max-w-2xl mx-auto animate-fade-in-delay">
            Experience the mystical language of Arrakis. Translate between English and the ancient tongue of the desert.
          </p>
          
          {/* Feature badges */}
          <div className="flex items-center justify-center space-x-4 mt-6">
            {speechRecognitionSupported && (
              <div className="flex items-center space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
                <Zap className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-amber-200">Voice Input</span>
              </div>
            )}
            {speechSynthesisSupported && (
              <div className="flex items-center space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-amber-200">Voice Output</span>
              </div>
            )}
          </div>
        </header>

        {/* Main translator interface */}
        <div className="max-w-4xl mx-auto">
          {/* Language Switch */}
          <LanguageSwitch fromDune={fromDune} onSwitch={handleLanguageSwitch} />

          {/* Translation boxes */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <TranslationBox
              title={fromDune ? "Dune" : "English"}
              text={inputText}
              setText={setInputText}
              placeholder={fromDune ? "Enter Dune text..." : "Enter English text..."}
              isInput={true}
              onMicClick={handleMicClick}
              isListening={isListening}
              micSupported={speechRecognitionSupported}
            />
            
            <TranslationBox
              title={fromDune ? "English" : "Dune"}
              text={outputText}
              setText={() => {}}
              placeholder={fromDune ? "English translation will appear here..." : "Dune translation will appear here..."}
              isInput={false}
              onSpeakClick={handleSpeakClick}
              isSpeaking={isSpeaking}
              speakSupported={speechSynthesisSupported}
            />
          </div>

          {/* Random phrase suggestion */}
          <div className="mb-8">
            <RandomPhrase onPhraseSelect={handlePhraseSelect} />
          </div>

          {/* Footer */}
          <footer className="text-center text-amber-200/60 text-sm">
            <p className="mb-2">
              "He who controls the spice controls the universe"
            </p>
            <p className="italic">
              Built with the power of the desert
            </p>
          </footer>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-delay {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in-delay 1s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
}

export default App;