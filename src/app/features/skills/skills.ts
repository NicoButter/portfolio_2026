import { ChangeDetectionStrategy, Component, signal, OnInit, OnDestroy } from '@angular/core';
import { AccessControlComponent } from '../../shared/ui/access-control/access-control.component';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-skills',
  imports: [AccessControlComponent, RouterLink],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills implements OnInit, OnDestroy {
  readonly showContent = signal(false);
  readonly resetKey = signal(0);
  
  private routerSubscription?: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event.url.includes('/skills')) {
          this.resetAnimation();
        }
      });
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  resetAnimation(): void {
    this.showContent.set(false);
    this.resetKey.update(v => v + 1);
  }

  onAccessComplete(): void {
    this.showContent.set(true);
  }
}
