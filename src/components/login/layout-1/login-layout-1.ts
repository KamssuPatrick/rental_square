import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../../../pages/register/register';
import { HomePage } from '../../../pages/home/home';
//import { WizardPage } from '../../../pages/wizard/wizard';
//import { AccueilPage } from '../../../pages/accueil/accueil';

@IonicPage()
@Component({
    selector: 'login-layout-1',
    templateUrl: 'login.html'
})
export class LoginLayout1 {
    @Input() data: any;
    @Input() events: any;

    public username: string;
    public password: string;

    private isUsernameValid: boolean = true;
    private isPasswordValid: boolean = true;
  
    constructor(public navCtrl: NavController) { }

    onEvent = (event: string): void => {
        if (event == "onLogin" && !this.validate()) {
            //this.navCtrl.push(AccueilPage);
        }
        if (this.events[event]) {
            this.events[event]({
                'username' : this.username,
                'password' : this.password
            });
        }

        if( event == "onRegister" && !this.validate())
        {
            this.navCtrl.push(RegisterPage);
        }
      }
    
    validate():boolean {
        this.isUsernameValid = true;
        this.isPasswordValid = true;

        if (!this.username ||this.username.length == 0) {
            this.isUsernameValid = false;
        }
    
        if (!this.password || this.password.length == 0) {
            this.isPasswordValid = false;
        }
        
        return this.isPasswordValid && this.isUsernameValid;
     }
}
