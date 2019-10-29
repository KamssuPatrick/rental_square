import { Component, NgZone, ViewChild } from '@angular/core';
import { NavController, NavParams, Content, Events, LoadingController, Platform, ActionSheetController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

import { ChatProvider } from '../../providers/chat/chat';

 

declare var window: any;

@Component({
  selector: 'page-chatbody',
  templateUrl: 'chatbody.html',
})
export class ChatbodyPage {

  userDetails;

  details = '';

  detailsA = {};

  myDetails = {};

  onlineStatus = 'Online';
  offlineStatus = 'Offline';


  newMessage = {
    body: ''

  }

  allMessages = [];

  @ViewChild('content') content: Content

  constructor(public chatProvider: ChatProvider, public ngZone: NgZone, public events: Events, public actionSheetController: ActionSheetController, private platform: Platform, public loadCtrl: LoadingController, public authProvider: AuthProvider, public navCtrl: NavController, public navParams: NavParams,) {
    this.userDetails = this.navParams.get('Details')
    
    console.log(this.userDetails);

    this.events.subscribe('AdminDetails', ()=>{
      this.ngZone.run(()=>{
        this.detailsA = this.authProvider.AdminDetails;
      })
    })

    this.events.subscribe('ProfileDetails', ()=>{
        this.ngZone.run(()=>{
          this.details = this.userDetails.uid;
        })
      })

    this.events.subscribe('myDetails', ()=>{
      this.ngZone.run(()=>{
        this.myDetails = this.authProvider.myDetails;
        console.log(this.myDetails);
      })
    })

    this.events.subscribe('messages', ()=>{
      this.ngZone.run(()=>{
        this.allMessages = this.chatProvider.allMessages;
        console.log(this.allMessages);
      })
    })

    if(this.allMessages.length > 6){
      setTimeout(()=>{
        for(let i=0; i<10; i++){
          this.allMessages[i];
        }
      }, 300)
    }

  }

  callFunction(){
    this.content.scrollToBottom(0);
  }
  

  ionViewWillEnter(){
    
  }

  ionViewDidLeave(){
    this.events.subscribe('ProfileDetails');
    this.events.subscribe('myDetails');
    this.events.subscribe('messages');
  }

  ionViewDidEnter(){
    this.authProvider.getProfileDetails(this.userDetails);
    this.authProvider.getAdminDetails();
    this.authProvider.getMyDetails();
    this.chatProvider.getMessages(this.userDetails);
    this.chatProvider.getMessagesA();
  }


  



  sendMessage(){
    var res = this.newMessage.body;
    var res1 = res.trim();
      if(res1 == ''){
          console.log("Can't send empty message");
          this.newMessage.body = '';
      } else{
          this.chatProvider.sendMessage(this.newMessage).then(()=>{
            this.newMessage.body = '';
          }).catch((err)=>{
            console.log(err);
          })
      }

  }


  sendMessageA(){
    var res = this.newMessage.body;
    var res1 = res.trim();
      if(res1 == ''){
          console.log("Can't send empty message");
          this.newMessage.body = '';
      } else{
          this.chatProvider.sendMessageA(this.newMessage).then(()=>{
            this.newMessage.body = '';
          }).catch((err)=>{
            console.log(err);
          })
      }

  }


 














 

}
