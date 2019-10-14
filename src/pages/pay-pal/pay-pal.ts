
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from 'ionic-native';
import { Config } from '../../config';

/**
 * Generated class for the PayPalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pay-pal',
  templateUrl: 'pay-pal.html',
})
export class PayPalPage {

payment: PayPalPayment = new PayPalPayment('10.10', 'USD', 'TV', 'sale');
currencies = ['EUR', 'USD']

payPalEnvironment: string = 'payPalEnvironmentSandbox';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayPalPage');
  }

  makePayment() {
		PayPal.init({
			PayPalEnvironmentProduction: Config.payPalEnvironmentProduction,
			PayPalEnvironmentSandbox: Config.payPalEnvironmentSandbox
		}).then(() => {
			PayPal.prepareToRender(this.payPalEnvironment, new PayPalConfiguration({})).then(() => {
				PayPal.renderSinglePaymentUI(this.payment).then((response) => {
					alert(`Successfully paid. Status = ${response.response.state}`);
					console.log(response);
				}, () => {
					console.error('Error or render dialog closed without being successful');
				});
			}, () => {
				console.error('Error in configuration');
			});
		}, () => {
			console.error('Error in initialization, maybe PayPal isn\'t supported or something else');
		});
	}

}
