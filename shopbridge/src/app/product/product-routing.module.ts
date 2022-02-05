import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ProductComponent } from './product.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'add', component: AddproductComponent },
  { path: 'view', component:  ViewproductComponent },
  { path: 'edit/:id', component: EditproductComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
