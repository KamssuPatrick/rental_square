import { Component } from '@angular/core';
import { Tabs1Page } from '../tabs1/tabs1';
import { Tabs2Page } from '../tabs2/tabs2';
import { Tabs3Page } from '../tabs3/tabs3';
import { Tabs4Page } from '../tabs4/tabs4';
import { Tabs5Page } from '../tabs5/tabs5';
import { Tabs6Page } from '../tabs6/tabs6';

import { PageAccueilPage } from '../page-accueil/page-accueil';
import { ListeFavorisPage } from '../liste-favoris/liste-favoris';
import { MenuController, NavParams, AlertController, NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import { AdminPage } from '../admin/admin';
import { AuthProvider } from '../../providers/auth/auth';



@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  //Tabs1Page = Tabs1Page;
  //Tabs2Page = Tabs2Page;
  //Tabs3Page = Tabs3Page;
  //Tabs4Page = ListeFavorisPage;
  //Tabs5Page = Tabs5Page;
  //Tabs6Page = Tabs6Page;

  AccueilPage = PageAccueilPage;
  FavorisPage = ListeFavorisPage;
  MessagePage = Tabs3Page;
  Tabs5Page = Tabs5Page;

   user: any;
   email: any;

  constructor( public navParams: NavParams, public afAuth: AngularFireAuth,
    public menuCtrl: MenuController, private alertCtrl: AlertController,
    public navCtrl: NavController
  ) {

    window.localStorage.setItem('userid', firebase.auth().currentUser.uid);
    console.log('UserUid_tabs',firebase.auth().currentUser.uid)
   
    this.email = this.navParams.get('email');

    console.log( "patttttt", this.email);
    this.user = firebase.auth().currentUser;
    //console.log( "pat", this.user.email);

    if(this.email === 'p.arnold69@yahoo.fr')
    {
      this.presentConfirm();
    }

  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Type de connexion',
      message: 'Comment voulez-vous vous connecter ?',
      buttons: [
        {
          text: 'Administrateur',
          handler: () => {
            this.navCtrl.setRoot(AdminPage);
          }
        },
        {
          text: 'Client',
          handler: () => {
            this.menuCtrl.enable(false, 'myMenu');

            this.navCtrl.setRoot(TabsPage);
          }
        }
      ]
    });
    alert.present();
  }


  ionViewDidEnter() {
    this.menuCtrl.swipeEnable(false);

    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(false, 'menu1');
  }

  ionViewWillLeave() {
    // Don't forget to return the swipe to normal, otherwise 
    // the rest of the pages won't be able to swipe to open menu
    this.menuCtrl.swipeEnable(true);

    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(true, 'menu1');
   }

}
