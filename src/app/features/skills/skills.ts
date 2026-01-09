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
    { name: 'TypeScript', level: 65, category: 'Frontend', x: 20, y: 30, connections: [1, 2] },
    { name: 'JavaScript', level: 65, category: 'Frontend', x: 50, y: 20, connections: [0, 2] },
    { name: 'Angular', level: 80, category: 'Frontend', x: 80, y: 40, connections: [0, 1] },
    { name: 'Java', level: 80, category: 'Backend', x: 30, y: 70, connections: [4, 5, 6] },
    { name: 'Python', level: 80, category: 'Backend', x: 70, y: 80, connections: [3, 5, 6] },
    { name: 'Spring', level: 80, category: 'Backend', x: 10, y: 60, connections: [3, 4, 6] },
    { name: 'Django', level: 80, category: 'Backend', x: 60, y: 90, connections: [3, 4, 5] },
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
}
