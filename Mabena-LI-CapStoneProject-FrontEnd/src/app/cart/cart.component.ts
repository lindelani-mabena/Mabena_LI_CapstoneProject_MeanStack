import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productItems = [];
  constructor(private _CartService:CartService) { }

  ngOnInit(): void {
  this.productItems= this._CartService.retrieveCartItemsFromLocalStorage();
  alert("cart items" + this.productItems);
  console.log(this.productItems);


  }

}
