import { Component, OnInit } from '@angular/core';
import { Icategory } from '../models/icategory';
import { CategoryServiceService } from '../services/category-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category : Icategory = {} as Icategory;
  txtCid : number = 0;
  txtCname : string = "";
  txtRange : string = "";
  

  constructor(private CategoryServiceService: CategoryServiceService) { }

  SaveCategory1(): void {
    this.category.Category_Id = this.txtCid;
    this.category.Category_Name = this.txtCname;
    this.category.Range = this.txtRange;
   
   
    this.CategoryServiceService.SaveCategory(this.category).subscribe(res => { console.log(res); });
  }

  ngOnInit(): void {
  }

}
