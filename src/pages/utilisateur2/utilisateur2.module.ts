import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Utilisateur2Page } from './utilisateur2';
import { IonicPageModule } from 'ionic-angular';
import { AppearanceAnimationLayout3Module } from '../../components/list-view/appearance-animation/layout-3/appearance-animation-layout-3.module';

 @NgModule({
 declarations: [
    Utilisateur2Page,
 ],
 imports: [
   IonicPageModule.forChild(Utilisateur2Page),
   AppearanceAnimationLayout3Module
 ],
 schemas: [CUSTOM_ELEMENTS_SCHEMA]
 })

 export class Utilisateur2PageModule {}