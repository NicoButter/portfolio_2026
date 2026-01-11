# Portfolio 2026 🚀

[![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/SCSS-Modern-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

> Portfolio personal interactivo con temática espacial y efectos retro CRT. Presenta una constelación de habilidades técnicas con elementos animados de ciencia ficción, terminal Quake desplegable y renderizado del lado del servidor.

## ✨ Demo en Vivo

🌐 **[Ver Portfolio](https://portfolionicolas2026.netlify.app)** | [Proyectos](https://portfolionicolas2026.netlify.app/projects) | [Skills](https://portfolionicolas2026.netlify.app/skills)

---

## 📋 Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Características Principales](#características-principales)
- [Stack Tecnológico](#stack-tecnológico)
- [Estructura del Proyecto](#estructura-relevante)
- [Instalación y Desarrollo](#instalación-y-desarrollo)
- [Build y Prerender](#build-prerender-y-ssr)
- [Despliegue](#despliegue)
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Performance](#performance-y-optimización)
- [Roadmap](#roadmap-y-mejoras-futuras)
- [Contribuir](#contribuir)
- [Licencia](#licencia)
- [Contacto](#contacto)

---

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

---

## Descripción del proyecto

Portfolio2026 es la presencia personal de Nicolás Butterfield: un portafolio moderno, sobrio y editorial construido con Angular 21. Está pensado para mostrar proyectos, capacidades técnicas y contacto, manteniendo un diseño tipográfico cuidado (Crimson Text + Inter), una paleta mínima y una arquitectura escalable con soporte SSR y prerendering.

## Características principales

### Arquitectura y Tecnología
- Arquitectura basada en features y componentes standalone (Angular 21)
- SSR (server-side rendering) y prerender de rutas estáticas para SEO y rendimiento
- Estilos con SCSS moderno usando `@use` y variables de diseño en `src/styles/_variables.scss`
- Tipografía: `Crimson Text` para títulos y `Inter` (variable) para texto corporal
- Enfoque en accesibilidad y legibilidad (WCAG AA objetivo)
- Signals para state management reactivo
- Change Detection OnPush para optimización de rendimiento

### Interfaz de Navegación
- **Quake Terminal**: Una interfaz de navegación inmersiva estilo terminal desplegable con:
  - Secuencia de arranque animada al estilo Quake
  - Efectos hover y navegación dinámica basada en rutas
  - Efecto CRT retro que simula monitores CRT antiguos
  - Líneas de escaneo, glow y distorsiones visuales
  - Toggle con tecla `~` o botón visual
  - Navegación por teclado completa

### Sección de Skills - Constelación Espacial
La sección de habilidades presenta una visualización única en forma de **Constelación Espacial Interactiva**:

#### Características Principales:
- **Skill Nodes**: Cada habilidad se representa como una estrella brillante con:
  - Tamaño proporcional al nivel de proficiencia (65-100%)
  - Glow de color según categoría (Cyan: Frontend, Verde: Backend, Púrpura: Tools)
  - Animación de parpadeo (twinkle) para efecto estelar
  - Icono tecnológico visible al hacer hover
  - Tooltip con barra de progreso y descripción detallada

- **Conexiones Visuales**: Líneas SVG animadas que conectan habilidades relacionadas
- **Sistema de Categorías**: Leyenda con color-coding (Frontend, Backend, Tools)
- **Responsive Design**: Detección automática de bordes para evitar desbordamiento de tooltips

#### Campo Estelar Animado:
- **3 capas de estrellas de fondo** con diferentes patrones de parpadeo
- **5 cometas/estrellas fugaces** que cruzan la pantalla en distintas trayectorias
- **Efectos CRT**: Viñeta y scanlines para ambiente retro

#### Elementos Espaciales Decorativos:
El ciber-espacio está habitado por referencias icónicas de la cultura sci-fi:

1. **🛰️ ISS (International Space Station)**
   - Orbita lentamente a través de la constelación
   - Glow azul cyan característico
   - Animación de 60 segundos con fade in/out
   - Imagen: `assets/images/iss.png`

2. **👨‍🚀 Astronauta**
   - Flota suavemente en gravedad cero
   - Movimiento vertical sinusoidal con ligera rotación
   - Glow blanco simulando el reflejo del sol
   - Animación de 15 segundos
   - Imagen: `assets/images/astronaut.png`

3. **👽 Xenomorph (Alien)**
   - Huevo de xenomorph acechando en las sombras
   - Movimiento horizontal sutil con cambios de opacidad
   - Glow verde ominoso
   - Animación de 12 segundos
   - Imagen: `assets/images/xenomorpf_egg.png`

4. **🚀 SDF-1 Macross**
   - Fortaleza dimensional de la serie Macross/Robotech
   - Vuela de derecha a izquierda con cambios de escala
   - Glow naranja característico de sus motores
   - Animación de 45 segundos con rotación sutil
   - Imagen: `assets/images/sdf-1.png`

5. **👹 Predator**
   - El cazador alienígena en modo camuflaje
   - Animación vertical con cambios de brillo simulando invisibilidad
   - Glow rojo-naranja
   - Animación de 20 segundos con efecto shimmer
   - Imagen: `assets/images/predator.png`

#### Interactividad:
- **Hover sobre estrellas**: Revela tooltip con:
  - Barra de progreso animada con efecto terminal
  - Porcentaje de proficiencia
  - Descripción detallada de la tecnología
  - Scrollbar personalizado con tema terminal
- **Escalado suave**: Las estrellas crecen 1.5x al pasar el cursor
- **Fade animations**: Transiciones fluidas para todos los elementos interactivos

### Simulación de Editor Nano
En las secciones de proyectos y habilidades, el contenido se presenta en una simulación de editor de texto Nano:
- Efectos CRT mejorados con scanlines
- Animaciones de fondo sutiles
- Estructura de contenido inmersiva
- Colores y tipografía de terminal auténtica

## Stack tecnológico

### Frontend
- **Angular 21** - Framework principal con arquitectura standalone
- **TypeScript** - Desarrollo type-safe con strict mode
- **SCSS (Sass)** - Estilos con `@use` y variables CSS custom properties
- **Angular Signals** - State management reactivo y eficiente
- **RxJS** - Programación reactiva para operaciones asíncronas

### Rendering y Performance
- **SSR (Server-Side Rendering)** - Mejor SEO y tiempo de carga inicial
- **Prerendering** - Generación estática de rutas para máxima velocidad
- **OnPush Change Detection** - Optimización de rendimiento
- **Lazy Loading** - Carga diferida de features

### Tooling y Testing
- **Node.js / Express** - Servidor para SSR
- **Vitest** - Framework de testing unitario rápido y moderno
- **Angular CLI** - Herramientas de desarrollo y build

### Diseño y UX
- **Google Fonts** - Crimson Text + Inter (variable)
- **SVG Animations** - Gráficos vectoriales para conexiones de skills
- **CSS Grid & Flexbox** - Layouts modernos y responsive
- **Custom Scrollbars** - Experiencia de usuario pulida
- **CRT Effects** - Efectos retro de monitor CRT (scanlines, vignette, glow)

## Estructura relevante

```
portfolio_2026/
├── src/
│   ├── app/
│   │   ├── core/                      # Servicios core y guards
│   │   │   ├── services/
│   │   │   │   ├── quake-terminal.service.ts  # Lógica del Quake Terminal
│   │   │   │   └── terminal.service.ts        # Servicios de terminal
│   │   │   ├── guards/                # Route guards
│   │   │   ├── seo/                   # SEO utilities
│   │   │   └── tokens/                # Dependency injection tokens
│   │   │
│   │   ├── features/                  # Feature modules
│   │   │   ├── home/                  # Página principal
│   │   │   ├── about/                 # Sección sobre mí
│   │   │   ├── projects/              # Portfolio de proyectos
│   │   │   └── skills/                # Constelación de skills
│   │   │       ├── skills.ts          # Componente con lógica
│   │   │       ├── skills.html        # Template con SVG y elementos
│   │   │       └── skills.scss        # Estilos con animaciones
│   │   │
│   │   ├── layout/                    # Componentes de layout
│   │   │   ├── header/nav/            # Navegación principal
│   │   │   ├── quake-terminal/        # Componente Quake Terminal
│   │   │   └── shell/                 # Layout principal
│   │   │
│   │   ├── shared/                    # Componentes compartidos
│   │   │   ├── directives/            # Directivas reutilizables
│   │   │   ├── pipes/                 # Pipes custom
│   │   │   └── ui/                    # Componentes UI
│   │   │
│   │   ├── app.config.ts              # Configuración de la app
│   │   ├── app.routes.ts              # Definición de rutas
│   │   └── app.ts                     # Root component
│   │
│   ├── assets/                        # Assets estáticos
│   │   ├── images/
│   │   │   ├── iss.png                # International Space Station
│   │   │   ├── astronaut.png          # Astronauta
│   │   │   ├── xenomorpf_egg.png      # Xenomorph Alien
│   │   │   ├── sdf-1.png              # SDF-1 Macross
│   │   │   ├── predator.png           # Predator
│   │   │   ├── tux.png                # Linux Tux
│   │   │   └── *_logo.*               # Logos de tecnologías
│   │   └── icons/                     # Iconos del proyecto
│   │
│   ├── styles/                        # Estilos globales
│   │   ├── _variables.scss            # Variables CSS y tokens
│   │   ├── _themes.scss               # Temas de color
│   │   ├── _mixins.scss               # Mixins SCSS
│   │   └── styles.scss                # Entry point de estilos
│   │
│   ├── index.html                     # HTML principal
│   ├── main.ts                        # Bootstrap de cliente
│   ├── main.server.ts                 # Bootstrap de servidor
│   └── server.ts                      # Express server para SSR
│
├── dist/portfolio-2026/               # Build output
│   ├── browser/                       # Client bundles
│   └── server/                        # Server bundles (SSR)
│
├── angular.json                       # Configuración Angular
├── tsconfig.json                      # Configuración TypeScript
├── package.json                       # Dependencies y scripts
└── README.md                          # Este archivo
```

### Arquitectura de Componentes

#### Skills Component
- **Modelo de datos**: Interface `Skill` con propiedades (name, level, category, x, y, connections, description)
- **State Management**: Angular Signals para estado reactivo
- **Rendering**: Interpolación de templates con `@for` loops
- **Interactividad**: Event handlers para hover y error handling
- **Estilos**: SCSS modular con animaciones CSS y keyframes
- **SVG**: Líneas de conexión renderizadas dinámicamente

#### Quake Terminal
- **Service-based**: Lógica en `QuakeTerminalService`
- **Keyboard events**: Toggle con tecla `~`
- **Routing integration**: Navegación dinámica basada en Angular Router
- **Animations**: Secuencias de boot y transiciones fluidas

## Requisitos previos

- Node.js (recomendado 18+ / 20+ según entorno) y npm (el proyecto indica `npm@10.x`).
- Angular CLI (opcional; los scripts usan la versión local cuando está instalada en devDependencies).

## Instalación y desarrollo

### 1. Clonar el repositorio
```bash
git clone https://github.com/NicoButter/portfolio-2026.git
cd portfolio-2026
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar en modo desarrollo
```bash
npm run start
# o
ng serve
```
La aplicación estará disponible en `http://localhost:4200/`

### 4. Compilar para producción
```bash
# Build completo (cliente + servidor + prerender)
npm run build

# Solo build de cliente
ng build

# Solo build de servidor
ng build --configuration=production && ng run portfolio-2026:server
```

### 5. Ejecutar con SSR localmente
```bash
# Primero compilar
npm run build

# Luego iniciar servidor SSR
npm run serve:ssr:portfolio-2026
```

El servidor SSR estará disponible en `http://localhost:4000/` (o el puerto configurado)

### Scripts disponibles

```bash
# Desarrollo
npm run start                      # Dev server con live reload
npm run watch                      # Build en modo watch

# Build
npm run build                      # Build de producción completo
npm run build:client              # Solo build de cliente
npm run build:ssr                 # Build de cliente + servidor

# Testing
npm run test                      # Ejecutar tests con Vitest
npm run test:watch               # Tests en modo watch
npm run test:coverage            # Tests con reporte de cobertura

# Servidor SSR
npm run serve:ssr:portfolio-2026  # Ejecutar servidor SSR después del build

# Linting y formateo
npm run lint                      # Ejecutar ESLint
npm run format                    # Formatear código con Prettier (si está configurado)
```

## Build, prerender y SSR

- `ng build` genera los bundles y, según configuración, también produce `server.mjs` para SSR y las rutas prerendered en `dist/portfolio-2026`.
- El proyecto prerenderiza rutas estáticas durante el build; revisa la salida para confirmar las rutas generadas.

Si necesitas personalizar SSR/prerender, revisa `angular.json` y los targets `build`, `server` y `prerender`.

## Estilos y tipografía

- Variables globales en `src/styles/_variables.scss` (`--bg`, `--text`, `--accent`, etc.).
- SCSS parcializado con `@use` en `src/styles/`.
- Fuentes cargadas desde `src/index.html` (Inter variable + Crimson Text). Para optimizar la carga de fuentes, considera `font-display` y precarga.

## Despliegue

### Opción 1: Despliegue Estático (con Prerender)

Si usas prerendering, puedes desplegar como sitio estático:

#### Netlify
```bash
# Configurar en netlify.toml o en la interfaz web
# Build command: npm run build
# Publish directory: dist/portfolio-2026/browser
```

**netlify.toml** (ya incluido):
```toml
[build]
  command = "npm run build"
  publish = "dist/portfolio-2026/browser"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Configuración:
# Build Command: npm run build
# Output Directory: dist/portfolio-2026/browser
```

#### GitHub Pages
```bash
# Build
npm run build

# Deploy (con gh-pages)
npx angular-cli-ghpages --dir=dist/portfolio-2026/browser
```

#### AWS S3 + CloudFront
```bash
# Build
npm run build

# Sync a S3
aws s3 sync dist/portfolio-2026/browser s3://tu-bucket-name --delete

# Invalidar cache de CloudFront
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### Opción 2: Despliegue con SSR

Para aprovechar el Server-Side Rendering:

#### Render.com
1. Conecta tu repositorio
2. Configura:
   - **Build Command**: `npm run build`
   - **Start Command**: `npm run serve:ssr:portfolio-2026`
   - **Environment**: Node

#### Railway
```bash
# Instalar Railway CLI
npm i -g @railway/cli

# Login y deploy
railway login
railway init
railway up
```

**Configuración Railway**:
- Build Command: `npm run build`
- Start Command: `npm run serve:ssr:portfolio-2026`

#### DigitalOcean App Platform
1. Conecta tu repositorio
2. Configura:
   - **Build Command**: `npm run build`
   - **Run Command**: `node dist/portfolio-2026/server/server.mjs`
   - **HTTP Port**: 4000 (o variable de entorno)

#### Heroku
```bash
# Login a Heroku
heroku login

# Crear app
heroku create tu-portfolio

# Configurar buildpack
heroku buildpacks:set heroku/nodejs

# Deploy
git push heroku main
```

**Procfile**:
```
web: node dist/portfolio-2026/server/server.mjs
```

#### VPS (Ubuntu/Debian)
```bash
# En el servidor
git clone https://github.com/NicoButter/portfolio-2026.git
cd portfolio-2026
npm install
npm run build

# Usar PM2 para gestionar el proceso
npm install -g pm2
pm2 start dist/portfolio-2026/server/server.mjs --name portfolio
pm2 save
pm2 startup

# Configurar Nginx como reverse proxy
sudo nano /etc/nginx/sites-available/portfolio

# Contenido del archivo:
server {
    listen 80;
    server_name tu-dominio.com;

    location / {
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Activar sitio
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Variables de Entorno

Para producción, considera configurar:

```bash
# Puerto del servidor
PORT=4000

# URL base (para SSR)
BASE_URL=https://portfolionicolas2026.netlify.app

# Otros
NODE_ENV=production
```

### Checklist Pre-Deploy

- [ ] Ejecutar `npm run build` sin errores
- [ ] Verificar que todas las rutas estén prerendered correctamente
- [ ] Comprobar assets y imágenes se cargan correctamente
- [ ] Configurar headers de seguridad (CSP, HSTS, X-Frame-Options)
- [ ] Configurar HTTPS/SSL
- [ ] Configurar CDN para assets estáticos
- [ ] Habilitar compresión gzip/brotli
- [ ] Configurar caché headers apropiados
- [ ] Verificar Core Web Vitals con Lighthouse
- [ ] Probar en diferentes dispositivos y navegadores

## Capturas de pantalla

### Interfaces Interactivas

#### Quake Terminal
![Vista principal con Quake Terminal desplegado](src/assets/images/screenshots/quake-terminal-expanded.png)
*Terminal desplegable con efectos CRT y navegación interactiva*

![Secuencia de arranque del Quake Terminal](src/assets/images/screenshots/quake-boot-sequence.png)
*Animación de inicio al estilo Quake con carga de sistemas*

#### Constelación de Skills
![Constelación espacial de habilidades](src/assets/images/screenshots/skills-constellation-overview.png)
*Vista general de la constelación con campo estelar animado*

![Tooltip de skill con barra de progreso](src/assets/images/screenshots/skill-tooltip-hover.png)
*Hover sobre skill mostrando tooltip con progreso y descripción*

![Elementos espaciales decorativos](src/assets/images/screenshots/space-elements-showcase.png)
*ISS, Astronauta, Xenomorph, SDF-1 y Predator en el ciber-espacio*

#### Efectos Visuales
![Efecto CRT en la terminal](src/assets/images/screenshots/crt-effect-terminal.png)
*Efectos CRT retro: scanlines, vignette y glow*

![Conexiones SVG entre skills](src/assets/images/screenshots/skill-connections-svg.png)
*Líneas animadas conectando habilidades relacionadas*

#### Simulación de Editor Nano
![Simulación de Editor Nano en sección de proyectos](src/assets/images/screenshots/nano-editor-projects.png)
*Editor Nano con contenido de proyectos*

### Assets de Elementos Espaciales

Los siguientes assets están ubicados en `src/assets/images/`:

- `iss.png` - International Space Station
- `astronaut.png` - Astronauta flotando
- `xenomorpf_egg.png` - Huevo Xenomorph (Alien)
- `sdf-1.png` - SDF-1 Macross Fortress
- `predator.png` - Predator en modo camuflaje
- `tux.png` - Tux (Linux mascot) para skill Linux
- Logos de tecnologías: `typescript_logo.jpeg`, `javascript_logo.png`, `angular_logo.png`, `java_logo.png`, `python_logo.png`, `springboot_logo.png`, `django_logo.png`, `sql_logo.png`

> **Nota**: Para mejor rendimiento, considera optimizar las imágenes con herramientas como `imagemin` o `sharp`, y usar formatos modernos como WebP con fallbacks.

## Contribuir

### Cómo contribuir
1. Forkea el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commitea tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guías de estilo
- Usa TypeScript strict mode
- Sigue las convenciones de Angular (standalone components, signals)
- Mantén los componentes pequeños y enfocados en una sola responsabilidad
- Documenta funciones complejas con JSDoc
- Ejecuta tests antes de hacer commit
- Respeta la paleta de colores y sistema de diseño existente

### Testing
```bash
# Ejecutar tests
npm run test

# Ejecutar tests en modo watch
npm run test -- --watch

# Ejecutar tests con coverage
npm run test -- --coverage
```

## Roadmap y Mejoras Futuras

### 🚀 Features Planificadas
- [ ] Sistema de blog/artículos técnicos con Markdown
- [ ] Modo oscuro/claro toggle
- [ ] Internacionalización (i18n) - Español/Inglés
- [ ] Formulario de contacto funcional con backend
- [ ] Animaciones de página con View Transitions API
- [ ] Progressive Web App (PWA) support

### 🎨 Mejoras Visuales
- [ ] Más easter eggs interactivos en la constelación
- [ ] Parallax scrolling en secciones
- [ ] Partículas interactivas con cursor
- [ ] Modo "matrix rain" como alternativa al CRT
- [ ] Transiciones entre páginas más elaboradas

### ⚡ Optimizaciones
- [ ] Lazy loading de imágenes con placeholders
- [ ] Conversión de assets a WebP/AVIF
- [ ] Code splitting más granular
- [ ] Service Worker para caching
- [ ] Mejoras de Core Web Vitals

### 🔧 Técnicas
- [ ] Migración completa a signals (view queries, etc.)
- [ ] Implementar unit tests para todos los componentes
- [ ] E2E tests con Playwright
- [ ] CI/CD pipeline con GitHub Actions
- [ ] Análisis de bundle size automatizado

## Performance y Optimización

### Métricas Objetivo
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **Lighthouse Score**: > 90 en todas las categorías

### Estrategias Implementadas
- ✅ SSR y prerendering para tiempo de carga inicial óptimo
- ✅ OnPush change detection en todos los componentes
- ✅ Lazy loading de features
- ✅ Optimización de animaciones con `transform` y `opacity`
- ✅ Uso de signals para state management eficiente
- ✅ CSS Grid y Flexbox para layouts performantes
- ✅ Reducción de reflows con animaciones CSS puras

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

```
MIT License

Copyright (c) 2026 Nicolás Butterfield

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 📧 Contacto

**Nicolás Butterfield**

- 🌐 Portfolio: [portfolionicolas2026.netlify.app](https://portfolionicolas2026.netlify.app)
- 💼 LinkedIn: [Nicolás Butterfield](https://www.linkedin.com/in/nicolás-butterfield-9964aa1a3/)
- 🐙 GitHub: [@NicoButter](https://github.com/NicoButter)
- 📧 Email: nicobutter@gmail.com

## 🙏 Agradecimientos

- Referencias de diseño y conceptos de sci-fi
- Comunidad de Angular por el increíble framework
- Inspiración en interfaces retro de terminales Quake y DOS
- Assets de elementos espaciales (ISS, Astronauta, Xenomorph, SDF-1, Predator)

---

## 📚 Recursos Adicionales

### Documentación
- [Angular Documentation](https://angular.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [SCSS Guide](https://sass-lang.com/guide)

### Tutoriales y Guías
- [Angular SSR Guide](https://angular.dev/guide/ssr)
- [Performance Best Practices](https://web.dev/vitals/)
- [Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

### Herramientas de Desarrollo
- [Angular DevTools](https://angular.dev/tools/devtools)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

---

<div align="center">

**⭐ Si este proyecto te resultó útil, considera darle una estrella en GitHub ⭐**

Hecho con ❤️ y Angular 21

[⬆ Volver arriba](#portfolio-2026-)

</div>
