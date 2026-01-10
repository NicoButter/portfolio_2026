import { ChangeDetectionStrategy, Component, signal, OnInit } from '@angular/core';

interface Skill {
  name: string;
  level: number;
  category: string;
  x: number;
  y: number;
  connections: number[]; // indices of connected skills
  description: string;
  image?: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent implements OnInit {
  skills = signal<Skill[]>([
    {
      name: 'TypeScript',
      level: 65,
      category: 'Frontend',
      x: 15,
      y: 20,
      connections: [1, 7, 8],
      description: 'Superset tipado de JavaScript que añade tipos estáticos opcionales. Compila a JavaScript puro, mejorando la mantenibilidad y detección de errores en desarrollo. Soporta las últimas características de ECMAScript con compatibilidad hacia atrás.'
    },
    {
      name: 'JavaScript',
      level: 65,
      category: 'Frontend',
      x: 25,
      y: 30,
      connections: [0, 2],
      description: 'Lenguaje de programación interpretado, orientado a objetos y basado en prototipos. Es el corazón del desarrollo web moderno, ejecutándose en todos los navegadores. Soporta programación asíncrona y manipulación del DOM.'
    },
    {
      name: 'Angular',
      level: 80,
      category: 'Frontend',
      x: 40,
      y: 40,
      connections: [1, 3],
      description: 'Framework completo para desarrollo de aplicaciones web SPA. Utiliza TypeScript, componentes reutilizables y enlace de datos bidireccional. Incluye herramientas avanzadas como dependency injection, routing y formularios reactivos.'
    },
    {
      name: 'Java',
      level: 80,
      category: 'Backend',
      x: 60,
      y: 50,
      connections: [2, 4],
      description: 'Lenguaje de programación orientado a objetos, strongly-typed y multiplataforma. Ejecuta en JVM (Java Virtual Machine), permitiendo "write once, run anywhere". Excelente para aplicaciones enterprise, Android y sistemas distribuidos.'
    },
    {
      name: 'Python',
      level: 80,
      category: 'Backend',
      x: 75,
      y: 60,
      connections: [3, 5],
      description: 'Lenguaje de alto nivel con sintaxis clara y legible. Excelente para desarrollo rápido, ciencia de datos, machine learning y scripting. Filosofía "batteries included" con extensa librería estándar.'
    },
    {
      name: 'Spring',
      level: 80,
      category: 'Backend',
      x: 85,
      y: 75,
      connections: [4, 6],
      description: 'Framework Java para desarrollo de aplicaciones enterprise. Proporciona inyección de dependencias, AOP, seguridad y integración con bases de datos. Spring Boot simplifica la configuración y despliegue de microservicios.'
    },
    {
      name: 'Django',
      level: 80,
      category: 'Backend',
      x: 90,
      y: 85,
      connections: [5],
      description: 'Framework web Python de alto nivel que fomenta el desarrollo rápido y diseño limpio. Incluye ORM, sistema de autenticación, panel admin y seguridad integrada. Principio "DRY" (Don\'t Repeat Yourself).'
    },
    {
      name: 'SQL',
      level: 80,
      category: 'Backend',
      x: 5,
      y: 25,
      connections: [0],
      description: 'Lenguaje estándar para gestión de bases de datos relacionales. Permite consultar, insertar, actualizar y eliminar datos. Soporta joins, subqueries, transacciones y optimización de consultas para alto rendimiento.'
    },
    {
      name: 'Linux',
      level: 75,
      category: 'Tools',
      x: 35,
      y: 25,
      connections: [0],
      description: 'Sistema operativo open-source basado en Unix. Kernel robusto con distribución de software amplia. Excelente para servidores, desarrollo y computación de alto rendimiento. Filosofía de libertad y colaboración.'
    }
  ]);

  commandExecuted = signal(false);

  ngOnInit(): void {
    setTimeout(() => {
      this.commandExecuted.set(true);
    }, 1000);
  }

  getGlowStyle(skill: Skill): string {
    const color = skill.category === 'Frontend' ? '#00d4ff' :
                  skill.category === 'Backend' ? '#00ff41' : '#8000ff';
    const size = skill.level / 5;
    return `0 0 ${size}px ${color}`;
  }

  getSize(skill: Skill): number {
    return 10 + skill.level / 2; // level 80 -> 50px, level 65 -> 42.5px, etc.
  }

  getIcon(skill: Skill): string {
    const icons: { [key: string]: string } = {
      'TypeScript': 'assets/images/typescript_logo.jpeg',
      'JavaScript': 'assets/images/javascript_logo.png',
      'Angular': 'assets/images/angular_logo.png',
      'Java': 'assets/images/java_logo.png',
      'Python': 'assets/images/python_logo.png',
      'Spring': 'assets/images/springboot_logo.png',
      'Django': 'assets/images/django_logo.png',
      'SQL': 'assets/images/sql_logo.png',
      'Linux': 'assets/images/tux.png',
    };
    return icons[skill.name] || 'assets/images/default.png';
  }

  onImageError(event: Event, skill: Skill): void {
    const img = event.target as HTMLImageElement;
    // Fallback to emoji if image fails to load
    const emojiFallbacks: { [key: string]: string } = {
      'TypeScript': '🟦',
      'JavaScript': '🟨',
      'Angular': '🅰️',
      'Java': '☕',
      'Python': '🐍',
      'Spring': '🌸',
      'Django': '🎸',
      'SQL': '🗄️',
      'Linux': '🐧',
    };
    img.style.display = 'none';
    const fallbackSpan = document.createElement('span');
    fallbackSpan.textContent = emojiFallbacks[skill.name] || '⭐';
    fallbackSpan.className = 'skill-icon-emoji';
    img.parentElement?.appendChild(fallbackSpan);
  }
}
