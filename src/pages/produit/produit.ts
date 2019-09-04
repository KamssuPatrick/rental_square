import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProduitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-produit',
  templateUrl: 'produit.html',
})
export class ProduitPage {

  params: any = {};
  
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.params.data = {
      "items" : [ {
        "button" : "$14.90",
        "description" : "Magnifique demeure de rêve située sur la côte à Minorque avec une vue panoramique et imprenable sur l’eau turquoise, voici comment on pourrait décrire en seulement quelques mots cette belle villa de luxe.",
        "id" : 1,
        "image" : "assets/images/gallery/brogan/villa1.jpg",
        "shareIcon" : "more",
        "subtitle" : "Family: Cactaceae",
        "ville" : "Douala",
        "meuble" : "Meublé",
        "prix" : "50 000/semaine",
        "superficie" : "400",
        "piece" : "5"
      }, {
        "button" : "$13.99",
        "description" : "Il en est tout autrement lorsqu’on la contourne et on tombe sur la somptueuse terrasse mais aussi sur la toute aussi magnifique piscine à débordement dont l’eau s’accorde parfaitement avec l’eau bleu de la mer.",
        "id" : 2,
        "image" : "assets/images/gallery/brogan/villa3.jpg",
        "shareIcon" : "more",
        "subtitle" : "Family: Cactaceae",
        "ville" : "Yaounde",
        "meuble" : " Non Meublé",
        "prix" : "70 000/semaine",
        "superficie" : "500",
        "piece" : "8"
      }, {
        "button" : "$35.05",
        "description" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
        "id" : 3,
        "image" : "assets/images/gallery/brogan/villa4.jpg",
        "shareIcon" : "more",
        "subtitle" : "Family: Cactaceae",
        "ville" : "Bamenda",
        "meuble" : "Non Meublé",
        "prix" : "40 000/semaine",
        "superficie" : "400",
        "piece" : "5"
      }, {
        "button" : "$33.99",
        "description" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
        "id" : 4,
        "image" : "assets/images/gallery/brogan/villa2.jpg",
        "shareIcon" : "more",
        "subtitle" : "Family: Cactaceae",
        "ville" : "Douala",
        "meuble" : "Meublé",
        "prix" : "50 000/semaine",
        "superficie" : "400",
        "piece" : "5"
      }, {
        "button" : "$10.60",
        "description" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
        "id" : 5,
        "image" : "assets/images/gallery/brogan/villa3.jpg",
        "shareIcon" : "more",
        "subtitle" : "Family: Cactaceae",
        "ville" : "Bafoussam",
        "meuble" : "Meublé",
        "prix" : "50 000/semaine",
        "superficie" : "400",
        "piece" : "5"
      } ]
    }

    this.params.events = {
      'onItemClick': function (item: any) {
         console.log("item");
         },
      'onShare': function (item: any) {
         console.log("Share");
         },
      'onButtonClick': function (item: any) {
         console.log("Refine");
         }
     };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProduitPage');
  }

}
