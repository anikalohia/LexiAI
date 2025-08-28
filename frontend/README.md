# 🌍 MIMB Language Translator

A modern, responsive language translation web application built with React and Vite.

## ✨ Features

- **Multi-language Support**: Translate between 12+ languages including English, Spanish, French, German, Hindi, Chinese, Japanese, Korean, Arabic, Russian, Portuguese, and Italian
- **Modern UI/UX**: Beautiful gradient design with glassmorphism effects
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Translation**: Instant translation with loading states and error handling
- **Language Swap**: Easily swap between source and target languages
- **Character Counter**: Track text length with visual warnings
- **Clear All**: Reset the translator with one click

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd frontend
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

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Translator.jsx          # Main translator component
│   ├── LanguageSelector.jsx    # Language dropdown component
│   ├── TextArea.jsx           # Input text area component
│   ├── TranslateButton.jsx    # Translation button component
│   ├── TranslationResult.jsx  # Result display component
│   └── *.css                  # Component-specific styles
├── App.jsx                    # Main application component
├── App.css                    # Application styles
├── index.css                  # Global styles
└── main.jsx                   # Application entry point
```

## 🎨 Design Features

- **Gradient Background**: Beautiful purple-blue gradient theme
- **Glassmorphism**: Modern glass-like card design with backdrop blur
- **Smooth Animations**: Hover effects, transitions, and loading animations
- **Responsive Grid**: Adaptive layout that works on all screen sizes
- **Modern Typography**: Clean, readable fonts with proper hierarchy

## 🔧 Configuration

The application is configured to connect to a backend API at `http://127.0.0.1:5000/translate`. Make sure your backend server is running and accessible at this endpoint.

### API Endpoint

- **POST** `/translate`
- **Body**: `{ text: string, source_lang: string, target_lang: string }`
- **Response**: `{ translated_text: string }`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🚀 Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Future Enhancements

- [ ] Voice input and output
- [ ] Translation history
- [ ] Offline translation capabilities
- [ ] Dark/Light theme toggle
- [ ] Export translations
- [ ] Multiple translation engines

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with React 19 and Vite
- Styled with modern CSS and glassmorphism effects
- Icons from emoji and Unicode symbols
