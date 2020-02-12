import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

import { CartService } from '../cart.service'; // Import cart para manejar

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  addToCart(product){
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  product;

  constructor( // Se inyecta los servicios para poder activar
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
  });

  }
}
