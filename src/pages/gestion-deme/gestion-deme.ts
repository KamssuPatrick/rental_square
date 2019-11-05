import { Component, Input } from '@angular/core';
import { NavController, NavParams, IonicPage, AlertController } from 'ionic-angular';
import * as firebase from 'firebase/app';

/**
 * Generated class for the GestionDemePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-gestion-deme',
  templateUrl: 'gestion-deme.html',
})
export class GestionDemePage {
  @Input() data: any;
  value : any;
  params: any = {};
  buttonsColor: string = '';
  ref:any;
  value2 : any;
  onBloquer = this.setNext;
    text = 'Bloquer';
    index: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

    this.value = navParams.get('item');
    this.index = navParams.get('index');


    if(this.index == 0)
    {
      this.ref= firebase.database().ref("amenagement/"+ this.value);
    }
    else{
      this.ref= firebase.database().ref("demenagement/"+ this.value);
    }
   

    this.params.data = this.getAllUsers();
    this.value2=this.params.data;
    console.log("jkkjdkfjkdjfdfh",this.value2);
     

    this.params.events = {
      'onButtonClick': function (item: any) {
          console.log("Follow");
      },
      'onItemClick': function (item: any) {
          console.log("onItemClick");
      }
  };

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GestionUtilisateurPage');
  }

 

  onSupprimer(item)
  {
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: 'Voulez-vous vraiment supprimer le compte de ' + item + ' ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Supprimer',
          handler: () => {
            console.log('Buy clicked');

              /*let index = this.data.items.indexOf(item);
              if (index > -1) {
              this.data.items.splice(index, 1);
  }*/
          }
        }
      ]
    });
    alert.present();
  }

  setNext(){
    
    if(this.buttonsColor === '') {
      this.buttonsColor = '#e9868b';
      this.text = 'Debloquer';
    }

    else
    {
      this.buttonsColor = '';
      this.text = 'Bloquer';
    }
    //this.onBloquer = this.goToNext;
    
  }

  getAllUsers(){ 
    let params={};
    this.ref.on('value', function(snapshot) {
      let i=0;
      
      let keyyy=[];
      
      
      
        console.log(snapshot.val());
        params={
      
          "clientAdresse": snapshot.val().clientAdresse,
          "dateAmenagement": snapshot.val().dateAmenagement,
          "destinationAdresse": snapshot.val().destinationAdresse,
          "distance": snapshot.val().distance,
          "etage": snapshot.val().etage,
          "heureAmenagement": snapshot.val().heureAmenagement,
          "myDate": snapshot.val().myDate,
          "nbrepiece": snapshot.val().nbrepiece,
          "telephone": snapshot.val().telephone,
          "user": snapshot.val().user,
          "image":"assets/images/avatar/user1.png"
        };
       
       
      
     
    });
    //console.log("helllllllllooooooooooo",params)
   return params;
    
  }

  goToNext(){
    
    
    // go to Next Page
  }
}
