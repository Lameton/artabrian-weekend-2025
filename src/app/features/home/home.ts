import { Component } from '@angular/core';
import { NavbarComponent } from '../../core/header/header';
import { HeroSection } from './hero-section/hero-section';
import { Tournaments } from './tournaments/tournaments';

@Component({
  selector: 'home',
  standalone: true,
  imports: [NavbarComponent, HeroSection, Tournaments],
  templateUrl: './home.html',
})
export class Home {}
