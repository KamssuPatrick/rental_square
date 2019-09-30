import { SpinnerModule } from '../../components/spinner/spinner.module';
import { SpinPage } from './spin';
import { NgModule } from '@angular/core';

// Ionic
import { IonicPageModule } from 'ionic-angular';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    SpinPage,
  ],
  imports: [
    IonicPageModule.forChild(SpinPage),
    SpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class YourPageNameModule {}