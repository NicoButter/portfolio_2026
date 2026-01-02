import { Injectable, signal } from '@angular/core';

export interface TerminalLine {
  text: string;
  type: 'command' | 'output' | 'success' | 'error' | 'warning' | 'system' | 'ascii';
}

export interface AccessSequence {
  lines: TerminalLine[];
  accessGranted: boolean;
  moduleName: string;
}

@Injectable({
  providedIn: 'root'
})
export class TerminalService {
  readonly isProcessing = signal(false);
  readonly currentOutput = signal<TerminalLine[]>([]);

  async simulateAccess(moduleName: string): Promise<AccessSequence> {
    const sequence: TerminalLine[] = [
      { text: `> Requesting access to ${moduleName}...`, type: 'command' },
      { text: 'Establishing secure connection...', type: 'system' },
      { text: '[■■■□□□□□□□] 30%', type: 'output' },
      { text: '[■■■■■■□□□□] 60%', type: 'output' },
      { text: '[■■■■■■■■■■] 100%', type: 'output' },
      { text: 'Verifying credentials...', type: 'system' },
      { text: 'IDENTITY: Guest User', type: 'output' },
      { text: 'CLEARANCE: Level 5', type: 'output' },
      { text: '', type: 'output' },
      { text: '╔═══════════════════════════════════════╗', type: 'success' },
      { text: '║       ACCESS GRANTED                  ║', type: 'success' },
      { text: '╚═══════════════════════════════════════╝', type: 'success' },
      { text: '', type: 'output' },
      { text: `Loading ${moduleName} module...`, type: 'system' },
    ];

    return {
      lines: sequence,
      accessGranted: true,
      moduleName
    };
  }

  async simulateDenied(moduleName: string): Promise<AccessSequence> {
    const sequence: TerminalLine[] = [
      { text: `> Requesting access to ${moduleName}...`, type: 'command' },
      { text: 'Establishing secure connection...', type: 'system' },
      { text: '[■■■□□□□□□□] 30%', type: 'output' },
      { text: '[■■■■■□□□□□] 50%', type: 'output' },
      { text: 'ERROR: Connection interrupted', type: 'error' },
      { text: '', type: 'output' },
      { text: '╔═══════════════════════════════════════╗', type: 'error' },
      { text: '║       ACCESS DENIED                   ║', type: 'error' },
      { text: '╚═══════════════════════════════════════╝', type: 'error' },
      { text: '', type: 'output' },
      { text: 'Reason: Insufficient clearance level', type: 'warning' },
    ];

    return {
      lines: sequence,
      accessGranted: false,
      moduleName
    };
  }

  getBootMessages(): string[] {
    return [
      'Initializing neural interface...',
      'Loading system modules...',
      'Establishing network protocols...',
      'Calibrating display matrix...',
      'System ready.',
    ];
  }

  getRandomGlitchText(): string {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
    let result = '';
    for (let i = 0; i < 20; i++) {
      result += glitchChars[Math.floor(Math.random() * glitchChars.length)];
    }
    return result;
  }
}
