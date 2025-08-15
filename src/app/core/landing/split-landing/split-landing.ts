import { Component, OnInit } from '@angular/core';
import { TournamentSplitService } from '../../../services/tournament-split.service';  // Ajusta ruta según estructura

@Component({
  selector: 'split-landing',
  standalone: true,
  imports: [],
  templateUrl: './split-landing.html',
  styleUrls: ['./split-landing.scss'], // opcional
})
export class SplitLanding implements OnInit {
  hoveredPanel: 'mtg' | 'swu' | null = null;

  tournamentName: string | null = null; // Para guardar el nombre del torneo recibido

  constructor(private splitService: TournamentSplitService) {}

  ngOnInit(): void {
    this.splitService.getSplits().subscribe({
      next: (data) => {
        console.log('Datos torneo en SplitLanding:', data);
        this.tournamentName = data.length > 0 ? data[0].name : null;
      },
      error: (err) => {
        console.error('Error al cargar torneo:', err);
      }
    });
  }
  
  // Método para registrar el panel que recibe el hover
  onHover(panel: 'mtg' | 'swu') {
    this.hoveredPanel = panel;
  }

  // Método para limpiar el estado cuando se quita el hover
  onLeave() {
    this.hoveredPanel = null;
  }
}
