import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpConnectionService } from '../http-connection.service';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-more-info',
  templateUrl: './product-more-info.component.html',
  styleUrls: ['./product-more-info.component.css']
})
export class ProductMoreInfoComponent implements OnInit {

  id: any;
  selectedProduct:Product;

  constructor(private _HttpConnectionService:HttpConnectionService, private _route: ActivatedRoute, private _CartService:CartService) { }

  ngOnInit(): void {
    this.id= this._route.snapshot.paramMap.get('id');
    console.log("Id is" + this.id);
    this._HttpConnectionService.getProductById(this.id).subscribe((result)=>
    {
      console.log("result is "+ result)
      this.selectedProduct =result;
    },(error)=>
    {
      console.log("error is " + error);
    });
  }


  buyThisProduct(selectedProduct)
  {
    this._CartService.addItemToCart(selectedProduct);
    
  }

}
