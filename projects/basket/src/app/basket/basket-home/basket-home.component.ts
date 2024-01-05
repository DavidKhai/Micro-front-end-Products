import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'projects/shell/@core/services/storage.service';

@Component({
  selector: 'app-basket-home',
  templateUrl: './basket-home.component.html',
  styleUrls: ['./basket-home.component.scss']
})
export class BasketHomeComponent implements OnInit{
  basket: any;

  constructor(
    private localStorageService: LocalStorageService
    ) {

  }

  ngOnInit(): void {
    this.basket = this.localStorageService.getItem('BASKET') || [];
    this.groupBasket(this.basket);
  }

  groupBasket(basket: any){
    const groupedData = basket.reduce((acc: any, item: any) => {
      const existingItem = acc.find((i: any) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        acc.push({
          ...item,
          quantity: 1
        });
      }

      return acc;
    }, []);

    this.basket = groupedData;
  }
}
