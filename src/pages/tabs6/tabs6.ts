import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Tabs3Page } from '../tabs3/tabs3';
import { AppartPage } from '../appart/appart';

/**
 * Generated class for the Tabs6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs6',
  templateUrl: 'tabs6.html',
})
export class Tabs6Page {

  
  params: any = {};
  img: any

  cards = [
    {
      id: 0,
      imageUrl: 'assets/img/appart1/1.jpg',
      title: 'Bonapriso/Douala',
      description: 'Appartement ultra-moderne 3 chambres ( meublé ) à louer à Bonapriso Haut Standing - Grandes pieces - Ascenseur - Groupe électrogène - Parking - Gardiens H24 - Cameras de surveillance -  Grand Jardin 💰 :  100mille  fcfa/jour',
      img : [
        "assets/img/appart1/1.jpg",
        "assets/img/appart1/2.jpg",
        "assets/img/appart1/3.jpg",
        "assets/img/appart1/4.jpg",
        "assets/img/appart1/14.jpg",
      ],
    },
    {
      id: 1,
      imageUrl: 'assets/img/appart3/12.jpg',
      title: 'Bonapriso/Douala',
      description: ' Duplex meublé 3 chambres, Bonapriso‬ ‪💰: à partir de 125.000 fcfa / jour‬ ‪➡ : Gardien - Jacuzzi - Wi-fi - Camera de surveillance ‬- Climatiseurs',
      img : [
        "assets/img/appart3/8.jpg",
        "assets/img/appart3/24.jpg",
        "assets/img/appart3/29.jpg",
        "assets/img/appart3/12.jpg",
        "assets/img/appart3/11.jpg",
      ],
    },
    {
      id: 2,
      imageUrl: 'assets/img/appart2/2.jpg',
      title: 'Bonapriso/Douala',
      description: 'Appartements ultra-modernes meublés (entièrement équipés) - 2chambres -  BONAPRISO 2 salles de bain + toilette visiteur Ascenseur - Groupe électrogène - Parking Camera de surveillance - wifi gratuit 💰 : 100mille fcfa / jour (minimum 2semaines) 📞 : 696042170',
      img : [
        "assets/img/appart2/1.jpg",
        "assets/img/appart2/3.jpg",
        "assets/img/appart2/4.jpg",
        "assets/img/appart2/9.jpg",
        "assets/img/appart2/11.jpg",
      ],
    }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.params = {
      "items" : [ {
        "groupName" : "Bonapriso",
        "items" : [ {
          "buy" : "SMS",
          "id" : 1,
          "img": [
            "assets/img/appart1/1.jpg",
            "assets/img/appart1/2.jpg",
            "assets/img/appart1/3.jpg",
            "assets/img/appart1/4.jpg",
            "assets/img/appart1/5.jpg",
          ],
          
          "price" : "100 000 XAF/jour",
          "subtitle" : "Free shipping",
          "title" : "3 chambres"
        } ]
      }, {
        "groupName" : "Bonapriso",
        "items" : [ {
          "buy" : "SMS",
          "id" : 2,
          "img": [
            "assets/img/appart2/1.jpg",
            "assets/img/appart2/2.jpg",
            "assets/img/appart2/3.jpg",
            "assets/img/appart2/4.jpg",
            "assets/img/appart2/5.jpg",
          ],
          
          "price" : "100 000 XAF/jour",
          "subtitle" : "Free shipping",
          "title" : "3 chambres"
        }, ]
      }, {
        "groupName" : "Bonapriso",
        "items" : [ {
          "buy" : "SMS",
          "id" : 3,
          "img": [
            "assets/img/appart3/1.jpg",
            "assets/img/appart3/2.jpg",
            "assets/img/appart3/3.jpg",
            "assets/img/appart3/4.jpg",
            "assets/img/appart3/5.jpg",
          ],
          
          "price" : "100 000 XAF/jour",
          "subtitle" : "Free shipping",
          "title" : "3 chambres"
        }]
      }, {
        "groupName" : "Bonapriso",
        "items" : [ {
          "buy" : "SMS",
          "id" : 4,
          "img": [
            "assets/img/appart1/1.jpg",
            "assets/img/appart1/2.jpg",
            "assets/img/appart1/3.jpg",
            "assets/img/appart1/4.jpg",
            "assets/img/appart1/5.jpg",
          ],
          
          "price" : "100 000 XAF/jour",
          "subtitle" : "Free shipping",
          "title" : "3 chambres"
        }]
      } ]
    }

    console.log("onItemClick", this.params);

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
    console.log('ionViewDidLoad Tabs6Page');
  }

  message()
  {
    this.navCtrl.push(Tabs3Page);
  }

  cardTapped(card) {
    //alert(card.id + ' was tapped.');

    this.navCtrl.push(AppartPage, {id: card.id});
  }

  share(card) {
    this.navCtrl.push(Tabs3Page);
  }

  listen(card) {
    alert('Listening to ' + card.id);
  }

  favorite(card) {
    alert(card.id + ' was favorited.');
  }

}
