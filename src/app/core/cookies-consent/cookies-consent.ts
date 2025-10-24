import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookies-consent.html',
  standalone: true,
  imports: [CommonModule],
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
