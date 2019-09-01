import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

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





import { RegisterPage } from '../pages/register/register';
import { WizardPage } from '../pages/wizard/wizard';
import { AccueilPage } from '../pages/accueil/accueil';
import { ProduitPage } from '../pages/produit/produit';
import { ProduitDetailsPage } from '../pages/produit-details/produit-details';
import { SpinnerPage } from '../pages/spinner/spinner';
import { AdminPage } from '../pages/admin/admin';
import { GalleryImagePage } from '../pages/gallery-image/gallery-image';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginLayout1,
    RegisterPage,
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
    ItemDetailsPageFullScreenGallery
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ImageGalleryLayout1Module, SubImageGalleryModule, FullScreenGalleryModule, GoogleCardLayout2Module,
    ParallaxLayout3Module,SpinnerModule,SearchBarLayout1Module, AppearanceAnimationLayout5Module
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginLayout1,
    RegisterPage,
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
    ItemDetailsPageFullScreenGallery
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
