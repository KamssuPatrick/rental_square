import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import * as firebase from 'firebase/app';


/**
 * Generated class for the UtilisateurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-utilisateur',
  templateUrl: 'utilisateur.html',
})
export class UtilisateurPage {

  params: any = {};
  value : any;
  Keys: any;
  ref:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {


    this.ref =  firebase.database().ref("users");
    this.params.data = this.getAllUsers();

    this.value = navParams.get('item');

    this.params.events = {
      'onItemClick': function(item: any) {
          //console.log("onItemClick" + this.data.items.title);
          
      },
      'onFavorite': function(item) {
          item.favorite = !item.favorite;
          console.log("onFavorite");
      }
  };


  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad UtilisateurPage');
  }

  getAllUsers(){ 
    let params={"items":[]};
    let items=[];
    this.ref.on('value', function(snapshot) {
      let i=0;
      
      let keyyy=[];
      
      keyyy= Object.keys(snapshot.val());
      snapshot.forEach(function(data){
        console.log(i);
        params.items[i]={
          "uid": keyyy[i],
          "username": data.val().username,
          "prenom": data.val().prenom,
          "image":"assets/images/avatar/user1.png"
        };
        i++;
      });
      
     
    });
    console.log("helllllllllooooooooooo",params)
   return params;
    
  }

}
