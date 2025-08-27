import { Component } from '@angular/core';

@Component({
  selector: 'sponsors',
  standalone: true,
  templateUrl: './sponsors.html',
})
export class SponsorsComponent {
  principalSponsors = [
    { name: 'Sponsor 1', logo: '/assets/images/sponsors/logo-ferrol.png' },
    { name: 'Sponsor 2', logo: '/assets/images/sponsors/logo-cardmarket.png' },
  ];
  secondarySponsors = [
    {
      name: 'Sponsor 1',
      logo: '/assets/images/sponsors/logo-random-player.png',
    },
    { name: 'Sponsor 2', logo: '/assets/images/sponsors/logo-vip.png' },
    { name: 'Sponsor 3', logo: '/assets/images/sponsors/logo-xpoly.png' },

    {
      name: 'Sponsor 4',
      logo: '/assets/images/sponsors/logo-caprica.png',
    },
    { name: 'Sponsor 5', logo: '/assets/images/sponsors/logo-percalandia.png' },
  ];
}
