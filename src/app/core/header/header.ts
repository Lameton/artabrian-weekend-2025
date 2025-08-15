import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'artabrian-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
})
export class NavbarComponent {}
