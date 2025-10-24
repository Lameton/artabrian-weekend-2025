import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentLocation } from '../../../models/tournament-location.model';
import MapComponent from '../../../components/map/mapComponent';

@Component({
  selector: 'location-section',
  standalone: true,
  imports: [CommonModule, MapComponent],
  templateUrl: './locationSection.html',
})
export class LocationSectionComponent implements AfterViewInit, OnChanges {
  @Input() locationData: TournamentLocation | null = null;

  @ViewChild('galleryContainer', { static: false })
  galleryContainer!: ElementRef<HTMLDivElement>;

  imagePaths: string[] = [
    '/assets/images/event/02-Image-event.jpg',
    '/assets/images/event/03-Image-event.jpg',
    '/assets/images/event/04-Image-event.jpg',
    '/assets/images/event/05-Image-event.jpg',
    '/assets/images/event/06-Image-event.jpg',
    '/assets/images/event/07-Image-event.jpg',
    '/assets/images/event/08-Image-event.jpg',
    '/assets/images/event/09-Image-event.jpg',
    '/assets/images/event/10-Image-event.jpg',
    '/assets/images/event/11-Image-event.jpg',
    '/assets/images/event/12-Image-event.jpg',
    '/assets/images/event/13-Image-event.jpg',
    '/assets/images/event/14-Image-event.jpg',
  ];

  currentIndex = 0;
  imageTransitioning = false;
  fullscreenMode = false;

  ngAfterViewInit() {
    // Inicialización si es necesaria
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['locationData']) {
      this.currentIndex = 0;
      this.scrollToImage(this.currentIndex);
    }
  }

  // Navegación con animación de transición
  goPrev() {
    this.imageTransitioning = true;
    setTimeout(() => {
      this.currentIndex =
        (this.currentIndex - 1 + this.imagePaths.length) %
        this.imagePaths.length;
      this.scrollToImage(this.currentIndex);
      this.imageTransitioning = false;
    }, 200);
  }

  goNext() {
    this.imageTransitioning = true;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.imagePaths.length;
      this.scrollToImage(this.currentIndex);
      this.imageTransitioning = false;
    }, 200);
  }

  scrollToImage(index: number) {
    const container = this.galleryContainer?.nativeElement;
    if (container && container.children[index]) {
      (container.children[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }

  // Fullscreen mode
  openFullscreen() {
    this.fullscreenMode = true;
  }

  closeFullscreen() {
    this.fullscreenMode = false;
  }

  // Navegación por teclado
  @HostListener('window:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.goPrev();
    }
    if (event.key === 'ArrowRight') {
      this.goNext();
    }
    if (event.key === 'Escape') {
      this.closeFullscreen();
    }
  }

  // Getters existentes
  get backgroundPath(): string {
    return this.locationData?.backgroundPath ?? '';
  }

  get adress(): string {
    return this.locationData?.adress ?? '';
  }

  get latitude(): number {
    return 42.8806;
  }

  get longitude(): number {
    return -8.5457;
  }
}
