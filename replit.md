# Telefire México - Sistema de Detección y Prevención de Incendios

## Overview

Telefire México es una plataforma web completa desarrollada como un clon integral del sitio web israelí Telefire.com, adaptado específicamente para el mercado mexicano. El proyecto replica TODOS los elementos visuales, efectos, tipografía y funcionalidades del sitio original, manteniendo el diseño de una sola página con navegación por anclajes.

El sitio web sirve como plataforma de marketing para Telefire México, presentando sistemas de detección de incendios, soluciones IBMS, sistemas de gestión de edificios y productos de seguridad. Incluye catálogos completos de productos, ventajas de la empresa, iniciativas de sostenibilidad, casos de éxito y formularios de consulta de partnerships, todo adaptado para el mercado B2B mexicano.

## Estado Actual del Proyecto (Enero 2025)

**✅ PROYECTO COMPLETADO - LISTO PARA PRODUCCIÓN**

### Funcionalidades Implementadas
- ✅ **Sitio web completo** clon exacto de Telefire.com
- ✅ **Sistema de cotización** con carrito dinámico y contador visual 🛒
- ✅ **Catálogo completo de productos** (paneles, detectores, IBMS, extinción, servicios)
- ✅ **Navegación profesional** con smooth scroll y dropdown menus
- ✅ **Formularios de contacto** con validación Zod completa
- ✅ **Diseño responsive** móvil-first optimizado
- ✅ **Efectos CSS y animaciones** profesionales
- ✅ **Documentación completa** (README, DEPLOYMENT, ARCHITECTURE)
- ✅ **Configuración de despliegue** Netlify lista

### Características Técnicas Finales
- ✅ **Contador de carrito** dinámico en header que actualiza en tiempo real
- ✅ **Lista visual de productos** en cotización con opción de eliminación individual
- ✅ **Botón "← Ver Productos"** para navegación de regreso desde cotización
- ✅ **Navegación por anclajes** optimizada para todas las secciones
- ✅ **Header mejorado** con botones alineados correctamente y contraste perfecto
- ✅ **Error de React keys** corregido completamente

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

## Documentación y Despliegue

### Documentación Creada
- **README.md**: Guía completa del proyecto con instalación y uso
- **DEPLOYMENT.md**: Instrucciones detalladas para despliegue en Netlify
- **ARCHITECTURE.md**: Documentación técnica de la arquitectura del sistema
- **.env.example**: Ejemplo de variables de entorno necesarias
- **netlify.toml**: Configuración completa para despliegue automático

### Preparado para GitHub
- **.gitignore**: Configurado específicamente para el proyecto
- **Estructura de commits**: Preparada para versionado semántico
- **Documentación técnica**: Lista para colaboradores y mantenimiento

## CMS Headless Recomendado

### Strapi (Recomendación Principal)
Strapi es el CMS headless ideal para este proyecto por:
- **Interface administrativa** intuitiva para gestión de contenido
- **API REST/GraphQL** automática para integración
- **Gestión de medios** integrada para imágenes de productos
- **Roles y permisos** granulares para equipos
- **Self-hosted o cloud** según necesidades

### Puntos de Integración CMS
```typescript
// Endpoints preparados para integración
const cmsEndpoints = {
  products: '/api/products',
  testimonials: '/api/testimonials',
  caseStudies: '/api/case-studies',
  company: '/api/company-info'
}
```

### Alternativas CMS
- **Contentful**: Para necesidades enterprise con CDN global
- **Sanity**: Para edición en tiempo real y flexibilidad de desarrollador
- **Ghost**: Ideal para blog y contenido editorial
- **Directus**: Open-source con máxima personalización

## Próximos Pasos para Producción

1. **Crear repositorio GitHub** y hacer push del código
2. **Conectar repositorio a Netlify** para deploy automático  
3. **Configurar dominio personalizado** (telefire.com.mx)
4. **Integrar CMS headless** (Strapi recomendado)
5. **Configurar analytics** (Google Analytics, Meta Pixel)
6. **Implementar formularios** con servicio de email (EmailJS/SendGrid)