import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
         import { SwipeToDismissLayout3Module } from '../../components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss-layout-3.module'
import { Tabs2Page } from './tabs2';
import { IonicPageModule } from 'ionic-angular';

          @NgModule({
            declarations: [
                Tabs2Page,
            ],
            imports: [
              IonicPageModule.forChild(Tabs2Page),
              SwipeToDismissLayout3Module
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
          })

          export class Tabs2PageModule {}