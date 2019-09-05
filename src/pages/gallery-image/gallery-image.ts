import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { ItemDetailsPageFullScreenGallery } from '../item-details-full-screen-gallery/item-details-full-screen-gallery';

/**
 * Generated class for the GalleryImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-gallery-image',
  templateUrl: 'gallery-image.html',
})
export class GalleryImagePage {

  params: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.params.data = {
      "items": [
          {
              "id": 1,
              "image": "assets/images/gallery/brogan/16.jpg"
          },
          {
              "id": 2,
              "image": "assets/images/gallery/brogan/15.jpg"
          },
          {
              "id": 3,
              "image": "assets/images/gallery/brogan/13.jpg"
          },
          {
              "id": 4,
              "image": "assets/images/gallery/brogan/7.jpg"
          },
          {
              "id": 5,
              "image": "assets/images/gallery/brogan/8.jpg"
          },
          {
              "id": 6,
              "image": "assets/images/gallery/brogan/14.jpg"
          },
          {
              "id": 7,
              "image": "assets/images/gallery/brogan/20.jpg"
          },
          {
              "id": 8,
              "image": "assets/images/gallery/brogan/4.jpg"
          },
          {
              "id": 9,
              "image": "assets/images/gallery/brogan/9.jpg"
          },
          {
              "id": 10,
              "image": "assets/images/gallery/brogan/10.jpg"
          },
          {
              "id": 11,
              "image": "assets/images/gallery/brogan/8.jpg"
          },
          {
              "id": 12,
              "image": "assets/images/gallery/brogan/12.jpg"
          },
          {
              "id": 13,
              "image": "assets/images/gallery/brogan/2.jpg"
          },
          {
              "id": 14,
              "image": "assets/images/gallery/brogan/9.jpg"
          },
          {
              "id": 15,
              "image": "assets/images/gallery/brogan/15.jpg"
          },
          {
              "id": 16,
              "image": "assets/images/gallery/brogan/0.jpg"
          }
      ]
  };

this.params.data.fullscreen = ItemDetailsPageFullScreenGallery;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryImagePage');
  }

}