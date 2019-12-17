import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Clipboard } from '@ionic-native/clipboard';


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

import { SwipeToDismissLayout3Module } from '../components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss-layout-3.module'





import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { Config } from '../config';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatbodyPage } from '../pages/chatbody/chatbody';



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
import { AngularFireStorageModule } from 'angularfire2/storage';
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
import { SwipeToDismissLayout1Module } from '../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1.module';
import { AjoutProduitPage } from '../pages/ajout-produit/ajout-produit';

import * as firebase from 'firebase/app';
import { ModifcationProduitPage } from '../pages/modifcation-produit/modifcation-produit';
import { NoteListService } from '../services/note-list.service';

import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/camera';
import { DataProvider } from '../providers/data-service/data';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { GlobalProvider } from '../providers/global/global';
import { HttpModule } from '@angular/http';
import { Tabs5Page } from '../pages/tabs5/tabs5';
import { PaiementPage } from '../pages/paiement/paiement';
import { PaypalPage } from '../pages/paypal/paypal';
import { ChatProvider } from '../providers/chat/chat';
import { AuthProvider } from '../providers/auth/auth';
import { AmenagementPage } from '../pages/amenagement/amenagement';
import { IFramePage } from '../pages/i-frame/i-frame';
import { Tabs6Page } from '../pages/tabs6/tabs6';
import { FarotyPage } from '../pages/faroty/faroty';
import { DemenagementPage } from '../pages/demenagement/demenagement';
import { GestionDemePage } from '../pages/gestion-deme/gestion-deme';
import { ModificationProfilPage } from '../pages/modification-profil/modification-profil';
import { AppartPage } from '../pages/appart/appart';
import { ProduitVentePage } from '../pages/produit-vente/produit-vente';
import { SplashPage } from '../pages/splash/splash';
import { SplashScreenLayout3 } from '../components/splash-screen/layout-3/splash-screen-layout-3';
import { HTTP } from '@ionic-native/http/ngx';
import { StickyListHeaderLayout2Module } from '../components/list-view/sticky-list-header/layout-2/sticky-list-header-layout-2.module';
import { IonAffixModule } from 'ion-affix';
import { AppearanceAnimationLayout3Module } from '../components/list-view/appearance-animation/layout-3/appearance-animation-layout-3.module';
import { ListeFavorisPage } from '../pages/liste-favoris/liste-favoris';


import { PageAccueilPage } from '../pages/page-accueil/page-accueil';
import { IonicSelectableModule } from 'ionic-selectable';
import { PortService } from '../services';

var firebaseConfig = {
  apiKey: "AIzaSyBYWFYzzECy4ftcnac0D-j3EseW27jfXw8",
  authDomain: "rentalsquares.firebaseapp.com",
  databaseURL: "https://rentalsquares.firebaseio.com",
  projectId: "rentalsquares",
  storageBucket: "rentalsquares.appspot.com",
  messagingSenderId: "931472530554",
  appId: "1:931472530554:web:2ac58883a6386c5a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


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
    Tabs4Page,
    Tabs5Page,
    Tabs6Page,
    GestionUtilisateurPage, 
    AjoutProduitPage,
    ModifcationProduitPage,
    PaiementPage,
    PaypalPage,
    ChatbodyPage,
    AmenagementPage,
    DemenagementPage,
    GestionDemePage,
    ModificationProfilPage,
    AppartPage,
    ProduitVentePage,
    SplashPage,
    SplashScreenLayout3,
    IFramePage,
    FarotyPage,
    ListeFavorisPage,
    PageAccueilPage
  ],
  imports: [
    BrowserModule,
    NgxErrorsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(AppSettings.FIREBASE_CONFIG),
    AngularFireDatabaseModule, AngularFireAuthModule, AngularFireStorageModule,IonAffixModule,
    HttpModule,
    ImageGalleryLayout1Module, SubImageGalleryModule, FullScreenGalleryModule, GoogleCardLayout2Module,
    ParallaxLayout3Module,SpinnerModule,SearchBarLayout1Module, AppearanceAnimationLayout5Module, HttpClientModule, SwipeToDismissLayout1Module,SwipeToDismissLayout3Module, 
    StickyListHeaderLayout2Module,AppearanceAnimationLayout3Module, StickyListHeaderLayout2Module,IonicSelectableModule
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
    Tabs4Page,
    Tabs5Page,
    Tabs6Page,
    GestionUtilisateurPage,
    AjoutProduitPage,
    ModifcationProduitPage,
    PaiementPage,
    PaypalPage,
    ChatbodyPage,
    AmenagementPage,
    DemenagementPage,
    GestionDemePage,
    ModificationProfilPage,
    AppartPage,
    ProduitVentePage,
    SplashPage,
    SplashScreenLayout3,
    IFramePage,
    FarotyPage,
    ListeFavorisPage,
    PageAccueilPage
    
  ],
  providers: [
    Config,
    StatusBar,
    FileTransferObject,
    FileTransfer, // <--- This one!        
    File,
    Camera,
    ImagePicker,
    DataProvider,
    SplashScreen,
    Clipboard,
    AngularFireAuth,
    GoogleAnalytics,
    AuthService,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MenuProvider,
    NoteListService,
    GlobalProvider,
    ChatProvider,
    AuthProvider,
    HTTP,
    PortService
  ]
})
export class AppModule {}
