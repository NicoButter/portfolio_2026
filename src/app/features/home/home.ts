import { ChangeDetectionStrategy, Component, signal, computed, OnInit, OnDestroy, inject } from '@angular/core';
import { QuakeTerminalService } from '../../core/services/quake-terminal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home implements OnInit, OnDestroy {
  private readonly footerSvc = inject(QuakeTerminalService);
  
  readonly bootComplete = computed(() => this.footerSvc.bootComplete());
  readonly showMenu = signal(false);
  readonly currentTime = signal(this.getCurrentTime());
  
  private timeInterval: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.footerSvc.startBoot();
    this.timeInterval = setInterval(() => {
      this.currentTime.set(this.getCurrentTime());
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }

  private getCurrentTime(): string {
    return new Date().toLocaleTimeString('en-US', { hour12: false });
  }
}
