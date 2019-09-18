// Angular
import { NgModule } from '@angular/core';

// Ionic
import { IonicPageModule } from 'ionic-angular';

// Pages
import { SwipeToDismissLayout2Module } from '../../components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss-layout-2.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BureauPage } from './bureau';

@NgModule({
    declarations: [
      BureauPage
    ],
    imports: [
      IonicPageModule.forChild(BureauPage),
      SwipeToDismissLayout2Module 
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  
  export class BureauPageModule {}