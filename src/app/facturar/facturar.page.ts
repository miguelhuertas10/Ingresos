import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-facturar',
  templateUrl: './facturar.page.html',
  styleUrls: ['./facturar.page.scss'],
})
export class FacturarPage implements OnInit {

  public recepcion: FormGroup | any;

  public medios: any = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.recepcion = this.formBuilder.group({
      placa: [''],
      fecha: [''],
      factura: [''],
      pin: [''],
      solicitud: [''],
      usuario: [''],
      observacion: [''],
      mediopago: [''],
    })
  }

  enviar(){
    console.log(this.recepcion.value)
  }

}
