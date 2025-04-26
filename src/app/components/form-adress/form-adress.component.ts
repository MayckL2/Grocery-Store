import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IAdress } from '../../models/IAdress';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductService } from '../../services/product/product.service';
import { PaymentService } from '../../services/payment/payment.service';
import { UxService } from '../../services/ux/ux.service';
import { pipe, take } from 'rxjs';

@Component({
  selector: 'app-form-adress',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FloatLabelModule,
    InputTextModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './form-adress.component.html',
  styleUrl: './form-adress.component.scss',
})
export class FormAdressComponent {
  @Output() adressData = new EventEmitter();
  data: IAdress | undefined;
  adress: FormGroup;
  product = inject(ProductService);
  payment = inject(PaymentService);
  ux = inject(UxService);

  constructor(private formBuilder: FormBuilder) {
    this.data = this.payment.getAdress();

    this.adress = this.formBuilder.group({
      cep: [this.data?.cep ?? '', [Validators.required]],
      city: [this.data?.city ?? '', [Validators.required]],
      neighborhood: [this.data?.neighborhood ?? '', [Validators.required]],
      street: [this.data?.street ?? '', [Validators.required]],
      number: [this.data?.number ?? null, [Validators.required]],
      complement: [this.data?.complement ?? '', [Validators.required]],
      receiver: [this.data?.receiver ?? '', [Validators.required]],
    });

    if (this.data) {
      this.emitForm();
    }

    this.adress.valueChanges.subscribe((data) => {
      if(data.cep.length == 8 && (data.city == '' || data.neighborhood == '' || data.street == '')){
        this.ux.colectAdressByCep(data.cep).subscribe({
          next: (e) => {
            this.fillForm(e)
          }
        })}
    });
  }

  fillForm(data: any){
    this.adress.patchValue({
      city: data.localidade,
      neighborhood: data.bairro,
      street: data.logradouro
    })
  }

  validateForm(){
    this.adress.statusChanges.subscribe((status) => {
      if (status === 'VALID') {
        this.emitForm();
      }
    });
  }

  emitForm() {
    this.adressData.emit(this.adress.value);
  }

  ngOnInit() {
    this.validateForm();
  }
  
}
