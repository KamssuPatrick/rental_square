import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, App } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the MonprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-monprofile',
  templateUrl: 'monprofile.html',
})
export class MonprofilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MonprofilePage');
  }

  deconnexion()
  {
    this.app.getRootNav().push(HomePage);
  }

}
