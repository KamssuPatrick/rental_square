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
  value: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.value = navParams.get('value');

    if (this.value == 0)
    {
        this.params.data = {
            "items": [
                {
                    "id": 1,
                    "image": "assets/img/appart1/1.jpg"
                },
                {
                    "id": 2,
                    "image": "assets/img/appart1/2.jpg"
                },
                {
                    "id": 3,
                    "image": "assets/img/appart1/3.jpg"
                },
                {
                    "id": 4,
                    "image": "assets/img/appart1/4.jpg"
                },
                {
                    "id": 5,
                    "image": "assets/img/appart1/5.jpg"
                },
                {
                    "id": 6,
                    "image": "assets/img/appart1/6.jpg"
                },
                {
                    "id": 7,
                    "image": "assets/img/appart1/7.jpg"
                },
                {
                    "id": 8,
                    "image": "assets/img/appart1/8.jpg"
                },
                {
                    "id": 9,
                    "image": "assets/img/appart1/9.jpg"
                },
                {
                    "id": 10,
                    "image": "assets/img/appart1/10.jpg"
                },
                {
                    "id": 11,
                    "image": "assets/img/appart1/11.jpg"
                },
                {
                    "id": 12,
                    "image": "assets/img/appart1/12.jpg"
                },
                {
                    "id": 13,
                    "image": "assets/img/appart1/13.jpg"
                },
                {
                    "id": 14,
                    "image": "assets/img/appart1/14.jpg"
                },
                {
                    "id": 15,
                    "image": "assets/img/appart1/15.jpg"
                },
                {
                    "id": 16,
                    "image": "assets/img/appart1/16.jpg"
                },
                {
                    "id": 17,
                    "image": "assets/img/appart1/17.jpg"
                },
                {
                    "id": 18,
                    "image": "assets/img/appart1/18.jpg"
                },
                {
                    "id": 19,
                    "image": "assets/img/appart1/19.jpg"
                },
                {
                    "id": 20,
                    "image": "assets/img/appart1/20.jpg"
                },
                {
                    "id": 21,
                    "image": "assets/img/appart1/21.jpg"
                },
                {
                    "id": 22,
                    "image": "assets/img/appart1/22.jpg"
                },
                {
                    "id": 23,
                    "image": "assets/img/appart1/23.jpg"
                },
                {
                    "id": 24,
                    "image": "assets/img/appart1/24.jpg"
                },
                {
                    "id": 25,
                    "image": "assets/img/appart1/25.jpg"
                },
                {
                    "id": 26,
                    "image": "assets/img/appart1/26.jpg"
                }
            ]
        };
    }


    if (this.value == 1)
    {
        this.params.data = {
            "items": [
                {
                    "id": 1,
                    "image": "assets/img/appart3/1.jpg"
                },
                {
                    "id": 2,
                    "image": "assets/img/appart3/2.jpg"
                },
                {
                    "id": 3,
                    "image": "assets/img/appart3/3.jpg"
                },
                {
                    "id": 4,
                    "image": "assets/img/appart3/4.jpg"
                },
                {
                    "id": 5,
                    "image": "assets/img/appart3/5.jpg"
                },
                {
                    "id": 6,
                    "image": "assets/img/appart3/6.jpg"
                },
                {
                    "id": 7,
                    "image": "assets/img/appart3/7.jpg"
                },
                {
                    "id": 8,
                    "image": "assets/img/appart3/8.jpg"
                },
                {
                    "id": 9,
                    "image": "assets/img/appart3/9.jpg"
                },
                {
                    "id": 10,
                    "image": "assets/img/appart3/10.jpg"
                },
                {
                    "id": 11,
                    "image": "assets/img/appart3/11.jpg"
                },
                {
                    "id": 12,
                    "image": "assets/img/appart3/12.jpg"
                },
                {
                    "id": 13,
                    "image": "assets/img/appart3/13.jpg"
                },
                {
                    "id": 14,
                    "image": "assets/img/appart3/14.jpg"
                },
                {
                    "id": 15,
                    "image": "assets/img/appart3/15.jpg"
                },
                {
                    "id": 16,
                    "image": "assets/img/appart3/16.jpg"
                },
                {
                    "id": 17,
                    "image": "assets/img/appart3/17.jpg"
                },
                {
                    "id": 18,
                    "image": "assets/img/appart3/18.jpg"
                },
                {
                    "id": 19,
                    "image": "assets/img/appart3/19.jpg"
                },
                {
                    "id": 20,
                    "image": "assets/img/appart3/20.jpg"
                },
                {
                    "id": 21,
                    "image": "assets/img/appart3/21.jpg"
                },
                {
                    "id": 22,
                    "image": "assets/img/appart3/22.jpg"
                },
                {
                    "id": 23,
                    "image": "assets/img/appart3/23.jpg"
                },
                {
                    "id": 24,
                    "image": "assets/img/appart3/24.jpg"
                },
                {
                    "id": 25,
                    "image": "assets/img/appart3/25.jpg"
                },
                {
                    "id": 26,
                    "image": "assets/img/appart3/26.jpg"
                },
                {
                    "id": 27,
                    "image": "assets/img/appart3/27.jpg"
                },
                {
                    "id": 28,
                    "image": "assets/img/appart3/28.jpg"
                },
                {
                    "id": 29,
                    "image": "assets/img/appart3/29.jpg"
                },
                {
                    "id": 30,
                    "image": "assets/img/appart3/30.jpg"
                },
                {
                    "id": 31,
                    "image": "assets/img/appart3/31.jpg"
                },
                {
                    "id": 32,
                    "image": "assets/img/appart3/32.jpg"
                },
                {
                    "id": 33,
                    "image": "assets/img/appart3/33.jpg"
                }
            ]
        };
    }

    if (this.value == 2)
    {
        this.params.data = {
            "items": [
                {
                    "id": 1,
                    "image": "assets/img/appart2/1.jpg"
                },
                {
                    "id": 2,
                    "image": "assets/img/appart2/2.jpg"
                },
                {
                    "id": 3,
                    "image": "assets/img/appart2/3.jpg"
                },
                {
                    "id": 4,
                    "image": "assets/img/appart2/4.jpg"
                },
                {
                    "id": 5,
                    "image": "assets/img/appart2/5.jpg"
                },
                {
                    "id": 6,
                    "image": "assets/img/appart2/6.jpg"
                },
                {
                    "id": 7,
                    "image": "assets/img/appart2/7.jpg"
                },
                {
                    "id": 8,
                    "image": "assets/img/appart2/8.jpg"
                },
                {
                    "id": 9,
                    "image": "assets/img/appart2/9.jpg"
                },
                {
                    "id": 10,
                    "image": "assets/img/appart2/10.jpg"
                },
                {
                    "id": 11,
                    "image": "assets/img/appart2/11.jpg"
                }
            ]
        };
    }

    

this.params.data.fullscreen = ItemDetailsPageFullScreenGallery;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryImagePage');
  }

}
