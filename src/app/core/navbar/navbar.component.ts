import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'artabrian-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  @Input() pageSections: Array<{ id: string; title: string }> = [];
  @Input() activeSection: string = '';
  @Input() highlightedSection: string | null = null; // nuevo input para destacar sección según tcgId
  @Output() scrollToSection = new EventEmitter<string>();

  isOpen = false;
  isMobile = false;
  hasScrolled = false;

  ngOnInit(): void {
    this.updateViewport();
    this.updateActiveSectionOnScroll();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateViewport();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.hasScrolled = window.scrollY > 0;
    this.updateActiveSectionOnScroll();
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

  onScrollToSection(event: Event, id: string) {
    event.preventDefault();
    this.isOpen = false;
    this.scrollToSection.emit(id);
  }

  updateActiveSectionOnScroll() {
    for (const section of this.pageSections) {
      const el = document.getElementById(section.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = section.id;
          break;
        }
      }
    }
  }

  trackById(index: number, item: any): string {
    return item.id;
  }

  // Navegación al formulario de inscripción
  onInscribeteClick() {
    window.open('https://forms.gle/RgEFrzzyKXLRsDLm9', '_blank');
  }
}
