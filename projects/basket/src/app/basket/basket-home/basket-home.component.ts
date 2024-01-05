import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';
import { LocalStorageService } from 'projects/shell/@core/services/storage.service';

@Component({
  selector: 'app-basket-home',
  templateUrl: './basket-home.component.html',
  styleUrls: ['./basket-home.component.scss']
})
export class BasketHomeComponent implements OnInit{
  basketStore: any;
  basketUI: any;

  constructor(
    private localStorageService: LocalStorageService
    ) {

  }

  ngOnInit(): void {
    this.basketStore = this.localStorageService.getItem('BASKET') || [];
    console.log('basketStore', this.basketStore);

    this.basketUI = this.basketStore;
    this.groupBasket(this.basketUI);
  }

  groupBasket(basketUI: any){
    let results = {} as any;
    basketUI.forEach((acc: any, index: number) => {
      const uniqueKey =JSON.stringify(acc);

      if (!results[uniqueKey]) {
        results[uniqueKey] = {
          ...cloneDeep(acc),
          quantity: 0,
          oldIndex: [],
        }
      }

      results[uniqueKey].quantity += 1;
      results[uniqueKey].oldIndex.push(index);
    });

    this.basketUI = Object.values(results);
    console.log('basketUI', this.basketUI);

  }

  increase(i: number) {
    this.basketUI[i].quantity += 1;
    const item = {
      ...this.basketUI[i],
      oldIndex: undefined,
      quantity: 1,
    }
    this.basketStore.push(item);

    this.localStorageService.setItem('BASKET', this.basketStore);
    this.groupBasket(this.basketStore);
  }

  decrease(i: number){
    const oldIndex =  this.basketUI[i].oldIndex;
    const indexToRemove = oldIndex[oldIndex.length - 1];
    this.basketUI[i].quantity -= 1;
    this.basketStore.splice(indexToRemove, 1);

    this.localStorageService.setItem('BASKET', this.basketStore);
    this.groupBasket(this.basketStore);
  }

  total() {
    const total = this.basketStore.reduce((total: number, item: any) => total + item.price * item.quantity, 0);
    return total || 0;
  }
}
