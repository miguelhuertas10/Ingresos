import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Recibir vehiculo', url: '/recibir', icon: 'mail' },
    { title: 'Facturacion', url: '/facturar', icon: 'paper-plane' },
    { title: 'Expedicion', url: '/expedir', icon: 'heart' },
    { title: 'Cambio clave', url: '/folder/clave', icon: 'archive' },
  ];
  constructor() {}
}
