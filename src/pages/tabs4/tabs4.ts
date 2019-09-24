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


  constructor(
    public afDatabase: AngularFireDatabase,
    public afAuth: AngularFireAuth, 
    public navCtrl: NavController,
    public navParams: NavParams, 
    public app: App,
    public auth: AuthService) {

      this.user = firebase.auth().currentUser;

       this.userId = firebase.auth().currentUser.uid;

       this.auth.getUsername().then(username=>{
 console.log('Yeah, username ', username);
})
.catch(error=>{
console.log('OOPS, error', error)
})
      
      
      if (this.user != null) {
        this.email = this.user.email;
        
        this.uid = this.user.uid; 

        

        console.log('ionViewDidLoad Tabs4Page', this.auth.getEmail());
      }

      if(this.auth.userDetails()){
        this.email = this.auth.userDetails().displayName;
        const userSubject = new ReplaySubject(1);
        userSubject.next(this.email);
        console.log('ionViewDidLoad email Tabs4Page', userSubject.next(this.email));
      }else{
        
      }

      
      
      
  }

  

  

  deconnexion()

  {
    this.auth.signOut();
    this.app.getRootNav().push(HomePage);
  }

}
