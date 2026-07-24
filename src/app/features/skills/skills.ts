import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type SkillCategory = 'Frontend' | 'Backend' | 'Platform';
type SkillLevel = 'Advanced' | 'Strong' | 'Working knowledge';

interface Skill {
  name: string;
  category: SkillCategory;
  level: number;
  levelLabel: SkillLevel;
  description: string;
  image: string;
  related: string[];
}

interface SkillGroup {
  name: SkillCategory;
  label: string;
  hint: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  readonly groups: SkillGroup[] = [
    { name: 'Frontend', label: 'Frontend', hint: 'Interfaces and web experiences' },
    { name: 'Backend', label: 'Backend', hint: 'Applications, APIs and data' },
    { name: 'Platform', label: 'Platform & tools', hint: 'Development environment and systems' },
  ];

  readonly skills = signal<Skill[]>([
    {
      name: 'TypeScript',
      category: 'Frontend',
      level: 65,
      levelLabel: 'Strong',
      description: 'Typed JavaScript for maintainable interfaces and safer application logic.',
      image: 'assets/images/typescript_logo.webp',
      related: ['Angular', 'JavaScript'],
    },
    {
      name: 'JavaScript',
      category: 'Frontend',
      level: 65,
      levelLabel: 'Strong',
      description: 'Modern browser programming, asynchronous flows and interactive user interfaces.',
      image: 'assets/images/javascript_logo.webp',
      related: ['TypeScript', 'Angular'],
    },
    {
      name: 'Angular',
      category: 'Frontend',
      level: 80,
      levelLabel: 'Advanced',
      description: 'Component-based applications with routing, reactive forms and a polished UX.',
      image: 'assets/images/angular_logo.webp',
      related: ['TypeScript', 'RxJS'],
    },
    {
      name: 'Java',
      category: 'Backend',
      level: 80,
      levelLabel: 'Advanced',
      description: 'Reliable object-oriented services and enterprise application development on the JVM.',
      image: 'assets/images/java_logo.webp',
      related: ['Spring', 'SQL'],
    },
    {
      name: 'Python',
      category: 'Backend',
      level: 80,
      levelLabel: 'Advanced',
      description: 'Clear, pragmatic backend development, scripting and rapid product iteration.',
      image: 'assets/images/python_logo.webp',
      related: ['Django', 'SQL'],
    },
    {
      name: 'Spring',
      category: 'Backend',
      level: 80,
      levelLabel: 'Advanced',
      description: 'Structured Java services with dependency injection, security and data integration.',
      image: 'assets/images/springboot_logo.webp',
      related: ['Java', 'SQL'],
    },
    {
      name: 'Django',
      category: 'Backend',
      level: 80,
      levelLabel: 'Advanced',
      description: 'Full-featured Python web applications with ORM, auth and an integrated admin.',
      image: 'assets/images/django_logo.webp',
      related: ['Python', 'PostgreSQL'],
    },
    {
      name: 'SQL',
      category: 'Backend',
      level: 80,
      levelLabel: 'Advanced',
      description: 'Relational data modelling, queries and dependable persistence for applications.',
      image: 'assets/images/sql_logo.webp',
      related: ['PostgreSQL', 'Spring'],
    },
    {
      name: 'Linux',
      category: 'Platform',
      level: 75,
      levelLabel: 'Strong',
      description: 'Daily development environment for servers, automation and open-source tooling.',
      image: 'assets/images/tux.webp',
      related: ['Git', 'Docker'],
    },
  ]);

  readonly selectedSkill = signal<Skill>(this.skills()[0]);

  skillsFor(category: SkillCategory): Skill[] {
    return this.skills().filter((skill) => skill.category === category);
  }

  selectSkill(skill: Skill): void {
    this.selectedSkill.set(skill);
  }
}
