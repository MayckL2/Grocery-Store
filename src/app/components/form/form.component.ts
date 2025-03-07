import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ ReactiveFormsModule, CommonModule ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  // Instanciando formgroup
  loginForm: FormGroup;

  // Configurando formbuild
  // Definindo os campos necessarios e os validators de cada um
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  signIn(){
    console.log(this.loginForm.value);
    // verifica o form passou todos os validadores
    // console.log(this.loginForm.valid);

    // console.log(this.loginForm.controls['name'].errors);
    // console.log(this.loginForm.controls['password'].errors);
  }
  
  
}
