import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { VillaPage } from '../villa/villa';
import { AppartementNmPage } from '../appartement-nm/appartement-nm';
import { AppartementMPage } from '../appartement-m/appartement-m';
import { ImmeublePage } from '../immeuble/immeuble';
import { BureauPage } from '../bureau/bureau';
import { MagasinPage } from '../magasin/magasin';
import { BailPage } from '../bail/bail';
//import { Camera, CameraOptions } from 'ionic-native';

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
  value : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afData: AngularFireDatabase
    , public alertCtrl: AlertController) {

      this.value = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutProduitPage');
  }

  Ajout()
  {

    if(this.value == "Villa")
    {
      let alert = this.alertCtrl.create({
        title: 'Confirm purchase',
        message: 'Voulez-vous vraiment Ajouter ce produit ?',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked' + this.prix);
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

    if(this.value == "AppartsNM")
    {
      let alert = this.alertCtrl.create({
        title: 'Confirm purchase',
        message: 'Voulez-vous vraiment Ajouter ce produit ?',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked' + this.prix);
            }
          },
          {
            text: 'Ajouter',
            handler: () => {
    
              this.afData.list("/services/appt_non_meuble").push({avis: this.avis, surface: this.surface, etage: this.etage, 
                salon: this.salon, toilette: this.toilette, cuisine: this.cuisine, chambre: this.chambre, parking: this.parking,
              terrasse: this.terrasse, autre: this.autre, prix: this.prix});
    
              this.navCtrl.setRoot(AppartementNmPage);
    
            }
          }
        ]
      });
      alert.present();
    }

    if(this.value == "AppartsM")
    {
      let alert = this.alertCtrl.create({
        title: 'Confirm purchase',
        message: 'Voulez-vous vraiment Ajouter ce produit ?',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked' + this.prix);
            }
          },
          {
            text: 'Ajouter',
            handler: () => {
    
              this.afData.list("/services/appt_meuble").push({avis: this.avis, surface: this.surface, etage: this.etage, 
                salon: this.salon, toilette: this.toilette, cuisine: this.cuisine, chambre: this.chambre, parking: this.parking,
              terrasse: this.terrasse, autre: this.autre, prix: this.prix});
    
              this.navCtrl.setRoot(AppartementMPage);
    
            }
          }
        ]
      });
      alert.present();
    }

    if(this.value == "Immeuble")
    {
      let alert = this.alertCtrl.create({
        title: 'Confirm purchase',
        message: 'Voulez-vous vraiment Ajouter ce produit ?',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked' + this.prix);
            }
          },
          {
            text: 'Ajouter',
            handler: () => {
    
              this.afData.list("/services/immeuble").push({avis: this.avis, surface: this.surface, etage: this.etage, 
                salon: this.salon, toilette: this.toilette, cuisine: this.cuisine, chambre: this.chambre, parking: this.parking,
              terrasse: this.terrasse, autre: this.autre, prix: this.prix});
    
              this.navCtrl.setRoot(ImmeublePage);
    
            }
          }
        ]
      });
      alert.present();
    }

    if(this.value == "Bureau")
    {
      let alert = this.alertCtrl.create({
        title: 'Confirm purchase',
        message: 'Voulez-vous vraiment Ajouter ce produit ?',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked' + this.prix);
            }
          },
          {
            text: 'Ajouter',
            handler: () => {
    
              this.afData.list("/services/bureau").push({avis: this.avis, surface: this.surface, etage: this.etage, 
                salon: this.salon, toilette: this.toilette, cuisine: this.cuisine, chambre: this.chambre, parking: this.parking,
              terrasse: this.terrasse, autre: this.autre, prix: this.prix});
    
              this.navCtrl.setRoot(BureauPage);
    
            }
          }
        ]
      });
      alert.present();
    }

    if(this.value == "Magasin")
    {
      let alert = this.alertCtrl.create({
        title: 'Confirm purchase',
        message: 'Voulez-vous vraiment Ajouter ce produit ?',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked' + this.prix);
            }
          },
          {
            text: 'Ajouter',
            handler: () => {
    
              this.afData.list("/services/magasin").push({avis: this.avis, surface: this.surface, etage: this.etage, 
                salon: this.salon, toilette: this.toilette, cuisine: this.cuisine, chambre: this.chambre, parking: this.parking,
              terrasse: this.terrasse, autre: this.autre, prix: this.prix});
    
              this.navCtrl.setRoot(MagasinPage);
    
            }
          }
        ]
      });
      alert.present();
    }

    if(this.value == "Bail")
    {
      let alert = this.alertCtrl.create({
        title: 'Confirm purchase',
        message: 'Voulez-vous vraiment Ajouter ce produit ?',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked' + this.prix);
            }
          },
          {
            text: 'Ajouter',
            handler: () => {
    
              this.afData.list("/services/bail").push({avis: this.avis, surface: this.surface, etage: this.etage, 
                salon: this.salon, toilette: this.toilette, cuisine: this.cuisine, chambre: this.chambre, parking: this.parking,
              terrasse: this.terrasse, autre: this.autre, prix: this.prix});
    
              this.navCtrl.setRoot(BailPage);
    
            }
          }
        ]
      });
      alert.present();
    }

  
}

/*getPicture(sourceType){
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
}  */
  

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
