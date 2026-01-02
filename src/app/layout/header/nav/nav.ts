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
    // Start nav animation after hero content (1.5s total for hero)
    setTimeout(() => {
      const navItems = document.querySelectorAll('.nav-item');
      
      navItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('animate');
        }, index * 150); // Stagger each item by 150ms
      });
    }, 1500); // Start after hero animation begins
  }
}
