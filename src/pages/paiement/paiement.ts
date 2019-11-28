import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { PaypalPage } from '../paypal/paypal';
import { FarotyPage } from '../faroty/faroty';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaiementPage');
  }

  paypal()
  {
    this.navCtrl.push(PaypalPage);
  }

  faroty()
  {
    const alert =  this.alertCtrl.create({
      title: 'Choisisez un operateur',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Orange Money',
          value: 'om',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Mtn Mobile Money',
          value: 'momo'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (data) => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {

            this.navCtrl.push(FarotyPage, {type: data});
          }
        }
      ]
    });

     alert.present();
  }

}
