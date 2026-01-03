import { Injectable, signal } from '@angular/core';

interface BootLine {
  text: string;
  type: 'system' | 'success' | 'warning' | 'error' | 'info' | 'ascii';
  delay: number;
}

@Injectable({ providedIn: 'root' })
export class FooterTerminalService {
  private expandTimeout: ReturnType<typeof setTimeout> | null = null;
  private bootTimeout: ReturnType<typeof setTimeout> | null = null;

  readonly expanded = signal(false);
  readonly routeLabel = signal('home');
  readonly hidden = signal(false);
  readonly booting = signal(false);
  readonly bootComplete = signal(false);
  readonly bootSequence = signal<BootLine[]>([]);
  readonly minimizing = signal(false);

  private readonly bootLines: BootLine[] = [
    { text: '╔══════════════════════════════════════════════════════════╗', type: 'ascii', delay: 50 },
    { text: '║  ███╗   ██╗██████╗     ███████╗██╗   ██╗███████╗        ║', type: 'ascii', delay: 50 },
    { text: '║  ████╗  ██║██╔══██╗    ██╔════╝╚██╗ ██╔╝██╔════╝        ║', type: 'ascii', delay: 50 },
    { text: '║  ██╔██╗ ██║██████╔╝    ███████╗ ╚████╔╝ ███████╗        ║', type: 'ascii', delay: 50 },
    { text: '║  ██║╚██╗██║██╔══██╗    ╚════██║  ╚██╔╝  ╚════██║        ║', type: 'ascii', delay: 50 },
    { text: '║  ██║ ╚████║██████╔╝    ███████║   ██║   ███████║        ║', type: 'ascii', delay: 50 },
    { text: '║  ╚═╝  ╚═══╝╚═════╝     ╚══════╝   ╚═╝   ╚══════╝        ║', type: 'ascii', delay: 50 },
    { text: '╚══════════════════════════════════════════════════════════╝', type: 'ascii', delay: 50 },
    { text: '', type: 'system', delay: 200 },
    { text: 'BIOS v3.14.159 - NB_SYSTEMS', type: 'system', delay: 100 },
    { text: 'Initializing neural interface...', type: 'info', delay: 300 },
    { text: '[OK] Memory check: 32GB Neural RAM', type: 'success', delay: 200 },
    { text: '[OK] CPU: Quantum Core i9-2077', type: 'success', delay: 150 },
    { text: '[OK] GPU: RTX CYBER 9090', type: 'success', delay: 150 },
    { text: '', type: 'system', delay: 100 },
    { text: 'Loading kernel modules...', type: 'info', delay: 400 },
    { text: '[OK] angular.core.module', type: 'success', delay: 100 },
    { text: '[OK] typescript.compiler.v5', type: 'success', delay: 100 },
    { text: '[OK] creativity.engine', type: 'success', delay: 100 },
    { text: '[OK] coffee.dependency.injection', type: 'success', delay: 100 },
    { text: '', type: 'system', delay: 100 },
    { text: 'Establishing secure connection...', type: 'warning', delay: 500 },
    { text: '[OK] Connection established', type: 'success', delay: 300 },
    { text: '', type: 'system', delay: 100 },
    { text: 'NICOLAS BUTTERFIELD // DEVELOPER TERMINAL v2.0.26', type: 'system', delay: 100 },
    { text: 'Status: ONLINE | Location: CYBERSPACE', type: 'info', delay: 100 },
    { text: '', type: 'system', delay: 100 },
    { text: 'System ready. Welcome, User.', type: 'success', delay: 300 },
  ];

  pulse(label: string, durationMs = 2200): void {
    if (this.booting() || this.minimizing()) {
      return;
    }

    this.routeLabel.set(label);
    this.expanded.set(true);

    if (this.expandTimeout) {
      clearTimeout(this.expandTimeout);
    }

    this.expandTimeout = setTimeout(() => {
      this.expanded.set(false);
    }, durationMs);
  }

  hide(): void {
    this.hidden.set(true);
  }

  show(): void {
    this.hidden.set(false);
  }

  startBoot(): void {
    this.booting.set(true);
    this.bootComplete.set(false);
    this.hidden.set(false);
    this.runBootSequence();
  }

  skipBoot(): void {
    if (this.bootTimeout) {
      clearTimeout(this.bootTimeout);
    }
    this.bootSequence.set(this.bootLines);
    this.completeBoot();
  }

  private runBootSequence(): void {
    let currentDelay = 0;
    this.bootLines.forEach((line, index) => {
      currentDelay += line.delay;
      this.bootTimeout = setTimeout(() => {
        const current = this.bootSequence();
        this.bootSequence.set([...current, line]);
        
        if (index === this.bootLines.length - 1) {
          this.completeBoot();
        }
      }, currentDelay);
    });
  }

  private completeBoot(): void {
    setTimeout(() => {
      this.minimizing.set(true);
      setTimeout(() => {
        this.booting.set(false);
        this.bootComplete.set(true);
        this.minimizing.set(false);
        this.expanded.set(false);
      }, 800);
    }, 500);
  }

  cleanup(): void {
    if (this.bootTimeout) {
      clearTimeout(this.bootTimeout);
    }
    if (this.expandTimeout) {
      clearTimeout(this.expandTimeout);
    }
  }
}
