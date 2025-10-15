import { Component, OnInit, signal } from '@angular/core';
import {
  TournamentContactService,
  Contacto,
} from '../../../services/tournament-contact.service';

@Component({
  selector: 'contact-section',
  templateUrl: './contact.html',
})
export class ContactoComponent implements OnInit {
  contacto = signal<Contacto | null>(null);

  constructor(private contactService: TournamentContactService) {}

  ngOnInit(): void {
    this.contactService.getContact().subscribe({
      next: (data) => this.contacto.set(data),
      error: (err) => {
        console.error('Error cargando contacto', err);
        this.contacto.set(null);
      },
    });
  }

  get addressCount() {
    return this.contacto()?.addresses.length ?? 0;
  }

  get phoneCount() {
    return this.contacto()?.phones.length ?? 0;
  }

  get emailCount() {
    return this.contacto()?.emails.length ?? 0;
  }

  get fieldCount() {
    return this.contacto()?.form.fields.length ?? 0;
  }
}
