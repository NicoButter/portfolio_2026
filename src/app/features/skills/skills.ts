import { ChangeDetectionStrategy, Component, signal, OnInit } from '@angular/core';

interface Skill {
  name: string;
  level: number;
  category: string;
  x: number;
  y: number;
  connections: number[]; // indices of connected skills
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills implements OnInit {
  skills = signal<Skill[]>([
    { name: 'TypeScript', level: 65, category: 'Frontend', x: 15, y: 20, connections: [1, 7, 8] }, // Cabeza
    { name: 'JavaScript', level: 65, category: 'Frontend', x: 25, y: 30, connections: [0, 2] }, // Parte superior del cuerpo
    { name: 'Angular', level: 80, category: 'Frontend', x: 40, y: 40, connections: [1, 3] }, // Medio del cuerpo
    { name: 'Java', level: 80, category: 'Backend', x: 60, y: 50, connections: [2, 4] }, // Curva
    { name: 'Python', level: 80, category: 'Backend', x: 75, y: 60, connections: [3, 5] }, // Cola recta
    { name: 'Spring', level: 80, category: 'Backend', x: 85, y: 75, connections: [4, 6] }, // Gancho
    { name: 'Django', level: 80, category: 'Backend', x: 90, y: 85, connections: [5] }, // Punta de la cola
    { name: 'SQL', level: 80, category: 'Backend', x: 5, y: 25, connections: [0] }, // Pinza izquierda
    { name: 'Linux', level: 75, category: 'Tools', x: 35, y: 25, connections: [0] }, // Pinza derecha
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
}
