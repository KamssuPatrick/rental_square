import { Component, NgZone, Input, ViewChild } from '@angular/core';
import { IonicPage, Content, Events, NavController, AlertController } from 'ionic-angular';
import { ProduitDetailsPage } from '../../../../pages/produit-details/produit-details';
import { Tabs3Page } from '../../../../pages/tabs3/tabs3';
import { IFramePage } from '../../../../pages/i-frame/i-frame';
import { AngularFireDatabase } from 'angularfire2/database';
import { ChatProvider } from '../../../../providers/chat/chat';
import { AuthService } from '../../../../services/auth.service';
import * as firebase from 'firebase/app';
import { AuthProvider } from '../../../../providers/auth/auth';

@IonicPage()
@Component({
    selector: 'google-card-layout-2',
    templateUrl: 'google-card.html'
})
export class GoogleCardLayout2 {
    @Input() data: any;
    @Input() events: any;
    @ViewChild(Content)
    content: Content;
    slider = {};

    animateItems = [];
    animateClass: any;
    userId: any;

    allFav = [];

    searchTerm: any = "";
  allItems: any;
  type: any;

    constructor(public authProvider: AuthProvider, public navCtrl: NavController, public afData: AngularFireDatabase,
      public alertCtrl: AlertController, public chatProvider: ChatProvider,
     public auth: AuthService, public afDB: AngularFireDatabase, public ngZone: NgZone, public evente: Events ) { 

        this.animateClass = { 'fade-in-left-item': true };

        this.userId = firebase.auth().currentUser.uid;

        this.evente.subscribe('favoris', ()=>{
          this.ngZone.run(()=>{
            this.allFav = this.authProvider.allFav;
            console.log("fav", this.allFav);
          })
        })
        console.log("allFav",this.allFav);
    }

    getItems(event: any): void {
        if (!this.allItems) {
          this.allItems = this.data.items;
        }
        this.data.items = this.allItems.filter((item) => {
          return item.ville.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
        });
      }

    slideHasChanged(slider, index): void {
        this.slider[index] = slider;
        if (2 == slider._activeIndex) {
            if (this.data.items) {
                this.data.items.splice(index, 1);
            } else {
                this.data.splice(index, 1);
            }
        }
    }

    onClickEvent(index): void {
        if (this.slider[index]) {
            this.slider[index].slidePrev(300);
        }
    }


    onEvent(event: string, item: any, image: any, index: any, e: any) {
        if (this.events[event]) {

            if ('onTextChange' === event) {
                this.getItems(item);
                this.events[event](this.searchTerm);
              } else {
                this.events[event](item);
              }
        }

        if( event == "onItemClick")
        {
            this.navCtrl.push(ProduitDetailsPage, { item:item, image:image, index: index});
        }


        
    }

    detail( item: any, image: any, index: any)
    {
        this.navCtrl.push(ProduitDetailsPage, { item:item, image:image, index: index});
    }

    Addfavoris(item: any,  index: any, tout: any, image: any) {

      if(index == 0)
      {
        
        this.PutFavoris(this.userId, 'villa', item, tout, image);
        console.log("ciis" + item + " "+ index);
        this.type = 'villa';
      }

      if(index == 1)
      {
        
        this.PutFavoris(this.userId, 'appartement', item, tout, image);
        console.log("ciis" + item + " "+ index);
        this.type = 'appartement';
      }

      if(index == 2)
      {
        
        this.PutFavoris(this.userId, 'immeuble', item, tout, image);
        console.log("ciis" + item + " "+ index);
        this.type = 'immeuble';
      }

      if(index == 3)
      {
        
        this.PutFavoris(this.userId, 'bureau', item, tout, image);
        console.log("ciis" + item + " "+ index);
        this.type = 'bureau';
      }

      if(index == 4)
      {
        
        this.PutFavoris(this.userId, 'magasin', item, tout, image);
        console.log("ciis" + item + " "+ index);
        this.type = 'magasin';
      }

      if(index == 5)
      {
        
        this.PutFavoris(this.userId, 'bail', item, tout, image);
        console.log("ciis" + item + " "+ index);
        this.type = 'bail';
      }

      
      }

      Delfavoris(item: any,  index: any, key: any) {

        if(index == 0)
        {
          
         this.DelFav(this.userId, 'villa', item, key);
          console.log("ciis" + item + " "+ index);
          this.type = 'villa';
        }
  
        if(index == 1)
        {
          
          this.DelFav(this.userId, 'appartement', item, key);
          console.log("ciis" + item + " "+ index);
          this.type = 'appartement';
        }
  
        if(index == 2)
        {
          
         this.DelFav(this.userId, 'immeuble', item, key);
          console.log("ciis" + item + " "+ index);
          this.type = 'immeuble';
        }
  
        if(index == 3)
        {
          
          this.DelFav(this.userId, 'bureau', item, key);
          console.log("ciis" + item + " "+ index);
          this.type = 'bureau';
        }
  
        if(index == 4)
        {
          
          this.DelFav(this.userId, 'magasin', item, key);
          console.log("ciis" + item + " "+ index);
          this.type = 'magasin';
        }
  
        if(index == 5)
        {
          
          this.DelFav(this.userId, 'bail', item, key);
          console.log("ciis" + item + " "+ index);
          this.type = 'bail';
        }
  
        
        }
  

      
      share(card){
        this.navCtrl.push(Tabs3Page);

      }

     

      PutFavoris(userId, type, item, tout, image){
        this.afData.database.ref('Favoris').child(userId).child(type).push({
          Id: item,
          autre: tout.autre,
          avis: tout.avis,
          chambre: tout.chambre,
          cuisine: tout.cuisine,
          etage: tout.etage,
          parking: tout.parking,
          prix: tout.prix,
          profilePic: image,
          salon: tout.salon,
          surface: tout.surface,
          terrasse: tout.terrasse,
          toilette: tout.toilette
        }).then((snap)=>{
          var key = snap.key;
          this.afData.database.ref('Favoris').child(userId).child(type).child(key).update({
            Key: key,
          type: type}).then(()=>{
              console.log("ajout correct.")
          });
      });
      }

      DelFav(userId, type, item, key){

        console.log("Remove succeeded." + userId + "///" + type + " //// "+ item)

        this.afData.database.ref('Favoris').child(userId).child(type).child(key).remove().then(function() {
          console.log("Remove succeeded.")
        })
        .catch(function(error) {
          console.log("Remove failed: " + error.message)
        });
      }

      ionViewDidLeave(){
        this.events.subscribe('favoris')
      }
    
      ionViewDidEnter(){
        this.authProvider.getFavoris(this.userId, this.type);
      }
}
