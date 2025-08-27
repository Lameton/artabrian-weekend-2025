import { Sponsor } from './sponsor.model';

export interface TournamentDescription {
  id: string;
  name: string;
  dates: string;
  description: string;
  location: string;
  posterPath: string;
  backgroundPath: string;
  principalSponsors: Sponsor[];
  secondarySponsors: Sponsor[];
}
