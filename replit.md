# Telefire Website

## Overview

This is a complete Spanish clone of Telefire.com for the Mexican market, featuring all original design elements, effects, typography, and functionality. The project is built as a full-stack web application with a React frontend and Express backend, using shadcn/ui components and Tailwind CSS to replicate the exact visual styling of the original Israeli company's website.

The website serves as a marketing platform for Telefire Mexico, showcasing fire detection systems, IBMS solutions, building management systems, and security products. It includes comprehensive product catalogs, company advantages, sustainability initiatives, case studies, and partnership inquiry forms, all adapted for the Mexican B2B market.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript in SPA mode
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Design**: RESTful API endpoints under `/api` prefix
- **Data Storage**: In-memory storage with interfaces for future database integration
- **Validation**: Shared Zod schemas between frontend and backend
- **Development**: Hot reload with Vite middleware integration

### Component Structure
- **UI Components**: Comprehensive shadcn/ui component library in `client/src/components/ui/`
- **Business Components**: Section-based components including Products, Case Studies, IBMS systems
- **Navigation**: Professional navbar with dropdown menus, decorative elements, and enhanced mobile hamburger menu
- **Forms**: Partnership inquiry form with validation and submission handling
- **Product Catalog**: Complete product sections for panels, detectors, IBMS systems, and frontend solutions
- **Case Studies**: Mexican market case studies with real project examples

### Data Layer
- **Schema Definition**: Shared TypeScript types and Zod schemas in `shared/schema.ts`
- **Database Ready**: Drizzle ORM configuration for PostgreSQL with schema migrations
- **Storage Interface**: Abstracted storage layer allowing easy transition from memory to database

### Development Features
- **TypeScript**: Full type safety across frontend, backend, and shared code
- **Path Aliases**: Configured import aliases for clean code organization
- **Error Handling**: Comprehensive error boundaries and API error handling
- **Development Tools**: Replit-specific development enhancements and runtime error overlay
- **Visual Effects**: Custom CSS animations, hover effects, and decorative elements matching original design
- **Responsive Design**: Mobile-first design with professional hamburger menu and smooth transitions

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, TanStack Query for state management
- **Backend**: Express.js, Node.js runtime
- **Build Tools**: Vite, TypeScript, ESBuild for production builds

### UI and Styling
- **Design System**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Icons**: Lucide React icon library
- **Animations**: CSS-based animations with Tailwind utilities

### Form and Validation
- **Form Management**: React Hook Form for form state and validation
- **Schema Validation**: Zod for runtime type checking and form validation
- **Resolvers**: Hookform resolvers for Zod integration

### Database Integration (Configured)
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database serverless PostgreSQL
- **Migrations**: Drizzle Kit for schema management
- **Session Storage**: Connect PG Simple for PostgreSQL session store

### Development Tools
- **Development**: tsx for TypeScript execution in development
- **Replit Integration**: Cartographer and runtime error modal plugins
- **Type Checking**: TypeScript compiler with strict mode enabled
- **Code Quality**: ESNext modules with modern JavaScript features

### Utility Libraries
- **Date Handling**: date-fns for date manipulation
- **Styling Utilities**: clsx and class-variance-authority for conditional styling
- **UI Enhancements**: Various Radix UI primitives for accessible components
- **Development**: nanoid for unique ID generation