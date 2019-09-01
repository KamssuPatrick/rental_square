import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProduitDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-produit-details',
  templateUrl: 'produit-details.html',
})
export class ProduitDetailsPage {

  params: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {


    this.params.data = {
      "headerImage" : "assets/images/gallery/brogan/villa1.jpg",
      "headerTitle" : "",
      "items" : [ {
        "button" : "$63.99",
        "category" : "NEW OFFER",
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "id" : 1,
        "productDescriptions" : [ {
          "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "id" : 1
        }, {
          "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          "id" : 2
        }, {
          "description" : "passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum",
          "id" : 3
        }, {
          "description" : "passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum",
          "id" : 4
        } ],
        "subtitle" : "Available Now",
        "title" : "Super & Black"
      } ],
      "shareIcon" : "heart"
    }

    this.params.events = {
      'onShare': function (item: any) {
          console.log("onShare");
      },
      'onItemClick': function (item: any) {
          console.log("onItemClick");
      }
  };

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProduitDetailsPage');
  }

}
