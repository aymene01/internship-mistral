
<p align="center">
  <picture>
    <source srcset="./assets/mistral-logo.png">
    <img alt="Mistral Chat logo" height="180px" src="./assets/mistral-logo.png">
  </picture>
</p>

<p align="center">
  <strong style="font-size: 24px;">Final Submission for Software Engineering Internship Project</strong>
  <br />
  <em>By Aymene Bousbia, showcasing advanced AI-driven chat development</em>
  <br />
  <br />
</p>

<div align="center">
  <p>
    <a href="https://github.com/aymene01/mistral-chat/issues"><img src="https://img.shields.io/github/issues/aymene01/mistral-chat.svg" alt="GitHub Issues"></a>
    <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/built%20with-Node.js-339933.svg" alt="Built with Node.js"></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/using-Typescript-007ACC.svg" alt="Using TypeScript"></a>
  </p>
</div>

# Mistral Chat - Software Engineering Internship Project

## Introduction

Hello Mistral Team,

I'm Aymene Bousbia, and I’m excited to present **Mistral Chat**: an AI-powered chat application designed as part of my software engineering internship. This project showcases a modern, scalable, and user-friendly chat interface integrated with Mistral's advanced AI capabilities. Below, I outline the project's features, technical details, and implementation insights.

## Project Overview

This project includes:

- **AI Integration**: Human-like responses powered by Mistral AI.
- **Persistent Chat Storage**: Conversations are saved for seamless resumption.
- **Authentication System**: Secure sign-in with GitHub and Google.
- **Dockerized Environment**: Simplifies setup with Docker Compose.

## 🌟 Key Features

- **AI-Driven Conversations**: Enjoy intelligent, responsive interactions powered by Mistral AI, delivering human-like responses and enhancing user engagement.
- **Persistent Chat History**: Conversations are stored securely, allowing you to pick up from where you left off across sessions.
- **Modular Design System**: Shared UI components maintain consistency and make the app scalable and maintainable.
- **User Authentication**: Secure sign-in with GitHub and Google for personalized user experiences.

---

## 📂 Project Structure

Organized as a monorepo (Turborepo) for modularity and reusability.

### Root Structure

- **`apps/web`**: Main application code.
  - **`app`**: Core pages, API routes, and main app structure.
  - **`.env`**: Configuration file for environment variables.
  - **`next.config.mts`**: Next.js configuration.
  - **`postcss.config.mjs`** & **`tailwind.config.ts`**: Tailwind CSS configurations.
  - **`tsconfig.json`**: TypeScript configuration.

- **`packages`**: Reusable modules.
  - **`auth`**: Authentication logic for GitHub and Google logins.
  - **`db`**: Database client, models, and schemas.
  - **`design-system`**: Shared UI components for consistent styling.
  - **`typescript-config`**: Central TypeScript configuration.

---

## 📖 Getting Started

### Prerequisites

- **Node.js**: Ensure Node.js (v16+) is installed.
- **pnpm**: Recommended package manager.
- **Docker**: For database setup
- **Mistral AI API Key**

### Installation

1. **Clone the repository**:
   ```bash
   git clone git@github.com:aymene01/internship-mistral.git
   cd internship-mistral
   ```

2. **Install dependencies and database setup**:
   ```bash
   pnpm db:setup
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the `apps/web` directory and follow the .env.example

4. **Run the application**:
   ```bash
   pnpm dev
   ```

   Access the app at [http://localhost:4000](http://localhost:4000).

---

## 🛡️ Security & Privacy

Chat data is stored in the browser’s `localStorage` for privacy. User authentication is managed with OAuth providers for secure access.

---

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a pull request**

---

## 📜 License

Licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## 👤 Author

**Aymene Bousbia**

- 🔍 Explore: [GitHub Profile](https://github.com/aymene01)
- 💬 Ask me about anything [here](https://github.com/aymene01/mistral-internship/issues).

# 📬 Feedback

Your opinions and feedback are what shape the future; let's craft it beautifully together. Share your thoughts in the issues or through discourse.

<!-- Your personal message or trademark --> <div align="center"> <sub>Built with ❤️ by <a href="https://github.com/aymene01">Aymene Bousbia</a></sub> </div>
