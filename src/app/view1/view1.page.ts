import { Cart2Service } from '../serve/cart2.service';

//import { OurRicecol } from '../models/cart.model';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view1.page.html',
  styleUrls: ['./view1.page.scss'],
})
export class View1Page implements OnInit {

 // cart: OurRicecol[] = [];
 
  constructor(private cart2Service: Cart2Service,
              
              private modalCtrl: ModalController, 
              
              private router: Router) { }
 
  ngOnInit() {
   // this.cart = this.cart2Service.getCart();
  }
 
  decreaseCartItem(OurRicecol) {
    this.cart2Service.decreaseOurRicecol(OurRicecol);
  }
 
  increaseCartItem(OurRicecol) {
    this.cart2Service.addOurRicecol(OurRicecol);
  }
 
  removeCartItem(OurRicecol) {
    this.cart2Service.removeOurRicecol(OurRicecol);
  }
 
  getTotal() {
   // return this.cart.reduce((i, j) => i + j.price * j.qty, 0);
  }
 
  close() {
    this.modalCtrl.dismiss();
  }

  carddetails() {
    this.close();
    this.router.navigate(['/payments']);
  }
 
}
