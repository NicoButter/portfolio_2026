import { ChangeDetectionStrategy, Component, signal, OnInit } from '@angular/core';

/**
 * Represents a technical skill with its proficiency level and visual position.
 * 
 * @interface Skill
 * @property {string} name - The name of the skill (e.g., 'TypeScript', 'Angular')
 * @property {number} level - Proficiency level from 0 to 100
 * @property {string} category - Skill category: 'Frontend', 'Backend', or 'Tools'
 * @property {number} x - Horizontal position in percentage (0-100) for constellation display
 * @property {number} y - Vertical position in percentage (0-100) for constellation display
 * @property {number[]} connections - Array of indices referencing connected skills in the constellation
 * @property {string} description - Detailed description of the skill
 * @property {string} [image] - Optional path to the skill icon image
 */
interface Skill {
  name: string;
  level: number;
  category: string;
  x: number;
  y: number;
  connections: number[];
  description: string;
  image?: string;
}

/**
 * Component that displays technical skills as an interactive space-themed constellation.
 * 
 * Features:
 * - Skills displayed as stars with connecting lines showing relationships
 * - Hover effects revealing progress bars and detailed descriptions
 * - Responsive design with edge detection to prevent overflow
 * - Space-themed animations including ISS, astronaut, and sci-fi elements
 * - Category-based color coding (Frontend: cyan, Backend: green, Tools: purple)
 * 
 * @component
 * @implements {OnInit}
 * @example
 * <app-skills></app-skills>
 */
@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent implements OnInit {
  /**
   * Signal containing the array of all technical skills to display in the constellation.
   * Each skill includes proficiency level, position, connections, and description.
   * 
   * @type {WritableSignal<Skill[]>}
   */
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

  /**
   * Signal that tracks whether the initial command animation has been executed.
   * Used for animation timing and visual effects.
   * 
   * @type {WritableSignal<boolean>}
   */
  commandExecuted = signal(false);

  /**
   * Lifecycle hook that initializes the component.
   * Sets a delay before marking the command as executed for animation purposes.
   * 
   * @returns {void}
   */
  ngOnInit(): void {
    setTimeout(() => {
      this.commandExecuted.set(true);
    }, 1000);
  }

  /**
   * Generates the box-shadow glow style for a skill star based on its category.
   * 
   * Color mapping:
   * - Frontend: Cyan (#00d4ff)
   * - Backend: Green (#00ff41)
   * - Tools: Purple (#8000ff)
   * 
   * @param {Skill} skill - The skill object to generate the glow style for
   * @returns {string} CSS box-shadow value with color and blur radius
   * @example
   * getGlowStyle({ category: 'Frontend', level: 80 }) // Returns '0 0 16px #00d4ff'
   */
  getGlowStyle(skill: Skill): string {
    const color = skill.category === 'Frontend' ? '#00d4ff' :
                  skill.category === 'Backend' ? '#00ff41' : '#8000ff';
    const size = skill.level / 5;
    return `0 0 ${size}px ${color}`;
  }

  /**
   * Calculates the size of a skill star based on its proficiency level.
   * 
   * Formula: 10 + (level / 2)
   * Examples:
   * - Level 80 → 50px
   * - Level 65 → 42.5px
   * - Level 100 → 60px
   * 
   * @param {Skill} skill - The skill object to calculate size for
   * @returns {number} Size in pixels for the star's width and height
   */
  getSize(skill: Skill): number {
    return 10 + skill.level / 2;
  }

  /**
   * Determines CSS classes for edge positioning to prevent progress bars from overflowing.
   * 
   * Checks skill position and adds appropriate classes:
   * - 'edge-left': When x < 20% (near left edge)
   * - 'edge-right': When x > 80% (near right edge)
   * - 'edge-top': When y < 20% (near top edge)
   * 
   * @param {Skill} skill - The skill object to check position for
   * @returns {string} Space-separated CSS class names for edge positioning
   * @example
   * getEdgeClasses({ x: 10, y: 15 }) // Returns 'edge-left edge-top'
   */
  getEdgeClasses(skill: Skill): string {
    const classes: string[] = [];
    
    if (skill.x < 20) {
      classes.push('edge-left');
    }
    
    if (skill.x > 80) {
      classes.push('edge-right');
    }
    
    if (skill.y < 20) {
      classes.push('edge-top');
    }
    
    return classes.join(' ');
  }

  /**
   * Retrieves the icon path for a given skill.
   * 
   * Maps skill names to their corresponding icon image paths.
   * Returns a default icon path if the skill name is not found.
   * 
   * @param {Skill} skill - The skill object to get the icon for
   * @returns {string} Relative path to the skill's icon image
   * @example
   * getIcon({ name: 'TypeScript' }) // Returns 'assets/images/typescript_logo.jpeg'
   */
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

  /**
   * Handles image loading errors by replacing the failed image with an emoji fallback.
   * 
   * When a skill icon fails to load:
   * 1. Hides the broken image element
   * 2. Creates a span element with an emoji representation
   * 3. Appends the emoji as a visual fallback
   * 
   * @param {Event} event - The error event triggered when image fails to load
   * @param {Skill} skill - The skill object whose image failed to load
   * @returns {void}
   * @example
   * // In template: (error)="onImageError($event, skill)"
   */
  onImageError(event: Event, skill: Skill): void {
    const img = event.target as HTMLImageElement;
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
