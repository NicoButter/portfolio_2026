import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Project {
  title: string;
  context: string;
  problem: string;
  decisions: string;
  tradeoffs: string;
  improvements: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  projects = signal<Project[]>([
    {
      title: 'E-commerce Platform',
      context: 'Built a full-stack e-commerce solution for a local retailer transitioning to online sales.',
      problem: 'The retailer needed a scalable platform that could handle increasing traffic while maintaining fast load times.',
      decisions: 'Chose Angular for the frontend due to its component-based architecture and TypeScript for type safety. Used Node.js with Express for the backend and MongoDB for flexible data storage.',
      tradeoffs: 'Opted for a monolithic architecture initially for simplicity, which limited microservices scalability but reduced complexity.',
      improvements: 'Would implement microservices architecture and add comprehensive testing suite with Cypress for end-to-end testing.',
    },
    {
      title: 'Task Management App',
      context: 'Developed a collaborative task management application for remote teams.',
      problem: 'Teams struggled with communication and task tracking across different time zones.',
      decisions: 'Used React for the frontend with Redux for state management. Implemented real-time updates with Socket.io.',
      tradeoffs: 'Chose SQL database for data integrity over NoSQL for flexibility, which required more complex queries but ensured consistency.',
      improvements: 'Would add AI-powered task prioritization and integrate with popular project management tools like Jira.',
    },
  ]);
}
