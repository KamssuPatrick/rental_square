import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  
  params: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.params.data = {
      "duration": 10000,
      "backgroundImage": 'assets/images/appart1/26.jpg',
      "logo": 'assets/images/logo/logo_rental.jpg',
      "title": "Patrick"
  };

  this.params.events = {
    "onRedirect": function () {
        navCtrl.push(HomePage);

        
    }
};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }



}
