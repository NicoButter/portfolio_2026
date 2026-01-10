import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  websiteUrl?: string;
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
    {
      title: 'GJParamotor',
      tagline: 'Página de aterrizaje para GJParamotor, una plataforma dedicada a servicios de paramotor, cursos de formación, galería de imágenes y más.',
      description: 'GJParamotor es una aplicación web desarrollada con Angular que sirve como página de aterrizaje para promocionar y gestionar servicios relacionados con el paramotor. Incluye secciones para información sobre el instructor, cursos disponibles, galería de fotos y videos, escuela de tierra, productos y servicios ofrecidos.',
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Node.js'],
      highlights: [
        'Página de Inicio: Introducción y navegación principal.',
        'Sobre Mí: Información personal del instructor y experiencia.',
        'Cursos: Detalles de los cursos de paramotor disponibles.',
        'Galería: Colección de imágenes y videos relacionados con el paramotor.',
        'Escuela de Tierra: Información sobre formación teórica y práctica.',
        'Productos: Catálogo de productos relacionados con el paramotor.',
        'Servicios: Descripción de los servicios ofrecidos.',
        'Detalles: Secciones detalladas para imágenes, videos y vuelos de descubrimiento.',
        'Aplicación responsiva que se adapta a dispositivos móviles y de escritorio.'
      ],
      githubUrl: 'https://github.com/nicolasbutterfield/GJParamotor',
      websiteUrl: 'https://www.gjparamotor.com/'
    },
    {
      title: 'ProTorneo',
      tagline: 'Sistema de Gestión de Torneos de Gimnasia Artística',
      description: 'ProTorneo es una aplicación web desarrollada con Django para la gestión integral de torneos de gimnasia artística. Permite a organizadores, jueces, profesores y participantes gestionar competiciones de manera eficiente y organizada.',
      technologies: ['Django 5.1.3', 'PostgreSQL', 'SQLite', 'HTML5', 'CSS3', 'JavaScript'],
      highlights: [
        'Gestión de Usuarios: Sistema de autenticación con roles específicos (jefe de torneo, juez, profesor, participante).',
        'Administración de Torneos: Creación y gestión de torneos con categorías y disciplinas.',
        'Evaluaciones y Puntuaciones: Registro de calificaciones por parte de los jueces.',
        'Dashboards Personalizados: Interfaces adaptadas según el rol del usuario.',
        'Gestión de Pruebas: Organización de pruebas y ejercicios por torneo.',
        'Seguridad: Autenticación robusta y permisos granulares.',
        'Diseño Responsivo: Interfaz moderna y adaptable a dispositivos móviles.'
      ],
      githubUrl: 'https://github.com/NicoButter/protorneo'
    },
    {
      title: 'SGL-2.0',
      tagline: 'Sistema de Gestión Legislativa v2.0 para la Legislatura Provincial de Santa Cruz',
      description: 'Sistema integral de gestión legislativa desarrollado para la Legislatura Provincial de Santa Cruz, Argentina. Esta versión 2.0 representa una evolución significativa del sistema anterior, incorporando nuevas funcionalidades, mejorando la usabilidad y fortaleciendo la seguridad para apoyar el proceso legislativo provincial de manera más eficiente y transparente.',
      technologies: ['Django 4.2', 'PostgreSQL', 'Redis', 'Celery', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Docker'],
      highlights: [
        'Gestión Integral de Proyectos de Ley: Creación, seguimiento y modificación de proyectos legislativos con versionado completo.',
        'Sistema de Sesiones Legislativas: Programación, gestión y registro de sesiones ordinarias y extraordinarias.',
        'Plataforma de Votaciones Digitales: Sistema seguro de votación electrónica con registro de asistencia y resultados.',
        'Portal de Transparencia Ciudadana: Publicación automática de normas, actas y documentos legislativos.',
        'Gestión de Diputados y Comisiones: Perfiles completos, asignación a comisiones y seguimiento de participación.',
        'Sistema de Notificaciones Automáticas: Alertas por email y SMS para eventos legislativos importantes.',
        'Integración con APIs Externas: Conexión con sistemas gubernamentales para validación y publicación.',
        'Auditoría Completa: Registro detallado de todas las acciones para cumplimiento normativo.',
        'Interfaz Adaptativa: Diseño responsivo optimizado para uso en tablets durante sesiones.',
        'Sistema de Backup y Recuperación: Estrategias robustas para garantizar la integridad de datos críticos.',
        'API RESTful: Interfaces programáticas para integración con otros sistemas provinciales.',
        'Multitenancy: Soporte para múltiples legislaturas con aislamiento de datos.'
      ],
      githubUrl: 'https://github.com/NicoButter/sgl-2.0'
    },
    {
      title: 'ContactVault',
      tagline: 'Aplicación de gestión de contactos personales con cifrado de datos',
      description: 'ContactVault es una aplicación de gestión de contactos personales con cifrado de datos, ideal para mantener tu agenda privada, segura y accesible. Porque hasta los números de tu suegra merecen privacidad.',
      technologies: ['Python 3.11+', 'Tkinter', 'cryptography', 'reportlab'],
      highlights: [
        'Agregar, buscar, editar y eliminar contactos de manera intuitiva.',
        'Exportación de contactos a PDF para respaldo o impresión.',
        'Encriptación de datos sensibles con contraseña maestra para máxima seguridad.',
        'Interfaz gráfica amigable desarrollada con Tkinter.',
        'Backups automáticos de tus datos para prevenir pérdida de información.',
        'Totalmente offline y sin necesidad de conexión a internet.',
        'Almacenamiento encriptado en archivo JSON seguro.',
        'Sistema de backups con extensión .backup para recuperación.',
        'Instalador .exe próximamente disponible para usuarios Windows.',
        'Arquitectura modular con separación de responsabilidades.',
        'Funciones auxiliares para operaciones comunes.',
        'Licencia MIT para uso libre y modificación.'
      ],
      githubUrl: 'https://github.com/NicoButter/contactvault'
    },
    {
      title: 'LibroLink',
      tagline: 'Sistema de gestión de bibliotecas desarrollado con Django',
      description: 'LibroLink es un sistema de gestión de bibliotecas desarrollado con Django. Está diseñado para facilitar tanto la búsqueda de libros como la administración de socios, todo a través de una interfaz web intuitiva, moderna y responsive.',
      technologies: ['Django', 'PostgreSQL', 'HTML5', 'CSS3', 'JavaScript', 'Python 3.x'],
      highlights: [
        'Búsqueda avanzada de libros por título, autor, ISBN y otros criterios.',
        'Gestión completa de libros: alta, baja y modificación para administradores.',
        'Sistema de autenticación de usuarios con login/logout y roles diferenciados.',
        'Diseño responsivo adaptado para escritorio, tablet y móvil.',
        'Interactividad dinámica con JavaScript vanilla para actualizaciones en tiempo real.',
        'Panel de administración Django para gestión avanzada del sistema.',
        'Arquitectura modular siguiendo las mejores prácticas de Django.',
        'Sistema de roles y permisos para diferentes tipos de usuarios.',
        'Interfaz intuitiva y moderna para una experiencia de usuario óptima.',
        'Integración completa con PostgreSQL para almacenamiento robusto.',
        'Funcionalidades de gestión de socios y préstamos de libros.',
        'Actualizaciones en tiempo real de fecha y hora en la interfaz.'
      ],
      githubUrl: 'https://github.com/NicoButter/librolink'
    },
    {
      title: 'Sonar',
      tagline: 'Plataforma web para fomentar la escena musical en Río Gallegos',
      description: 'Sonar es una plataforma web desarrollada con Django + PostgreSQL, creada para fomentar la escena musical en Río Gallegos y conectar bandas emergentes con su comunidad. Pensada para ser simple, funcional y con amor al under, esta aplicación permite a las bandas registrarse, subir sus demos y compartir sus fotos.',
      technologies: ['Django', 'PostgreSQL', 'Python 3.x', 'HTML5', 'CSS3'],
      highlights: [
        'Registro y autenticación de bandas locales.',
        'Perfiles de banda con hasta 4 demos de audio (.mp3/.wav).',
        'Galería de imágenes para portadas y fotos de recitales.',
        'Información de contacto y descripción de estilo musical.',
        'Visualización pública de bandas registradas.',
        'Sistema de búsqueda por género, nombre o ciudad.',
        'Panel de administración para editar perfiles.',
        'Interfaz web simple y funcional sin frameworks pesados.',
        'Desarrollado con pasión por la música y el software libre.',
        'Conexión entre músicos, organizadores de eventos y oyentes.',
        'Fomenta la escena musical emergente de Río Gallegos.',
        'Arquitectura Django robusta con PostgreSQL.'
      ],
      githubUrl: 'https://github.com/NicoButter/sonar'
    },
    {
      title: 'Joi Secure Pass',
      tagline: 'Sistema de Control de Acceso Basado en Reconocimiento Facial y NFC',
      description: 'JoiSecurePass es una aplicación web desarrollada con Django y PostgreSQL diseñada para gestionar de manera eficiente el control de acceso del personal en una organización. El sistema combina tecnologías de reconocimiento facial y NFC para registrar los ingresos y salidas de los empleados, generando reportes detallados sobre su actividad laboral.',
      technologies: ['Django 4', 'PostgreSQL', 'Python 3.11', 'OpenCV', 'HTML5', 'CSS3'],
      highlights: [
        'Reconocimiento facial avanzado con cámara web y base de datos de rostros.',
        'Registro preciso de ingresos y salidas de empleados.',
        'Control de acceso mediante tarjetas y dispositivos NFC.',
        'Generación de reportes personalizados sobre actividad laboral.',
        'Cálculo automático de horas extras, faltas y horas trabajadas.',
        'Integración robusta con PostgreSQL para almacenamiento seguro.',
        'Interfaz web intuitiva para administración del sistema.',
        'Sistema de autenticación y autorización de usuarios.',
        'Auditoría completa de accesos y movimientos.',
        'Escalabilidad para organizaciones de diferentes tamaños.',
        'Procesamiento en tiempo real de reconocimiento facial.',
        'Reportes exportables en múltiples formatos.'
      ],
      githubUrl: 'https://github.com/NicoButter/JoiSecurePass'
    },
  ]);
}
