import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AccueilPage } from '../../../pages/accueil/accueil';
import { AuthService } from '../../../services/auth.service';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../../../pages/tabs/tabs';

@IonicPage()
@Component({
    selector: 'register-layout-2',
    templateUrl: 'register.html'
})
export class RegisterLayout2 {
    @Input() data: any;
    @Input() events: any;

    public username: string;
    public password: string;
    public photo: string;
    public city: string;
    public email: string;
    public prenom: string;
    public profession : string;
    public societe : string;
    public telephone: any;

    private isEmailValid: boolean = true;
    private isUsernameValid: boolean = true;
    private isPrenomValid: boolean = true;
    private isPasswordValid: boolean = true;
    private isEmailUsed: boolean = true;
    private isBadPassword: boolean = true;
    //private isCityValid: boolean = true;
    //private isPhotoValid: boolean = true;
    params: any = {};
    signupError: string;
    codeError: string;
    
    private regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    constructor(public auth: AuthService, public navCtrl: NavController, public navParams: NavParams) { }

    onEvent = (event: string): void => {
        if (event == "onRegister" && !this.validate()) {
            console.log('remplissez tous les champs svp');
            return;
        }
        else{
            let credentials = {
                email: this.email,
                password: this.password,
                username: this.username,
                prenom: this.prenom,
                profession: this.profession,
                societe: this.societe,
                telephone: this.telephone
              };
      
              this.auth.signUp(credentials).then(
                (user) => {
                    this.auth.writeUserData(user.user.uid, this.username, this.email, this.prenom);
                    this.navCtrl.setRoot(TabsPage,user);
                },
                error => {
                            this.signupError = error.message;
                            this.codeError= error.code;
                            if(this.codeError=="auth/weak-password"){
                                this.isBadPassword= false;
                                
                            }
                            else{
                                this.isBadPassword= true;
                            }
                            if(this.codeError=="auth/email-already-in-use"){
                                this.isEmailUsed=false;
                            }
                            else{
                                this.isEmailUsed=true;
                            }
                            console.log(this.signupError);
                            
                }
              );
        }
        if (this.events[event]) {
            this.events[event]({
                'username': this.username,
                'prenom'  : this.prenom,
                'email': this.email,
                'password': this.password,
               
            });
        }
        
    }

    validate():boolean {
        this.isEmailValid = true;
        this.isUsernameValid = true;
        this.isPasswordValid = true;
        //this.isPhotoValid = true;
        this.isPrenomValid = true;

        if (!this.username ||this.username.length == 0) {
            this.isUsernameValid = false;
        }

        if (!this.prenom ||this.prenom.length == 0) {
            this.isPrenomValid = false;
        }
    
        if (!this.password || this.password.length == 0) {
            this.isPasswordValid = false;
        }

        /*if (!this.password || this.password.length == 0) {
            this.isPasswordValid = false;
        }*/

        /*if (!this.photo || this.photo.length == 0) {
            this.isPhotoValid = false;
        }*/

        this.isEmailValid = this.regex.test(this.email);
        
        return this.isEmailValid && 
            this.isPasswordValid && 
            this.isUsernameValid && 
            this.isPrenomValid;
    }
}
