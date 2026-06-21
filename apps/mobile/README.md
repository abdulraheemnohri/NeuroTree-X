# NeuroTree X Mobile

A futuristic, high-fidelity mobile interface for the NeuroTree X AGI ecosystem.

## 🚀 Features
- **Immersive Dashboard**: Real-time neural metrics and synaptic link status.
- **Cyber-Tree Explorer**: Interactive SVG-based knowledge tree visualization.
- **Research Laboratory**: Manage autonomous AI agent tasks and simulations.
- **Synaptic Dialog**: Multi-modal chat interface with the AGI core.
- **System Terminal**: Direct root access to the neural operating system.
- **Digital Twin Sync**: Live mirroring of physical neural responses.

## 🛠 Build Instructions

### Prerequisites
- Node.js & npm
- Expo CLI (`npm install -g expo-cli`)
- Android Studio / Xcode (for native builds)

### Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the Expo development server:
   ```bash
   npx expo start
   ```

### Build APK (Local)
1. Generate native project:
   ```bash
   npx expo prebuild
   ```
2. Build with Gradle:
   ```bash
   cd android && ./gradlew assembleDebug
   ```
   The APK will be located at `android/app/build/outputs/apk/debug/app-debug.apk`.

## 🌌 Design System
The app uses a custom "Cyber-Synthetic" design system implemented in `src/theme/Theme.ts`, featuring glassmorphism, neon accents, and immersive animations.
