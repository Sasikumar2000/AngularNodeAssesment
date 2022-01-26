import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/app/models/icategory';
import { CategoryServiceService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  categorys : Icategory[] = [];
  
  constructor(private ProductServiceService : CategoryServiceService ) { 
    ProductServiceService.GetCategory().subscribe((c) => { this.categorys = c; }
    );
  }

  ngOnInit(): void {
  }

}
