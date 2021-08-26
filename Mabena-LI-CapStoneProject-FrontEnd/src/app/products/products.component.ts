import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpConnectionService } from '../http-connection.service';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  listProducts: Array<Product> = [];
  cartItems =[];
  constructor(private _HttpConnectionService: HttpConnectionService, private _CartService:CartService, private _Router:Router) { 

  }
  ngOnInit(): void {
    this._HttpConnectionService.getProducts().subscribe((result)=>{
      console.log("result is "+ result.length)
      this.listProducts = result;
    },(error)=>
    {
      alert("Error encountered is "+ error);
    });
  }

  

  buyThisProduct(productItem)
  {
    this.cartItems = this._CartService.retrieveCartItemsFromLocalStorage();
    for (var i=0; i< this.cartItems.length;i++)
    {
      if(productItem.id ==this.cartItems[i].id)
      {
        alert("product is already in cart");
        return;
      }
    }

    this._CartService.addItemToCart(productItem);
    alert(productItem.name +" item added to the cart");
    this._Router.navigate(['/cart']);

  }

}
