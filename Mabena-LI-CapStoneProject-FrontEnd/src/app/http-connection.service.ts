import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './models/contact';
import { Product } from './models/product';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class HttpConnectionService {

  private Users: Array<User> = [];

  cartItems:Array<Product>=[];



  constructor(private _HttpClient: HttpClient) {
  }
  RegisterUser(user: User): Observable<User> {
    return this._HttpClient.post<User>('http://localhost:3000/users', user);
  }
  getAllUsers(): Observable<Array<User>> {
    return this._HttpClient.get<Array<User>>('http://localhost:3000/users');
  }
  addNewContactInfo(contact: Contact): Observable<Contact> {
    return this._HttpClient.post<Contact>('http://localhost:3000/contacts', contact)
  }
  getProducts(): Observable<Product[]> {
    return this._HttpClient.get<Product[]>('http://localhost:3000/products');
  }
  getProductsByCategory(strCategory: string): Observable<Product[]> {
    return this._HttpClient.get<Product[]>('http://localhost:3000/products/' + { strCategory });
  }
  addProduct(productObj: Product): Observable<Product> {
    return this._HttpClient.post<Product>('http://localhost:3000/products', productObj);
  }

  getProductById(id:number):Observable<Product>
  {
    return this._HttpClient.get<Product>(`http://localhost:3000/products/${id}`);
  }
  addToDatabase(productItem:Product):Observable<Product[]>
  {
    return this._HttpClient.get<Product[]>('http://localhost:3000/products');
  }
  addToCart(productItem)
  {
    this.cartItems.push(productItem);
    console.log("added new item to cart")
  }
}
