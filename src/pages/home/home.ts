import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  params: any = {};


  constructor(public navCtrl: NavController) {

    this.params.data = {

      "username" : "Nom d'utilisateur",
      "password" : "Mot de passe",
      "register" : "S'inscrire",
      "login"    : "Se Connecter",
      "passer"     : "Passer",
      "logo"     : "assets/images/logo/logo_rental.jpg",
      "backgroundImage" : "assets/images/logo/back_rental.jpg",
      "iconAccount" : "icon-key",
      "iconKey" : "",
      "iconLock" : "assets/images/background/20.jpg",
      "errorPassword"       : "Field can't be empty.",
      "errorEmail"          : "Invalid email address.",
      "errorUser"           : "Field can't be empty."

    };

    this.params.events = {

      onLogin: function(params) {
        console.log('onLogin:' + JSON.stringify(params));
      },
      onRegister: function(params) {
        console.log('onRegister:' + JSON.stringify(params));
      },
      onSkip: function(params) {
        console.log('onSkip:' + JSON.stringify(params));
      },
      onFaceBook: function(params) {
        console.log('onFaceBook:' + JSON.stringify(params));
      },
      onTwitter: function(params) {
        console.log('onTwitter:' + JSON.stringify(params));
      },
      onGoogle: function(params) {
        console.log('onGoogle:' + JSON.stringify(params));
      },
      onPinterest: function(params) {
        console.log('onPinterest:' + JSON.stringify(params));
      },

    };

  }

}
