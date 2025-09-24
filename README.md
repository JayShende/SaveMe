# 🔖 BookmarkMe

<div align="center">

![BookmarkMe Logo](https://img.shields.io/badge/BookmarkMe-🔖-emerald?style=for-the-badge&logo=bookmark&logoColor=white)

**Your safe place for all links** - A modern, powerful bookmark manager that helps you organize and access your important links from Instagram, Twitter, and the web.

[![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.14.0-2D3748?style=flat-square&logo=prisma)](https://prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

[🚀 Live Demo](#) • [📖 Documentation](#) • [🐛 Report Bug](#) • [✨ Request Feature](#)

</div>

---

## ✨ Features

### 🎯 Core Functionality

- **🔍 Lightning Fast Search** - Find any link instantly with powerful search functionality
- **🏷️ Smart Tagging System** - Organize bookmarks with intelligent tags and categories
- **📱 Dedicated Sections** - Separate organized spaces for Instagram, Twitter, and web links
- **♾️ Unlimited Storage** - Save as many links as you want without restrictions

### 🚀 Advanced Features

- **⚡ Real-time Sync** - Access your bookmarks across all devices
- **🔒 Secure & Private** - Your data is safe with secure authentication
- **🌐 Cross-platform** - Works everywhere with responsive design
- **🤖 Auto-detection** - Automatically detects link types (Twitter, Instagram, Web)
- **📊 Smart Organization** - AI-powered suggestions and categorization

### 🎨 User Experience

- **🎭 Modern UI** - Beautiful, intuitive interface built with Radix UI
- **📱 Mobile Responsive** - Perfect experience on all devices
- **⚡ Fast Performance** - Optimized with Next.js 15 and React 19
- **🎨 Customizable** - Personalize your bookmarking experience

---

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 15.5.0 with App Router
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 4.0
- **UI Components**: Radix UI + Custom Components
- **State Management**: Redux Toolkit + React Query
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React + React Icons

### Backend

- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js v5 (Google, GitHub)
- **API**: Next.js API Routes
- **Validation**: Zod schemas

### Development Tools

- **Linting**: ESLint with Next.js config
- **Type Checking**: TypeScript strict mode
- **Package Manager**: npm
- **Version Control**: Git

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL database
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/bookmarkme.git
   cd bookmarkme
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Fill in your environment variables:

   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/bookmarkme"

   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"

   # OAuth Providers
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   GITHUB_CLIENT_ID="your-github-client-id"
   GITHUB_CLIENT_SECRET="your-github-client-secret"
   ```
4. **Set up the database**

   ```bash
   npx prisma generate
   npx prisma db push
   ```
5. **Run the development server**

   ```bash
   npm run dev
   ```
6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
bookmarkme/
├── app/                          # Next.js App Router
│   ├── (protected)/             # Protected routes
│   │   └── dashboard/           # Main dashboard
│   ├── api/                     # API routes
│   │   ├── auth/               # Authentication endpoints
│   │   └── v1/                 # API v1 endpoints
│   ├── pages/                   # Page components
│   ├── services/                # API services & mutations
│   └── types/                   # TypeScript type definitions
├── components/                   # Reusable UI components
│   ├── ui/                      # Base UI components
│   └── magicui/                 # Custom UI components
├── prisma/                      # Database schema & migrations
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions
├── redux/                       # Redux store & slices
└── schema/                      # Zod validation schemas
```

---

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server on port 3000

# Production
npm run build        # Build the application
npm run start        # Start production server

# Database
npx prisma generate  # Generate Prisma client
npx prisma db push   # Push schema changes to database
npx prisma studio    # Open Prisma Studio

# Code Quality
npm run lint         # Run ESLint
```

---

## 🎯 Usage

### Adding Bookmarks

1. Click the "Add Bookmark" button
2. Enter the URL (auto-detects type)
3. Add a title and description
4. Select or create tags
5. Save your bookmark

### Organizing Links

- **Search**: Use the search bar to find specific links
- **Filter**: Filter by type (Twitter, Instagram, Web)
- **Tags**: Use tags to categorize your bookmarks
- **Sections**: Navigate between different link types

### Managing Tags

- Create new tags on-the-fly
- Assign multiple tags to bookmarks
- Reuse existing tags for consistency

---

## 🤝 Contributing

We love contributions! Here's how you can help make BookmarkMe even better:

### 🐛 Reporting Issues

Before creating an issue, please:

1. Check if the issue already exists
2. Use the issue templates
3. Provide detailed reproduction steps
4. Include screenshots if applicable

### 🚀 Contributing Code

1. **Fork the repository**

   ```bash
   git clone https://github.com/yourusername/bookmarkme.git
   cd bookmarkme
   ```
2. **Create a feature branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**

   - Follow the existing code style
   - Add tests for new features
   - Update documentation as needed
4. **Commit your changes**

   ```bash
   git commit -m "Add amazing feature"
   ```
5. **Push to your branch**

   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

   - Use the PR template
   - Link related issues
   - Request reviews from maintainers

### 📋 Development Guidelines

- **Code Style**: Follow ESLint configuration
- **TypeScript**: Use strict typing
- **Components**: Use functional components with hooks
- **Testing**: Add tests for new features
- **Documentation**: Update README for new features

### 🏷️ Issue Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `question` - Further information is requested

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Prisma](https://prisma.io/) for the excellent database toolkit
- [Radix UI](https://www.radix-ui.com/) for accessible component primitives
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vercel](https://vercel.com/) for hosting and deployment

---


</div>
