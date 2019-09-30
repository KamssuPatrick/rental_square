import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { VillaPage } from '../villa/villa';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera';
import * as firebase from 'firebase/app';
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
  imageURI:any;
  imageFileName:any;  
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
    , public alertCtrl: AlertController,private transfer: FileTransfer,
    private camera: Camera, public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {
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

  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
    this.uploadImage(this.imageURI);
  }

  uploadFile() {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();
  
    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    }
  
    fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
      .then((data) => {
      console.log(data+" Uploaded Successfully");
      this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
      loader.dismiss();
      this.presentToast("Image uploaded successfully");
    }, (err) => {
      console.log(err);
      loader.dismiss();
      this.presentToast(err);
    });
  }



  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  uploadImage(imageURI){
    return new Promise<any>((resolve, reject) => {
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child('image').child('imageName');
      this.encodeImageUri(imageURI, function(image64){
        imageRef.putString(image64, 'data_url')
        .then(snapshot => {
          resolve(snapshot.downloadURL)
        }, err => {
          reject(err);
          console.log(err);
        })
      })
    })
  }

  encodeImageUri(imageUri, callback) {
    var c = document.createElement('canvas');
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function () {
      var aux:any = this;
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img, 0, 0);
      var dataURL = c.toDataURL("image/jpeg");
      callback(dataURL);
    };
    img.src = imageUri;
  };

}
