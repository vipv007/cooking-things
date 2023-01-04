import { Injectable } from '@angular/core';
//import { OurRicecol } from '../models/cart.model';
import { BehaviorSubject } from 'rxjs';
import { productCrudService } from './../service/product-crud.service';

@Injectable({
  providedIn: 'root'
})
export class Cart1Service {

 
 
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);


  constructor() { }

  getOurRicecols(){
   // return this.data;
  }

  getCart(){
    return this.cart;
  }

  getCartItemCount(): BehaviorSubject<number> {
		return this.cartItemCount;
	}

  addOurRicecol(OurRicecol) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === OurRicecol.id) {
        p.qty += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      OurRicecol.qty = 1;
      this.cart.push(OurRicecol);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseOurRicecol(OurRicecol) {
    for (const [index, item] of this.cart.entries()) {
			if (item.id === OurRicecol.id) {
				item.qty -= 1;
				if (item.qty === 0) {
					this.cart.splice(index, 1);
				}
			}
		}
		this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeOurRicecol(OurRicecol) {
    for (const [index, item] of this.cart.entries()) {
			if (item.id === OurRicecol.id) {
				this.cartItemCount.next(this.cartItemCount.value - item.qty);
				this.cart.splice(index, 1);
			}
		}
  }
}
