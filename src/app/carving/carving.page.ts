import { Component, OnInit} from '@angular/core'; 
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CarvingService } from '../_services/carving.service';
import { CarvingsService } from '../services/carvings.service';
import { CviewPage } from '../cview/cview.page'
@Component({
  selector: 'app-carving',
  templateUrl: 'carving.page.html',
  styleUrls: ['carving.page.scss'],

})
export class CarvingPage implements OnInit{

  carvings: any = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  constructor(private carvingService: CarvingService,
    private carvingsService: CarvingsService,
     private modalCtrl: ModalController) {}



  ngOnInit(){
    this.products = this.carvingService.getProducts();
    this.carvings = this.carvingService.getCart();
    this.cartItemCount = this.carvingService.getCartItemCount();

  }

  addToCart(product) {
    this.carvingService.addProduct(product);
    console.log('product added:'+product.name);
    
  }

  async openCart() {

    const modal = await this.modalCtrl.create({
      component: CviewPage,
      cssClass: 'light-modal'
    });
    modal.onWillDismiss().then(() => {
  
    });
    modal.present();
  }
  
  ionViewDidEnter() {
    this.carvingsService.getCarvings().subscribe((response) => {
      this.carvings = response;
    })
  }

}

