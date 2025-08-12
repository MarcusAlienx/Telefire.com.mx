# Fix para Error de Despliegue en Netlify - Telefire México

## 🔧 Problema Identificado
El build de Netlify falló porque:
1. `vite` no estaba disponible como comando durante el build
2. El script estaba configurado para aplicación full-stack pero Netlify es hosting estático

## ✅ Soluciones Aplicadas

### 1. Vite Movido a Dependencies
```bash
npm install vite esbuild
```
- Ahora Vite está disponible durante el build en Netlify

### 2. Build Script Simplificado
**Anterior:** `vite build && esbuild server/index.ts...` (full-stack)
**Nuevo:** `vite build` (solo frontend estático)

### 3. Netlify.toml Optimizado
```toml
[build]
  publish = "dist/"
  command = "vite build"
```

### 4. Plugins Removidos Temporalmente
- Removido `@netlify/plugin-lighthouse` que podía causar conflictos
- Build más simple y estable

## 🚀 Próximos Pasos para Despliegue

### Paso 1: Commit y Push
```bash
git add .
git commit -m "fix: Netlify deployment configuration

- Move vite to production dependencies
- Simplify build command for static hosting
- Remove conflicting plugins
- Fix package dependencies for Netlify build"
git push
```

### Paso 2: Nuevo Deploy en Netlify
1. Ve a tu proyecto en Netlify Dashboard
2. Click en "Deploy" > "Clear cache and deploy site"
3. Esperar build exitoso

### Paso 3: Verificar Funcionamiento
El sitio debería cargar pero sin backend:
- ✅ **Funciona:** Navegación, UI, carrito (local storage)
- ❌ **No funciona:** Formularios de contacto (sin backend)

## 📧 Formularios de Contacto

Para que funcionen los formularios en Netlify estático, opciones:

### Opción A: Netlify Forms (Recomendado)
```html
<form name="partnership" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="partnership" />
  <!-- campos del formulario -->
</form>
```

### Opción B: EmailJS (JavaScript puro)
- Integrar EmailJS para envío de emails desde frontend
- No requiere backend

### Opción C: Netlify Functions
- Crear función serverless para manejar formularios
- Más complejo pero más control

## 🎯 Estado Actual
- ✅ **Build configurado** correctamente para Netlify
- ✅ **Vite disponible** como dependencia de producción
- ✅ **Configuración optimizada** para hosting estático
- 🔄 **Listo para re-deploy** en Netlify

## ⚡ Build Command Actualizado
```bash
# Comando de build simplificado para Netlify
vite build
```

Esto genera el sitio estático en `/dist` listo para hosting en Netlify.