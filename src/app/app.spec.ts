import { TestBed } from '@angular/core/testing';
// TestBed es la utilidad principal para configurar y crear un módulo de test en Angular.

import { provideZonelessChangeDetection } from '@angular/core';
// Esta función configura la prueba para usar detección de cambios Zoneless
// lo que puede mejorar rendimiento y evitar problemas de sincronización en las pruebas modernas.

import { App } from './app';
// Importa el componente App que vamos a testear.

describe('App', () => {
  // describe agrupa un conjunto de pruebas relacionadas a 'App'

  beforeEach(async () => {
    // beforeEach se ejecuta antes de cada prueba, configurando el entorno de testing.
    // Se marca async para esperar a la compilación de componentes.

    await TestBed.configureTestingModule({
      imports: [App], // Importamos el componente standalone App para usarlo en el test.
      providers: [provideZonelessChangeDetection()],
      // Inyectamos el proveedor para la detección de cambio zoneless.
    }).compileComponents();
    // compileComponents prepara el componente para renderizado y testing.
  });

  it('should create the app', () => {
    // it define un test individual que describe el comportamiento esperado.
    // En este caso, comprobamos que el componente se crea sin errores.

    const fixture = TestBed.createComponent(App);
    // Crea un fixture que contiene el componente y su template para pruebas.

    const app = fixture.componentInstance;
    // Extraemos la instancia real del componente.

    expect(app).toBeTruthy();
    // Esperamos que la instancia exista (no sea null/undefined) y confirme que se creó bien.
  });

  it('should render title', () => {
    // Segundo test: comprobamos que al renderizar el template, contiene un texto esperado.

    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    // Dispara la detección de cambios para renderizar el template actual.

    const compiled = fixture.nativeElement as HTMLElement;
    // Obtiene el elemento DOM raíz del componente para inspección y búsqueda.

    // Busca en el HTML generado un <h1> y comprueba que contiene el texto esperado.
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello, artabrian-weekend-2025'
    );
  });
});
