import { ChangeDetectionStrategy, Component, signal, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { AccessControlComponent } from '../../shared/ui/access-control/access-control.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-about',
  imports: [RouterLink, AccessControlComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About implements OnInit, OnDestroy {
  readonly showContent = signal(false);
  readonly resetKey = signal(0);
  
  private routerSubscription?: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event.url.includes('/about')) {
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
