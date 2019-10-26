import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController } from 'ionic-angular';
import { ProduitDetailsPage } from '../../../../pages/produit-details/produit-details';

@IonicPage()
@Component({
    selector: 'google-card-layout-2',
    templateUrl: 'google-card.html'
})
export class GoogleCardLayout2 {
    @Input() data: any;
    @Input() events: any;
    @ViewChild(Content)
    content: Content;
    slider = {};

    animateItems = [];
    animateClass: any;

    searchTerm: any = "";
  allItems: any;

    constructor(public navCtrl: NavController) { 

        this.animateClass = { 'fade-in-left-item': true };
    }

    getItems(event: any): void {
        if (!this.allItems) {
          this.allItems = this.data.items;
        }
        this.data.items = this.allItems.filter((item) => {
          return item.ville.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
        });
      }

    slideHasChanged(slider, index): void {
        this.slider[index] = slider;
        if (2 == slider._activeIndex) {
            if (this.data.items) {
                this.data.items.splice(index, 1);
            } else {
                this.data.splice(index, 1);
            }
        }
    }

    onClickEvent(index): void {
        if (this.slider[index]) {
            this.slider[index].slidePrev(300);
        }
    }


    onEvent(event: string, item: any, image: any, e: any) {
        if (this.events[event]) {

            if ('onTextChange' === event) {
                this.getItems(item);
                this.events[event](this.searchTerm);
              } else {
                this.events[event](item);
              }
        }

        if( event == "onItemClick")
        {
            this.navCtrl.push(ProduitDetailsPage, { item:item, image:image});
        }

        
    }
}
