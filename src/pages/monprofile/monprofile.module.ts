// Angular
import { NgModule } from '@angular/core';

// Ionic
import { IonicPageModule } from 'ionic-angular';

// Pages
import { MonprofilePage } from './monprofile';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
    declarations: [
        MonprofilePage
    ],
    imports: [
      IonicPageModule.forChild(MonprofilePage)
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  
  export class MonprofilePageModule {}