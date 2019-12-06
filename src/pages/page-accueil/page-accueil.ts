import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { PortService } from '../../services';
import { Subscription } from 'rxjs';
import { Maison } from '../../models';


/**
 * Generated class for the PageAccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-page-accueil',
  templateUrl: 'page-accueil.html',
})
export class PageAccueilPage {

  maisons: Maison[];
  maison: Maison;
  maisonSubscription: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, private portService: PortService) {
  }

 
  filterPorts(maisons: Maison[], text: string) {
    return maisons.filter(maison => {
      return maison.avis.toLowerCase().indexOf(text) !== -1;
    });
  }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
  }

  searchPorts(event: {
    component: IonicSelectableComponent,
    text: string
  }) {
    
  }
 

}
