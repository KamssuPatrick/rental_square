import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SpinnerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-spinner',
  templateUrl: 'spinner.html',
})
export class SpinnerPage {

  params: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.params.data =  {"icon": "three-dots"};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpinnerPage');
  }

}
