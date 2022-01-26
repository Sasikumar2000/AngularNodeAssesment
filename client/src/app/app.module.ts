import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryDeleteComponent } from './category/category-delete/category-delete.component';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { CategoryUpdateComponent } from './category/category-update/category-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductDeleteComponent,
    ProductUpdateComponent,
    CategoryListComponent,
    CategoryDeleteComponent,
    CategoryDetailComponent,
    CategoryUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
