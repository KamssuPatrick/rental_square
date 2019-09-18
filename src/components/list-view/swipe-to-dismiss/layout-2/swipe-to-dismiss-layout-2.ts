import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, Content, ItemSliding, NavController, AlertController } from 'ionic-angular';
import { ModifcationProduitPage } from '../../../../pages/modifcation-produit/modifcation-produit';
import { AjoutProduitPage } from '../../../../pages/ajout-produit/ajout-produit';
import { AppartementNmPage } from '../../../../pages/appartement-nm/appartement-nm';

@IonicPage()
@Component({
    selector: 'swipe-to-dismiss-layout-2',
    templateUrl: 'swipe-to-dismiss.html'
})
export class SwipeToDismissLayout2 {
    @Input() data: any;
    @Input() events: any;
    @ViewChild(Content)
    content: Content;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController) { }

    onEvent(event: string, item: any, e: any) {
        if (this.events[event]) {
            this.events[event](item);
        }

        if( event == "onModifier")
        {
            this.navCtrl.push(ModifcationProduitPage);
        }

        if( event == "onAjouter")
        {
            this.navCtrl.push(AjoutProduitPage);
        }

        if( event == "onAjouterApptNM")
        {
            this.navCtrl.push(AjoutProduitPage);
        }
    }

    undo = (slidingItem: ItemSliding) => {
        slidingItem.close();
    }

    delete = (item: any): void => {

        let alert = this.alertCtrl.create({
            title: 'Confirm purchase',
            message: 'Voulez-vous vraiment supprimer ce produit ?',
            buttons: [
              {
                text: 'Annuler',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                }
              },
              {
                text: 'Supprimer',
                handler: () => {
                  console.log('Buy clicked');

                    let index = this.data.items.indexOf(item);
                    if (index > -1) {
                    this.data.items.splice(index, 1);
        }
                }
              }
            ]
          });
          alert.present();
        
        
    }
}
