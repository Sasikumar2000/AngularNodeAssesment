import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icategory } from '../models/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http: HttpClient) {
    console.log("Coming from service");
   }

   //get
  GetCategory(): Observable<Icategory[]> {
    return this.http.get<Icategory[]>("http://localhost:8080/api/skCategorys");
  }
  //post
  SaveCategory(category: Icategory) {

    return this.http.post("http://localhost:8080/api/skCategorys", category);
  }
  //put
  UpdateCategory(category : Icategory) {
    console.log(category);
    return this.http.put("http://localhost:8080/api/skCategorys/" + category.id, category);
  }

  RemoveCategory(id: number) {
    return this.http.delete("http://localhost:8080/api/skCategorys/" + id);
  }
}
