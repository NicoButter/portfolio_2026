import { ChangeDetectionStrategy, Component, computed, signal, OnInit, OnDestroy, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { QuakeTerminalService } from '../../core/services/quake-terminal.service';

@Component({
  selector: 'app-quake-terminal',
  templateUrl: './quake-terminal.component.html',
  styleUrl: './quake-terminal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuakeTerminal implements OnInit, OnDestroy {
  private readonly titles: Record<string, string> = {
    '/': 'home',
    '/about': 'about',
    '/projects': 'projects',
    '/skills': 'skills',
  };

  private readonly router = inject(Router);
  private readonly quakeSvc = inject(QuakeTerminalService);
  private navSub?: Subscription;
  private tickInterval?: ReturnType<typeof setInterval>;

  readonly expanded = computed(() => this.quakeSvc.expanded());
  readonly routeLabel = computed(() => this.quakeSvc.routeLabel());
  readonly hidden = computed(() => this.quakeSvc.hidden());
  readonly booting = computed(() => this.quakeSvc.booting());
  readonly bootComplete = computed(() => this.quakeSvc.bootComplete());
  readonly bootSequence = computed(() => this.quakeSvc.bootSequence());
  readonly minimizing = computed(() => this.quakeSvc.minimizing());
  readonly timestamp = signal(this.now());

  ngOnInit(): void {
    this.navSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (!this.quakeSvc.bootComplete()) {
          return;
        }
        const label = this.titles[event.urlAfterRedirects] ?? event.urlAfterRedirects ?? 'route';
        this.quakeSvc.routeLabel.set(label);
      });

    this.tickInterval = setInterval(() => this.timestamp.set(this.now()), 1000);
  }

  ngOnDestroy(): void {
    this.navSub?.unsubscribe();
    if (this.tickInterval) {
      clearInterval(this.tickInterval);
    }
    this.quakeSvc.cleanup();
  }

  skipBoot(): void {
    this.quakeSvc.skipBoot();
  }

  private now(): string {
    return new Date().toLocaleTimeString('en-US', { hour12: false });
  }
}
