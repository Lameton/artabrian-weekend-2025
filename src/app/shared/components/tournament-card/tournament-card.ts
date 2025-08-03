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

  onRegister(): void {
    this.register.emit(this.tournament);
  }

  getDayName(): string {
    const days: Record<string, string> = {
      friday: 'Viernes',
      saturday: 'Sábado',
      sunday: 'Domingo',
    };
    return days[this.tournament.day] || '';
  }

  getThemeClasses(): string {
    return this.gameTheme === 'mtg'
      ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-black'
      : 'bg-gradient-to-br from-gray-900 to-black text-white';
  }

  getButtonClasses(): string {
    return this.gameTheme === 'mtg'
      ? 'bg-black text-yellow-400 hover:bg-gray-800'
      : 'bg-yellow-400 text-black hover:bg-yellow-500';
  }
}
