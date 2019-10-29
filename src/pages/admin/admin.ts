import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../services/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from '../../models/profile';
import * as firebase from 'firebase/app';


@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html'
})
export class AdminPage {

  profile = {} as Profile;
  data : any;
  user: any;
  name: any;
  email: any;
  uid: any;
  userId: any;
  ref: any;
  params: any = {};

  users = [];
  constructor(public navCtrl: NavController,
    public auth: AuthService,
    private fireAuth: AngularFireAuth) {

      this.ngOnInit();

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

        console.log("les donneesss", user.uid);
      }
      else {
        //this.router.navigate(["/home"]);
        console.log("pas de données");
      }
    })
  }

  

}

function newFunction() {
  return this;
}
