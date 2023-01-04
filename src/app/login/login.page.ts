import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
declare var SMSReceive: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  OTP: string = '';
  showOTPInput: boolean = false;
  OTPmessage: string = 'An OTP is sent to your number. You should receive it in 15 s'


  constructor(private toastCtrl: ToastController) { }
  async presentToast(message, show_button, position, duration) {
    const toast = await this.toastCtrl.create({
      message: message,
      //showCloseButton: show_button,
      position: position,
      duration: duration
    });
    toast.present();
  }

  next() {
    this.showOTPInput = true;
    this.start();
  }

  start() {
    SMSReceive.startWatch(
      () => {
        document.addEventListener('onSMSArrive', (e: any) => {
          var IncomingSMS = e.data;
          this.processSMS(IncomingSMS);
        });
      },
      () => { console.log('watch start failed') }
    )
  }

  stop() {
    SMSReceive.stopWatch(
      () => { console.log('watch stopped') },
      () => { console.log('watch stop failed') }
    )
  }

  processSMS(data) {
    // Check SMS for a specific string sequence to identify it is you SMS
    // Design your SMS in a way so you can identify the OTP quickly i.e. first 6 letters
    // In this case, I am keeping the first 6 letters as OTP
    const message = data.body;
    if (message && message.indexOf('enappd_starters') != -1) {
      this.OTP = data.body.slice(0, 6);
      this.OTPmessage = 'OTP received. Proceed to register'
      this.stop();
    }
  }

  register() {
    if (this.OTP != '') {
      this.presentToast('You are successfully registered', false, 'top', 1500);
    } else {
      this.presentToast('Your OTP is not valid', false, 'bottom', 1500);
    }
  }
}


