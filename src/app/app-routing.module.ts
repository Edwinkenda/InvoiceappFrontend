import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [ 
  {path: 'product-list', component: ProductListComponent},
  {path: 'login', component: LoginComponent}, 
  {path: 'inventory', component: InventoryComponent},
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
