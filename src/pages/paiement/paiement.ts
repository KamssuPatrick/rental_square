import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaypalPage } from '../paypal/paypal';

/**
 * Generated class for the PaiementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-paiement',
  templateUrl: 'paiement.html',
})
export class PaiementPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaiementPage');
  }

  paypal()
  {
    this.navCtrl.push(PaypalPage);
  }

}
