import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
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
  currentPath = signal('// NB_SYS');

  private readonly pathMap: Record<string, string> = {
    '/': '// NB_SYS',
    '/about': '// NB_SYS/USER_PROFILE/ABOUT.BIN',
    '/projects': '// NB_SYS/PROJECTS/PROJECTS.BIN',
    '/skills': '// NB_SYS/SKILLS/SKILLS.BIN',
  };

  ngOnInit() {
    const isHome = this.router.url === '/' || this.router.url === '';
    
    if (isHome) {
      this.animateOnHome.set(true);
    }

    // Establecer path inicial
    this.updatePath(this.router.url);

    // Escuchar cambios de ruta
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.updatePath(event.urlAfterRedirects);
      });
  }

  private updatePath(url: string): void {
    const path = this.pathMap[url] || '// NB_SYS';
    this.currentPath.set(path);
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
