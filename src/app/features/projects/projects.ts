import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  projects = signal<Project[]>([
    {
      title: 'IconWear KDE',
      tagline: 'Los íconos envejecen según cuánto los usás. Tu escritorio cuenta tu historia.',
      description: 'Aplicación para KDE Plasma que añade una dimensión visual única: los iconos se desgastan progresivamente según su uso, mostrando arañazos, desaturación y pérdida de brillo. Sistema de desgaste ponderado realista que considera lanzamientos y tiempo activo. Incluye API DBus completa, persistencia automática y efectos visuales renderizados con shaders GLSL en GPU.',
      technologies: ['KDE Plasma', 'Qt 5', 'C++17', 'QML', 'GLSL', 'DBus', 'CMake'],
      highlights: [
        'Desgaste visual progresivo con arañazos y desaturación proporcional al uso',
        'Fórmula ponderada: (lanzamientos × 1.0) + (minutos_activos × 0.01)',
        'Shader GLSL en GPU para efectos visuales en tiempo real',
        'Animación de "reconstrucción" con efecto spark para restaurar iconos',
        'Interfaz DBus completa para integración con otras herramientas',
        'Persistencia automática en ~/.config/iconwearrc',
        'Menú contextual con métricas detalladas y opciones de restauración'
      ],
      githubUrl: 'https://github.com/nicolasbutterfield/iconwear-kde'
    },
    {
      title: 'Dev Soundtrack',
      tagline: 'Your coding session deserves an epic soundtrack!',
      description: 'Extensión para VS Code que reproduce música de fondo y efectos de sonido épicos mientras codificas. Incluye múltiples ambientes musicales (Epic, Lo-Fi, Synthwave, 8-Bit, Ambient, Metal) y efectos de sonido automáticos para acciones como guardar archivos, compilaciones exitosas, commits de Git. Sistema de control completo con paneles personalizables, atajos de teclado y configuración persistente.',
      technologies: ['TypeScript', 'VS Code API', 'Web Audio API', 'Electron', 'Node.js', 'Webpack'],
      highlights: [
        '6 ambientes musicales diferentes: Epic, Lo-Fi, Synthwave, 8-Bit, Ambient y Metal',
        'Efectos de sonido automáticos para: guardar archivos, compilaciones, errores, commits de Git',
        'Panel de control con interfaz moderna para seleccionar música y controlar volumen',
        'Atajos de teclado personalizables: Ctrl+Alt+M, Ctrl+Alt+P, Ctrl+Alt+0, etc.',
        'Controles independientes de volumen para música y efectos',
        'Soporte para sonidos personalizados del usuario (.mp3, .wav, .ogg)',
        'Configuración persistente entre sesiones de VS Code',
        'Auto-play opcional al abrir VS Code'
      ],
      githubUrl: 'https://github.com/nicolasbutterfield/dev-soundtrack'
    },
    {
      title: 'UNPA Coding Games',
      tagline: 'En el Capitolio, el código es ley. En la arena, solo sobreviven los mejores programadores.',
      description: 'Plataforma web completa inspirada en Los Juegos del Hambre para competencias de programación en la Universidad Nacional de la Patagonia Austral (UNPA). Sistema jerárquico multi-rol con gestión avanzada de torneos, distritos y períodos configurables. Incluye acreditación QR, validación automática de código, sistema de patrocinio de mentores, dashboards personalizados y monitoreo en tiempo real con auditoría completa.',
      technologies: ['Django 5.0', 'Python 3.14+', 'PostgreSQL', 'HTML5', 'CSS3', 'JavaScript ES6+', 'Gunicorn', 'Nginx', 'Docker'],
      highlights: [
        'Sistema jerárquico de 4 roles: Tributo, Mentor, Vigilante, Jefe del Capitolio',
        'Gestión avanzada de torneos con períodos configurables (acreditación, competencia, premios)',
        'Acreditación de tributos con credenciales QR y envío por email con PDF',
        'Sistema de patrocinio: mentores con presupuesto de puntos para enviar ayudas',
        'Validación automática de código con ejecución aislada y casos de prueba',
        'Rankings en tiempo real por distrito y global',
        'Dashboards personalizados por rol con estadísticas en vivo',
        'Notificaciones avanzadas con polling inteligente y sonido opcional',
        'Auditoría completa de cambios de estado de torneos',
        '9 tests automatizados y suite de pruebas completa'
      ],
      githubUrl: 'https://github.com/nicolasbutterfield/UNPA_Coding_Games'
    },
    {
      title: 'ElectroSpace - ISS Experience',
      tagline: 'Explora la vista desde la Cúpula de la ISS y entrena como astronauta en el NBL',
      description: 'Experiencia interactiva desarrollada para el NASA Hackathon 2025 que permite explorar la Estación Espacial Internacional. Incluye video en vivo desde la ISS, simulación de flotabilidad en el Laboratorio de Flotabilidad Neutra (NBL), mapa interactivo con posición actual, y juego 3D en Godot que simula gravedad cero. Proyecto colaborativo de 7 desarrolladores enfocado en acercar la investigación espacial a estudiantes.',
      technologies: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Bootstrap 5', 'Animate.css', 'tsparticles', 'Leaflet', 'APIs NASA', 'Godot Engine', 'Node.js'],
      highlights: [
        'Video en vivo desde la Cúpula de la ISS integrado en tiempo real',
        'Simulación de flotabilidad NBL con control de intensidad ajustable',
        'Mapa interactivo de Leaflet mostrando posición actual de la ISS',
        'Juego 3D en Godot con simulación de gravedad cero y caminatas espaciales',
        'Información educativa sobre beneficios de la investigación espacial',
        'Integración completa con APIs oficiales de la NASA',
        'Efectos visuales con tsparticles (campo de estrellas animado)',
        'Diseño completamente responsivo con Bootstrap 5',
        'Animaciones fluidas con Animate.css para mejor UX',
        'Proyecto ganador NASA Hackathon 2025 - Sede Río Gallegos'
      ],
      githubUrl: 'https://github.com/NicoButter/NASA--HACKATHON'
    },
  ]);
}
