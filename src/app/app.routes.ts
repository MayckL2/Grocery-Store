import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
    {
        path: "", component: HomeComponent
    },
];
