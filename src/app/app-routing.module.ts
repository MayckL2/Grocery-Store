import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockListComponent } from './pages/stock-list/stock-list.component';
import { SneackerComponent } from './pages/sneacker/sneacker.component';
import { ShopCarComponent } from './pages/shop-car/shop-car.component';

const routes: Routes = [
  { path: '', component: StockListComponent },
  { path: 'sneacker', component: SneackerComponent },
  { path: 'shopCar', component: ShopCarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
