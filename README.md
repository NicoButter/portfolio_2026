# Portfolio2026

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

- Arquitectura basada en features y componentes standalone (Angular 21).
- SSR (server-side rendering) y prerender de rutas estáticas para SEO y rendimiento.
- Estilos con SCSS moderno usando `@use` y variables de diseño en `src/styles/_variables.scss`.
- Tipografía: `Crimson Text` para títulos y `Inter` (variable) para texto corporal.
- Enfoque en accesibilidad y legibilidad (WCAG AA objetivo).
- **Quake Terminal**: Una interfaz de navegación inmersiva estilo terminal desplegable, con secuencia de arranque animada, efectos hover y navegación dinámica basada en rutas. Incluye un efecto CRT retro que simula monitores antiguos de tubo de rayos catódicos, con líneas de escaneo, glow y distorsiones visuales para una experiencia nostálgica e interactiva.
- **Simulación de Editor Nano**: En las secciones de proyectos y habilidades, el contenido se presenta en una simulación de editor de texto Nano, con efectos CRT mejorados, animaciones de fondo y estructura de contenido inmersiva.
- **Simulación de Terminal Interactiva**: En la sección de habilidades, se simula un terminal que ejecuta el comando `skills --progress`, mostrando barras de progreso ASCII animadas para cada skill (ej. TypeScript: [██████████░░░░░░░░░░] 50%), con efectos CRT retro y animaciones de carga.

## Stack tecnológico

- Angular 21
- TypeScript
- SCSS (Sass) con `@use`
- Node / Express (para servir bundles SSR)
- Vitest para testing unitario

## Estructura relevante

- `src/app/` - código de la aplicación (features, layout, routes).
- `src/styles/` - partials SCSS; `src/styles/_variables.scss` contiene tokens globales (colores, tipografías, espacios).
- `src/index.html` - carga de fuentes (Google Fonts) y meta tags.
- `main.ts`, `main.server.ts`, `server.ts` - entradas para cliente y servidor.
- `dist/portfolio-2026` - salida de build (browser + server bundles y prerendered routes).

## Requisitos previos

- Node.js (recomendado 18+ / 20+ según entorno) y npm (el proyecto indica `npm@10.x`).
- Angular CLI (opcional; los scripts usan la versión local cuando está instalada en devDependencies).

## Instalación y desarrollo

1. Instala dependencias:

```bash
npm install
```

2. Levantar servidor de desarrollo:

```bash
npm run start
# o
ng serve
```

3. Comandos útiles:

- `npm run build` — compila los bundles de producción (incluye server bundle si aplica).
- `npm run watch` — build en modo watch para desarrollo.
- `npm run test` — ejecuta tests unitarios (Vitest).

4. Ejecutar servidor SSR (después de `npm run build`):

```bash
# Compilar
npm run build

# Iniciar servidor SSR
npm run serve:ssr:portfolio-2026
```

El script `serve:ssr:portfolio-2026` ejecuta `node dist/portfolio-2026/server/server.mjs` (ver `package.json`).

## Build, prerender y SSR

- `ng build` genera los bundles y, según configuración, también produce `server.mjs` para SSR y las rutas prerendered en `dist/portfolio-2026`.
- El proyecto prerenderiza rutas estáticas durante el build; revisa la salida para confirmar las rutas generadas.

Si necesitas personalizar SSR/prerender, revisa `angular.json` y los targets `build`, `server` y `prerender`.

## Estilos y tipografía

- Variables globales en `src/styles/_variables.scss` (`--bg`, `--text`, `--accent`, etc.).
- SCSS parcializado con `@use` en `src/styles/`.
- Fuentes cargadas desde `src/index.html` (Inter variable + Crimson Text). Para optimizar la carga de fuentes, considera `font-display` y precarga.

## Despliegue

- Opción estática (si prerender): subir `dist/portfolio-2026/browser` a Netlify, Vercel (static), GitHub Pages, S3+CloudFront, etc.
- Opción SSR: desplegar `dist/portfolio-2026` en un servidor Node y ejecutar `node server/server.mjs` o usar el script `serve:ssr:portfolio-2026`.

Consideraciones de producción: configurar cabeceras (CSP, HSTS), HTTPS, y servir assets desde CDN cuando sea posible.

## Capturas de pantalla

Para visualizar las interfaces interactivas, aquí se incluyen capturas de pantalla del proyecto. Sube las imágenes a `src/assets/images/screenshots/` y enlázalas aquí.

- ![Vista principal con Quake Terminal desplegado](src/assets/images/screenshots/quake-terminal-expanded.png)
- ![Simulación de Editor Nano en sección de proyectos](src/assets/images/screenshots/nano-editor-projects.png)
- ![Simulación de Terminal en sección de skills con barras de progreso](src/assets/images/screenshots/terminal-skills-progress.png)
- ![Efecto CRT en la terminal](src/assets/images/screenshots/crt-effect-terminal.png)

## Contribuir

- Forkea el repo, crea una rama con tu feature/fix y abre un Pull Request.
- Corre tests y mantén el estilo del proyecto antes de enviar cambios.

## Licencia

Este repositorio está licenciado bajo MIT — ver `LICENSE`.

## Contacto

- Nicolás Butterfield — agrega el email o formulario de contacto en el sitio cuando quieras exponerlo públicamente.

---

Si querés, puedo añadir instrucciones de despliegue específicas para Netlify o Vercel, o un apartado para previsualizar las páginas prerendered localmente. Dime cuál preferís y lo agrego.
