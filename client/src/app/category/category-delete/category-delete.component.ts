import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/app/models/icategory';
import { CategoryServiceService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {

  categorys : Icategory[] = [];
  
  constructor(private CategoryServiceService : CategoryServiceService ) { 
    CategoryServiceService.GetCategory().subscribe((c) => { this.categorys = c; }
    );
  }
  txtid : number = 0;
  DeleteCategory(): void {
    this.CategoryServiceService.RemoveCategory(this.txtid).subscribe(res => console.log(res));
  }

  ngOnInit(): void {
  }

}
