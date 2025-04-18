import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IAdress } from '../../models/IAdress';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-form-adress',
  imports: [ReactiveFormsModule, CommonModule, FloatLabelModule, InputTextModule, MatFormFieldModule, MatInputModule],
  templateUrl: './form-adress.component.html',
  styleUrl: './form-adress.component.scss',
})
export class FormAdressComponent {
  @Output() adressData = new EventEmitter();
  adress: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.adress = this.formBuilder.group({
      cep: ['', [Validators.required]],
      state: ['', [Validators.required]],
      neighborhood: ['', [Validators.required]],
      street: ['', [Validators.required]],
      number: ['', [Validators.required]],
      complement: ['', [Validators.required]],
      receiver: ['', [Validators.required]],
    });
  }

  check(){
    // console.log(this.adress.value);
    this.adressData.emit(this.adress.value);
  }
}
