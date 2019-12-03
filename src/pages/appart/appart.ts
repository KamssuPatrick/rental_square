import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GalleryImagePage } from '../gallery-image/gallery-image';
import { IFramePage } from '../i-frame/i-frame';

/**
 * Generated class for the AppartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-appart',
  templateUrl: 'appart.html',
})
export class AppartPage {

  value: any;
  img: any;
  chambre:any;
  cuisine: any;
  salon : any;
  douche: any;


  parking: any;
  camera: any;
  jardin: any;
  prix : any;
  gardien: any;
  jacuzzi: any;
  wifi: any;
  groupe: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.value = navParams.get('id');

    if (this.value == 0)
    {
      this.img = "assets/img/appart1/1.jpg";
      this.chambre = 3;
      this.cuisine = 1;
      this.salon = 1;
      this.douche = 2;
      this.jacuzzi = "Non";
      this.wifi = "Non";

      this.parking = "1";
      this.camera = "Oui";
      this.jardin = "Grand jardin";
      this.prix = "100 000";
      this.groupe = "Non";

  
      
      this.gardien = 1;
    }

    if(this.value == 1)
    {
      this.img = "assets/img/appart3/12.jpg";
      this.chambre = 3;
      this.cuisine = 1;
      this.salon = 1;
      this.douche = 2;

      this.parking = "0";
      this.camera = "Oui";
      this.jardin = "Grand jardin";
      this.prix = "125 000";
      
      this.jacuzzi = "1";
      this.wifi = "Oui";
      
      this.gardien = 1;
      this.groupe = "Non";

    }
    if(this.value == 2)
    {
      this.img = "assets/img/appart2/2.jpg";
      this.chambre = 2;
      this.cuisine = 1;
      this.salon = 1;
      this.douche = 2;

      this.parking = "1";
      this.camera = "Oui";
      this.jardin = "Grand jardin";
      this.prix = "100 000";
      
      this.jacuzzi = "1";
      this.wifi = "Oui";
      
      this.gardien = 1;
      this.groupe = "Oui";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppartPage');
  }

  openGallery(value)
  {
    
    this.navCtrl.push(GalleryImagePage, {value: value});
  }

  visiteGuide(){
    this.navCtrl.push(IFramePage);
   }

}
