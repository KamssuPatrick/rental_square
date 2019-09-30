import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, LoadingController } from 'ionic-angular';
import { ModifcationProduitPage } from '../modifcation-produit/modifcation-produit';
import { AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { firebaseConfig } from '../../config';

/**
 * Generated class for the VillaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-villa',
  templateUrl: 'villa.html',
})
export class VillaPage {

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad VillaPage');
  }

  getAllUsers(){ 
		let params={"titre" : "Villa","items":[]};
		let items=[];
		this.ref.on('value', function(snapshot) {
		  let i=0;
		  
		  let keyyy=[];
		  
		  keyyy= Object.keys(snapshot.val());
		  snapshot.forEach(function(data){
			console.log(i);
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
			  "image":"assets/images/gallery/brogan/villa3.jpg"
			};
			i++;
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

    this.ref =  firebase.database().ref("services/villa");
    this.params.data = this.getAllUsers();
    loader.present();

    }


}
