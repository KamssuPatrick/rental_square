import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the Tabs2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs2',
  templateUrl: 'tabs2.html',
})
export class Tabs2Page {

  params: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.params.data = {
      "items" : [ {
        "delate" : "Delete",
        "id" : 1,
        "image" : "assets/images/background/4.jpg",
        "subtitle" : "Monday, 15th Oct. 2017",
        "title" : "Appartements"
      }, {
        "delate" : "Delete",
        "id" : 2,
        "image" : "assets/images/background/0.jpg",
        "subtitle" : "Thursday, 20th Feb. 2017",
        "title" : "Villa"
      }, {
        "delate" : "Delete",
        "id" : 3,
        "image" : "assets/images/background/3.jpg",
        "subtitle" : "Friday, 10th Aug. 2017",
        "title" : "Immeuble"
      }, {
        "delate" : "Delete",
        "id" : 4,
        "image" : "assets/images/background/5.jpg",
        "subtitle" : "Wednesday, 17th May 2016",
        "title" : "Fonds de commerce"
      } ]
    }

    this.params.events = {
      'onItemClick': function (item: any) {
         console.log("item");
       },
      'onDelete': function (item: any) {
         console.log("Delete");
       },
      'onButtonClick': function (item: any) {
         console.log("Sign In");
       }
     };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs2Page');
  }

}
