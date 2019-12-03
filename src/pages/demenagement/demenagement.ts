import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Tabs4Page } from '../tabs4/tabs4';
import * as firebase from 'firebase/app';
import { AuthService } from '../../services/auth.service';

/**
 * Generated class for the DemenagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-demenagement',
  templateUrl: 'demenagement.html',
})
export class DemenagementPage {

  clientAdresse: string;
  dateAmenagement: string;
  etage
  distance
  destinationAdresse
  telephone
  heureAmenagement
  myDate
  nbrepiece
  user
  

  myImages: Array<string>;
  value : any;

  

  constructor(public navCtrl: NavController, public navParams: NavParams, public afData: AngularFireDatabase
    , public alertCtrl: AlertController,
    public auth: AuthService, public toastController: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DemenagementPage');
  }

  Ajout()
  {


    this.user = firebase.auth().currentUser.email;
    this.myDate = new Date().toISOString();
      let alert = this.alertCtrl.create({
        title: 'Confirm purchase',
        message: 'Voulez-vous vraiment envoyer cette demande ?',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked' + this.user);
            }
          },
          {
            text: 'Envoyer',
            handler: () => {
    
              this.afData.list("/demenagement").push({clientAdresse: this.clientAdresse, dateAmenagement: this.dateAmenagement, etage: this.etage, 
                distance: this.distance, destinationAdresse: this.destinationAdresse, telephone: this.telephone, heureAmenagement: this.heureAmenagement, myDate: this.myDate,
                nbrepiece: this.nbrepiece, user: this.user});
    
              this.navCtrl.setRoot(Tabs4Page);
    
            }
          }
        ]
      });
     alert.present();
    
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Votre demande a été effectuée avec succès.',
      duration: 2000
    });
    toast.present();
  }

}
