# SR Resume Builder

> Create professional, ATS-compliant resumes with ease. Built with Next.js 15, React 19, and modern web technologies.

## 🌟 Overview

SR Resume Builder is a modern, web-based application that helps users create professional, ATS-compliant resumes quickly and easily. With an intuitive step-by-step interface, real-time preview, and professional templates, it empowers users to build resumes that pass Applicant Tracking Systems and help land dream jobs.

## ✨ Core Features

### 🔐 Authentication & User Management
- **Secure Sign-In**: Multiple authentication options via NextAuth.js
  - Email/password authentication
  - Google OAuth integration
  - GitHub OAuth integration
- **User Accounts**: Persistent user data and resume storage
- **Dashboard Access**: Personalized user dashboard for managing resumes

### 📝 Resume Builder
- **Step-by-Step Builder**: Guided 5-step process for creating resumes
  1. **Personal Details**: Name, contact info, professional title, social links
  2. **Professional Summary**: Career overview and key qualifications
  3. **Work Experience**: Job history with descriptions and date ranges
  4. **Education**: Academic background with institutions and degrees
  5. **Skills**: Technical, soft skills, and languages with proficiency levels

- **Real-Time Preview**: Live preview of resume as you build
- **Progress Tracking**: Visual progress indicator showing completion status
- **Form Validation**: Comprehensive validation using Zod schemas
- **Auto-Save**: Draft saving functionality

### 🎨 Professional Templates
- **Multiple Template Categories**:
  - Modern Professional (tech and creative roles)
  - Classic Executive (corporate and executive positions)
  - Minimal Clean (content-focused design)
  - Creative Designer (eye-catching for creative professionals)
- **ATS-Compliant Design**: All templates designed to pass Applicant Tracking Systems
- **Template Preview**: Hover effects and preview functionality

### 📊 Dashboard Management
- **Resume Grid**: Visual grid display of all user resumes
- **Resume Actions**: Edit, preview, download PDF, duplicate, and delete resumes
- **Status Tracking**: Draft vs. Published status indicators
- **Quick Access**: One-click navigation to resume builder

### 🔄 Advanced Data Management
- **Comprehensive Data Structure**: Support for complex resume data including:
  - Personal details with optional social links (LinkedIn, GitHub, Portfolio)
  - Work experience with current position flags
  - Education with optional GPA
  - Skills categorized by type (technical/soft/language) and proficiency
  - Certifications with expiry tracking
  - Projects with technology stacks and links
  - Multiple languages with proficiency levels
  - Additional information section

### 📱 User Experience
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Dark/Light Mode**: Theme switching capability
- **Mobile-First**: Optimized for all device sizes
- **Intuitive Navigation**: Clear step indicators and navigation buttons
- **Toast Notifications**: User feedback for actions and errors

## 🚀 How to Use SR Resume Builder

### Getting Started
1. **Visit the Homepage**: Access the landing page with feature overview
2. **Sign Up/Sign In**: Create an account or sign in using:
   - Email and password
   - Google account
   - GitHub account
3. **Access Dashboard**: View your personalized dashboard

### Building Your First Resume
1. **Start Building**: Click "Start Building Free" or "Create New" from dashboard
2. **Follow the Steps**:
   - **Step 1**: Enter personal details (name, email, phone, location, social links)
   - **Step 2**: Write a professional summary (minimum 50 characters)
   - **Step 3**: Add work experience entries with job details and descriptions
   - **Step 4**: Include education background with degrees and institutions
   - **Step 5**: List skills categorized by type and proficiency level
3. **Preview**: See real-time preview of your resume on the right side
4. **Navigate**: Use Previous/Next buttons or click step indicators to move between sections
5. **Save**: Use "Save Draft" to save progress
6. **Download**: Export your completed resume as PDF

### Managing Resumes
1. **Dashboard Overview**: View all your resumes in a grid layout
2. **Resume Actions**: Use the three-dot menu on each resume card for:
   - **Edit**: Modify resume content
   - **Preview**: View full resume
   - **Download PDF**: Export to PDF format
   - **Duplicate**: Create a copy
   - **Delete**: Remove resume
3. **Status Tracking**: See draft vs. published status with badges
4. **Creation Date**: Track when resumes were last updated

## 🎯 Key Benefits

### For Job Seekers
- **ATS-Compliant**: Designed to pass Applicant Tracking Systems
- **Professional Quality**: Templates designed by professionals
- **Time-Saving**: Quick and easy resume creation process
- **Multiple Versions**: Create different resumes for different roles
- **Export Ready**: Instant PDF export for job applications

### For Users
- **Free to Use**: No cost for basic resume building
- **Secure**: Data encryption and privacy protection
- **Accessible**: Works on all devices and browsers
- **User-Friendly**: Intuitive interface requires no design skills
- **Comprehensive**: Supports all standard resume sections

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Frontend:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Shadcn/ui](https://ui.shadcn.com/) (Radix UI based)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/)
- **Form Management:** [React Hook Form](https://react-hook-form.com/)
- **Schema Validation:** [Zod](https://zod.dev/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (Lucide set)
- **Theme:** [next-themes](https://github.com/pacocoursey/next-themes)

## 👥 Target Users
- **Job Seekers**: Anyone looking to create professional resumes
- **Career Changers**: People switching industries or roles
- **Students**: Recent graduates entering the job market
- **Professionals**: Experienced workers updating their resumes
- **Recruiters**: HR professionals helping candidates improve resumes

## 🚀 Getting Started for Developers

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later)
- npm, yarn, or pnpm (pnpm recommended)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your_username/sr-resume-builder-frontend.git
   cd sr-resume-builder-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and add your environment variables:
   ```env
   NEXTAUTH_SECRET=your-secret-here
   NEXTAUTH_URL=http://localhost:3000
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run start` | Starts the production server |
| `npm run lint` | Lints the code using ESLint |
| `npm run lint:fix` | Lints and fixes issues automatically |
| `npm run format` | Formats code using Prettier |

## 📁 Project Structure

```
sr-resume-builder-frontend/
├── app/                     # Next.js App Router directory
│   ├── api/                 # API routes
│   │   └── auth/            # NextAuth.js configuration
│   ├── auth/                # Authentication pages
│   ├── builder/             # Resume builder interface
│   ├── dashboard/           # User dashboard
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Homepage
├── components/              # React components
│   ├── auth/                # Authentication components
│   ├── builder/             # Resume builder components
│   │   ├── forms/           # Step-by-step form components
│   │   ├── resume-builder.tsx
│   │   └── resume-preview.tsx
│   ├── dashboard/           # Dashboard components
│   ├── layout/              # Layout components (header, footer)
│   ├── sections/            # Landing page sections
│   ├── ui/                  # Shadcn/ui components (Radix UI based)
│   └── providers.tsx        # Context providers
├── lib/                     # Utility functions and configurations
│   ├── schemas.ts           # Zod validation schemas
│   ├── types.ts             # TypeScript type definitions
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
├── CLAUDE.md               # Claude Code guidance
├── FEATURES.md             # Feature documentation
└── README.md               # This file
```

## 🔧 Advanced Features & Technical Details

### Data Management
- **Comprehensive Resume Schema**: Support for all standard resume sections with validation
- **Real-time Validation**: Form validation using Zod schemas ensures data integrity
- **Auto-save Functionality**: Prevents data loss with draft saving
- **Multi-format Export**: PDF export with professional formatting

### Security & Privacy
- **Secure Authentication**: Industry-standard OAuth implementations
- **Data Encryption**: User data protection and privacy
- **Session Management**: Secure session handling via NextAuth.js
- **CSRF Protection**: Built-in security features

### Performance Optimizations
- **Server-Side Rendering**: Next.js App Router for optimal performance
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting for faster load times
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Getting Started
1. **Fork the repository**
2. **Clone your fork:**
   ```bash
   git clone https://github.com/your-username/sr-resume-builder-frontend.git
   ```
3. **Create a feature branch:**
   ```bash
   git checkout -b feature/amazing-feature
   ```
4. **Make your changes**
5. **Test your changes:**
   ```bash
   npm run lint
   npm run build
   ```
6. **Commit your changes:**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
7. **Push to your branch:**
   ```bash
   git push origin feature/amazing-feature
   ```
8. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style and conventions
- Add tests for new features
- Update documentation as needed
- Ensure all linting and type checks pass
- Write clear, descriptive commit messages

### Areas for Contribution
- 🎨 New resume templates
- 🚀 Performance improvements
- 📱 Mobile experience enhancements
- 🌍 Internationalization
- 🔧 New features and functionality
- 🐛 Bug fixes and improvements

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Next.js](https://nextjs.org/) team for the amazing framework
- [Vercel](https://vercel.com/) for hosting and deployment platform

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Check the [documentation](FEATURES.md)
- Review the [development guide](CLAUDE.md)

---

**SR Resume Builder** - Empowering careers through professional resume creation. Built with ❤️ using modern web technologies.
