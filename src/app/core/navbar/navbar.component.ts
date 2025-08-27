import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  appRoutes = routes.filter((r) => r.path !== '**');
  isOpen = false;
  isMobile = false;
  hasScrolled = false;

  ngOnInit(): void {
    this.updateViewport();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateViewport();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.hasScrolled = window.scrollY > 0;
  }

  private updateViewport(): void {
    this.isMobile = window.innerWidth < 768;
    if (!this.isMobile) {
      this.isOpen = false;
    }
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  trackByPath = (_: number, item: any) => item.path;
}
