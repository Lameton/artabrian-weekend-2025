import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer';
import { NavbarComponent } from '../navbar/navbar';

@Component({
  selector: 'politica-privacidad',
  standalone: true,
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './politica-privacidad.html',
})
export class PoliticaPrivacidadComponent {}
