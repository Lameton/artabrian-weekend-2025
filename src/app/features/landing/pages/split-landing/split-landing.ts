import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'split-landing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './split-landing.html',
  styleUrl: './split-landing.scss',
})
export class SplitLanding {}
