import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = []; //  almacenar la matriz de los productos actuales en el carrito.

  addToCart(product){ // El addToCart()método agrega un producto a una matriz de items.
    this.items.push(product);
  }

  getItems(){ // El getItems()método recopila los artículos que los usuarios agregan al carrito y devuelve cada artículo con su cantidad asociada.
    return this.items;
  }

  clearCart(){ // El clearCart()método devuelve una matriz vacía de elementos.
    this.items = [];
    return this.items;
  }

constructor() { }

}
