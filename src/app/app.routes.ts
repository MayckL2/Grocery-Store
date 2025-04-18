import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

export const routes: Routes = [
    {
        path: "", component: HomeComponent
    },
    {
        path: "product/:id", loadComponent: () => 
            import('./pages/product-details/product-details.component').then(m => m.ProductDetailsComponent)
    },
    {
        path: "cart", loadComponent: () => 
            import('./pages/cart/cart.component').then(m => m.CartComponent),
    },
    {
        path: "payment", loadComponent: () => 
            import('./pages/payment/payment.component').then(m => m.PaymentComponent)
    },
];
