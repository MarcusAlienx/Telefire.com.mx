# Telefire México - Sistema de Detección y Prevención de Incendios

![Telefire México](https://img.shields.io/badge/Telefire-México-red?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.x-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)
![Express](https://img.shields.io/badge/Express-4.x-green?style=for-the-badge&logo=express)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-cyan?style=for-the-badge&logo=tailwindcss)

## 📋 Descripción del Proyecto

Telefire México es una plataforma web completa desarrollada como un clon integral del sitio web israelí Telefire.com, adaptado específicamente para el mercado mexicano. El proyecto replica todos los elementos visuales, efectos, tipografía y funcionalidades del sitio original, manteniendo el diseño de una sola página con navegación por anclajes.

### 🎯 Objetivo Principal

Crear una presencia digital profesional para Telefire México que showcase sistemas de detección de incendios, soluciones IBMS (Intelligent Building Management Systems), y servicios de seguridad integral para el mercado B2B mexicano.

## 🚀 Características Principales

### 📦 Funcionalidades Core
- **Catálogo completo de productos** con todas las categorías
- **Sistema de cotización integrado** con carrito visual
- **Contador dinámico de productos** en el header (🛒)
- **Formularios de contacto** con validación completa
- **Navegación por anclajes** smooth scroll
- **Responsive design** móvil-first
- **Efectos visuales** y animaciones CSS

### 🛡️ Productos y Servicios
- **Paneles de Control**: Sistemas centralizados de detección
- **Detectores**: Sensores de humo, temperatura y llama
- **Sistemas IBMS**: Gestión inteligente de edificios
- **Extinción**: Sistemas automáticos de supresión
- **Servicios en la Nube**: Monitoreo remoto 24/7

## 🏗️ Arquitectura del Sistema

### Frontend (Cliente)
```
client/
├── src/
│   ├── components/          # Componentes UI reutilizables
│   │   ├── ui/             # shadcn/ui components
│   │   ├── navigation/     # Navbar y Footer
│   │   └── sections/       # Secciones de la página
│   ├── pages/              # Páginas de la aplicación
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilidades y configuración
│   ├── App.tsx             # Componente principal
│   └── main.tsx            # Punto de entrada
└── index.html
```

**Stack Frontend:**
- **React 18** con TypeScript
- **Wouter** para routing client-side
- **Tailwind CSS** + **shadcn/ui** para estilos
- **TanStack Query** para gestión de estado del servidor
- **React Hook Form** + **Zod** para validación de formularios
- **Vite** como build tool

### Backend (Servidor)
```
server/
├── index.ts               # Servidor Express principal
├── routes.ts              # Rutas de la API REST
├── storage.ts             # Interfaz de almacenamiento
└── vite.ts                # Integración con Vite
```

**Stack Backend:**
- **Express.js** con TypeScript
- **API RESTful** bajo prefijo `/api`
- **Almacenamiento en memoria** (IStorage interface)
- **Validación** con esquemas Zod compartidos
- **Hot reload** integrado con Vite

### Esquemas Compartidos
```
shared/
└── schema.ts              # Tipos TypeScript y esquemas Zod
```

## 📊 Flujo de Datos y Funcionalidades

### 1. Sistema de Cotización
```typescript
// Flujo de cotización
Usuario hace clic en "Cotizar" → 
Producto se agrega al carrito → 
Contador se actualiza dinámicamente → 
Lista visible en formulario de contacto → 
Envío de cotización por email
```

### 2. Navegación
```typescript
// Sistema de navegación
Navbar con dropdowns → 
Smooth scroll a secciones → 
Responsive hamburger menu → 
Persistencia de estado
```

### 3. Gestión de Estado
```typescript
// TanStack Query para estado del servidor
useQuery({ queryKey: ['/api/data'] })
useMutation({ 
  mutationFn: apiRequest,
  onSuccess: () => queryClient.invalidateQueries()
})
```

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Git

### Configuración Local
```bash
# Clonar repositorio
git clone [REPO_URL]
cd telefire-mexico

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5000`

### Scripts Disponibles
```bash
npm run dev          # Desarrollo con hot reload
npm run build        # Build de producción
npm run preview      # Preview del build
npm run type-check   # Verificación de tipos
```

## 🌐 Despliegue en Netlify

### Configuración de Build
```toml
# netlify.toml
[build]
  publish = "dist/"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Variables de Entorno
```env
# Producción
NODE_ENV=production
VITE_APP_TITLE="Telefire México"
VITE_API_BASE_URL="https://tu-dominio.netlify.app/api"
```

### Pasos de Despliegue
1. **Conectar repositorio** a Netlify
2. **Configurar build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Configurar variables** de entorno
4. **Deploy automático** en cada push a main

## 🔄 CMS Headless Recomendado

### Strapi (Recomendado)
```typescript
// Integración con Strapi
const strapiConfig = {
  apiUrl: process.env.VITE_STRAPI_URL,
  endpoints: {
    products: '/api/products',
    testimonials: '/api/testimonials',
    caseStudies: '/api/case-studies'
  }
}
```

**Ventajas de Strapi:**
- Interface administrativa intuitiva
- API REST/GraphQL automática
- Gestión de medios integrada
- Roles y permisos granulares
- Self-hosted o cloud

### Alternativas CMS
- **Contentful**: Enterprise-grade, CDN global
- **Sanity**: Real-time, developer-friendly
- **Ghost**: Ideal para blog/noticias
- **Directus**: Open-source, flexible

## 🔧 Actualizaciones y Mantenimiento

### Agregar Nuevos Productos
```typescript
// 1. Actualizar schema en shared/schema.ts
export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.enum(['paneles', 'detectores', 'ibms']),
  description: z.string(),
  features: z.array(z.string()),
  image: z.string().url(),
  specifications: z.record(z.string())
})

// 2. Actualizar componente Products
const newProduct = {
  id: 'new-product-id',
  name: 'Nuevo Producto',
  category: 'detectores'
}
```

### Modificar Secciones
```typescript
// Estructura de secciones en pages/home.tsx
<Hero />                    // Sección principal
<Solutions />               // Soluciones destacadas  
<Products />                // Catálogo completo
<Advantages />              // Ventajas competitivas
<FireSafety />              // Protección contra incendios
<CaseStudies />             // Casos de éxito
<Sustainability />          // Sostenibilidad
<Applications />            // Aplicaciones
<Partnership />             // Formulario de contacto
```

### Personalización de Estilos
```css
/* tailwind.config.ts - Colores de marca */
module.exports = {
  theme: {
    extend: {
      colors: {
        'telefire-red': '#DC2626',
        'telefire-blue': '#1E40AF',
        'telefire-gray': '#6B7280'
      }
    }
  }
}
```

## 📈 Performance y Optimización

### Métricas Objetivo
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s

### Optimizaciones Implementadas
- **Code splitting** automático con Vite
- **Lazy loading** de componentes
- **Optimización de imágenes** responsive
- **CSS purging** automático
- **Compression** gzip/brotli

## 🧪 Testing y Calidad

### Testing Framework (Recomendado)
```bash
# Instalación de testing
npm install -D vitest @testing-library/react @testing-library/jest-dom

# Ejecutar tests
npm run test
npm run test:coverage
```

### Linting y Formatting
```bash
# ESLint + Prettier
npm install -D eslint prettier @typescript-eslint/parser

# Scripts
npm run lint
npm run format
```

## 📝 Contribución

### Workflow de Git
```bash
# Feature branch
git checkout -b feature/nueva-funcionalidad

# Commits descriptivos
git commit -m "feat: agregar sistema de favoritos"
git commit -m "fix: corregir navegación móvil"

# Push y PR
git push origin feature/nueva-funcionalidad
```

### Convenciones de Código
- **TypeScript strict** mode
- **Componentes funcionales** con hooks
- **Props interface** explícitas
- **Error boundaries** implementados
- **Accesibilidad** WCAG 2.1 AA

## 📞 Soporte y Contacto

### Documentación Técnica
- [Arquitectura detallada](./docs/architecture.md)
- [API Reference](./docs/api.md)
- [Deployment Guide](./docs/deployment.md)

### Issues y Bugs
- Reportar en GitHub Issues
- Incluir pasos de reproducción
- Screenshots/videos si aplica

### Desarrollo y Consultoría
Para actualizaciones, nuevas features o consultoría técnica, contactar al equipo de desarrollo.

---

**Telefire México** - Protegiendo vidas y patrimonio con tecnología israelí de vanguardia 🔥🛡️