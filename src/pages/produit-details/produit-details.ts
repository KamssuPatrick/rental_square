import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, AlertController } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { GalleryImagePage } from '../gallery-image/gallery-image';

/**
 * Generated class for the ProduitDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-produit-details',
  templateUrl: 'produit-details.html',
})
export class ProduitDetailsPage {

  params: any = {};
  ref:any;
  value2 : any;
  value : any;
  links: any;
  img: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {


    this.value = navParams.get('item');
    this.img = navParams.get('image');
    this.ref= firebase.database().ref("services/villa/"+ this.value);

    this.params.data = this.getAllUsers();
    this.value2=this.params.data;
    console.log("jkkjdkfjkdjfdfh",this.img);
    

    this.params.events = {
      'onShare': function (item: any) {
          console.log("onShare");
      },
      'onItemClick': function (item: any) {
          console.log("onItemClick");
      }
  };

  }


  getAllUsers(){ 
    let params={};
    this.ref.on('value', function(snapshot) {
      let i=0;
      
      let keyyy=[];
		  let link: any;
		  keyyy= Object.keys(snapshot.val());
		  
        let propic:any;
        let nn= firebase.database().ref(`files/villa/profile/${snapshot.val().profilePic}`);
        nn.on('value', async function(idPP){
          propic=idPP;
          console.log("propicss: ",propic.val().fullPath);
          let urli=propic.val().fullPath;
          var storage = firebase.storage();
          var pathReference = storage.ref();
          //console.log("urli: ",urli);

          pathReference.child(urli).getDownloadURL().then(function(url) {
            link=url;

            console.log("urliss: ",snapshot.val().autre);
           
  
          }).catch(function(error) {
            // Handle any errors
            console.log("error admin: ",error)
          });
        });

        
        
      
      
      
        console.log(snapshot.val());
        
        params={
          "autre": snapshot.val().autre,
          "avis": snapshot.val().avis,
          "chambre":snapshot.val().chambre,
          "cuisine":snapshot.val().cuisine,
          "etage": snapshot.val().etage,
          "parking": snapshot.val().parking,
          "prix": snapshot.val().prix,
          "profilePic": snapshot.val().profilePic,
          "salon": snapshot.val().salon,
          "surface": snapshot.val().surface,
          "terrasse": snapshot.val().terrasse,
          "toilette": snapshot.val().toilette,
          "uid": snapshot.val().uid
        };
       
      
     
    });
    //console.log("helllllllllooooooooooo",params)
   return params;
    
  }

  onGalleryClick(){
    this.navCtrl.push(GalleryImagePage);
  }

}
