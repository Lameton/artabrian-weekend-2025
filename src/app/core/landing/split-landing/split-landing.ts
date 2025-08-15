import { Component } from '@angular/core';

@Component({
  selector: 'split-landing',
  standalone: true,
  imports: [],
  templateUrl: './split-landing.html',
  styleUrls: ['./split-landing.scss'], // opcional
})
export class SplitLanding {
  // Estado para controlar qué panel tiene el hover activo
  hoveredPanel: 'mtg' | 'swu' | null = null;

  // Método para registrar el panel que recibe el hover
  onHover(panel: 'mtg' | 'swu') {
    this.hoveredPanel = panel;
  }

  // Método para limpiar el estado cuando se quita el hover
  onLeave() {
    this.hoveredPanel = null;
  }
}
