import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { SneackerComponent } from './components/sneacker/sneacker.component';
import { ShopCarComponent } from './components/shop-car/shop-car.component';

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
