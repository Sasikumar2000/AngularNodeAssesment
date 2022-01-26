import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : Iproduct[] = [];
  
  constructor(private ProductServiceService : ProductServiceService ) { 
    ProductServiceService.GetProduct().subscribe((c) => { this.products = c; }
    );
  }
 
  ngOnInit(): void {
  }

}
