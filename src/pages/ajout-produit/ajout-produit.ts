import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { VillaPage } from '../villa/villa';

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

  avis: string;
  surface: string;
  etage
  salon
  toilette
  cuisine
  chambre
  parking
  terrasse
  autre
  prix

  myImages: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afData: AngularFireDatabase
    , public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutProduitPage');
  }

  Ajout()
  {
    

  let alert = this.alertCtrl.create({
    title: 'Confirm purchase',
    message: 'Voulez-vous vraiment Ajouter ce produit ?',
    buttons: [
      {
        text: 'Annuler',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Ajouter',
        handler: () => {

          this.afData.list("/services/villa").push({avis: this.avis, surface: this.surface, etage: this.etage, 
            salon: this.salon, toilette: this.toilette, cuisine: this.cuisine, chambre: this.chambre, parking: this.parking,
          terrasse: this.terrasse, autre: this.autre, prix: this.prix});

          this.navCtrl.setRoot(VillaPage);

        }
      }
    ]
  });
  alert.present();
}

getPicture(sourceType){
  const cameraOptions: CameraOptions = {
    quality: 50,
    destinationType: Camera.DestinationType.DATA_URL,
    encodingType: Camera.EncodingType.JPEG,
    mediaType: Camera.MediaType.PICTURE,
    sourceType: sourceType
  };

  Camera.getPicture(cameraOptions)
   .then((captureDataUrl) => {
     this.captureDataUrl = 'data:image/jpeg;base64,' + captureDataUrl;
  }, (err) => {
      console.log(err);
  });
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
