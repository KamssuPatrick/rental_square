import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MenuProvider} from '../providers/menu/menu';
import { PaypalPage } from '../pages/paypal/paypal';

import { HomePage } from '../pages/home/home';
import { AccueilPage } from '../pages/accueil/accueil';
import { PaiementPage } from '../pages/paiement/paiement';
import { TabsPage } from '../pages/tabs/tabs';
import { AdminPage } from '../pages/admin/admin';
import { GestionUtilisateurPage } from '../pages/gestion-utilisateur/gestion-utilisateur';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  @ViewChild(Nav) nav: Nav;
  
  pages: Array<{title: string, component: any}>;
  

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {

    this.pages = [
      { title: 'Gestion des utilisateurs', component: "UtilisateurPage" },
      { title: 'Villa', component: "VillaPage" },
      { title: 'Appartements non meublés', component: "AppartementNmPage" },
      { title: 'Appartements meublés', component: "AppartementMPage" },
      { title: 'Immeuble', component: "ImmeublePage" },
      { title: 'Bureau', component: "BureauPage" },
      { title: 'Magasins/Boutiques/Local commercial', component: "MagasinPage" },
      { title: 'Bail emphytéotique', component: "BailPage" },
      { title: 'Messagerie', component: "MessageriePage" },
      { title: 'Mon Profil', component: "MonprofilePage" },
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  Accueil()
  {
    this.nav.setRoot(AdminPage);
  }

  GestionUtilisateur()
  {
    this.nav.push(GestionUtilisateurPage);
  }
}

