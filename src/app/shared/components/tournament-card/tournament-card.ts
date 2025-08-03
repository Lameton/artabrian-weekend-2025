import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor, NgIf, NgClass, TitleCasePipe } from '@angular/common';
import { Tournament } from '../../models';

@Component({
  selector: 'app-tournament-card',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, TitleCasePipe],
  templateUrl: './tournament-card.html',
  styleUrl: './tournament-card.scss',
})
export class TournamentCard {
  @Input() tournament!: Tournament;
  @Input() gameTheme: 'mtg' | 'swu' = 'mtg';
  @Output() register = new EventEmitter<Tournament>();

  onRegister() {
    this.register.emit(this.tournament);
  }
  getDayName() {
    /* ... */
  }
  getThemeClasses() {
    /* ... */
  }
  getButtonClasses() {
    /* ... */
  }
}
