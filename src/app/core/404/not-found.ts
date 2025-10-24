import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer';
import { NavbarComponent } from '../navbar/navbar';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, NavbarComponent],
  templateUrl: './not-found.html',
})
export class NotFoundComponent implements OnInit, OnDestroy {
  // Contador para la redirección automática
  redirectCountdown = 10; // Segundos antes de redireccionar
  private countdownInterval?: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Iniciar cuenta regresiva para redirección automática
    this.startRedirectCountdown();
  }

  ngOnDestroy(): void {
    // Limpiar el intervalo al destruir el componente
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  private startRedirectCountdown(): void {
    this.countdownInterval = setInterval(() => {
      this.redirectCountdown--;

      if (this.redirectCountdown <= 0) {
        this.redirectToHome();
      }
    }, 1000); // Actualizar cada segundo
  }

  redirectToHome(): void {
    // Limpiar intervalo antes de redireccionar
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
    // Redireccionar al inicio
    this.router.navigate(['/']);
  }

  cancelRedirect(): void {
    // Permitir al usuario cancelar la redirección automática
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
      this.redirectCountdown = -1; // Indicar que está cancelado
    }
  }
}
