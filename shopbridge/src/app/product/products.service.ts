import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  // products
  getproducts():Observable<Products[]>{
    var url ='https://ecom-shopbridge.herokuapp.com/product/list';
    return this.http.get<Products[]>(url)
  }
  findone(productId:any){
    var url ='https://ecom-shopbridge.herokuapp.com/product/view?productId=';
    return this.http.get(url +productId)
  }
  // post
  addproduct(body:any){
    var Url = "https://ecom-shopbridge.herokuapp.com/product/addproduct" ;
    return this.http.post(Url,body)
  }

  update(body):Observable<any>{
    var url ='https://ecom-shopbridge.herokuapp.com/product/update';
    return this.http.put(url,body)
  }
  // delete
  deleleproduct(productId:any){
    const Url = "https://ecom-shopbridge.herokuapp.com/product/delete?productId=";
    return this.http.delete(Url +productId)
  }
}
