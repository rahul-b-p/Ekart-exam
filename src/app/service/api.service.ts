import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  cartCount = new BehaviorSubject(0)

  constructor(private http:HttpClient) {}

  serverUrl:any= 'http://localhost:3000'


  allProductsApi(){
    return this.http.get('https://fakestoreapi.com/products')
  }

  addToCartApi(reqBody:any) {
    return this.http.post(`${this.serverUrl}/cart-items`,reqBody)  
  }

  CartItemsApi(){
    return this.http.get(`${this.serverUrl}/cart-items`)
  }

  getCarCountApi() {
    this.CartItemsApi().subscribe((res:any)=>{
      this.cartCount.next(res.length)
    })
  }
}
