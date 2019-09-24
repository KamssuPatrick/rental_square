import { Component } from '@angular/core';
import { Tabs1Page } from '../tabs1/tabs1';
import { Tabs2Page } from '../tabs2/tabs2';
import { Tabs3Page } from '../tabs3/tabs3';
import { Tabs4Page } from '../tabs4/tabs4';
import { MenuController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';



@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  Tabs1Page = Tabs1Page;
  Tabs2Page = Tabs2Page;
  Tabs3Page = Tabs3Page;
  Tabs4Page = Tabs4Page;

   user: any;

  constructor(public navParams: NavParams, public afAuth: AngularFireAuth,
    public menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false, 'myMenu');

    console.log( "patttttt", this.navParams.get('user'));
    this.user = firebase.auth().currentUser;
    console.log( "pat", this.user.email);

  }

}
