import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public login: FormGroup | any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.login = this.formBuilder.group({
      usuario: [''],
      password: [''],
    })
  }

  log(){
    console.log(this.login.value);
    //console.log(this.tocken)
  }

}
