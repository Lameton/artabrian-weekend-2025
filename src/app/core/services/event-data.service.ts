import { Injectable, signal, computed } from '@angular/core';
import { Tournament, EventInfo, GameInfo, GameType } from '../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class EventDataService {
  // Información general del evento
  private eventInfo = signal<EventInfo>({
    name: 'Artabrian Weekend 2025',
    startDate: new Date('2025-11-14'),
    endDate: new Date('2025-11-16'),
    location: {
      name: 'Pazo do Monte',
      address: 'San Pedro de Leixa, Nº 82',
      city: '15405 Ferrol, A Coruña',
      coordinates: {
        lat: 43.4623,
        lng: -8.2377,
      },
    },
    organizers: ['Artabrian Nights'],
    sponsors: [
      'Cardmarket',
      'Ferol Comics y Juegos',
      'Astora Comics y Juegos',
      'Caprica Games',
    ],
    contact: {
      email: 'artabriannights@gmail.com',
      phone: '698 181 920',
      website: 'artabriannights.com',
      social: {
        instagram: '@artabriannights',
      },
    },
  });

  // Configuración de juegos
  private gameInfo = signal<Record<GameType, GameInfo>>({
    mtg: {
      id: 'mtg',
      name: 'MTG',
      fullName: 'Magic: The Gathering',
      description: 'Torneos oficiales con premios increíbles',
      theme: {
        primaryColor: '#D4AF37',
        secondaryColor: '#8B4513',
        backgroundImage: 'assets/images/mtg/mtg-hero.jpg',
      },
      routes: {
        main: '/mtg',
        registration: 'https://forms.google.com/mtg-registration',
      },
    },
    swu: {
      id: 'swu',
      name: 'SWU',
      fullName: 'Star Wars Unlimited',
      description: 'Experiencia épica en galaxia muy muy lejana',
      theme: {
        primaryColor: '#FFE81F',
        secondaryColor: '#000000',
        backgroundImage: 'assets/images/swu/swu-hero.jpg',
      },
      routes: {
        main: '/swu',
        registration: 'https://forms.google.com/swu-registration',
      },
    },
    'future-tcg': {
      id: 'future-tcg',
      name: 'TCG3',
      fullName: 'Tercer TCG',
      description: 'Próximamente',
      theme: {
        primaryColor: '#6B46C1',
        secondaryColor: '#1F2937',
        backgroundImage: 'assets/images/common/default-bg.jpg',
      },
      routes: {
        main: '/tcg3',
        registration: '#',
      },
    },
  });

  // Datos de torneos extraídos CORRECTAMENTE de tus carteles
  private tournaments = signal<Tournament[]>([
    // ============ MTG TORNEOS (del cartel MTG) ============
    // MTG - Viernes 14
    {
      id: 'mtg-team-trios',
      game: 'mtg',
      name: 'Team Tríos (Legacy + Modern + Estándar)',
      day: 'friday',
      time: '16:00',
      price: 30,
      format: 'team-trios',
      prizes: [
        '1º 50% recaudación en Ártabros + x3 Artabrian Playmat Ganador + material promocional',
        '2º 30% recaudación en Ártabros + material promocional',
        '3º-4º 10% recaudación en Ártabros + material promocional',
      ],
      isMainEvent: false,
      registrationUrl: 'https://forms.google.com/mtg-team-trios',
    },
    {
      id: 'mtg-8man-friday',
      game: 'mtg',
      name: '8-Man',
      day: 'friday',
      time: '16:00',
      price: 10,
      format: 'side-event',
      prizes: [
        '50 Artabros y ronda bye sábado (Legacy, Modern o Estándar)',
        '30 Ártabros',
      ],
      isMainEvent: false,
    },
    // MTG - Sábado 15 (Main Events)
    {
      id: 'mtg-legacy-main-event',
      game: 'mtg',
      name: 'Legacy Main Event',
      day: 'saturday',
      time: '10:00',
      price: 30,
      format: 'main-event',
      prizes: [
        '1º Underground Sea (revised) + Tropical Island (revised) + Artabrian Playmat ganador + Trofeo',
        '2º Tropical Island + Artabrian Playmat finalista',
        '3º-4º Bayou',
        '5º-8º 100 Ártabros',
      ],
      isMainEvent: true,
      maxPlayers: 128,
      registrationUrl: 'https://forms.google.com/mtg-main-event',
    },
    {
      id: 'mtg-8man-saturday',
      game: 'mtg',
      name: '8-Man',
      day: 'saturday',
      time: '10:00',
      price: 10,
      format: 'side-event',
      prizes: ['50 Artabros y ronda bye sábado (Modern)', '30 Ártabros'],
      isMainEvent: false,
    },
    {
      id: 'mtg-standard-main-event',
      game: 'mtg',
      name: 'Estándar Main Event',
      day: 'saturday',
      time: '12:00',
      price: 30,
      format: 'main-event',
      prizes: [
        '1º x3 Play Booster box Final Fantasy + Artabrian Playmat ganador + Trofeo',
        '2º x1 Play Booster box Final Fantasy + Artabrian Playmat finalista + 50 Ártabros',
        '3º-4º 100 Ártabros',
        '5º-8º 50 Ártabros',
      ],
      isMainEvent: true,
      maxPlayers: 64,
      registrationUrl: 'https://forms.google.com/mtg-main-event',
    },
    {
      id: 'mtg-pauper-main-event',
      game: 'mtg',
      name: 'Pauper Main Event',
      day: 'saturday',
      time: '13:00',
      price: 20,
      format: 'main-event',
      prizes: [
        '1º x4 Lightning Bolt (Archivo Místico JAP, Foil) + Counterspell (Archivo Místico JAP, Foil) + Secret Lair Bob Esponja Lands (producto sellado) + Artabrian Playmat ganador + Trofeo',
        '2º x4 Brainstorm (Archivo Místico JAP, Foil) + Secret Lair Bob Esponja Lands (producto sellado) + Artabrian Playmat finalista',
        '3º-4º Secret Lair Bob Esponja Lands (producto sellado)',
        '5º-8º Cupón Cardmarket 30€',
      ],
      isMainEvent: true,
      maxPlayers: 64,
      registrationUrl: 'https://forms.google.com/mtg-main-event',
    },
    // MTG - Domingo 16
    {
      id: 'mtg-modern-event',
      game: 'mtg',
      name: 'Modern Event Premier',
      day: 'sunday',
      time: '10:00',
      price: 30,
      format: 'main-event',
      maxPlayers: 128,
      prizes: [
        '1º x4 Modern Horizons III Play Booster Box + Artabrian Playmat ganador + trofeo',
        '2º x2 Modern Horizons III Play Booster Box + Artabrian Playmat finalista',
        '3º-4º x1 Modern Horizons III Play Booster Box',
        '5º-8º 100 Ártabros',
      ],
      isMainEvent: true,
    },
    {
      id: 'mtg-8man-sunday',
      game: 'mtg',
      name: '8-Man',
      day: 'sunday',
      time: '13:00',
      price: 10,
      format: 'side-event',
      prizes: ['1º 50 Artabros', '2º 30 Ártabros'],
      isMainEvent: false,
    },

    // ============ SWU TORNEOS (del cartel SWU) ============
    // SWU - Viernes 14
    {
      id: 'swu-team-trios',
      game: 'swu',
      name: 'Team Tríos',
      day: 'friday',
      time: '16:00',
      price: 30,
      format: 'premier',
      prizes: [
        '1º 50% recaudación en Ártabros + x3 Artabrian Playmat ganador + ronda bye Main Event Premier',
        '2º 30% recaudación en Ártabros + material promocional',
        '3º-4º 10% recaudación + material promocional',
      ],
      isMainEvent: false,
      registrationUrl: 'https://forms.google.com/swu-team-trios',
    },
    {
      id: 'swu-8man-friday',
      game: 'swu',
      name: '8-Man',
      day: 'friday',
      time: '10:00',
      price: 10,
      format: 'premier',
      prizes: [
        '1º 50 Ártabros + 1º ronda bye Side Event Premier',
        'Material promocional',
      ],
      isMainEvent: false,
    },
    // SWU - Sábado 15
    {
      id: 'swu-main-event-premier',
      game: 'swu',
      name: 'Main Event Premier',
      day: 'saturday',
      time: '10:30',
      price: 30,
      format: 'premier',
      prizes: [
        '1º x2 caja carbonita "set en curso" + Artabrian playmat ganador + Trofeo + sable laser yoda black series',
        '2º x1 caja carbonita "set en curso" + Artabrian playmat finalista + Deck Pod oficial Gamegenic',
        '3º-4º x2 caja "set en curso"',
        '5º-8º x1 caja "set en curso"',
      ],
      isMainEvent: true,
      maxPlayers: 64,
      registrationUrl: 'https://forms.google.com/swu-main-event',
    },
    {
      id: 'swu-8man-saturday',
      game: 'swu',
      name: '8-Man',
      day: 'saturday',
      time: '11:00',
      price: 10,
      format: 'premier',
      prizes: [
        '1º 50 Ártabros + 1º Ronda Bye Side Event Premier',
        '2º 30 Ártabros',
      ],
      isMainEvent: false,
    },
    // SWU - Domingo 16
    {
      id: 'swu-side-event-premier',
      game: 'swu',
      name: 'Side Event Premier',
      day: 'sunday',
      time: '10:30',
      price: 30,
      format: 'modern',
      prizes: [
        '1º 40% Recaudación en Ártabros + Artabrian playmat ganador + material promocional',
        '2º 20% Recaudación en Ártabros + material promocional',
        '3º-4ª 10% Recaudación en Ártabros + material promocional',
        '5º-8º 5% Recaudación en Ártabros + material promocional',
      ],
      isMainEvent: true,
      maxPlayers: 64,
      registrationUrl: 'https://forms.google.com/swu-side-event',
    },
    {
      id: 'swu-8man-sunday',
      game: 'swu',
      name: '8-Man',
      day: 'sunday',
      time: '11:00',
      price: 10,
      format: 'side-event',
      prizes: ['1º 50 Ártabros', '2º 30 Ártabros'],
      isMainEvent: false,
    },
  ]);

  // COMPUTED SIGNALS (más eficientes para filtros)
  private mtgTournaments = computed(() =>
    this.tournaments().filter((tournament) => tournament.game === 'mtg')
  );

  private swuTournaments = computed(() =>
    this.tournaments().filter((tournament) => tournament.game === 'swu')
  );

  private mainEvents = computed(() =>
    this.tournaments().filter((tournament) => tournament.isMainEvent)
  );

  // MÉTODOS PÚBLICOS - información general
  getEventInfo() {
    return this.eventInfo();
  }

  getGameInfo(game: GameType) {
    return this.gameInfo()[game];
  }

  getAllGames() {
    return Object.values(this.gameInfo()).filter(
      (game) => game.id !== 'future-tcg'
    );
  }

  // MÉTODOS PÚBLICOS - torneos (usando computed signals)
  getTournamentsByGame(game: GameType): Tournament[] {
    if (game === 'mtg') return this.mtgTournaments();
    if (game === 'swu') return this.swuTournaments();
    return [];
  }

  getMainEvents(game?: GameType): Tournament[] {
    const events = this.mainEvents();
    return game
      ? events.filter((tournament) => tournament.game === game)
      : events;
  }

  getTournamentsByDay(game: GameType, day: string): Tournament[] {
    const gameTournaments = this.getTournamentsByGame(game);
    return gameTournaments.filter((tournament) => tournament.day === day);
  }

  // MÉTODOS ADICIONALES
  getAllTournaments(): Tournament[] {
    return this.tournaments();
  }

  getTournamentById(id: string): Tournament | undefined {
    return this.tournaments().find((tournament) => tournament.id === id);
  }
}
