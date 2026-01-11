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
      description: 'Typed superset of JavaScript that adds optional static types. Compiles to pure JavaScript, improving maintainability and error detection in development. Supports the latest ECMAScript features with backward compatibility.'
    },
    {
      name: 'JavaScript',
      level: 65,
      category: 'Frontend',
      x: 25,
      y: 30,
      connections: [0, 2],
      description: 'Interpreted, object-oriented programming language based on prototypes. It is the heart of modern web development, running in all browsers. Supports asynchronous programming and DOM manipulation.'
    },
    {
      name: 'Angular',
      level: 80,
      category: 'Frontend',
      x: 40,
      y: 40,
      connections: [1, 3],
      description: 'Complete framework for SPA web application development. Uses TypeScript, reusable components, and bidirectional data binding. Includes advanced tools like dependency injection, routing, and reactive forms.'
    },
    {
      name: 'Java',
      level: 80,
      category: 'Backend',
      x: 60,
      y: 50,
      connections: [2, 4],
      description: 'Object-oriented, strongly-typed, and cross-platform programming language. Runs on JVM (Java Virtual Machine), allowing "write once, run anywhere". Excellent for enterprise applications, Android, and distributed systems.'
    },
    {
      name: 'Python',
      level: 80,
      category: 'Backend',
      x: 75,
      y: 60,
      connections: [3, 5],
      description: 'High-level language with clear and readable syntax. Excellent for rapid development, data science, machine learning, and scripting. "Batteries included" philosophy with extensive standard library.'
    },
    {
      name: 'Spring',
      level: 80,
      category: 'Backend',
      x: 85,
      y: 75,
      connections: [4, 6],
      description: 'Java framework for enterprise application development. Provides dependency injection, AOP, security, and database integration. Spring Boot simplifies configuration and deployment of microservices.'
    },
    {
      name: 'Django',
      level: 80,
      category: 'Backend',
      x: 90,
      y: 85,
      connections: [5],
      description: 'High-level Python web framework that encourages rapid development and clean design. Includes ORM, authentication system, admin panel, and built-in security. "DRY" principle (Don\'t Repeat Yourself).'
    },
    {
      name: 'SQL',
      level: 80,
      category: 'Backend',
      x: 5,
      y: 25,
      connections: [0],
      description: 'Standard language for managing relational databases. Allows querying, inserting, updating, and deleting data. Supports joins, subqueries, transactions, and query optimization for high performance.'
    },
    {
      name: 'Linux',
      level: 75,
      category: 'Tools',
      x: 35,
      y: 25,
      connections: [0],
      description: 'Open-source operating system based on Unix. Robust kernel with wide software distribution. Excellent for servers, development, and high-performance computing. Philosophy of freedom and collaboration.'
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

  getEdgeClasses(skill: Skill): string {
    const classes: string[] = [];
    
    // Check left edge (less than 20% from left)
    if (skill.x < 20) {
      classes.push('edge-left');
    }
    
    // Check right edge (more than 80% from left)
    if (skill.x > 80) {
      classes.push('edge-right');
    }
    
    // Check top edge (less than 20% from top)
    if (skill.y < 20) {
      classes.push('edge-top');
    }
    
    return classes.join(' ');
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
