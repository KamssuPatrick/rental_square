import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IFramePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-i-frame',
  templateUrl: 'i-frame.html',
})
export class IFramePage {

  iframeURL

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.iframeURL = "https://rentalsquare2.000webhostapp.com/test/test/resiedence_soppo.html";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IFramePage');
  }

}
