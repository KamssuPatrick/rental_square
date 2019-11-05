import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  params: any = {};


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.params.data = {

      "username" : "Nom d'utilisateur",
      "prenom" : "Prenom d'utilisateur",
      "email" : "Email",
      "password" : "Mot de passe",
      "register" : "S'inscrire",
      "login"    : "Se Connecter",
      "societe" : "Société",
      "profession" : "Votre profession",
      "telephone": "Téléphone",
      "button" : "submit",
      "address" : "Address",
      "city"  : "City",
      "state" : "State",
      "country" : "Country",
      "iconEmail" : "icon-email-outline",
      "iconFlag" : "icon-flag-outline-variant",
      "iconAccountMultiple" : "icon-account-multiple",
      "iconHome" : "icon-home-variant",
      "logo"     : "assets/images/logo/logo_rental.jpg",
      "backgroundImage" : "assets/images/logo/logo_rental.jpg",
      "iconAccount" : "icon-key",
      "iconKey" : "",
      "iconLock" : "assets/images/background/20.jpg",
      "errorUser"           : "Le champ ne peut pas être vide.",
      "errorPassword"       : "Le champ ne peut pas être vide.",
      "errorEmail"          : "Adresse électronique invalide.",
      "errorCountry"        : "Le champ ne peut pas être vide.",
      "errorCity"           : "Le champ ne peut pas être vide."

    };

    this.params.events = {

      
      onRegister: function(params) {
        console.log('onRegister:' + JSON.stringify(params));
      },
      onSkip: function(params) {
        console.log('onSkip:' + JSON.stringify(params));
      },

    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
