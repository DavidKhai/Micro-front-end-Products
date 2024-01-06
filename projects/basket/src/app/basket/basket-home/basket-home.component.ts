import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cloneDeep } from 'lodash';
import { LocalStorageService } from 'projects/shell/@core/services/storage.service';

@Component({
  selector: 'app-basket-home',
  templateUrl: './basket-home.component.html',
  styleUrls: ['./basket-home.component.scss'],
})
export class BasketHomeComponent implements OnInit {
  basketStore: any;
  basketUI: any;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.basketStore = this.localStorageService.getItem('BASKET') || [];
    this.checkQuantity();
    this.basketUI = this.basketStore;
    this.groupBasket(this.basketUI);
  }

  groupBasket(basketUI: any) {
    let results = {} as any;
    basketUI.forEach((acc: any, index: number) => {
      const uniqueKey = JSON.stringify(acc);

      if (!results[uniqueKey]) {
        results[uniqueKey] = {
          ...cloneDeep(acc),
          quantity: 0,
          oldIndex: [],
        };
      }

      results[uniqueKey].quantity += 1;
      results[uniqueKey].oldIndex.push(index);
    });

    this.basketUI = Object.values(results);
  }

  increase(i: number) {
    this.basketUI[i].quantity += 1;
    const item = {
      ...this.basketUI[i],
      oldIndex: undefined,
      quantity: 1,
    };
    this.basketStore.push(item);

    this.localStorageService.setItem('BASKET', this.basketStore);
    this.groupBasket(this.basketStore);
  }

  decrease(i: number) {
    const oldIndex = this.basketUI[i].oldIndex;
    const indexToRemove = oldIndex[oldIndex.length - 1];
    this.basketUI[i].quantity -= 1;
    this.basketStore.splice(indexToRemove, 1);

    this.localStorageService.setItem('BASKET', this.basketStore);
    this.groupBasket(this.basketStore);
    this.checkQuantity();
  }

  total() {
    const total = this.basketStore.reduce(
      (total: number, item: any) => total + item.price * item.quantity,
      0
    );
    return total || 0;
  }

  remove(i: number) {
    const indicesToRemove = this.basketUI[i].oldIndex;
    indicesToRemove.sort((a: any, b: any) => b - a);
    this.basketUI.splice(i, 1);
    indicesToRemove.forEach((index: any) => this.basketStore.splice(index, 1));
    this.localStorageService.setItem('BASKET', this.basketStore);
    this.groupBasket(this.basketStore);
    this.checkQuantity();
  }

  checkQuantity() {
    const sl = this.basketStore?.length;
    if (sl == 0) {
      this.router.navigateByUrl('/');
    }
  }
}
