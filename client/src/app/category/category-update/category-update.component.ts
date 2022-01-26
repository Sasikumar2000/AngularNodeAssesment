import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/app/models/icategory';
import { CategoryServiceService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {
  categorys : Icategory[] = [];
  
  constructor(private CategoryServiceService : CategoryServiceService ) { 
    CategoryServiceService.GetCategory().subscribe((c) => { this.categorys = c; }
    );
  }
  category : Icategory = {} as Icategory;
  txtid : number = 0;
  txtCid : number = 0;
  txtCname : string = "";
  txtRange : string = "";
  
  UpdateCategory(): void {
    this.category.id = this.txtid;
    this.category.Category_Id = this.txtCid;
    this.category.Category_Name = this.txtCname;
    this.category.Range = this.txtRange;
    
    
    this.CategoryServiceService.UpdateCategory(this.category).subscribe(res => { console.log(res); });
  }

  ngOnInit(): void {
  }

}
