import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
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

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { RegisterPage } from '../pages/register/register';
//import { WizardPage } from '../pages/wizard/wizard';
import { AccueilPage } from '../pages/accueil/accueil';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginLayout1,
    RegisterPage,
    RegisterLayout2,
    AccueilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ImageGalleryLayout1Module, SubImageGalleryModule, FullScreenGalleryModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginLayout1,
    RegisterPage,
    RegisterLayout2,
    AccueilPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
