import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, App, MenuController, Events } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../services/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from '../../models/profile';
import * as firebase from 'firebase/app';
import { ModificationProfilPage } from '../modification-profil/modification-profil';
import { AuthProvider } from '../../providers/auth/auth';

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
  val2 : any={};
  profile = {} as Profile;
  data : any;
  user: any;
  name: any;
  email: any;
  uid: any;
  userId: any;
  telephone: any;
  prenom: any;
  societe: any;
  profession: any;
  ref: any;
  isenabled=false;
  params = {}
  params2: any = {};


  constructor(
    public afDatabase: AngularFireDatabase,
    public afAuth: AngularFireAuth, 
    public navCtrl: NavController,
    public navParams: NavParams, 
    public app: App,
    public auth: AuthService,
    private fireAuth: AngularFireAuth,
    public menuCtrl: MenuController,
    public authP:AuthProvider,
    public ngZone: NgZone, public events: Events) {

      this.user = firebase.auth().currentUser;

      this.userId = firebase.auth().currentUser.uid;
      console.log('uid', this.userId);
       /*this.auth.getUsername().then(username=>{
 //console.log('Yeah, username ', username);
})
.catch(error=>{
console.log('OOPS, error', error)
})*/
      
     // this.ref =  firebase.database().ref("users/"+this.userId);
      
      this.events.subscribe('params', ()=>{
        this.ngZone.run(()=>{
          this.val2 = this.authP.params
          console.log("params2",this.val2);
        })
      })
     
  }


  deconnexion()
  {
    this.auth.signOut();
    this.app.getRootNav().push(HomePage);
  }

  
    ionViewDidEnter(){
      this.menuCtrl.swipeEnable(false);
      this.authP.getAllUsers()
    }
    
    ngOnInit() {
      /*this.fireAuth.auth.onAuthStateChanged(user => {
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
      })*/
    }

    modifier(){

      let donnee={
        "uid":this.userId,
        "username": this.val2.username,
        "prenom": this.val2.prenom,
        "profession": this.val2.profession,
        "societe": this.val2.societe,
        "telephone": this.val2.telephone,
      };
      //console.log("donneeeeeeeeeeeee",donnee);

      this.authP.updateUser(donnee);
    }
    inputChange(){
      this.isenabled=true;
      
      console.log("kdf,dl,flk,dlf,ld", this.isenabled);
     
    }
    onChangeTime(data) : void {
      console.log(data);    
      this.isenabled=true;    
    }
    ionViewDidLeave(){
      this.events.subscribe('params')
    }
  
}