import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../../pages/home/home';
import { WizardPage } from '../../../pages/wizard/wizard';
import { AccueilPage } from '../../../pages/accueil/accueil';
import { AdminPage } from '../../../pages/admin/admin';
import { RegisterPage } from '../../../pages/register/register';
import { AuthService } from '../../../services/auth.service';


@IonicPage()
@Component({
    selector: 'login-layout-1',
    templateUrl: 'login.html'
})
export class LoginLayout1 {
    @Input() data: any;
    @Input() events: any;

    public email: string;
    public password: string;
    public itemP: any;
    private isEmailValid: boolean = true;
    private isPasswordValid: boolean = true;
    
    private isEmailNoUsed: boolean = true;
    private isBadPassword: boolean = true;

    private regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    signupError: string;
    codeError: string;
  
    constructor(public auth: AuthService, public navCtrl: NavController) {
     }

    onEvent = (event: string): void => {
        if (event == "onLogin" && !this.validate()) {
            console.log("i m there");
            return;
            //this.navCtrl.push(AccueilPage);
        }
        else{
            let credentials = {
                email: this.email,
                password: this.password
              };
      
              this.auth.signInWithEmail(credentials).then(
                (user) => {
                    this.navCtrl.setRoot(AccueilPage,user);
                },
                error => {
                            this.signupError = error.message;
                            this.codeError= error.code;
                            if(this.codeError=="auth/user-not-found" || this.codeError=="auth/wrong-password"){
                                this.isEmailNoUsed= false;

                            }
                            else{
                                this.isEmailNoUsed= true;
                            }/*
                            if(this.codeError=="auth/email-already-in-use"){
                                this.isEmailUsed=false;
                            }
                            else{
                                this.isEmailUsed=true;
                            }*/
                            console.log(this.codeError);
                            
                }
              );

        }
        if (this.events[event]) {
            this.events[event]({
                'email' : this.email,
                'password' : this.password
            });
        }
        if(event== "onRegister"){
            this.navCtrl.push(RegisterPage);
        }

        
        if( event == "onAdmin")
        {
            this.navCtrl.push(AdminPage);
        }
      }
    
    validate():boolean {
        this.isEmailValid = true;
        this.isPasswordValid = true;
    
        if (!this.password || this.password.length == 0) {
            this.isPasswordValid = false;
        }

        this.isEmailValid = this.regex.test(this.email);
        console.log(this.isEmailValid);
        return this.isPasswordValid && this.isEmailValid;
     }
}
