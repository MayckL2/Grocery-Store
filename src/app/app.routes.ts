import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

export const routes: Routes = [
    {
        path: "", component: HomeComponent
    },
    {
        path: "product/:name", component: ProductDetailsComponent
    },
];
