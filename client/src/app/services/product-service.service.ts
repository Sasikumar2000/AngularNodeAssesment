import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) {
    console.log("Coming from service");
   }

   //get
  GetProduct(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>("http://localhost:8080/api/skProducts");
  }
  //post
  SaveProduct(product: Iproduct) {

    return this.http.post("http://localhost:8080/api/skProducts", product);
  }
  //put
  UpdateProduct(product : Iproduct) {
    console.log(product);
    return this.http.put("http://localhost:8080/api/skProducts/" + product.id, product);
  }

  RemoveProduct(id: number) {
    return this.http.delete("http://localhost:8080/api/skProducts/" + id);
  }

}
