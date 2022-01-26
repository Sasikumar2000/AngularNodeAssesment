import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/app/models/icategory';
import { CategoryServiceService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categorys : Icategory[] = [];
  
  constructor(private CategoryServiceService : CategoryServiceService ) { 
    CategoryServiceService.GetCategory().subscribe((c) => { this.categorys = c; }
    );
  }
  ngOnInit(): void {
  }

}
