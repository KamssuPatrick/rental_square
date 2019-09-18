import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the UtilisateurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-utilisateur',
  templateUrl: 'utilisateur.html',
})
export class UtilisateurPage {

  params: any = {};
  value : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.params.data = {
      "items" : [ {
        "favorite" : true,
        "id" : 1,
        "image" : "assets/images/avatar/user1.png",
        "title" : "Isaac Raid"
      }, {
        "favorite" : false,
        "id" : 2,
        "image" : "assets/images/avatar/user1.png",
        "title" : "Jason Graham"
      }, {
        "favorite" : true,
        "id" : 3,
        "image" : "assets/images/avatar/user1.png",
        "title" : "Abigail Ross"
      }, {
        "favorite" : false,
        "id" : 4,
        "image" : "assets/images/avatar/user1.png",
        "title" : "Justin Rutherford"
      }, {
        "favorite" : false,
        "id" : 5,
        "image" : "assets/images/avatar/user1.png",
        "title" : "Nicholas Henderson"
      }, {
        "favorite" : true,
        "id" : 6,
        "image" : "assets/images/avatar/user1.png",
        "title" : "Elizabeth Mackenzie"
      }, {
        "favorite" : false,
        "id" : 7,
        "image" : "assets/images/avatar/user1.png",
        "title" : "Melanie Ferguson"
      }, {
        "favorite" : true,
        "id" : 8,
        "image" : "assets/images/avatar/user1.png",
        "title" : "Fiona Kelly"
      }, {
        "favorite" : true,
        "id" : 9,
        "image" : "assets/images/avatar/user1.png",
        "title" : "Nicholas King"
      }, {
        "favorite" : true,
        "id" : 10,
        "image" : "assets/images/avatar/user1.png",
        "title" : "Victoria Mitchell"
      }, {
        "favorite" : false,
        "id" : 11,
        "image" : "assets/images/avatar/user1.png",
        "title" : "Sophie Lyman"
      }, {
        "favorite" : false,
        "id" : 12,
        "image" : "assets/images/avatar/user1.png",
        "title" : "Carl Ince"
      }, {
        "favorite" : false,
        "id" : 13,
        "image" : "assets/images/avatar/user1.png",
        "title" : "Michelle Slater"
      }, {
        "favorite" : false,
        "id" : 14,
        "image" : "assets/images/avatar/user1.png",
        "title" : "Ryan Mathis"
      }, {
        "favorite" : false,
        "id" : 15,
        "image" : "assets/images/avatar/user1.png",
        "title" : "Julia Grant"
      }, {
        "favorite" : false,
        "id" : 16,
        "image" : "assets/images/avatar/user1.png",
        "title" : "Hannah Martin"
      } ]
    }

    this.value = navParams.get('item');

    this.params.events = {
      'onItemClick': function(item: any) {
          //console.log("onItemClick" + this.data.items.title);
          
      },
      'onFavorite': function(item) {
          item.favorite = !item.favorite;
          console.log("onFavorite");
      }
  };


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UtilisateurPage');
  }

}
