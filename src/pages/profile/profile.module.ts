// Angular
import { NgModule } from '@angular/core';

// Ionic
import { IonicPageModule } from 'ionic-angular';

// Pages
import { ProfilePage } from './profile';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
    declarations: [
        ProfilePage
    ],
    imports: [
      IonicPageModule.forChild(ProfilePage)
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  
  export class ProfilePageModule {}