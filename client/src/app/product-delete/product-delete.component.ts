import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  products : Iproduct[] = [];
  
  constructor(private ProductServiceService : ProductServiceService ) { 
    ProductServiceService.GetProduct().subscribe((c) => { this.products = c; }
    );
  }
  txtid : number = 0;
  DeleteProduct(): void {
    this.ProductServiceService.RemoveProduct(this.txtid).subscribe(res => console.log(res));
  }
  ngOnInit(): void {
  }

}
