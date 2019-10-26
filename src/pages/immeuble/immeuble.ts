import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, LoadingController } from 'ionic-angular';

import * as firebase from 'firebase/app';
/**
 * Generated class for the ImmeublePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-immeuble',
  templateUrl: 'immeuble.html',
})
export class ImmeublePage {

  params: any = {};
  ref: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {


    this.presentLoading();

    
    this.params.events = {
      'onItemClick': function (item: any) {
         console.log("items");
         //this.navCtrl.push(ModifcationProduitPage);
       },
      'onDelete': function (item: any) {
         console.log("Delete");
       },
      'onButtonClick': function (item: any) {
         console.log("Info");
       },
       'onModifierButton': function (item: any) {
          console.log("modifier");
          
        }
     };
  }


  getAllUsers(){ 
		let params={"titre" : "Immeuble","items":[]};
		let items=[];
		this.ref.on('value', function(snapshot) {
		  let i=0;
		  
      let keyyy=[];
      
      let link: any;
		  keyyy= Object.keys(snapshot.val());
		  snapshot.forEach(function(data){
        let propic:any;
		  
        let nn= firebase.database().ref(`files/immeuble/profile/${data.val().profilePic}`);
        nn.on('value',  function(idPP){
          propic=idPP;
          console.log("propic: ",propic.val().fullPath);
          let urli=propic.val().fullPath;
          var storage = firebase.storage();
          var pathReference = storage.ref();
          
          
          pathReference.child(urli).getDownloadURL().then(function(url) {
            link=url;

            params.items[i]={
              "uid": keyyy[i],
              "autre": data.val().autre,
              "avis": data.val().avis,
              "chambre": data.val().chambre,
              "cuisine": data.val().cuisine,
              "parking": data.val().parking,
              "prix": data.val().prix,
              "salon": data.val().salon,
              "surface": data.val().surface,
              "terrasse": data.val().terrasse,
              "toilette": data.val().toilette,
              "etage": data.val().etage,
              "image": link
            };
            console.log("ImgUrlqsdqsdqsdq",i);
			      i++;
            
          }).catch(function(error) {
            // Handle any errors
            console.log("error admin: ",error)
          });
        });

			
		  });
		  
		 
		});
		console.log("helllllllllooooooooooo",params)
	   return params;
		
    }
    
    presentLoading() {
      const loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 1000
      });

    this.ref =  firebase.database().ref("services/immeuble");
    this.params.data = this.getAllUsers();
    loader.present();

    }


}
