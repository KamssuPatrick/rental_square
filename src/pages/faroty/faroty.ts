import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FarotyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-faroty',
  templateUrl: 'faroty.html',
})
export class FarotyPage {

  type

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.type = navParams.get('type');
    console.log(this.type);
  }

  

  payWithfaroty()
  {

  }

}
