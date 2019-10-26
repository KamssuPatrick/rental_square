import { Component, Input } from '@angular/core';
import { NavController, NavParams, IonicPage, LoadingController } from 'ionic-angular';
import { ProduitPage } from '../../../pages/produit/produit';
import { SpinnerPage } from '../../../pages/spinner/spinner';
import * as firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'image-gallery-layout-1',
  templateUrl: 'image-gallery-layout-1.html'
})
export class ImageGalleryLayout1 {
  @Input() data: any;
  @Input() events: any;

  
  params: any = {};
  ref: any;
  index

  constructor(public navCtrl: NavController, navParams: NavParams, public loadingCtrl: LoadingController) { }

  openSubGallery = (group: any, index: number): any => {
    this.navCtrl.push(group.SubGallery, {
      'group': group.items[index],
      'events': this.events,
      'layout': 1
    });

  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  openSubGallerys(group: any, index: number)
  {
    

    console.log("icicici", index);
    this.index = index;

    this.navCtrl.push(ProduitPage, {pat: this.index});
  
  }

  onEvent = (event: string, item, e): void => {
    if (e) {
      e.stopPropagation();
    }
    if (this.events[event]) {
      this.events[event](item);
    }
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
