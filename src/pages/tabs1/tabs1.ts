import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, LoadingController } from 'ionic-angular';

import * as firebase from 'firebase/app';

/**
 * Generated class for the Tabs1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs1',
  templateUrl: 'tabs1.html',
})
export class Tabs1Page {

    params: any = {};
    ref: any;
    value : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {

    this.presentLoading();

    this.params.data = {
      "items": [
          {
              "id": 1,
              "title": "Villa",
              "image": "assets/img/gallery/brogan/villa1.jpg",
              "items": [
                  {
                      "id": 1,
                      "image": "assets/img/gallery/brogan/villa2.jpg"
                  },
                  {
                      "id": 2,
                      "image": "assets/img/gallery/brogan/villa3.jpg"
                  },
                  {
                      "id": 3,
                      "image": "assets/img/gallery/brogan/villa4.jpg"
                  },
                  {
                      "id": 4,
                      "image": "assets/img/gallery/brogan/villa1.jpg"
                  }
              ]
          },
          {
              "id": 2,
              "title": "Appartement",
              "image": "assets/img/gallery/brogan/appart1.jpg",
              "items": [
                  {
                      "id": 1,
                      "image": "assets/img/gallery/brogan/appart1.jpg"
                  },
                  {
                      "id": 2,
                      "image": "assets/img/gallery/brogan/appart2.jpg"
                  },
                  {
                      "id": 3,
                      "image": "assets/img/gallery/brogan/appart3.jpg"
                  }
              ]
          },
          {
              "id": 4,
              "title": "Immeuble",
              "image": "assets/img/gallery/brogan/20.jpg",
              "items": [
                  {
                      "id": 1,
                      "image": "assets/img/gallery/brogan/10.jpg"
                  },
                  {
                      "id": 2,
                      "image": "assets/img/gallery/brogan/11.jpg"
                  },
                  {
                      "id": 3,
                      "image": "assets/img/gallery/brogan/12.jpg"
                  },
                  {
                      "id": 4,
                      "image": "assets/img/gallery/brogan/13.jpg"
                  },
                  {
                      "id": 5,
                      "image": "assets/img/gallery/brogan/14.jpg"
                  },
                  {
                      "id": 6,
                      "image": "assets/img/gallery/brogan/15.jpg"
                  }
              ]
          },
          {
              "id": 5,
              "title": "Bureau",
              "image": "assets/img/gallery/brogan/17.jpg",
              "items": [
                  {
                      "id": 1,
                      "image": "assets/img/gallery/brogan/1.jpg"
                  },
                  {
                      "id": 2,
                      "image": "assets/img/gallery/brogan/2.jpg"
                  },
                  {
                      "id": 3,
                      "image": "assets/img/gallery/brogan/12.jpg"
                  }
              ]
          },
          {
              "id": 6,
              "title": "Magasins/Boutiques/Local commercial",
              "image": "assets/img/gallery/brogan/3.jpg",
              "favorite": true,
              "items": [
                  {
                      "id": 1,
                      "image": "assets/img/gallery/brogan/20.jpg"
                  },
                  {
                      "id": 2,
                      "image": "assets/img/gallery/brogan/19.jpg"
                  },
                  {
                      "id": 3,
                      "image": "assets/img/gallery/brogan/12.jpg"
                  },
                  {
                      "id": 4,
                      "image": "assets/img/gallery/brogan/13.jpg"
                  },
                  {
                      "id": 5,
                      "image": "assets/img/gallery/brogan/16.jpg"
                  }
              ]
          },
          {
              "id": 7,
              "title": "Bail emphytéotique",
              "image": "assets/img/gallery/brogan/1.jpg",
              "items": [
                  {
                      "id": 1,
                      "image": "assets/img/gallery/brogan/3.jpg"
                  },
                  {
                      "id": 2,
                      "image": "assets/img/gallery/brogan/5.jpg"
                  },
                  {
                      "id": 3,
                      "image": "assets/img/gallery/brogan/4.jpg"
                  },
                  {
                      "id": 4,
                      "image": "assets/img/gallery/brogan/7.jpg"
                  },
                  {
                      "id": 5,
                      "image": "assets/img/gallery/brogan/8.jpg"
                  }
              ]
          }
      ]
  };

this.params.data.subGallery = "ItemDetailsPageSubImageGallery";
this.params.data.fullscreen = "ItemDetailsPageFullScreenGallery";

  }

  presentLoading() {

    this.ref =  firebase.database().ref("services");
    this.params.data = this.getAllUsers();

    this.value = this.navParams.get('item');
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });

    

    this.params.events = {
      'onItemClick': function(item: any) {
          //console.log("onItemClick" + this.data.items.title);
          
      },
      'onFavorite': function(item) {
          item.favorite = !item.favorite;
         // console.log("onFavorite");
      }
  };


    loader.present();
  }


  
  getAllUsers(){ 
    let params={"items":[]};
    let items=[];
    this.ref.on('value', function(snapshot) {
      let i=0;
      
      let keyyy=[];
      
      keyyy= Object.keys(snapshot.val());
      console.log("testxcx", keyyy);
      /*snapshot.forEach(function(data){
        console.log(i);
        params.items[i]={
          "uid": keyyy[i],
          "username": data.val().username,
          "prenom": data.val().prenom,
          "image":"assets/img/avatar/user1.png"
        };
        i++;
      });*/
      
     
    });
    //console.log("helllllllllooooooooooo",params)
   return params;
    
  }

}
