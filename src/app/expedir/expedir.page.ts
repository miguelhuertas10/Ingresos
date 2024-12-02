import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-expedir',
  templateUrl: './expedir.page.html',
  styleUrls: ['./expedir.page.scss'],
})
export class ExpedirPage implements OnInit {

  public expedicion: FormGroup| any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.expedicion = this.formBuilder.group({
      placa: ['ABC123'],
      fecha: [''],
      runt: [''],
      resultado: [''],
      usuario: [''],
      observacion: [''],
      pin: ['1234'],
      solicitud: ['1234'],
      fur: [''],
    })

  }

  enviar(){
    console.log(this.expedicion.value)
  }

}
