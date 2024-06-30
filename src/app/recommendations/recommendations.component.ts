import { Component } from '@angular/core';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent {
  // Definir un arreglo de productos de ejemplo
  products = [
    { name: 'Product 1', code: 'Code1', price: 'Price1', imageUrl: 'assets/Categorias/1.jpg' },
    { name: 'Product 2', code: 'Code2', price: 'Price2', imageUrl: 'assets/Categorias/2.jpg' },
    { name: 'Product 3', code: 'Code3', price: 'Price3', imageUrl: 'assets/Categorias/3.jpg' },
    { name: 'Product 4', code: 'Code4', price: 'Price4', imageUrl: 'assets/Categorias/4.jpg' },
    { name: 'Product 5', code: 'Code5', price: 'Price5', imageUrl: 'assets/Categorias/5.jpg' },
    { name: 'Product 6', code: 'Code6', price: 'Price6', imageUrl: 'assets/Categorias/6.jpg' },
    { name: 'Product 7', code: 'Code7', price: 'Price7', imageUrl: 'assets/Categorias/7.jpg' },
    { name: 'Product 8', code: 'Code8', price: 'Price8', imageUrl: 'assets/Categorias/8.jpg' },
    { name: 'Product 9', code: 'Code9', price: 'Price9', imageUrl: 'assets/Categorias/9.jpg' }
  ];

  constructor() {}
}
