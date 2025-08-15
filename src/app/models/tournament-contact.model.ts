export interface TournamentContact {
  organizers: string[];
  sponsors: string[];
  contact: {
    email: string;
    phone: string;
    website: string;
  };
  social: {
    instagram: string;
    x: string;
  };
}