# 🏜️ Dune Translator

A mystical language translator inspired by the Dune universe, featuring voice recognition, speech synthesis, and an immersive desert-themed interface.

![Dune Translator](https://img.shields.io/badge/Dune-Translator-amber?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjRjU5RTBCIi8+Cjwvc3ZnPgo=)

## ✨ Features

- **🗣️ Voice Recognition**: Speak in English and watch it translate to Dune language
- **🔊 Text-to-Speech**: Listen to translations with natural voice synthesis
- **🔄 Bidirectional Translation**: Translate between English and Dune language
- **🎵 Ambient Audio**: Immersive Dune-inspired background music
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **🎨 Stunning UI**: Apple-level design aesthetics with animated backgrounds
- **📋 Copy to Clipboard**: Easy sharing of translations
- **🎲 Random Phrases**: Discover iconic Dune quotes and phrases

## 🌟 Live Demo

Visit the live application: [https://earnest-queijadas-543205.netlify.app](https://earnest-queijadas-543205.netlify.app)

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/dune-translator.git
cd dune-translator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Built With

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Lightning-fast build tool
- **Lucide React** - Beautiful icons
- **Web Speech API** - Voice recognition and synthesis

## 📖 Language Dictionary

The translator includes over 50 authentic Dune universe terms including:

- **Basic vocabulary**: hello (Salam), goodbye (Naib), yes (Aywa)
- **Dune-specific terms**: spice (Melange), sandworm (Shai-Hulud), desert (Sihaya)
- **Cultural concepts**: chosen one (Lisan al-Gaib), holy war (Jihad)
- **Common phrases**: "Fear is the mind-killer" (Khof huwa qatil al-aql)

## 🎮 How to Use

1. **Choose Language Direction**: Use the language switch to translate from English to Dune or vice versa
2. **Input Text**: Type or speak your text in the input box
3. **Voice Input**: Click the microphone icon to use voice recognition
4. **Listen to Translation**: Click the speaker icon to hear the translation
5. **Try Random Phrases**: Use the suggestion box to explore famous Dune quotes
6. **Copy Results**: Click the copy icon to share translations

## 🎵 Audio Features

- **Background Music**: Ambient Dune-inspired soundtrack
- **Audio Controls**: Play/pause, mute, and volume adjustment
- **Auto-start**: Music begins automatically (respects browser autoplay policies)

## 🌐 Browser Compatibility

- **Voice Recognition**: Chrome, Edge, Safari (latest versions)
- **Speech Synthesis**: All modern browsers
- **Audio Playback**: All browsers with HTML5 audio support

## 📱 Mobile Support

Fully responsive design optimized for:
- iOS Safari
- Android Chrome
- Mobile Firefox
- Progressive Web App capabilities

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Project Structure

```
src/
├── components/          # React components
│   ├── AudioPlayer.tsx     # Background music player
│   ├── LanguageSwitch.tsx  # Language direction toggle
│   ├── RandomPhrase.tsx    # Random phrase suggestions
│   ├── TranslationBox.tsx  # Input/output text areas
│   └── VoiceVisualizer.tsx # Voice activity indicator
├── hooks/              # Custom React hooks
│   ├── useSpeechRecognition.ts
│   └── useSpeechSynthesis.ts
├── data/               # Language data
│   └── duneLanguage.ts    # Dictionary and translation logic
└── App.tsx            # Main application component
```

## 🎨 Design Philosophy

- **Desert Aesthetics**: Warm amber and gold color palette
- **Glassmorphism**: Translucent elements with backdrop blur
- **Micro-interactions**: Smooth hover states and transitions
- **Accessibility**: High contrast ratios and keyboard navigation
- **Performance**: Optimized animations and lazy loading

## 🌟 Iconic Dune Phrases

- "Fear is the mind-killer" → "Khof huwa qatil al-aql"
- "The spice must flow" → "Melange yajib an tajri"
- "He who controls the spice controls the universe" → "Man yuhakkim al-melange yuhakkim al-kawn"

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Adding New Translations

To add new words to the dictionary, edit `src/data/duneLanguage.ts`:

```typescript
{ 
  english: "new word", 
  dune: "translation", 
  pronunciation: "pronunciation guide", 
  definition: "meaning" 
}
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Frank Herbert's Dune universe
- Voice recognition powered by Web Speech API
- Design inspired by the Dune movies and desert aesthetics
- Built with modern web technologies for optimal performance

## 🐛 Known Issues

- Voice recognition requires HTTPS in production
- Some browsers may block autoplay audio
- Speech synthesis voices vary by operating system

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/dune-translator/issues) page
2. Create a new issue with detailed information
3. Include browser version and error messages

---

*"He who controls the spice controls the universe"* - Built with the power of the desert 🏜️
