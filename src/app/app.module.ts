import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { SneackerComponent } from './components/sneacker/sneacker.component';
import { ShopCarComponent } from './components/shop-car/shop-car.component';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, ShoppingCart, ArrowLeftFromLine, Tag } from 'lucide-angular';

@NgModule({
  declarations: [
    AppComponent,
    StockListComponent,
    SneackerComponent,
    ShopCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LucideAngularModule.pick({ ShoppingCart, ArrowLeftFromLine, Tag })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
