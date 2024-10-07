import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopItemsComponent } from './shop-items/shop-items.component';
import { CartItemsComponent } from './cart-items/cart-items.component';

const routes: Routes = [
  {path:'', component:ShopItemsComponent},
  {path:'cart', component:CartItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
