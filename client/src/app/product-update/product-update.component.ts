import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  products : Iproduct[] = [];
  
  constructor(private ProductServiceService : ProductServiceService ) { 
    ProductServiceService.GetProduct().subscribe((c) => { this.products = c; }
    );
  }
  product : Iproduct = {} as Iproduct;
  txtid : number = 0;
  txtPid : number = 0;
  txtPname : string = "";
  txtProcessor : string = "";
  txtOrgin: string = "";
  txtPrice: number = 0;
  
  UpdateProduct(): void {
    this.product.id = this.txtid;
    this.product.Product_Id = this.txtPid;
    this.product.Product_Name = this.txtPname;
    this.product.Processor = this.txtProcessor;
    this.product.CountryOfOrgin = this.txtOrgin;
    this.product.Price = this.txtPrice;
    
    this.ProductServiceService.UpdateProduct(this.product).subscribe(res => { console.log(res); });
  }

  
  ngOnInit(): void {
  }

}
