import { Injectable } from '@angular/core';

import { AngularFireAuth} from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Events } from 'ionic-angular';

import * as firebase from 'Firebase';



@Injectable()
export class ChatProvider {

  UserUid = window.localStorage.getItem('userid');

  userDetails;

  allMessages = [];
  

  constructor(public afAuth: AngularFireAuth, public afDB: AngularFireDatabase, public events: Events) {
    console.log(this.UserUid)
  }

  initialize(user){
    this.userDetails = user;
  }

  getMessages(userDetails){
    this.afDB.database.ref('Chat').child(this.UserUid).child(userDetails.uid).on('value', snap =>{
      this.allMessages = [];
      var res = snap.val();
      for(var i in res){
        this.allMessages.push(res[i]);
      }
 
      this.events.publish('messages');
    });
  }

  getMessagesA(){
    this.afDB.database.ref('Chat').child(this.UserUid).child('QVbwfPEMT6hsoj7aWlytER7V94F2').on('value', snap =>{
      this.allMessages = [];
      var res = snap.val();
      for(var i in res){
        this.allMessages.push(res[i]);
      }
 
      this.events.publish('messages');
    });
  }



  sendMessage(messageDetails){
    var promise = new Promise((resolve, reject) =>{
      this.afDB.database.ref('Chat').child(this.UserUid).child(this.userDetails.uid).push({
          Body: messageDetails.body,
          Id: this.UserUid,
          Time: firebase.database.ServerValue.TIMESTAMP   
      }).then((snap)=>{
        var key = snap.key;
          this.afDB.database.ref('Chat').child(this.userDetails.uid).child(this.UserUid).push({
              Body: messageDetails.body,
              Id: this.UserUid,
              Time: firebase.database.ServerValue.TIMESTAMP ,
              Key: key
          }).then(()=>{
              this.afDB.database.ref('Chat').child(this.UserUid).child(this.userDetails.uid).child(key).update({
                  Key: key
              }).then(()=>{
                  resolve(true);
              });
          });
        });    
    });


  return promise;
  
}

sendMessageA(messageDetails){
  var promise = new Promise((resolve, reject) =>{
    this.afDB.database.ref('Chat').child(this.UserUid).child('QVbwfPEMT6hsoj7aWlytER7V94F2').push({
        Body: messageDetails.body,
        Id: this.UserUid,
        Time: firebase.database.ServerValue.TIMESTAMP   
    }).then((snap)=>{
      var key = snap.key;
        this.afDB.database.ref('Chat').child('QVbwfPEMT6hsoj7aWlytER7V94F2').child(this.UserUid).push({
            Body: messageDetails.body,
            Id: this.UserUid,
            Time: firebase.database.ServerValue.TIMESTAMP ,
            Key: key
        }).then(()=>{
            this.afDB.database.ref('Chat').child(this.UserUid).child('QVbwfPEMT6hsoj7aWlytER7V94F2').child(key).update({
                Key: key
            }).then(()=>{
                resolve(true);
            });
        });
      });    
  });


return promise;

}






  }






