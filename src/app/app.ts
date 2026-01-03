import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './layout/header/nav/nav';
import { QuakeTerminal } from './layout/quake-terminal/quake-terminal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, QuakeTerminal],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-2026');
}
