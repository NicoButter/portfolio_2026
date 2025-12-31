import { Component, HostListener, ElementRef, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav implements OnInit {
  private elementRef = inject(ElementRef);
  private lastScrollTop = 0;
  private scrollThreshold = 10;

  ngOnInit() {
    // Show header after 2.5 seconds to let the main content be visible first
    setTimeout(() => {
      this.elementRef.nativeElement.classList.add('visible');
    }, 2500);
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.scrollThreshold) {
      this.elementRef.nativeElement.classList.add('visible');
    } else {
      this.elementRef.nativeElement.classList.remove('visible');
    }

    this.lastScrollTop = scrollTop;
  }
}
