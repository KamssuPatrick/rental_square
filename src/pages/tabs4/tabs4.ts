import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from '../../models/profile';
import { AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { AuthService } from '../../services/auth.service';
import { ReplaySubject } from 'rxjs/ReplaySubject';

/**
 * Generated class for the Tabs4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs4',
  templateUrl: 'tabs4.html',
})
export class Tabs4Page {

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
    public auth: AuthService) {

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
			  "image":"assets/images/avatar/user1.png"
			};
			i++;
		  });
		  
		 
		});
		console.log("helllllllllooooooooooo",params)
	   return params;
		
	  }

}
