import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { VillaPage } from '../villa/villa';

/**
 * Generated class for the ModifcationProduitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modifcation-produit',
  templateUrl: 'modifcation-produit.html',
})
export class ModifcationProduitPage {

  value:any;

  avis: string;
  surface: string;
  etage
  salon
  toilette
  cuisine
  chambre
  parking
  terrasse
  autre
  prix
  uid

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public afData: AngularFireDatabase) {

    this.value = navParams.get('item');

    console.log('pat', this.value);
  }

  modifier(uid)
  {
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: 'Voulez-vous vraiment Ajouter ce produit ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked' + this.avis);
          }
        },
        {
          text: 'Modifier',
          handler: () => {
  
            this.afData.object("/services/villa/" + uid).set({avis: this.avis, surface: this.surface, etage: this.etage, 
              salon: this.salon, toilette: this.toilette, cuisine: this.cuisine, chambre: this.chambre, parking: this.parking,
            terrasse: this.terrasse, autre: this.autre, prix: this.prix});
  
            this.navCtrl.setRoot(VillaPage);
  
          }
        }
      ]
    });
    alert.present();
  }

}
