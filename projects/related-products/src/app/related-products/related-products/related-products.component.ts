import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.scss']
})
export class RelatedProductsComponent implements OnInit{
  @Input() productActive: any;
  products = [
    {
      id: 'rp1',
      productId: '1',
      active: false,
      relatedProducts: [
        {
          id: 'rp1-1',
          name: 'Tractor Porsche-Diesel Master 419 1',
          price: 6,
          image: '../assets/images/car1.1.jpg'
        },
        {
          id: 'rp1-2',
          name: 'Tractor Porsche-Diesel Master 419 2',
          price: 6,
          image: '../assets/images/car1.2.jpg'
        },
        {
          id: 'rp1-3',
          name: 'Tractor Porsche-Diesel Master 419 3',
          price: 6,
          image: '../assets/images/car1.3.jpg'
        },
      ]
    },
    {
      id: 'rp2',
      productId: '2',
      active: false,
      relatedProducts: [
        {
          id: 'rp2-1',
          name: 'Tractor Porsche-Diesel Master 419 1',
          price: 6,
          image: '../assets/images/car2.1.jpg'
        },
        {
          id: 'rp2-2',
          name: 'Tractor Porsche-Diesel Master 419 2',
          price: 6,
          image: '../assets/images/car2.2.jpg'
        },
        {
          id: 'rp2-3',
          name: 'Tractor Porsche-Diesel Master 419 3',
          price: 6,
          image: '../assets/images/car2.3.jpg'
        },
      ]
    },
    {
      id: 'rp3',
      productId: '3',
      active: false,
      relatedProducts: [
        {
          id: 'rp3-1',
          name: 'Tractor Porsche-Diesel Master 419 1',
          price: 6,
          image: '../assets/images/car3.1.jpg'
        },
        {
          id: 'rp3-2',
          name: 'Tractor Porsche-Diesel Master 419 2',
          price: 6,
          image: '../assets/images/car3.2.jpg'
        },
        {
          id: 'rp3-3',
          name: 'Tractor Porsche-Diesel Master 419 3',
          price: 6,
          image: '../assets/images/car3.3.jpg'
        },
      ]
    }
  ];

  relatedProducts: any;

  constructor() {

  }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    this.relatedProducts = this.products.find(p => (p.productId == this.productActive.id))?.relatedProducts;
  }
}
