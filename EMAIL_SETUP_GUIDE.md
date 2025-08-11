# Configuración de Envío de Correos - Telefire México

## 📧 Estado Actual
Actualmente las cotizaciones se procesan y almacenan localmente, pero **NO se envían por correo**. Para activar el envío de emails, sigue una de estas opciones:

## 🔧 Opciones de Implementación

### Opción 1: EmailJS (Más Fácil - Solo Frontend)
**Ventajas:** Sin backend, configuración simple, gratis hasta 200 emails/mes

```bash
npm install @emailjs/browser
```

**Configuración:**
1. Crear cuenta en [EmailJS.com](https://emailjs.com)
2. Configurar servicio de email (Gmail, Outlook, etc.)
3. Crear template de cotización
4. Agregar keys en variables de entorno

**Variables de entorno necesarias:**
```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAIL_TO=cotizaciones@telefire.com.mx
```

### Opción 2: Nodemailer + SMTP (Más Profesional)
**Ventajas:** Control total, emails profesionales desde tu dominio

```bash
npm install nodemailer @types/nodemailer
```

**Variables de entorno necesarias:**
```env
SMTP_HOST=mail.telefire.com.mx
SMTP_PORT=587
SMTP_USER=no-reply@telefire.com.mx
SMTP_PASS=your_email_password
EMAIL_TO=cotizaciones@telefire.com.mx
EMAIL_FROM=no-reply@telefire.com.mx
```

### Opción 3: SendGrid (Para Alto Volumen)
**Ventajas:** Servicio profesional, analíticas, deliverability alta

```bash
npm install @sendgrid/mail
```

**Variables de entorno necesarias:**
```env
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxx
EMAIL_TO=cotizaciones@telefire.com.mx
EMAIL_FROM=no-reply@telefire.com.mx
```

## 🎯 Recomendación

Para **Telefire México**, recomiendo usar **Nodemailer con SMTP** por ser más profesional y usar tu propio dominio (telefire.com.mx).

### Email de Destino Sugerido:
- `cotizaciones@telefire.com.mx` - Para cotizaciones de productos
- `contacto@telefire.com.mx` - Para consultas generales
- `socios@telefire.com.mx` - Para partnership/distribución

## 📋 Template de Email Sugerido

```html
Asunto: Nueva Cotización - Telefire México

Estimado equipo,

Han recibido una nueva solicitud de cotización desde telefire.com.mx:

DATOS DEL CLIENTE:
- Nombre: {{fullName}}
- Email: {{email}}
- Teléfono: {{phone}}
- Empresa: {{company}}

PRODUCTOS SOLICITADOS:
{{products}}

MENSAJE:
{{message}}

FECHA: {{date}}

---
Telefire México - Sistemas de Detección de Incendios
Website: https://telefire.com.mx
```

## 🚀 Implementación Rápida

¿Quieres que implemente el envío de correos ahora? Solo necesitas:

1. **Elegir la opción** (EmailJS, Nodemailer, o SendGrid)
2. **Proporcionar las credenciales** de email
3. **Especificar el email de destino** para las cotizaciones

Tiempo de implementación: ~15 minutos