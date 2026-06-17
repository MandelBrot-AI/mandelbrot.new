# Mandelbrot AI - Enterprise SaaS Platform

Welcome to the **Mandelbrot AI** frontend repository. Mandelbrot AI is an enterprise-grade artificial intelligence platform that provides secure, scalable, and private LLM infrastructure (Mandelbrot LLM) along with customizable intelligence modules designed for seamless integration into enterprise workflows.

This project serves as the primary landing and marketing presence for the SaaS product, showcasing its core capabilities and architectural superiority.

## 🌟 Key Features

- **Mandelbrot LLM**: In-house built, highly secure large language model ensuring your data never leaves your infrastructure. Zero third-party APIs.
- **Custom Intelligence**: Pre-built AI workflow modules for Document Intelligence, Automated Customer Support, AI File Conversion, and Lead Gen Outreach.
- **Enterprise-Grade Architecture**: Designed for absolute data isolation, zero data retention on public servers, and SOC2/GDPR compliance.
- **High-Performance UI**: Ultra-smooth scrolling, hardware-accelerated animations, and a premium "dark mode" aesthetic using Next.js and Tailwind CSS.

## 🛠 Tech Stack

- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: TypeScript

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:
- Node.js (v18 or higher recommended)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-org/mandelbrot.new.git
   cd mandelbrot.new
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or yarn install, pnpm install, bun install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the site:**
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `src/app/` - Next.js App Router endpoints and primary page layouts.
- `src/components/ui/` - Reusable, atomic UI components (Icons, Buttons, specialized typography).
- `src/components/sections/` - Large page sections comprising the landing page (e.g., HeroSection, MarqueeSection, LLMSection, ArchitectureSection).
- `src/components/forms/` - Lead generation and contact forms.
- `src/lib/` - Utility functions and constants.
- `openspec/` - Internal agentic specs and workflows for planning and delivering UI changes.

## 🌐 Deployment

The easiest way to deploy this application is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a Git repository.
2. Import the project into Vercel.
3. Configure your Environment Variables.
4. Deploy!

For more deployment options, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
