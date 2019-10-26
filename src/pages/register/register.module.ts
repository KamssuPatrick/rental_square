import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterLayout2Module } from '../../components/register/layout-2/register-layout-2.module';
import { RegisterPage } from './register';

@NgModule({
    declarations: [
        RegisterPage,
    ],
    imports: [
        IonicPageModule.forChild(RegisterPage),
        RegisterLayout2Module
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterPageModule {}