import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  products : Iproduct[] = [];
  
  constructor(private ProductServiceService : ProductServiceService ) { 
    ProductServiceService.GetProduct().subscribe((c) => { this.products = c; }
    );
  }

  ngOnInit(): void {
  }

}
