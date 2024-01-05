import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'projects/shell/@core/services/storage.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  products = [
    {
      id: '1',
      name: 'Tractor Porsche-Diesel Master 419',
      price: 6,
      image: '../assets/images/car1.jpg',
      active: false,
      quantity: 1
    },
    {
      id: '2',
      name: 'Tractor Fendt F20 Dieselroß',
      price: 7,
      image: '../assets/images/car2.jpg',
      active: false,
      quantity: 1
    },
    {
      id: '3',
      name: 'Tractor Eicher Diesel 215/16',
      price: 8,
      image: '../assets/images/car3.jpg',
      active: false,
      quantity: 1
    }
  ];
  productActive: any;
  amount: any;

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    const basketProducts: any = this.localStorageService.getItem('BASKET') || [];
    this.amount = basketProducts.length;
    this.activeProduct(this.products[0]);
  }

  activeProduct(product: any) {
   this.products.forEach(p => {(p.id !== product.id) ? (p.active = false) : (p.active = true);})
   this.productActive = this.products.find(p => p.id == product.id);
  }

  addProduct(product: any) {
    const basketProducts: any = this.localStorageService.getItem('BASKET') || [];
    basketProducts.push({
      ...
      product
    })
    this.localStorageService.setItem("BASKET", basketProducts);
    this.amount = basketProducts.length;
  }
}
