import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookies-consent.html',
  standalone: true,
  imports: [CommonModule], // No se importa CommonModule aquí, lo harás desde app.module o el módulo padre.
})
export class CookieConsentComponent {
  visible = false;

  constructor() {
    this.visible = !localStorage.getItem('cookie-consent');
  }

  aceptar(): void {
    localStorage.setItem('cookie-consent', 'accepted');
    this.visible = false;
  }

  rechazar(): void {
    localStorage.setItem('cookie-consent', 'rejected');
    this.visible = false;
  }
}
