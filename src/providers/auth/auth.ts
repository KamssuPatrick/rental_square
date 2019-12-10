import { Injectable } from '@angular/core';

import { AngularFireAuth} from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Events } from 'ionic-angular';

import * as firebase from 'Firebase';

@Injectable()
export class AuthProvider {

  UserUid = window.localStorage.getItem('userid');

  AdminDetails;
  ProfileDetails;
  myDetails;

  allFav =[];
  allFav2 =[];

  constructor(public afAuth: AngularFireAuth, public afDB: AngularFireDatabase, public events: Events) {
    console.log(this.UserUid)
  }

  getFavoris(userId, type){

    console.log("tes " + type + userId);
    
    this.afDB.database.ref('Favoris').child(userId).child(type).on('value', snap =>{
      this.allFav = []
      //let keyyy=[];
      var res = snap.val()
     // keyyy= Object.keys(snap.val());
  
      for(var i in res){
        this.allFav.push(res[i]);
       // this.allFav2 = keyyy[i];

        //console.log("tes " + this.allFav2)
        
      }

      this.events.publish('favoris');

    })

  }



  getUserDetails(){
      var promise = new Promise((resolve, reject) =>{
        this.afDB.database.ref('users').child(this.UserUid).once('value', snap =>{
          var res = snap.val();
          resolve(res);
        }).catch((err)=>{
          reject(err);
        });       
      });
    return promise;
  }


  getMyDetails(){
    this.afDB.database.ref('users').child(this.UserUid).on('value', snap =>{
     this.myDetails;
     this.myDetails = snap.val();

     this.events.publish('myDetails');
           
  });
}


  getAdminDetails(){
    this.afDB.database.ref('users').child('QVbwfPEMT6hsoj7aWlytER7V94F2').on('value', snap =>{
     this.AdminDetails;
     this.AdminDetails = snap.val();

     this.events.publish('AdminDetails');
           
  });
}

getProfileDetails(userDetails){
  this.afDB.database.ref('users').child(userDetails.uid).on('value', snap =>{
   this.ProfileDetails;
   this.ProfileDetails = snap.val();

   this.events.publish('ProfileDetails');
         
});
}





 
}