# Mistral Chat - Internship Project 🚀

Welcome to **Mistral Chat**! This is an AI-powered chat application developed as part of an advanced Software Engineering internship. The project exemplifies state-of-the-art web development practices, seamless UI/UX design, and powerful integration with Mistral’s cutting-edge AI model.

---

## 🌟 Key Features

- **AI-Driven Conversations**: Enjoy intelligent, responsive interactions powered by Mistral AI, delivering human-like responses and enhancing user engagement.
- **Persistent Chat History**: Conversations are stored securely, allowing you to pick up from where you left off across sessions.
- **Modular Design System**: Shared UI components maintain consistency and make the app scalable and maintainable.
- **User Authentication**: Secure sign-in with GitHub and Google for personalized user experiences.

---

## 🛠️ Tech Stack

- **Next.js**: Framework for server-rendered and statically generated applications.
- **React**: Library for building interactive UIs.
- **Tailwind CSS**: Utility-first CSS framework for creating responsive, customized designs.
- **Framer Motion**: Animations and transitions for a fluid user experience.
- **TypeScript**: Adds static typing to JavaScript for robust, maintainable code.
- **Mistral AI SDK**: Direct integration with Mistral’s API for AI-driven conversations.

---

## 📂 Project Structure

Organized as a monorepo for modularity and reusability.

### Root Structure

- **`apps/web`**: Main application code.
  - **`app`**: Core pages, API routes, and main app structure.
  - **`.env`**: Configuration file for environment variables.
  - **`next.config.mts`**: Next.js configuration.
  - **`postcss.config.mjs`** & **`tailwind.config.ts`**: Tailwind CSS configurations.
  - **`tsconfig.json`**: TypeScript configuration.

- **`packages`**: Reusable modules.
  - **`auth`**: Authentication logic for GitHub and Google logins.
  - **`db`**: Database utilities, models, and schemas.
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

2. **Install dependencies**:
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

## 🧩 Modular Components

**Packages** folder includes shared modules:

- **Design System**: Common UI elements (buttons, modals, etc.) for a unified look and feel.
- **Auth**: Configures GitHub and Google login providers for secure authentication.
- **Database Module**: Models and helpers standardize and simplify database interactions.

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

## 📧 Contact

For questions or collaborations, reach out to **[Your Name](mailto:your-email@example.com)**.

Happy chatting with Mistral AI! 🎉
