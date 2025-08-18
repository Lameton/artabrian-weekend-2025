import { EventReward } from './event-reward.model';

export interface TournamentEvent {
  id: string;
  name: string;
  day: string;
  hour: string;
  prize: number;
  rewards: EventReward[];
  backgroundPath: string;
}