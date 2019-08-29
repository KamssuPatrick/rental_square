import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { LoginLayout1 } from '../components/login/layout-1/login-layout-1';
import { RegisterLayout2 } from '../components/register/layout-2/register-layout-2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { RegisterPage } from '../pages/register/register';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginLayout1,
    RegisterPage,
    RegisterLayout2
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginLayout1,
    RegisterPage,
    RegisterLayout2
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
