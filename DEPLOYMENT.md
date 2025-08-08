# Guía de Despliegue - Telefire México

## 🚀 Despliegue en Netlify (Recomendado)

### Preparación del Repositorio

1. **Crear repositorio en GitHub**
```bash
git init
git add .
git commit -m "feat: initial commit - Telefire México website"
git branch -M main
git remote add origin https://github.com/tu-usuario/telefire-mexico.git
git push -u origin main
```

2. **Verificar estructura de archivos**
```
proyecto/
├── netlify.toml        # ✅ Configuración de Netlify
├── package.json        # ✅ Scripts de build
├── vite.config.ts      # ✅ Configuración de Vite
├── dist/              # ✅ Se genera automáticamente
└── .env.example       # ✅ Variables de entorno ejemplo
```

### Configuración en Netlify

#### Paso 1: Conectar Repositorio
1. Ingresar a [netlify.com](https://netlify.com)
2. Click en "New site from Git"
3. Autorizar GitHub y seleccionar repositorio
4. Configurar build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18`

#### Paso 2: Variables de Entorno
En Netlify Dashboard → Site settings → Environment variables:

```env
NODE_ENV=production
VITE_APP_TITLE=Telefire México - Sistemas de Detección de Incendios
VITE_API_BASE_URL=https://tu-sitio.netlify.app/api
```

#### Paso 3: Deploy Settings
```yaml
# netlify.toml ya está configurado con:
[build]
  publish = "dist/"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Deploy Automático
Una vez configurado, cada push a `main` desplegará automáticamente.

---

## 🔧 Despliegue Manual Alternativo

### Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Docker (Auto-hospedado)
```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 5000
CMD ["npm", "run", "preview"]
```

```bash
# Build y run
docker build -t telefire-mexico .
docker run -p 5000:5000 telefire-mexico
```

---

## 📊 Verificación Post-Deploy

### Checklist de Funcionamiento
- [ ] **Homepage carga correctamente**
- [ ] **Navegación smooth scroll funciona**
- [ ] **Formulario de cotización envía emails**
- [ ] **Carrito de productos actualiza contador**
- [ ] **Responsive design en móvil**
- [ ] **Velocidad < 3s First Contentful Paint**

### Testing en Producción
```bash
# Lighthouse CI
npm install -g @lhci/cli
lhci autorun --upload.target=temporary-public-storage

# Performance testing
curl -o /dev/null -s -w "%{time_total}\n" https://tu-sitio.netlify.app
```

### Monitoring
1. **Google PageSpeed Insights**
2. **GTmetrix**
3. **Netlify Analytics** (built-in)

---

## 🔄 CI/CD Pipeline

### GitHub Actions (Opcional)
```yaml
# .github/workflows/deploy.yml
name: Deploy to Netlify

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to Netlify
      uses: netlify/actions/cli@master
      with:
        args: deploy --prod --dir=dist
      env:
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
```

---

## 🎯 Configuración de Dominio

### Dominio Personalizado
1. **En Netlify Dashboard**:
   - Site settings → Domain management
   - Add custom domain: `telefire.com.mx`

2. **Configuración DNS**:
```dns
# En tu proveedor de dominio
CNAME   www    tu-sitio.netlify.app
ALIAS   @      tu-sitio.netlify.app
```

### SSL Certificate
- Netlify proporciona SSL automático
- Let's Encrypt gratuito incluido
- Certificado se renueva automáticamente

---

## 📈 Optimización de Performance

### Build Optimizations
```typescript
// vite.config.ts - ya configurado
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog']
        }
      }
    }
  }
})
```

### Assets Optimization
- **Imágenes**: Formato WebP automático
- **CSS**: Minificación y purging
- **JS**: Code splitting y tree shaking
- **Fonts**: Preload crítico

---

## 🔐 Seguridad

### Headers de Seguridad
```toml
# netlify.toml - ya configurado
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
```

### Environment Variables
- Nunca exponer secrets en frontend
- Usar prefijo `VITE_` solo para datos públicos
- Validar variables en runtime

---

## 🚨 Troubleshooting

### Errores Comunes

#### Build Fails
```bash
# Error: Module not found
npm install --save-dev @types/node

# Error: TypeScript version
npm update typescript
```

#### 404 en Rutas
```toml
# Verificar en netlify.toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Variables de Entorno
```javascript
// Verificar acceso en frontend
console.log(import.meta.env.VITE_APP_TITLE)
// No funciona: console.log(process.env.VITE_APP_TITLE)
```

### Logs y Debug
```bash
# Netlify logs
netlify dev

# Build logs en Netlify Dashboard
# → Site settings → Build & deploy → Build logs
```

---

## 📞 Soporte Post-Deploy

### Monitoreo Continuo
1. **Uptime monitoring**: UptimeRobot, Pingdom
2. **Error tracking**: Sentry integration
3. **Analytics**: Google Analytics 4

### Actualizaciones
```bash
# Actualizaciones de seguridad
npm audit fix

# Dependencias
npm outdated
npm update
```

### Backup y Recovery
- Código: GitHub repository
- Deploy: Netlify mantiene historial
- Database: Backup automático si aplica

---

**¡Despliegue completado!** 🎉

Tu sitio Telefire México está listo para producción con:
- ⚡ Performance optimizada
- 🔒 Seguridad configurada  
- 📱 Responsive design
- 🚀 Deploy automático