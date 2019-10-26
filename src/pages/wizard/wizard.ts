import { Component } from '@angular/core';
import { NavController, NavParams, Toast } from 'ionic-angular';
import { AccueilPage } from '../accueil/accueil';

/**
 * Generated class for the WizardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-wizard',
  templateUrl: 'wizard.html',
})
export class WizardPage {

  params: any = {};
  test : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

   this.test = this.navCtrl.push(AccueilPage);

    this.params.data = {

      "toolBarTitle" : "Simple + icon ",
      "btnPrev" : "Previous",
      "btnNext"    : "Next",
      "backgroundImage" : "assets/images/logo/logo_rental.jpg",
      "btnFinish"     : "Finish",
      "items" : [
        {
          logo: 'assets/images/logo/logo_rental.jpg',
          iconSlider: 'assets/images/logo/logo_rental.jpg',
          title: 'Fragment Exmaple ',
          description: 'Test for the fragment exemple sdqd',
          buttonNext: 'Next'
        },
        {
          logo: 'assets/images/logo/logo_rental.jpg',
          iconSlider: 'icon-star-outline',
          title: 'Fragment Exmaple 2',
          description: 'Test for the fragment 2 exemple sdqd',
          buttonNext: 'Next',
          buttonPrevious: 'Previous'
        },
        {
          logo: '',
          iconSlider: 'icon-star-outline',
          title: 'Fragment Exmaple 3 ',
          description: 'Test for the fragment 3 exemple sdqd',
          buttonPrevious: 'Previous',
          buttonFinish: 'Finish'
        },
      ]

    };

   
    this.params.events = {

      'onFinish': function(event: any){
          console.log('Finish');
        
        /*else{
          Toast.show("Finish", '1000', 'botton').subscribe(toast => { });
        }*/
      }

    };

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WizardPage');
  }

}
