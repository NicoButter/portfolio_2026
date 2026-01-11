import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  highlights: string[];
  imageUrl?: string;
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
      tagline: 'Icons age based on how much you use them. Your desktop tells your story.',
      description: 'KDE Plasma application that adds a unique visual dimension: icons progressively wear out based on their usage, showing scratches, desaturation, and loss of brightness. Realistic weighted wear system that considers launches and active time. Includes complete DBus API, automatic persistence, and visual effects rendered with GLSL shaders on GPU.',
      technologies: ['KDE Plasma', 'Qt 5', 'C++17', 'QML', 'GLSL', 'DBus', 'CMake'],
      highlights: [
        'Progressive visual wear with scratches and desaturation proportional to usage',
        'Weighted formula: (launches × 1.0) + (active_minutes × 0.01)',
        'GLSL shader on GPU for real-time visual effects',
        'Reconstruction animation with spark effect to restore icons',
        'Complete DBus interface for integration with other tools',
        'Automatic persistence in ~/.config/iconwearrc',
        'Context menu with detailed metrics and restoration options'
      ],
      imageUrl: 'assets/images/iconwearkde.jpg',
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
      imageUrl: 'assets/images/devsoundtrak.webp',
      githubUrl: 'https://github.com/nicolasbutterfield/dev-soundtrack'
    },
    {
      title: 'UNPA Coding Games',
      tagline: 'In the Capitol, code is law. In the arena, only the best programmers survive.',
      description: 'Complete web platform inspired by The Hunger Games for programming competitions at the National University of Southern Patagonia (UNPA). Multi-role hierarchical system with advanced tournament management, districts, and configurable periods. Includes QR accreditation, automatic code validation, mentor sponsorship system, custom dashboards, and real-time monitoring with complete auditing.',
      technologies: ['Django 5.0', 'Python 3.14+', 'PostgreSQL', 'HTML5', 'CSS3', 'JavaScript ES6+', 'Gunicorn', 'Nginx', 'Docker'],
      highlights: [
        'Hierarchical system of 4 roles: Tribute, Mentor, Overseer, Capitol Chief',
        'Advanced tournament management with configurable periods (accreditation, competition, awards)',
        'Tribute accreditation with QR credentials and email PDF delivery',
        'Sponsorship system: mentors with point budget to send aids',
        'Automatic code validation with isolated execution and test cases',
        'Real-time rankings by district and global',
        'Custom dashboards per role with live statistics',
        'Advanced notifications with intelligent polling and optional sound',
        'Complete audit of tournament state changes',
        '9 automated tests and complete test suite'
      ],
      imageUrl: 'assets/images/unpa_coding_games.jpg',
      githubUrl: 'https://github.com/nicolasbutterfield/UNPA_Coding_Games'
    },
    {
      title: 'ElectroSpace - ISS Experience',
      tagline: 'Explore the view from the ISS Cupola and train as an astronaut in the NBL',
      description: 'Interactive experience developed for NASA Hackathon 2025 that allows exploring the International Space Station. Includes live video from the ISS, buoyancy simulation in the Neutral Buoyancy Laboratory (NBL), interactive map with current position, and 3D game in Godot that simulates zero gravity. Collaborative project of 7 developers focused on bringing space research closer to students.',
      technologies: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Bootstrap 5', 'Animate.css', 'tsparticles', 'Leaflet', 'APIs NASA', 'Godot Engine', 'Node.js'],
      highlights: [
        'Live video from the ISS Cupola integrated in real time',
        'NBL buoyancy simulation with adjustable intensity control',
        'Interactive Leaflet map showing current ISS position',
        '3D game in Godot with zero gravity simulation and spacewalks',
        'Educational information about benefits of space research',
        'Complete integration with official NASA APIs',
        'Visual effects with tsparticles (animated star field)',
        'Fully responsive design with Bootstrap 5',
        'Smooth animations with Animate.css for better UX',
        'NASA Hackathon 2025 Winner - Río Gallegos Venue'
      ],
      imageUrl: 'assets/images/electrospace.jpeg',
      githubUrl: 'https://github.com/NicoButter/NASA--HACKATHON'
    },
    {
      title: 'GJParamotor',
      tagline: 'Landing page for GJParamotor, a platform dedicated to paramotor services, training courses, image gallery and more.',
      description: 'GJParamotor is a web application developed with Angular that serves as a landing page to promote and manage paramotor-related services. Includes sections for instructor information, available courses, photo and video gallery, ground school, products and offered services.',
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Node.js'],
      highlights: [
        'Home Page: Introduction and main navigation.',
        'About Me: Personal information of the instructor and experience.',
        'Courses: Details of available paramotor courses.',
        'Gallery: Collection of images and videos related to paramotor.',
        'Ground School: Information about theoretical and practical training.',
        'Products: Catalog of paramotor-related products.',
        'Services: Description of offered services.',
        'Details: Detailed sections for images, videos and discovery flights.',
        'Responsive application that adapts to mobile and desktop devices.'
      ],
      imageUrl: 'assets/images/gjparamotor.png',
      githubUrl: 'https://github.com/nicolasbutterfield/GJParamotor',
      websiteUrl: 'https://www.gjparamotor.com/'
    },
    {
      title: 'ProTorneo',
      tagline: 'Artistic Gymnastics Tournament Management System',
      description: 'ProTorneo is a web application developed with Django for comprehensive management of artistic gymnastics tournaments. It allows organizers, judges, coaches and participants to manage competitions efficiently and organized.',
      technologies: ['Django 5.1.3', 'PostgreSQL', 'SQLite', 'HTML5', 'CSS3', 'JavaScript'],
      highlights: [
        'User Management: Authentication system with specific roles (tournament chief, judge, coach, participant).',
        'Tournament Administration: Creation and management of tournaments with categories and disciplines.',
        'Evaluations and Scores: Registration of grades by judges.',
        'Custom Dashboards: Interfaces adapted according to user role.',
        'Test Management: Organization of tests and exercises per tournament.',
        'Security: Robust authentication and granular permissions.',
        'Responsive Design: Modern and adaptable interface to mobile devices.'
      ],
      imageUrl: 'assets/images/protorneo.png',
      githubUrl: 'https://github.com/NicoButter/protorneo'
    },
    {
      title: 'SGL-2.0',
      tagline: 'Legislative Management System v2.0 for the Provincial Legislature of Santa Cruz',
      description: 'Comprehensive legislative management system developed for the Provincial Legislature of Santa Cruz, Argentina. This version 2.0 represents a significant evolution of the previous system, incorporating new functionalities, improving usability and strengthening security to support the provincial legislative process more efficiently and transparently.',
      technologies: ['Django 4.2', 'PostgreSQL', 'Redis', 'Celery', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Docker'],
      highlights: [
        'Comprehensive Bill Management: Creation, tracking and modification of legislative projects with complete versioning.',
        'Legislative Sessions System: Programming, management and recording of ordinary and extraordinary sessions.',
        'Digital Voting Platform: Secure electronic voting system with attendance registration and results.',
        'Citizen Transparency Portal: Automatic publication of norms, minutes and legislative documents.',
        'Deputies and Commissions Management: Complete profiles, commission assignment and participation tracking.',
        'Automatic Notifications System: Email and SMS alerts for important legislative events.',
        'External APIs Integration: Connection with government systems for validation and publication.',
        'Complete Audit: Detailed record of all actions for regulatory compliance.',
        'Adaptive Interface: Responsive design optimized for tablet use during sessions.',
        'Backup and Recovery System: Robust strategies to ensure integrity of critical data.',
        'RESTful API: Programmatic interfaces for integration with other provincial systems.',
        'Multitenancy: Support for multiple legislatures with data isolation.'
      ],
      imageUrl: 'assets/images/sgl.png',
      githubUrl: 'https://github.com/NicoButter/sgl-2.0'
    },
    {
      title: 'ContactVault',
      tagline: 'Personal contact management application with data encryption',
      description: 'ContactVault is a personal contact management application with data encryption, ideal for keeping your private agenda secure and accessible. Because even your mother-in-law\'s phone numbers deserve privacy.',
      technologies: ['Python 3.11+', 'Tkinter', 'cryptography', 'reportlab'],
      highlights: [
        'Add, search, edit and delete contacts intuitively.',
        'Export contacts to PDF for backup or printing.',
        'Encryption of sensitive data with master password for maximum security.',
        'Friendly graphical interface developed with Tkinter.',
        'Automatic backups of your data to prevent information loss.',
        'Completely offline and no internet connection required.',
        'Encrypted storage in secure JSON file.',
        'Backup system with .backup extension for recovery.',
        'Installer .exe coming soon for Windows users.',
        'Modular architecture with separation of responsibilities.',
        'Auxiliary functions for common operations.',
        'MIT license for free use and modification.'
      ],
      imageUrl: 'assets/images/vault.jpg',
      githubUrl: 'https://github.com/NicoButter/contactvault'
    },
    {
      title: 'LibroLink',
      tagline: 'Library management system developed with Django',
      description: 'LibroLink is a library management system developed with Django. It is designed to facilitate both book search and member administration, all through an intuitive, modern and responsive web interface.',
      technologies: ['Django', 'PostgreSQL', 'HTML5', 'CSS3', 'JavaScript', 'Python 3.x'],
      highlights: [
        'Advanced book search by title, author, ISBN and other criteria.',
        'Complete book management: registration, removal and modification for administrators.',
        'User authentication system with login/logout and differentiated roles.',
        'Responsive design adapted for desktop, tablet and mobile.',
        'Dynamic interactivity with vanilla JavaScript for real-time updates.',
        'Django admin panel for advanced system management.',
        'Modular architecture following Django best practices.',
        'Role and permission system for different user types.',
        'Intuitive and modern interface for optimal user experience.',
        'Complete integration with PostgreSQL for robust storage.',
        'Member and book loan management functionalities.',
        'Real-time date and time updates in the interface.'
      ],
      imageUrl: 'assets/images/librolink.jpg',
      githubUrl: 'https://github.com/NicoButter/librolink'
    },
    {
      title: 'Sonar',
      tagline: 'Web platform to promote the music scene in Río Gallegos',
      description: 'Sonar is a web platform developed with Django + PostgreSQL, created to promote the music scene in Río Gallegos and connect emerging bands with their community. Designed to be simple, functional and with love for the underground, this application allows bands to register, upload their demos and share their photos.',
      technologies: ['Django', 'PostgreSQL', 'Python 3.x', 'HTML5', 'CSS3'],
      highlights: [
        'Registration and authentication of local bands.',
        'Band profiles with up to 4 audio demos (.mp3/.wav).',
        'Image gallery for covers and concert photos.',
        'Contact information and musical style description.',
        'Public visualization of registered bands.',
        'Search system by genre, name or city.',
        'Administration panel to edit profiles.',
        'Simple and functional web interface without heavy frameworks.',
        'Developed with passion for music and free software.',
        'Connection between musicians, event organizers and listeners.',
        'Promotes the emerging music scene of Río Gallegos.',
        'Robust Django architecture with PostgreSQL.'
      ],
      imageUrl: 'assets/images/sonar.png',
      githubUrl: 'https://github.com/NicoButter/sonar'
    },
    {
      title: 'Joi Secure Pass',
      tagline: 'Access Control System Based on Facial Recognition and NFC',
      description: 'JoiSecurePass is a web application developed with Django and PostgreSQL designed to efficiently manage personnel access control in an organization. The system combines facial recognition and NFC technologies to record employee entries and exits, generating detailed reports on their work activity.',
      technologies: ['Django 4', 'PostgreSQL', 'Python 3.11', 'OpenCV', 'HTML5', 'CSS3'],
      highlights: [
        'Advanced facial recognition with webcam and face database.',
        'Precise recording of employee entries and exits.',
        'Access control through NFC cards and devices.',
        'Generation of customized reports on work activity.',
        'Automatic calculation of overtime, absences and worked hours.',
        'Robust integration with PostgreSQL for secure storage.',
        'Intuitive web interface for system administration.',
        'User authentication and authorization system.',
        'Complete audit of accesses and movements.',
        'Scalability for organizations of different sizes.',
        'Real-time facial recognition processing.',
        'Exportable reports in multiple formats.'
      ],
      imageUrl: 'assets/images/joi_secure_pass.webp',
      githubUrl: 'https://github.com/NicoButter/JoiSecurePass'
    },
  ]);
}
