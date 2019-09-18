import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the BureauPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-bureau',
  templateUrl: 'bureau.html',
})
export class BureauPage {

  params: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.params.data = {
      "header" : "Bureau",
      "items" : [ {
        "delate" : "Supprimer",
        "id" : 1,
        "image" : "assets/images/gallery/brogan/bureau.jpg",
        "ionBadge" : "Modifier",
        "subtitle" : "Lorem ipsum dolor sit amet, consectetur",
        "title" : "Grant Marshall"
      }, {
        "delate" : "Supprimer",
        "id" : 2,
        "image" : "assets/images/gallery/brogan/bureau.jpg",
        "ionBadge" : "Modifier",
        "subtitle" : "Lorem ipsum dolor sit amet, consectetur",
        "title" : "Pena Valdez"
      }, {
        "delate" : "Supprimer",
        "id" : 3,
        "image" : "assets/images/gallery/brogan/bureau.jpg",
        "ionBadge" : "Modifier",
        "subtitle" : "Lorem ipsum dolor sit amet, consectetur",
        "title" : "Jessica Miles"
      }, {
        "delate" : "Supprimer",
        "id" : 4,
        "image" : "assets/images/gallery/brogan/bureau.jpg",
        "ionBadge" : "Modifier",
        "subtitle" : "Lorem ipsum dolor sit amet, consectetur",
        "title" : "Kerri Barber"
      }, {
        "delate" : "Supprimer",
        "id" : 5,
        "image" : "assets/images/gallery/brogan/bureau.jpg",
        "ionBadge" : "Modifier",
        "subtitle" : "Lorem ipsum dolor sit amet, consectetur",
        "title" : "Natasha Gamble"
      }]
    }
    
    this.params.events = {
      'onItemClick': function (item: any) {
         console.log("items");
         //this.navCtrl.push(ModifcationProduitPage);
       },
      'onDelete': function (item: any) {
         console.log("Delete");
       },
      'onButtonClick': function (item: any) {
         console.log("Info");
       },
       'onModifierButton': function (item: any) {
          console.log("modifier");
          
        }
     };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BureauPage');
  }

}
