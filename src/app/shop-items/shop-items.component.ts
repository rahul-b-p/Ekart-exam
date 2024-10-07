import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-shop-items',
  templateUrl: './shop-items.component.html',
  styleUrls: ['./shop-items.component.css']
})
export class ShopItemsComponent implements OnInit {

  allProduct:any =[]

  constructor (private api:ApiService) {}


  getAllProducts() {
    this.api.allProductsApi().subscribe({
      next:(res:any)=>{
        // console.log(res);
        this.allProduct=res
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }

  addToCart(reqBody:any) {
    this.api.addToCartApi(reqBody).subscribe({
      next:(res:any)=>{
        // console.log(res);
        alert('Item Added in Cart')
      },
      error:(err:any)=>{
        // console.log(err);
        alert('Something went wrong')
      }
    })
  }

  ngOnInit(): void {
    this.getAllProducts()
  }

  
}
