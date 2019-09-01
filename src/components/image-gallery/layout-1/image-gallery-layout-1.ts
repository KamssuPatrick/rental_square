import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../../../pages/register/register';
import { ProduitPage } from '../../../pages/produit/produit';
import { SpinnerPage } from '../../../pages/spinner/spinner';

@IonicPage()
@Component({
  selector: 'image-gallery-layout-1',
  templateUrl: 'image-gallery-layout-1.html'
})
export class ImageGalleryLayout1 {
  @Input() data: any;
  @Input() events: any;

  constructor(public navCtrl: NavController, navParams: NavParams) { }

  openSubGallery = (group: any, index: number): any => {
    this.navCtrl.push(group.SubGallery, {
      'group': group.items[index],
      'events': this.events,
      'layout': 1
    });
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  openSubGallerys(group: any, index: number)
  {
    this.navCtrl.push(ProduitPage);
  }

  onEvent = (event: string, item, e): void => {
    if (e) {
      e.stopPropagation();
    }
    if (this.events[event]) {
      this.events[event](item);
    }
  }
}
