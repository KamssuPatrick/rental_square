import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AjoutProduitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ajout-produit',
  templateUrl: 'ajout-produit.html',
})
export class AjoutProduitPage {

  file: File;

  myImages: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutProduitPage');
  }

  Ajout()
  {
    console.log("Ajouter click");
  }

  changeListener($event) : void {
    this.file = $event.target.files[0];
  }

  loadImageFromDevice(event) {
    const files = event.target.files;
    const blobReader = new FileReader();
    files.forEach(file => {
        blobReader.readAsArrayBuffer(file);
        blobReader.onload = () => {
            let blob: Blob = new Blob([new Uint8Array((blobReader.result as ArrayBuffer))]);
            let blobURL: string = URL.createObjectURL(blob);
            this.myImages.push(blobURL);
        };
        blobReader.onerror = (error) => {
            console.log(error);
        };
    })
  };

}
