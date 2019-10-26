import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//import { PayPalPayment, PayPalConfiguration, PayPalPaymentDetails } from '@ionic-native/paypal';
//import { PayPal } from '@ionic-native/paypal/ngx';

/**
 * Generated class for the PaypalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-paypal',
  templateUrl: 'paypal.html',
})
export class PaypalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    
  }

  paymentAmount: string = '15,21';
  currency: string = 'EURO';
  currencyIcon: string = '€'

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaypalPage');
  }

  payWithPaypal() {
    /*console.log("Pay ????");
    this.payPal.init({
      PayPalEnvironmentProduction: 'sb-hne6c345440@business.example.com',
      PayPalEnvironmentSandbox: 'Ae1RoewByHEeBbnly_-oW2TZ9FVXsu7Ya6l6EhSqM8ZDF_if34jzHzq57c8XTkvW0ZUBB_URlHAR-d2m'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({

        acceptCreditCards: true,
        languageOrLocale: 'pt-BR',
        merchantName: 'CanalDoAbranches',
        merchantPrivacyPolicyURL: '',
        merchantUserAgreementURL: ''
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        let detail = new PayPalPaymentDetails('19.99', '0.00', '0.00');
        let payment = new PayPalPayment('3.33', 'USD', 'CanalDoAbranches', 'Sale', detail);
        this.payPal.renderSinglePaymentUI(payment).then((response) => {
          // Successfully paid

          console.log('paiement effectué');
        }, () => {
          // Error or render dialog closed without being successful
          console.log('paiement erreur');
        });
      }, () => {
        // Error in configuration
        console.log('Erreur dans la configuration');
      });
    }, () => {
      // Error in initialization, maybe PayPal isn't supported or something else
    });*/
  }

}
