import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product : Iproduct = {} as Iproduct;
  txtPid : number = 0;
  txtPname : string = "";
  txtProcessor : string = "";
  txtOrgin: string = "";
  txtPrice: number = 0;
  

  constructor(private ProductServiceService: ProductServiceService) { }

  SaveProduct1(): void {
    this.product.Product_Id = this.txtPid;
    this.product.Product_Name = this.txtPname;
    this.product.Processor = this.txtProcessor;
    this.product.CountryOfOrgin = this.txtOrgin;
    this.product.Price = this.txtPrice; 
   
    this.ProductServiceService.SaveProduct(this.product).subscribe(res => { console.log(res); });
  }
  ngOnInit(): void {
  }

}
