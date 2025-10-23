import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  imports: [],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
