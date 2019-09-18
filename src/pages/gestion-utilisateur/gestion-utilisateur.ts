import { Component, Input } from '@angular/core';
import { NavController, NavParams, IonicPage, AlertController } from 'ionic-angular';

/**
 * Generated class for the GestionUtilisateurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gestion-utilisateur',
  templateUrl: 'gestion-utilisateur.html',
})
export class GestionUtilisateurPage {

  @Input() data: any;
  value : any;
  params: any = {};
  buttonsColor: string = '';

  onBloquer = this.setNext;
    text = 'Bloquer';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

    this.value = navParams.get('item');

    this.params.data = {
      "avatar" : "assets/images/avatar/3.jpg",
      "headerImage" : "assets/images/background-small/1.jpg",
      "headerTitle" : "Profile",
      "items" : [ {
        "avatar" : "assets/images/avatar/1.jpg",
        "button" : "Follow",
        "id" : 1,
        "subtitle" : "Black Shirt",
        "title" : "Black Shirt"
      }, {
        "avatar" : "assets/images/avatar/2.jpg",
        "button" : "Follow",
        "id" : 2,
        "subtitle" : "Black Shirt",
        "title" : "Black Shirt"
      }, {
        "avatar" : "assets/images/avatar/3.jpg",
        "button" : "Follow",
        "id" : 3,
        "subtitle" : "Black Shirt",
        "title" : "Black Shirt"
      }, {
        "avatar" : "assets/images/avatar/4.jpg",
        "button" : "Follow",
        "id" : 4,
        "subtitle" : "Black Shirt",
        "title" : "Black Shirt"
      }, {
        "avatar" : "assets/images/avatar/19.jpg",
        "button" : "Follow",
        "id" : 5,
        "subtitle" : "Black Shirt",
        "title" : "Black Shirt"
      }, {
        "avatar" : "assets/images/avatar/20.jpg",
        "button" : "Follow",
        "id" : 6,
        "subtitle" : "Black Shirt",
        "title" : "Black Shirt"
      }, {
        "avatar" : "assets/images/avatar/14.jpg",
        "button" : "Follow",
        "id" : 7,
        "subtitle" : "Black Shirt",
        "title" : "Black Shirt"
      }, {
        "avatar" : "assets/images/avatar/5.jpg",
        "button" : "Follow",
        "id" : 8,
        "subtitle" : "Black Shirt",
        "title" : "Black Shirt"
      } ],
      "subtitle" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "title" : "Name Surname"
    }

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

  goToNext(){
    
    
    // go to Next Page
  }
}
