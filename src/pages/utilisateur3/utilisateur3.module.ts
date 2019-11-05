import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Utilisateur3Page } from './utilisateur3';
import { IonicPageModule } from 'ionic-angular';
import { AppearanceAnimationLayout4Module } from '../../components/list-view/appearance-animation/layout-4/appearance-animation-layout-4.module';

 @NgModule({
 declarations: [
    Utilisateur3Page,
 ],
 imports: [
   IonicPageModule.forChild(Utilisateur3Page),
   AppearanceAnimationLayout4Module
 ],
 schemas: [CUSTOM_ELEMENTS_SCHEMA]
 })

 export class Utilisateur3PageModule {}