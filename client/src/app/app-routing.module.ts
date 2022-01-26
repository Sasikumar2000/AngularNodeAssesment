import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductComponent } from './product/product.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryDeleteComponent } from './category/category-delete/category-delete.component';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { CategoryUpdateComponent } from './category/category-update/category-update.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'productentry', component: ProductComponent },
  { path: 'productlist', component: ProductListComponent },
  { path: 'productdelete', component: ProductDeleteComponent },
  { path: 'productdetail', component: ProductDetailComponent },
  { path: 'productupdate', component: ProductUpdateComponent},
  { path: 'categoryentry', component: CategoryComponent },
  { path: 'categorylist', component: CategoryListComponent },
  { path: 'categorydelete', component: CategoryDeleteComponent },
  { path: 'categorydetail', component: CategoryDetailComponent },
  { path: 'categoryupdate', component: CategoryUpdateComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
