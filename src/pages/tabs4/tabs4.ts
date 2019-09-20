import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the Tabs4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs4',
  templateUrl: 'tabs4.html',
})
export class Tabs4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs4Page');
  }

  deconnexion()

  {
    this.app.getRootNav().push(HomePage);
  }

}
