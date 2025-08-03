export type GameType = 'mtg' | 'swu' | 'future-tcg';

export interface GameInfo {
  id: GameType;
  name: string;
  fullName: string;
  description: string;
  theme: {
    primaryColor: string;
    secondaryColor: string;
    backgroundImage: string;
  };
  routes: {
    main: string;
    registration: string;
  };
}
