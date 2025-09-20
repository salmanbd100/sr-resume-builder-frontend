# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server (uses Next.js 15 with React 19)
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint (Next.js config with TypeScript)
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier

Note: ESLint and TypeScript errors are ignored during builds (see next.config.mjs).

## Project Architecture

This is a Next.js 15 resume builder application using the App Router pattern with TypeScript and React 19.

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Icons**: React Icons (Lucide set) - `import { LuIconName as IconName } from 'react-icons/lu'`
- **Authentication**: NextAuth.js
- **Form Management**: React Hook Form with Zod validation
- **State Management**: React Context/useState patterns

### Directory Structure
- `app/` - Next.js app directory with pages and API routes
  - `api/auth/` - NextAuth.js configuration
  - `builder/` - Resume builder interface
  - `dashboard/` - User dashboard
  - `auth/signin/` - Authentication pages
- `components/` - Reusable React components
  - `ui/` - shadcn/ui components (Radix UI based)
  - `builder/` - Resume builder specific components
  - `dashboard/` - Dashboard specific components
  - `sections/` - Landing page sections
  - `auth/` - Authentication components
- `lib/` - Utility functions, schemas, and types
  - `schemas.ts` - Zod validation schemas for resume data
  - `types.ts` - TypeScript interfaces
  - `utils.ts` - Utility functions (includes cn for className merging)

### Key Patterns
- Uses `@/` path alias for imports from project root
- **Icons**: All icons use React Icons with Lucide set (`react-icons/lu`) following the pattern:
  ```typescript
  import { LuIconName as IconName } from 'react-icons/lu';
  ```
  - Common mappings: `LuEllipsis` (MoreHorizontal), `LuPencil` (Edit), `LuCircleCheck` (CheckCircle)
- Comprehensive Zod schemas for form validation in `lib/schemas.ts`
- TypeScript interfaces for all data structures in `lib/types.ts`
- Form components use React Hook Form with Zod resolvers
- UI components follow shadcn/ui patterns with Tailwind CSS
- Authentication handled via NextAuth.js with route protection

### Resume Data Structure
The application handles complex resume data including:
- Personal details with optional social links
- Work experience with current position flags
- Education with optional GPA
- Skills categorized by type (technical/soft/language) and proficiency level
- Certifications with expiry tracking
- Projects with technology stacks and links
- Languages with proficiency levels

### Component Organization
- Feature-specific components grouped by domain (builder, dashboard, auth)
- Shared UI components in `components/ui/`
- Form components use consistent patterns with validation
- Preview components for resume rendering