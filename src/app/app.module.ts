import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockListComponent } from './pages/stock-list/stock-list.component';
import { SneackerComponent } from './pages/sneacker/sneacker.component';
import { ShopCarComponent } from './pages/shop-car/shop-car.component';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, ShoppingCart, ArrowLeftFromLine, Tag, Search } from 'lucide-angular';
import Swal from 'sweetalert2';
import { ItemComponent } from './components/item/item.component'

@NgModule({
  declarations: [
    AppComponent,
    StockListComponent,
    SneackerComponent,
    ShopCarComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LucideAngularModule.pick({ ShoppingCart, ArrowLeftFromLine, Tag, Search })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
