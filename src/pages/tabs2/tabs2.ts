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
      "items": [
          {
              "id": 1,
              "title": "Appartements",
              "image": "assets/img/gallery/brogan/villa1.jpg",
              "items": [
                  {
                      "id": 1,
                      "image": "assets/img/gallery/brogan/villa2.jpg"
                  },
                  {
                      "id": 2,
                      "image": "assets/img/gallery/brogan/villa3.jpg"
                  },
                  {
                      "id": 3,
                      "image": "assets/img/gallery/brogan/villa4.jpg"
                  },
                  {
                      "id": 4,
                      "image": "assets/img/gallery/brogan/villa1.jpg"
                  }
              ]
          },
          {
              "id": 2,
              "title": "Villa",
              "image": "assets/img/gallery/brogan/appart1.jpg",
              "items": [
                  {
                      "id": 1,
                      "image": "assets/img/gallery/brogan/appart1.jpg"
                  },
                  {
                      "id": 2,
                      "image": "assets/img/gallery/brogan/appart2.jpg"
                  },
                  {
                      "id": 3,
                      "image": "assets/img/gallery/brogan/appart3.jpg"
                  }
              ]
          },
          {
              "id": 4,
              "title": "Immeuble",
              "image": "assets/img/gallery/brogan/20.jpg",
              "items": [
                  {
                      "id": 1,
                      "image": "assets/img/gallery/brogan/10.jpg"
                  },
                  {
                      "id": 2,
                      "image": "assets/img/gallery/brogan/11.jpg"
                  },
                  {
                      "id": 3,
                      "image": "assets/img/gallery/brogan/12.jpg"
                  },
                  {
                      "id": 4,
                      "image": "assets/img/gallery/brogan/13.jpg"
                  },
                  {
                      "id": 5,
                      "image": "assets/img/gallery/brogan/14.jpg"
                  },
                  {
                      "id": 6,
                      "image": "assets/img/gallery/brogan/15.jpg"
                  }
              ]
          },
          {
              "id": 5,
              "title": "Fonds de commerce",
              "image": "assets/img/gallery/brogan/17.jpg",
              "items": [
                  {
                      "id": 1,
                      "image": "assets/img/gallery/brogan/1.jpg"
                  },
                  {
                      "id": 2,
                      "image": "assets/img/gallery/brogan/2.jpg"
                  },
                  {
                      "id": 3,
                      "image": "assets/img/gallery/brogan/12.jpg"
                  }
              ]
          }
      ]
  };

this.params.data.subGallery = "ItemDetailsPageSubImageGallery";
this.params.data.fullscreen = "ItemDetailsPageFullScreenGallery";

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
