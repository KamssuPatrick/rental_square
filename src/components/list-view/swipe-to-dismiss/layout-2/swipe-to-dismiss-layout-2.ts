import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, Content, ItemSliding, NavController, AlertController } from 'ionic-angular';
import { ModifcationProduitPage } from '../../../../pages/modifcation-produit/modifcation-produit';
import { AjoutProduitPage } from '../../../../pages/ajout-produit/ajout-produit';
import { AppartementNmPage } from '../../../../pages/appartement-nm/appartement-nm';
import { AngularFireDatabase } from 'angularfire2/database';
import { VillaPage } from '../../../../pages/villa/villa';
import { AppartementMPage } from '../../../../pages/appartement-m/appartement-m';
import { ImmeublePage } from '../../../../pages/immeuble/immeuble';
import { BureauPage } from '../../../../pages/bureau/bureau';
import { MagasinPage } from '../../../../pages/magasin/magasin';
import { BailPage } from '../../../../pages/bail/bail';

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
    arrData : any

    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public afData: AngularFireDatabase) {

      //this.arrData = this.afData.list("/services/villa").valueChanges();
      //console.log("liste", this.arrData);
     }

    onEvent(event: string, item: any, e: any) {
        if (this.events[event]) {
            this.events[event](item);
        }


        // on modifier


        if( event == "onModifierVilla")
        {
            this.navCtrl.push(ModifcationProduitPage, {item: item, event: event});
        }

        if( event == "onModifierAppartsNM")
        {
            this.navCtrl.push(ModifcationProduitPage, {item: item, event: event});
        }

        if( event == "onModifierAppartsM")
        {
            this.navCtrl.push(ModifcationProduitPage, {item: item, event: event});
        }

        if( event == "onModifierImmeuble")
        {
            this.navCtrl.push(ModifcationProduitPage, {item: item, event: event});
        }

        if( event == "onModifierBureau")
        {
            this.navCtrl.push(ModifcationProduitPage, {item: item, event: event});
        }

        if( event == "onModifierMagasin")
        {
            this.navCtrl.push(ModifcationProduitPage, {item: item, event: event});
        }

        if( event == "onModifierBail")
        {
            this.navCtrl.push(ModifcationProduitPage, {item: item, event: event});
        }



        //On Ajouter 


        if( event == "onAjouterVilla")
        {
            this.navCtrl.push(AjoutProduitPage, {item: "Villa"});
        }

        if( event == "onAjouterApptNM")
        {
            this.navCtrl.push(AjoutProduitPage, {item: "ApptNM"});
        }

        if( event == "onAjouterAppartsM")
        {
            this.navCtrl.push(AjoutProduitPage, {item: "AppartsM"});
        }

        if( event == "onAjouterImmeuble")
        {
            this.navCtrl.push(AjoutProduitPage, {item: "Immeuble"});
        }

        if( event == "onAjouterBureau")
        {
            this.navCtrl.push(AjoutProduitPage, {item: "Bureau"});
        }

        if( event == "onAjouterMagasin")
        {
            this.navCtrl.push(AjoutProduitPage, {item: "Magasin"});
        }

        if( event == "onAjouterBail")
        {
            this.navCtrl.push(AjoutProduitPage, {item: "Bail"});
        }


        // On supprimer


        if( event == "onSupprimerVilla")
        {
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

                    /*let index = this.data.items.indexOf(item);
                    if (index > -1) {
                    this.data.items.splice(index, 1);
                                    }*/

                    this.afData.list("/services/villa").remove(item.uid);
                    this.navCtrl.setRoot(VillaPage);
          
                }
              }
            ]
          });
          alert.present();
        
        }

        if( event == "onSupprimerAppartsNM")
        {
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

                    /*let index = this.data.items.indexOf(item);
                    if (index > -1) {
                    this.data.items.splice(index, 1);
                                    }*/

                    this.afData.list("/services/appt_non_meuble").remove(item.uid);
                    this.navCtrl.setRoot(AppartementNmPage);
          
                }
              }
            ]
          });
          alert.present();
        
        }

        if( event == "onSupprimerAppartsM")
        {
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

                    /*let index = this.data.items.indexOf(item);
                    if (index > -1) {
                    this.data.items.splice(index, 1);
                                    }*/

                    this.afData.list("/services/appt_meuble").remove(item.uid);
                    this.navCtrl.setRoot(AppartementMPage);
          
                }
              }
            ]
          });
          alert.present();
        
        }

        if( event == "onSupprimerImmeuble")
        {
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

                    /*let index = this.data.items.indexOf(item);
                    if (index > -1) {
                    this.data.items.splice(index, 1);
                                    }*/

                    this.afData.list("/services/immeuble").remove(item.uid);
                    this.navCtrl.setRoot(ImmeublePage);
          
                }
              }
            ]
          });
          alert.present();
        
        }

        if( event == "onSupprimerBureau")
        {
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

                    /*let index = this.data.items.indexOf(item);
                    if (index > -1) {
                    this.data.items.splice(index, 1);
                                    }*/

                    this.afData.list("/services/bureau").remove(item.uid);
                    this.navCtrl.setRoot(BureauPage);
          
                }
              }
            ]
          });
          alert.present();
        
        }

        if( event == "onSupprimerMagasin")
        {
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

                    /*let index = this.data.items.indexOf(item);
                    if (index > -1) {
                    this.data.items.splice(index, 1);
                                    }*/

                    this.afData.list("/services/magasin").remove(item.uid);
                    this.navCtrl.setRoot(MagasinPage);
          
                }
              }
            ]
          });
          alert.present();
        
        }

        if( event == "onSupprimerBail")
        {
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

                    /*let index = this.data.items.indexOf(item);
                    if (index > -1) {
                    this.data.items.splice(index, 1);
                                    }*/

                    this.afData.list("/services/bail").remove(item.uid);
                    this.navCtrl.setRoot(BailPage);
          
                }
              }
            ]
          });
          alert.present();
        
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

                    /*let index = this.data.items.indexOf(item);
                    if (index > -1) {
                    this.data.items.splice(index, 1);
                                    }*/

                    this.afData.list("/services/villa").remove(item);
                    this.navCtrl.setRoot(VillaPage);
          
                }
              }
            ]
          });
          alert.present();
        
        
    }
}
