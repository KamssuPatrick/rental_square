import { Component } from '@angular/core';
import { NavController, NavParams, App, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../services/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from '../../models/profile';
import * as firebase from 'firebase/app';
import { ModificationProfilPage } from '../modification-profil/modification-profil';

/**
 * Generated class for the Tabs5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs5',
  templateUrl: 'tabs5.html',
})
export class Tabs5Page {

  profile = {} as Profile;
  data : any;
  user: any;
  name: any;
  email: any;
  uid: any;
  userId: any;
  ref: any;
  params: any = {};


  constructor(
    public afDatabase: AngularFireDatabase,
    public afAuth: AngularFireAuth, 
    public navCtrl: NavController,
    public navParams: NavParams, 
    public app: App,
    public auth: AuthService,
    private fireAuth: AngularFireAuth,
    public menuCtrl: MenuController) {

      this.user = firebase.auth().currentUser;

       this.userId = firebase.auth().currentUser.uid;

       /*this.auth.getUsername().then(username=>{
 //console.log('Yeah, username ', username);
})
.catch(error=>{
console.log('OOPS, error', error)
})*/
      
this.ref =  firebase.database().ref("users");
this.params.data = this.getAllUsers();
console.log('ionViewDidLoad Tabs4Page', this.params.data);
      
  }


  deconnexion()
  {
    this.auth.signOut();
    this.app.getRootNav().push(HomePage);
  }

  getAllUsers(){ 
		let params={"items":[]};
		let items=[];
		this.ref.on('value', function(snapshot) {
		  let i=0;
		  
		  let keyyy=[];
		  
		  keyyy= Object.keys(snapshot.val());
		  snapshot.forEach(function(data){
			console.log(i);
			params.items[i]={
			  "uid": keyyy[i],
			  "username": data.val().username,
			  "prenom": data.val().prenom,
			  "image":"assets/img/avatar/user1.png"
			};
			i++;
		  });
		  
		 
		});
		console.log("helllllllllooooooooooo",params)
	   return params;
		
    }

    ionViewDidEnter(){
      this.menuCtrl.swipeEnable(false);
    }
    
    ngOnInit() {
      this.fireAuth.auth.onAuthStateChanged(user => {
        if (user) {
          this.user = {
            uid: user.uid,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            creationTime: user.metadata.creationTime,
            lastSignInTime: user.metadata.lastSignInTime,
            isAnonymous: user.isAnonymous,
            email: user.email,
            displayName: user.displayName,
            emailVerified: user.emailVerified,
            refreshToken: user.refreshToken
          }

          console.log("les donneesss", user.photoURL);
        }
        else {
          //this.router.navigate(["/home"]);
          console.log("pas de données");
        }
      })
    }

    modifier()
    {
      this.navCtrl.push(ModificationProfilPage, {item: this.userId});

    }

}