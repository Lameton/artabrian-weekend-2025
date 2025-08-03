import { GameType } from './game.model';

export type TournamentDay = 'friday' | 'saturday' | 'sunday';
export type TournamentFormat =
  | 'team-trios'
  | 'main-event'
  | 'side-event'
  | 'legacy'
  | 'modern'
  | 'standard'
  | 'pauper'
  | 'premier';

export interface Tournament {
  id: string;
  game: GameType;
  name: string;
  day: TournamentDay;
  time: string;
  endTime?: string;
  price: number;
  format: TournamentFormat;
  maxPlayers?: number;
  prizes: string[];
  description?: string;
  registrationUrl?: string;
  isMainEvent: boolean;
}
