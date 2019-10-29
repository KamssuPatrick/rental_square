import { NavController, NavParams, Content, Events, LoadingController, Platform, ActionSheetController } from 'ionic-angular';
import { ChatProvider } from '../../providers/chat/chat';
import { Component, NgZone, ViewChild } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the Tabs3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs3',
  templateUrl: 'tabs3.html',
})
export class Tabs3Page {

  userDetails

  details = {}

  myDetails = {}

  newMessage = {
    body: ''
  }

  allMessages = []

  @ViewChild('content') content: Content

  constructor(public chatProvider: ChatProvider,  public ngZone: NgZone, public events: Events, public actionSheetController: ActionSheetController, private platform: Platform, public loadCtrl: LoadingController, public authProvider: AuthProvider, public navCtrl: NavController, public navParams: NavParams,) {
    this.userDetails = this.navParams.get('Details')

    this.events.subscribe('AdminDetails', ()=>{
      this.ngZone.run(()=>{
        this.details = this.authProvider.AdminDetails
        console.log(this.details);
      })
    })

    this.events.subscribe('myDetails', ()=>{
      this.ngZone.run(()=>{
        this.myDetails = this.authProvider.myDetails
      })
    })

    this.events.subscribe('messages', ()=>{
      this.ngZone.run(()=>{
        this.allMessages = this.chatProvider.allMessages
      })
    })

    if(this.allMessages.length > 6){
      setTimeout(()=>{
        for(let i=0; i<10; i++){
          this.allMessages[i]
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
    this.events.subscribe('AdminDetails')
    this.events.subscribe('myDetails')
    this.events.subscribe('messages')
  }

  ionViewDidEnter(){
    this.authProvider.getAdminDetails()
    this.authProvider.getMyDetails()
    this.chatProvider.getMessagesA()
  }





  sendMessageA(){
    var res = this.newMessage.body
    var res1 = res.trim()
      if(res1 == ''){
          console.log("Can't send empty message")
          this.newMessage.body = ' '
      } else{
          this.chatProvider.sendMessageA(this.newMessage).then(()=>{
            this.newMessage.body = ' '
          }).catch((err)=>{
            console.log(err)
          })
      }



  }

}
