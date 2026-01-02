import { ChangeDetectionStrategy, Component, input, output, OnInit, signal } from '@angular/core';
import { TerminalService, TerminalLine } from '../../../core/services/terminal.service';

@Component({
  selector: 'app-access-control',
  imports: [],
  template: `
    <div class="access-terminal" [class.hidden]="contentReady()">
      <div class="terminal-window small">
        <div class="terminal-header">
          <div class="terminal-buttons">
            <span class="btn-close"></span>
            <span class="btn-min"></span>
            <span class="btn-max"></span>
          </div>
          <span class="terminal-title">{{ filename() }}</span>
        </div>
        <div class="terminal-body">
          @for (line of accessLines(); track $index) {
            <div 
              class="terminal-line"
              [class.command]="line.type === 'command'"
              [class.success]="line.type === 'success'"
              [class.error]="line.type === 'error'"
              [class.warning]="line.type === 'warning'"
              [class.system]="line.type === 'system'"
            >
              {{ line.text }}
            </div>
          }
          @if (!accessGranted()) {
            <span class="cursor">█</span>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .access-terminal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--bg);
      z-index: 100;
      transition: opacity 0.5s ease, visibility 0.5s ease;
      
      &.hidden {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
      }
    }

    .terminal-window.small {
      width: 100%;
      max-width: 500px;
      background: var(--bg-terminal);
      border: 1px solid var(--neon-cyan);
      border-radius: var(--border-radius);
      box-shadow: 0 0 30px rgba(0, 212, 255, 0.2);
    }

    .terminal-header {
      display: flex;
      align-items: center;
      padding: var(--spacing-sm) var(--spacing-md);
      background: rgba(0, 212, 255, 0.1);
      border-bottom: 1px solid var(--neon-cyan);
    }

    .terminal-buttons {
      display: flex;
      gap: 8px;
      margin-right: var(--spacing-md);
      
      span {
        width: 12px;
        height: 12px;
        border-radius: 50%;
      }
      
      .btn-close { background: #ff5f56; }
      .btn-min { background: #ffbd2e; }
      .btn-max { background: #27ca40; }
    }

    .terminal-title {
      flex: 1;
      text-align: center;
      font-family: var(--font-mono);
      font-size: 0.85rem;
      color: var(--neon-green);
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    .terminal-body {
      padding: var(--spacing-md);
      font-family: var(--font-mono);
      font-size: 0.85rem;
      min-height: 200px;
      max-height: 60vh;
      overflow-y: auto;
    }

    .terminal-line {
      margin-bottom: var(--spacing-xs);
      animation: boot-line 0.2s ease-out;
      
      &.command { color: var(--neon-cyan); }
      &.success { color: var(--terminal-success); }
      &.error { color: var(--terminal-error); }
      &.warning { color: var(--terminal-warning); }
      &.system { color: var(--text-secondary); }
    }

    @keyframes boot-line {
      from {
        opacity: 0;
        transform: translateX(-10px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .cursor {
      color: var(--neon-green);
      animation: blink 1s step-end infinite;
    }

    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessControlComponent implements OnInit {
  readonly filename = input('access_control.sys');
  readonly moduleName = input('MODULE');
  readonly contentReady = signal(false);
  readonly accessLines = signal<TerminalLine[]>([]);
  readonly accessGranted = signal(false);
  readonly onAccessComplete = output<boolean>();

  private terminal = new TerminalService();

  ngOnInit(): void {
    this.runAccessSequence();
  }

  private async runAccessSequence(): Promise<void> {
    const sequence = await this.terminal.simulateAccess(this.moduleName());
    
    let delay = 0;
    for (const line of sequence.lines) {
      delay += this.getLineDelay(line);
      setTimeout(() => {
        this.accessLines.update(lines => [...lines, line]);
      }, delay);
    }

    setTimeout(() => {
      this.accessGranted.set(true);
      setTimeout(() => {
        this.contentReady.set(true);
        this.onAccessComplete.emit(true);
      }, 500);
    }, delay + 500);
  }

  private getLineDelay(line: TerminalLine): number {
    if (line.text.includes('■')) return 200;
    if (line.type === 'success') return 100;
    return 150;
  }
}
