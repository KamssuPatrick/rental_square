import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProduitVentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-produit-vente',
  templateUrl: 'produit-vente.html',
})
export class ProduitVentePage {

  params: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.params.data = {
      "items" : [ {
        "groupName" : "Shirts",
        "items" : [ {
          "buy" : "buy",
          "id" : 1,
          "image1" : "assets/images/background/19.jpg",
          "image2" : "assets/images/background/15.jpg",
          "image3" : "assets/images/background/16.jpg",
          "image4" : "assets/images/background/17.jpg",
          "image5" : "assets/images/background/18.jpg",
          "price" : "$33.99",
          "subtitle" : "Free shipping",
          "title" : "Trendy White Shirt"
        }, {
          "buy" : "buy",
          "id" : 2,
          "image1" : "assets/images/background/18.jpg",
          "image2" : "assets/images/background/17.jpg",
          "image3" : "assets/images/background/16.jpg",
          "image4" : "assets/images/background/15.jpg",
          "image5" : "assets/images/background/19.jpg",
          "price" : "$28.17",
          "subtitle" : "Free shipping",
          "title" : "Trendy Black Shirt"
        } ]
      }, {
        "groupName" : "Shoes",
        "items" : [ {
          "buy" : "buy",
          "id" : 1,
          "image1" : "assets/images/background/16.jpg",
          "image2" : "assets/images/background/18.jpg",
          "image3" : "assets/images/background/19.jpg",
          "image4" : "assets/images/background/15.jpg",
          "image5" : "assets/images/background/17.jpg",
          "price" : "$31.99",
          "subtitle" : "Free shipping",
          "title" : "Trendy White Shoes"
        }, {
          "buy" : "buy",
          "id" : 2,
          "image1" : "assets/images/background/17.jpg",
          "image2" : "assets/images/background/18.jpg",
          "image3" : "assets/images/background/16.jpg",
          "image4" : "assets/images/background/15.jpg",
          "image5" : "assets/images/background/19.jpg",
          "price" : "$25.69",
          "subtitle" : "Free shipping",
          "title" : "Black Shoes"
        }, {
          "buy" : "buy",
          "id" : 3,
          "image1" : "assets/images/background/16.jpg",
          "image2" : "assets/images/background/17.jpg",
          "image3" : "assets/images/background/18.jpg",
          "image4" : "assets/images/background/19.jpg",
          "image5" : "assets/images/background/15.jpg",
          "price" : "$13.66",
          "subtitle" : "Free shipping",
          "title" : "Trendy Shoes"
        } ]
      }, {
        "groupName" : "Jacket",
        "items" : [ {
          "buy" : "buy",
          "id" : 1,
          "image1" : "assets/images/background/19.jpg",
          "image2" : "assets/images/background/18.jpg",
          "image3" : "assets/images/background/17.jpg",
          "image4" : "assets/images/background/16.jpg",
          "image5" : "assets/images/background/15.jpg",
          "price" : "$17.89",
          "subtitle" : "Free shipping",
          "title" : "Trendy White Jacket"
        }, {
          "buy" : "buy",
          "id" : 2,
          "image1" : "assets/images/background/15.jpg",
          "image2" : "assets/images/background/16.jpg",
          "image3" : "assets/images/background/17.jpg",
          "image4" : "assets/images/background/18.jpg",
          "image5" : "assets/images/background/19.jpg",
          "price" : "$55.01",
          "subtitle" : "Free shipping",
          "title" : "Trendy Black Jacket"
        }, {
          "buy" : "buy",
          "id" : 3,
          "image1" : "assets/images/background/16.jpg",
          "image2" : "assets/images/background/17.jpg",
          "image3" : "assets/images/background/18.jpg",
          "image4" : "assets/images/background/19.jpg",
          "image5" : "assets/images/background/15.jpg",
          "price" : "$14.45",
          "subtitle" : "Free shipping",
          "title" : "Brown Jacket"
        } ]
      }, {
        "groupName" : "T-Shirt",
        "items" : [ {
          "buy" : "buy",
          "id" : 1,
          "image1" : "assets/images/background/19.jpg",
          "image2" : "assets/images/background/15.jpg",
          "image3" : "assets/images/background/16.jpg",
          "image4" : "assets/images/background/17.jpg",
          "image5" : "assets/images/background/18.jpg",
          "price" : "$17.99",
          "subtitle" : "Free shipping",
          "title" : "Trendy White T-Shirt"
        }, {
          "buy" : "buy",
          "id" : 2,
          "image1" : "assets/images/background/18.jpg",
          "image2" : "assets/images/background/17.jpg",
          "image3" : "assets/images/background/16.jpg",
          "image4" : "assets/images/background/15.jpg",
          "image5" : "assets/images/background/19.jpg",
          "price" : "$44.99",
          "subtitle" : "Free shipping",
          "title" : "Black T-Shirt"
        } ]
      } ]
    }

    this.params.events = {
      'onItemClick': function (item: any) {
          console.log("onItemClick");
      },
      'onBuy': function (item: any) {
          console.log("Buy");
      }
  };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProduitVentePage');
  }

}
