import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the SpinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-spin',
  templateUrl: 'spin.html',
})
export class SpinPage {

  params: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.params.data =  {"icon": "tail-spin"};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpinPage');
  }

}
