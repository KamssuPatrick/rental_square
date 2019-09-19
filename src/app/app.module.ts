import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { LoginLayout1 } from '../components/login/layout-1/login-layout-1';
import { RegisterLayout2 } from '../components/register/layout-2/register-layout-2';
import { WizardLayout3 } from '../components/wizard/layout-3/wizard-layout-3';
import { GoogleCardLayout1 } from '../components/list-view/google-card/layout-1/google-card-layout-1';
import { ImageGalleryLayout1Module } from '../components/image-gallery/layout-1/image-gallery-layout-1.module';
import { SubImageGalleryModule } from '../components/sub-image-gallery/sub-image-gallery.module';
import { FullScreenGalleryModule } from '../components/full-screen-gallery/full-screen-gallery.module';
import { GoogleCardLayout2Module } from '../components/list-view/google-card/layout-2/google-card-layout-2.module';
import {ParallaxLayout3Module} from '../components/parallax/layout-3/parallax-layout-3.module';
import { SpinnerModule } from '../components/spinner/spinner.module';
import { SearchBarLayout1Module } from '../components/search-bar/layout-1/search-bar-layout-1.module';
import { AppearanceAnimationLayout5Module } from '../components/list-view/appearance-animation/layout-5/appearance-animation-layout-5.module';
import { ItemDetailsPageFullScreenGallery } from '../pages/item-details-full-screen-gallery/item-details-full-screen-gallery';




import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from '../config';
import { Config } from '../config';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';



import { WizardPage } from '../pages/wizard/wizard';
import { AccueilPage } from '../pages/accueil/accueil';
import { ProduitPage } from '../pages/produit/produit';
import { ProduitDetailsPage } from '../pages/produit-details/produit-details';
import { SpinnerPage } from '../pages/spinner/spinner';
import { AdminPage } from '../pages/admin/admin';
import { GalleryImagePage } from '../pages/gallery-image/gallery-image';

import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppSettings } from '../services/app-settings';
import { RegisterPage } from '../pages/register/register';
import { AuthService } from '../services/auth.service';
import { Tabs1Page } from '../pages/tabs1/tabs1';
import { Tabs2Page } from '../pages/tabs2/tabs2';
import { TabsPage } from '../pages/tabs/tabs';
import { Tabs3Page } from '../pages/tabs3/tabs3';
import { Tabs4Page } from '../pages/tabs4/tabs4';
import { GestionUtilisateurPage } from '../pages/gestion-utilisateur/gestion-utilisateur';
import { MenuProvider } from '../providers/menu/menu';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginLayout1,
    RegisterLayout2,
    WizardPage,
    WizardLayout3,
    AccueilPage,
    GoogleCardLayout1,
    ProduitPage,
    ProduitDetailsPage,
    SpinnerPage,
    AdminPage,
    GalleryImagePage,
    ItemDetailsPageFullScreenGallery,
    RegisterPage,
    Tabs1Page,
    Tabs2Page,
    TabsPage,
    Tabs3Page,
    Tabs4Page
  ],
  imports: [
    BrowserModule,
    NgxErrorsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(AppSettings.FIREBASE_CONFIG),
    AngularFireDatabaseModule, AngularFireAuthModule,
    ImageGalleryLayout1Module, SubImageGalleryModule, FullScreenGalleryModule, GoogleCardLayout2Module,
    ParallaxLayout3Module,SpinnerModule,SearchBarLayout1Module, AppearanceAnimationLayout5Module, HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginLayout1,
    RegisterLayout2,
    WizardPage,
    WizardLayout3,
    AccueilPage,
    GoogleCardLayout1,
    ProduitPage,
    ProduitDetailsPage,
    SpinnerPage,
    AdminPage,
    GalleryImagePage,
    ItemDetailsPageFullScreenGallery,
    RegisterPage,
    Tabs1Page,
    Tabs2Page,
    TabsPage,
    Tabs3Page,
    Tabs4Page
    
  ],
  providers: [
    Config,
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    GoogleAnalytics,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MenuProvider
  ]
})
export class AppModule {}
