import { ChangeDetectionStrategy, Component, signal, computed, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

interface BootLine {
  text: string;
  type: 'system' | 'success' | 'warning' | 'error' | 'info' | 'ascii';
  delay: number;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home implements OnInit, OnDestroy {
  private bootTimeout: ReturnType<typeof setTimeout> | null = null;
  
  readonly bootSequence = signal<BootLine[]>([]);
  readonly bootComplete = signal(false);
  readonly showMenu = signal(false);
  readonly currentTime = signal(this.getCurrentTime());
  
  private timeInterval: ReturnType<typeof setInterval> | null = null;

  private readonly bootLines: BootLine[] = [
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
    { text: '╔══════════════════════════════════════════════════════════╗', type: 'ascii', delay: 50 },
    { text: '║  ███╗   ██╗██████╗     ███████╗██╗   ██╗███████╗        ║', type: 'ascii', delay: 50 },
    { text: '║  ████╗  ██║██╔══██╗    ██╔════╝╚██╗ ██╔╝██╔════╝        ║', type: 'ascii', delay: 50 },
    { text: '║  ██╔██╗ ██║██████╔╝    ███████╗ ╚████╔╝ ███████╗        ║', type: 'ascii', delay: 50 },
    { text: '║  ██║╚██╗██║██╔══██╗    ╚════██║  ╚██╔╝  ╚════██║        ║', type: 'ascii', delay: 50 },
    { text: '║  ██║ ╚████║██████╔╝    ███████║   ██║   ███████║        ║', type: 'ascii', delay: 50 },
    { text: '║  ╚═╝  ╚═══╝╚═════╝     ╚══════╝   ╚═╝   ╚══════╝        ║', type: 'ascii', delay: 50 },
    { text: '╚══════════════════════════════════════════════════════════╝', type: 'ascii', delay: 50 },
    { text: '', type: 'system', delay: 200 },
    { text: 'NICOLAS BUTTERFIELD // DEVELOPER TERMINAL v2.0.26', type: 'system', delay: 100 },
    { text: 'Status: ONLINE | Location: CYBERSPACE', type: 'info', delay: 100 },
    { text: '', type: 'system', delay: 100 },
    { text: 'System ready. Welcome, User.', type: 'success', delay: 300 },
  ];

  ngOnInit(): void {
    this.startBootSequence();
    this.timeInterval = setInterval(() => {
      this.currentTime.set(this.getCurrentTime());
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.bootTimeout) {
      clearTimeout(this.bootTimeout);
    }
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }

  private getCurrentTime(): string {
    return new Date().toLocaleTimeString('en-US', { hour12: false });
  }

  private startBootSequence(): void {
    let totalDelay = 0;
    
    this.bootLines.forEach((line, index) => {
      totalDelay += line.delay;
      
      this.bootTimeout = setTimeout(() => {
        this.bootSequence.update(lines => [...lines, line]);
        
        if (index === this.bootLines.length - 1) {
          setTimeout(() => {
            this.bootComplete.set(true);
            setTimeout(() => this.showMenu.set(true), 500);
          }, 500);
        }
      }, totalDelay);
    });
  }

  skipBoot(): void {
    if (this.bootTimeout) {
      clearTimeout(this.bootTimeout);
    }
    this.bootSequence.set(this.bootLines);
    this.bootComplete.set(true);
    setTimeout(() => this.showMenu.set(true), 100);
  }
}
