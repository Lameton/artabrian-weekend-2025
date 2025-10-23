import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
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
    '/assets/images/Event/02-Image-event.jpg',
    '/assets/images/Event/03-Image-event.jpg',
    '/assets/images/Event/04-Image-event.jpg',
    '/assets/images/Event/05-Image-event.jpg',
    '/assets/images/Event/06-Image-event.jpg',
    '/assets/images/Event/07-Image-event.jpg',
    '/assets/images/Event/08-Image-event.jpg',
    '/assets/images/Event/09-Image-event.jpg',
    '/assets/images/Event/10-Image-event.jpg',
    '/assets/images/Event/11-Image-event.jpg',
    '/assets/images/Event/12-Image-event.jpg',
    '/assets/images/Event/13-Image-event.jpg',
    '/assets/images/Event/14-Image-event.jpg',
  ];

  currentIndex = 0;

  ngAfterViewInit() {
    // No es necesario ocultar scrollbars con JS, mejor CSS
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['locationData']) {
      this.currentIndex = 0;
      this.scrollToImage(this.currentIndex);
    }
  }

  goPrev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.imagePaths.length) % this.imagePaths.length;
    this.scrollToImage(this.currentIndex);
  }

  goNext() {
    this.currentIndex = (this.currentIndex + 1) % this.imagePaths.length;
    this.scrollToImage(this.currentIndex);
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
