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
    { text: 'openSUSE Tumbleweed 2026.01 - NB_SYSTEMS', type: 'system', delay: 100 },
    { text: 'Kernel 6.6.0-1-default x86_64', type: 'system', delay: 100 },
    { text: 'Initializing systemd services...', type: 'info', delay: 300 },
    { text: '[OK] Memory check: 64GB DDR5-5200 SODIMM', type: 'success', delay: 200 },
    { text: '[OK] CPU: AMD Ryzen 9 7945HX (16 cores)', type: 'success', delay: 150 },
    { text: '[OK] GPU: NVIDIA RTX 4070 (8GB GDDR6)', type: 'success', delay: 150 },
    { text: '[OK] Storage: 2TB NVMe PCIe 4.0 SSD', type: 'success', delay: 150 },
    { text: '[OK] Display: 16" 2560x1600 IPS 165Hz', type: 'success', delay: 150 },
    { text: '[OK] System76 Oryx Pro 16 (oryp16)', type: 'success', delay: 200 },
    { text: '', type: 'system', delay: 100 },
    { text: 'Loading systemd units...', type: 'info', delay: 400 },
    { text: '[OK] network.service', type: 'success', delay: 100 },
    { text: '[OK] sshd.service', type: 'success', delay: 100 },
    { text: '[OK] apache2.service', type: 'success', delay: 100 },
    { text: '[OK] postgresql.service', type: 'success', delay: 100 },
    { text: '', type: 'system', delay: 100 },
    { text: 'Establishing secure connection...', type: 'warning', delay: 500 },
    { text: '[OK] Connection established', type: 'success', delay: 300 },
    { text: '', type: 'system', delay: 100 },
    { text: 'NICOLAS BUTTERFIELD // openSUSE TERMINAL v2.0.26', type: 'system', delay: 100 },
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
      // Activar hover inmediatamente después del boot sequence
      setTimeout(() => {
        this.booting.set(false);
        this.bootComplete.set(true);
        // No desactivar minimizing aquí para mantener la animación pero permitir hover
        this.expanded.set(false);
      }, 100); // Pequeño delay para que empiece la animación de minimización
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
