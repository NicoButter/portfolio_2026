import { Component, OnInit, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav implements OnInit {
  private router = inject(Router);
  
  animateOnHome = signal(false);

  ngOnInit() {
    const isHome = this.router.url === '/' || this.router.url === '';
    
    if (isHome) {
      this.animateOnHome.set(true);
    }
  }
}
