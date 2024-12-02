import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recibir',
  templateUrl: './recibir.page.html',
  styleUrls: ['./recibir.page.scss'],
})
export class RecibirPage implements OnInit {

  public tipovehiculo: any = [];
  public tiporevision: any = [];
  public tiposervicio: any = [];

  public recepcion: FormGroup | any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.recepcion = this.formBuilder.group({
      placa: ['', Validators.required],
      modelo: ['2000', Validators.required],
      cliente: ['', Validators.required],
      celular: ['', [Validators.required, Validators.pattern(/^[1-9]\d{9,9}$/)]], 
      email: ['', [Validators.required, Validators.email]],
      fecha: [''],
      tipovehiculo: [''],
      tiporevision: [''],
      tiposervicio: [''],
      observacion: [''],
      electrico: [''],
      cedula: ['', Validators.required],
    })
    
  }

  enviar(){
    console.log(this.recepcion.value)
  }

}
