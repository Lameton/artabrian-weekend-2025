import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer';
import { NavbarComponent } from '../navbar/navbar';

@Component({
  selector: 'aviso-legal',
  standalone: true,
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './aviso-legal.html',
})
export class AvisoLegalComponent {}
