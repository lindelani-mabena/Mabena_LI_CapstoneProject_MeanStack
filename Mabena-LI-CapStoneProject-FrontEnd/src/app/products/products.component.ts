import { Component, OnInit } from '@angular/core';
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
  constructor(private _HttpConnectionService: HttpConnectionService, private _CartService:CartService) { 

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
    this._CartService.addItemToCart(productItem);
  }

}
