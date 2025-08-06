import { Component } from '@angular/core'; // Importa la función principal para definir un componente Angular
import { RouterOutlet } from '@angular/router'; // Importa RouterOutlet para habilitar navegación enrutada
@Component({
  selector: 'app-root', // Nombre del selector usado en index.html (<app-root>)
  standalone: true, // Indica que este componente no necesita un NgModule para funcionar
  imports: [RouterOutlet], // Importa RouterOutlet para poder mostrar las rutas hijas
  template: `
    <!-- Aquí irán los layouts, menús globales, rutas, etc. // Actualmente vacío -->
    <!-- El RouterOutlet es el espacio donde se carga la vista según la ruta actual -->
    <router-outlet></router-outlet>
  `,
})
export class App {
  // Aquí podrías definir lógica global, como inyección de servicios globales,
  // suscripción a cambios de idioma, modo oscuro, loading bar, etc.
}
