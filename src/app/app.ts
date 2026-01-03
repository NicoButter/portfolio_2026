import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './layout/header/nav/nav';
import { FooterTerminal } from './layout/footer/footer-terminal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, FooterTerminal],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-2026');
}
