import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { QuakeTerminalService } from '../../../core/services/quake-terminal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Nav implements OnInit {
  private router = inject(Router);
  private footerTerminalSvc = inject(QuakeTerminalService);
  
  animateOnHome = signal(false);

  ngOnInit() {
    const isHome = this.router.url === '/' || this.router.url === '';
    
    if (isHome) {
      this.animateOnHome.set(true);
    }
  }

  navigateTo(event: Event, route: string): void {
    event.preventDefault();
    event.stopPropagation();
    
    if (this.router.url === route || (this.router.url === '/' && route === '/')) {
      return; // Ya estamos en esa ruta
    }

    // Normalizar rutas
    const normalizedRoute = route === '/' ? 'home' : route.replace('/', '');
    
    this.footerTerminalSvc.navigateWithCallback(normalizedRoute, () => {
      // Después de la simulación, navegar realmente
      this.router.navigate([route]);
    });
  }
}
