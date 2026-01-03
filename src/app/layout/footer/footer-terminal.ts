import { ChangeDetectionStrategy, Component, computed, signal, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { FooterTerminalService } from '../../core/services/footer-terminal.service';

@Component({
  selector: 'app-footer-terminal',
  templateUrl: './footer-terminal.html',
  styleUrl: './footer-terminal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterTerminal implements OnInit, OnDestroy {
  private readonly titles: Record<string, string> = {
    '/': 'home',
    '/about': 'about',
    '/projects': 'projects',
    '/skills': 'skills',
  };

  private navSub?: Subscription;
  private tickInterval?: ReturnType<typeof setInterval>;

  readonly expanded = computed(() => this.footerSvc.expanded());
  readonly routeLabel = computed(() => this.footerSvc.routeLabel());
  readonly hidden = computed(() => this.footerSvc.hidden());
  readonly booting = computed(() => this.footerSvc.booting());
  readonly bootComplete = computed(() => this.footerSvc.bootComplete());
  readonly bootSequence = computed(() => this.footerSvc.bootSequence());
  readonly minimizing = computed(() => this.footerSvc.minimizing());
  readonly timestamp = signal(this.now());

  constructor(private readonly router: Router, private readonly footerSvc: FooterTerminalService) {}

  ngOnInit(): void {
    this.navSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (!this.footerSvc.bootComplete()) {
          return;
        }
        const label = this.titles[event.urlAfterRedirects] ?? event.urlAfterRedirects ?? 'route';
        this.footerSvc.navigate(label);
      });

    this.tickInterval = setInterval(() => this.timestamp.set(this.now()), 1000);
  }

  ngOnDestroy(): void {
    this.navSub?.unsubscribe();
    if (this.tickInterval) {
      clearInterval(this.tickInterval);
    }
    this.footerSvc.cleanup();
  }

  skipBoot(): void {
    this.footerSvc.skipBoot();
  }

  private now(): string {
    return new Date().toLocaleTimeString('en-US', { hour12: false });
  }
}
