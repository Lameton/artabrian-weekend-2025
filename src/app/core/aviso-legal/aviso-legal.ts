import { Component } from '@angular/core';
import { NavbarComponent } from '../header/header';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'aviso-legal',
  standalone: true,
  imports: [NavbarComponent, NavbarComponent, FooterComponent],
  templateUrl: './aviso-legal.html',
})
export class AvisoLegalComponent {}
