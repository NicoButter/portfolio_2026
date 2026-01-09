import { ChangeDetectionStrategy, Component, signal, OnInit } from '@angular/core';

interface Skill {
  name: string;
  level: number;
  animatedLevel: number;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills implements OnInit {
  skills = signal<Skill[]>([
    { name: 'TypeScript', level: 90, animatedLevel: 0 },
    { name: 'JavaScript', level: 95, animatedLevel: 0 },
    { name: 'Angular', level: 85, animatedLevel: 0 },
    { name: 'React', level: 80, animatedLevel: 0 },
    { name: 'Node.js', level: 75, animatedLevel: 0 },
    { name: 'Python', level: 70, animatedLevel: 0 },
    { name: 'Git', level: 95, animatedLevel: 0 },
    { name: 'Docker', level: 65, animatedLevel: 0 },
  ]);

  commandExecuted = signal(false);

  ngOnInit(): void {
    // Simular ejecución del comando después de un delay
    setTimeout(() => {
      this.executeCommand();
    }, 1000);
  }

  executeCommand(): void {
    this.commandExecuted.set(true);
    // Animar las barras de progreso
    this.skills().forEach((skill, index) => {
      setTimeout(() => {
        this.animateSkill(index);
      }, index * 200); // Delay escalonado
    });
  }

  private animateSkill(index: number): void {
    const skill = this.skills()[index];
    const targetLevel = skill.level;
    const duration = 1500; // ms
    const steps = 60;
    const increment = targetLevel / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= targetLevel) {
        current = targetLevel;
        clearInterval(interval);
      }
      // Actualizar la señal
      this.skills.update(skills => {
        const newSkills = [...skills];
        newSkills[index] = { ...newSkills[index], animatedLevel: Math.round(current) };
        return newSkills;
      });
    }, duration / steps);
  }

  generateProgressBar(level: number): string {
    const filled = Math.round((level / 100) * 20);
    const empty = 20 - filled;
    return '█'.repeat(filled) + '░'.repeat(empty);
  }

  trackBySkill(index: number, skill: Skill): string {
    return skill.name;
  }
}
