import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the MessageriePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-messagerie',
  templateUrl: 'messagerie.html',
})
export class MessageriePage {

  params: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {


    this.params.data = {
      "button" : "Ok",
      "header" : "Inbox",
      "items" : [ {
        "delate" : "Delete",
        "icon" : "ios-information-circle-outline",
        "id" : 1,
        "reply" : "Reply",
        "subtitle" : "Subtitle",
        "textIcon" : "6min ago",
        "title" : "Grant Marshall"
      }, {
        "delate" : "Delete",
        "icon" : "ios-information-circle-outline",
        "id" : 2,
        "reply" : "Reply",
        "subtitle" : "Subtitle",
        "textIcon" : "58min ago",
        "title" : "Pena Valdez"
      }, {
        "delate" : "Delete",
        "icon" : "ios-information-circle-outline",
        "id" : 3,
        "reply" : "Reply",
        "subtitle" : "Subtitle",
        "textIcon" : "92min ago",
        "title" : "Jessica Miles"
      }, {
        "delate" : "Delete",
        "icon" : "ios-information-circle-outline",
        "id" : 4,
        "reply" : "Reply",
        "subtitle" : "Subtitle",
        "textIcon" : "93min ago",
        "title" : "Kerri Barber"
      }, {
        "delate" : "Delete",
        "icon" : "ios-information-circle-outline",
        "id" : 5,
        "reply" : "Reply",
        "subtitle" : "Subtitle",
        "textIcon" : "43min ago",
        "title" : "Natasha Gamble"
      }, {
        "delate" : "Delete",
        "icon" : "ios-information-circle-outline",
        "id" : 6,
        "reply" : "Reply",
        "subtitle" : "Subtitle",
        "textIcon" : "62min ago",
        "title" : "White Castaneda"
      }, {
        "delate" : "Delete",
        "icon" : "ios-information-circle-outline",
        "id" : 7,
        "reply" : "Reply",
        "subtitle" : "Subtitle",
        "textIcon" : "81min ago",
        "title" : "Vanessa Ryan"
      }, {
        "delate" : "Delete",
        "icon" : "ios-information-circle-outline",
        "id" : 8,
        "reply" : "Reply",
        "subtitle" : "Subtitle",
        "textIcon" : "51min ago",
        "title" : "Meredith Hendricks"
      } ],
      "subtitle" : "Mark all messages as read.",
      "title" : "12"
    }

    
    this.params.events = {
      'onItemClick': function (item: any) {
         console.log("item");
       },
      'onDelete': function (item: any) {
         console.log("Delete");
       },
      'onButtonClick': function (item: any) {
         console.log("Info");
       }
     };

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessageriePage');
  }

}
