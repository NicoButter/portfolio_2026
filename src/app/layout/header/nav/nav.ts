import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav implements OnInit {
  ngOnInit() {
    // Add slide-in animation after 2.5 seconds
    setTimeout(() => {
      const nav = document.querySelector('.nav') as HTMLElement;
      if (nav) {
        nav.style.transform = 'translateY(0)';
      }
    }, 2500);
  }
}
