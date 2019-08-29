import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {

  params: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.params.data = {
      "items": [
          {
              "id": 1,
              "title": "Brogan",
              "image": "assets/images/gallery/brogan/0.jpg",
              "items": [
                  {
                      "id": 1,
                      "image": "assets/images/gallery/brogan/14.jpg"
                  },
                  {
                      "id": 2,
                      "image": "assets/images/gallery/brogan/2.jpg"
                  },
                  {
                      "id": 3,
                      "image": "assets/images/gallery/brogan/6.jpg"
                  },
                  {
                      "id": 4,
                      "image": "assets/images/gallery/brogan/4.jpg"
                  },
                  {
                      "id": 5,
                      "image": "assets/images/gallery/brogan/15.jpg"
                  },
                  {
                      "id": 6,
                      "image": "assets/images/gallery/brogan/6.jpg"
                  },
                  {
                      "id": 7,
                      "image": "assets/images/gallery/brogan/7.jpg"
                  },
                  {
                      "id": 8,
                      "image": "assets/images/gallery/brogan/13.jpg"
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
                      "image": "assets/images/gallery/brogan/11.jpg"
                  },
                  {
                      "id": 12,
                      "image": "assets/images/gallery/brogan/12.jpg"
                  },
                  {
                      "id": 13,
                      "image": "assets/images/gallery/brogan/13.jpg"
                  },
                  {
                      "id": 14,
                      "image": "assets/images/gallery/brogan/7.jpg"
                  },
                  {
                      "id": 15,
                      "image": "assets/images/gallery/brogan/5.jpg"
                  },
                  {
                      "id": 16,
                      "image": "assets/images/gallery/brogan/16.jpg"
                  }
              ]
          },
          {
              "id": 2,
              "title": "Rehrersburg",
              "image": "assets/images/gallery/brogan/1.jpg",
              "items": [
                  {
                      "id": 1,
                      "image": "assets/images/gallery/brogan/2.jpg"
                  },
                  {
                      "id": 2,
                      "image": "assets/images/gallery/brogan/5.jpg"
                  },
                  {
                      "id": 3,
                      "image": "assets/images/gallery/brogan/6.jpg"
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
                      "image": "assets/images/gallery/brogan/3.jpg"
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
                      "image": "assets/images/gallery/brogan/11.jpg"
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
          },
          {
              "id": 3,
              "title": "Durham",
              "image": "assets/images/gallery/brogan/18.jpg",
              "items": [
                  {
                      "id": 1,
                      "image": "assets/images/gallery/brogan/7.jpg"
                  },
                  {
                      "id": 2,
                      "image": "assets/images/gallery/brogan/8.jpg"
                  },
                  {
                      "id": 3,
                      "image": "assets/images/gallery/brogan/9.jpg"
                  },
                  {
                      "id": 4,
                      "image": "assets/images/gallery/brogan/10.jpg"
                  },
                  {
                      "id": 5,
                      "image": "assets/images/gallery/brogan/11.jpg"
                  },
                  {
                      "id": 6,
                      "image": "assets/images/gallery/brogan/14.jpg"
                  },
                  {
                      "id": 7,
                      "image": "assets/images/gallery/brogan/3.jpg"
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
                      "image": "assets/images/gallery/brogan/11.jpg"
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
                      "image": "assets/images/gallery/brogan/19.jpg"
                  },
                  {
                      "id": 15,
                      "image": "assets/images/gallery/brogan/18.jpg"
                  }
              ]
          },
          {
              "id": 4,
              "title": "Callaghan",
              "image": "assets/images/gallery/brogan/20.jpg",
              "items": [
                  {
                      "id": 1,
                      "image": "assets/images/gallery/brogan/10.jpg"
                  },
                  {
                      "id": 2,
                      "image": "assets/images/gallery/brogan/11.jpg"
                  },
                  {
                      "id": 3,
                      "image": "assets/images/gallery/brogan/12.jpg"
                  },
                  {
                      "id": 4,
                      "image": "assets/images/gallery/brogan/13.jpg"
                  },
                  {
                      "id": 5,
                      "image": "assets/images/gallery/brogan/14.jpg"
                  },
                  {
                      "id": 6,
                      "image": "assets/images/gallery/brogan/15.jpg"
                  },
                  {
                      "id": 7,
                      "image": "assets/images/gallery/brogan/16.jpg"
                  },
                  {
                      "id": 8,
                      "image": "assets/images/gallery/brogan/17.jpg"
                  },
                  {
                      "id": 9,
                      "image": "assets/images/gallery/brogan/19.jpg"
                  },
                  {
                      "id": 10,
                      "image": "assets/images/gallery/brogan/18.jpg"
                  },
                  {
                      "id": 11,
                      "image": "assets/images/gallery/brogan/1.jpg"
                  },
                  {
                      "id": 12,
                      "image": "assets/images/gallery/brogan/3.jpg"
                  },
                  {
                      "id": 13,
                      "image": "assets/images/gallery/brogan/2.jpg"
                  },
                  {
                      "id": 14,
                      "image": "assets/images/gallery/brogan/4.jpg"
                  },
                  {
                      "id": 15,
                      "image": "assets/images/gallery/brogan/5.jpg"
                  }
              ]
          },
          {
              "id": 5,
              "title": "Manitou",
              "image": "assets/images/gallery/brogan/17.jpg",
              "items": [
                  {
                      "id": 1,
                      "image": "assets/images/gallery/brogan/1.jpg"
                  },
                  {
                      "id": 2,
                      "image": "assets/images/gallery/brogan/2.jpg"
                  },
                  {
                      "id": 3,
                      "image": "assets/images/gallery/brogan/12.jpg"
                  },
                  {
                      "id": 4,
                      "image": "assets/images/gallery/brogan/13.jpg"
                  },
                  {
                      "id": 5,
                      "image": "assets/images/gallery/brogan/16.jpg"
                  },
                  {
                      "id": 6,
                      "image": "assets/images/gallery/brogan/15.jpg"
                  },
                  {
                      "id": 7,
                      "image": "assets/images/gallery/brogan/20.jpg"
                  },
                  {
                      "id": 8,
                      "image": "assets/images/gallery/brogan/17.jpg"
                  },
                  {
                      "id": 9,
                      "image": "assets/images/gallery/brogan/19.jpg"
                  },
                  {
                      "id": 10,
                      "image": "assets/images/gallery/brogan/18.jpg"
                  },
                  {
                      "id": 11,
                      "image": "assets/images/gallery/brogan/10.jpg"
                  },
                  {
                      "id": 12,
                      "image": "assets/images/gallery/brogan/3.jpg"
                  },
                  {
                      "id": 13,
                      "image": "assets/images/gallery/brogan/2.jpg"
                  },
                  {
                      "id": 14,
                      "image": "assets/images/gallery/brogan/4.jpg"
                  },
                  {
                      "id": 15,
                      "image": "assets/images/gallery/brogan/5.jpg"
                  }
              ]
          },
          {
              "id": 6,
              "title": "Weedville",
              "image": "assets/images/gallery/brogan/3.jpg",
              "favorite": true,
              "items": [
                  {
                      "id": 1,
                      "image": "assets/images/gallery/brogan/20.jpg"
                  },
                  {
                      "id": 2,
                      "image": "assets/images/gallery/brogan/19.jpg"
                  },
                  {
                      "id": 3,
                      "image": "assets/images/gallery/brogan/12.jpg"
                  },
                  {
                      "id": 4,
                      "image": "assets/images/gallery/brogan/13.jpg"
                  },
                  {
                      "id": 5,
                      "image": "assets/images/gallery/brogan/16.jpg"
                  },
                  {
                      "id": 6,
                      "image": "assets/images/gallery/brogan/15.jpg"
                  },
                  {
                      "id": 7,
                      "image": "assets/images/gallery/brogan/5.jpg"
                  },
                  {
                      "id": 8,
                      "image": "assets/images/gallery/brogan/17.jpg"
                  },
                  {
                      "id": 9,
                      "image": "assets/images/gallery/brogan/19.jpg"
                  },
                  {
                      "id": 10,
                      "image": "assets/images/gallery/brogan/18.jpg"
                  },
                  {
                      "id": 11,
                      "image": "assets/images/gallery/brogan/10.jpg"
                  },
                  {
                      "id": 12,
                      "image": "assets/images/gallery/brogan/3.jpg"
                  },
                  {
                      "id": 13,
                      "image": "assets/images/gallery/brogan/2.jpg"
                  },
                  {
                      "id": 14,
                      "image": "assets/images/gallery/brogan/4.jpg"
                  },
                  {
                      "id": 15,
                      "image": "assets/images/gallery/brogan/5.jpg"
                  },
                  {
                      "id": 16,
                      "image": "assets/images/gallery/brogan/0.jpg"
                  },
                  {
                      "id": 17,
                      "image": "assets/images/gallery/brogan/1.jpg"
                  }
              ]
          },
          {
              "id": 7,
              "title": "Curtice",
              "image": "assets/images/gallery/brogan/1.jpg",
              "items": [
                  {
                      "id": 1,
                      "image": "assets/images/gallery/brogan/3.jpg"
                  },
                  {
                      "id": 2,
                      "image": "assets/images/gallery/brogan/5.jpg"
                  },
                  {
                      "id": 3,
                      "image": "assets/images/gallery/brogan/4.jpg"
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
          },
          {
              "id": 8,
              "title": "Barronett",
              "image": "assets/images/gallery/brogan/19.jpg",
              "items": [
                  {
                      "id": 1,
                      "image": "assets/images/gallery/brogan/1.jpg"
                  },
                  {
                      "id": 2,
                      "image": "assets/images/gallery/brogan/2.jpg"
                  },
                  {
                      "id": 3,
                      "image": "assets/images/gallery/brogan/12.jpg"
                  },
                  {
                      "id": 4,
                      "image": "assets/images/gallery/brogan/13.jpg"
                  },
                  {
                      "id": 5,
                      "image": "assets/images/gallery/brogan/16.jpg"
                  },
                  {
                      "id": 6,
                      "image": "assets/images/gallery/brogan/15.jpg"
                  },
                  {
                      "id": 7,
                      "image": "assets/images/gallery/brogan/20.jpg"
                  },
                  {
                      "id": 8,
                      "image": "assets/images/gallery/brogan/17.jpg"
                  },
                  {
                      "id": 9,
                      "image": "assets/images/gallery/brogan/19.jpg"
                  },
                  {
                      "id": 10,
                      "image": "assets/images/gallery/brogan/18.jpg"
                  },
                  {
                      "id": 11,
                      "image": "assets/images/gallery/brogan/10.jpg"
                  },
                  {
                      "id": 12,
                      "image": "assets/images/gallery/brogan/3.jpg"
                  },
                  {
                      "id": 13,
                      "image": "assets/images/gallery/brogan/2.jpg"
                  },
                  {
                      "id": 14,
                      "image": "assets/images/gallery/brogan/4.jpg"
                  },
                  {
                      "id": 15,
                      "image": "assets/images/gallery/brogan/5.jpg"
                  }
              ]
          }
      ]
  };

this.params.data.subGallery = "ItemDetailsPageSubImageGallery";
this.params.data.fullscreen = "ItemDetailsPageFullScreenGallery";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
  }

}
