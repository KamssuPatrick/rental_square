import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController } from 'ionic-angular';
import { GalleryImagePage } from '../../../pages/gallery-image/gallery-image';

@IonicPage()
@Component({
    selector: 'parallax-layout-3',
    templateUrl: 'parallax.html'
})
export class ParallaxLayout3 {
    @Input() data: any;
    @Input() events: any;
    @ViewChild(Content)
    content: Content;

    active: boolean;
    headerImage: any = "";

    constructor(public navCtrl: NavController) { }

    onEvent(event: string, item: any, e: any) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }

        if ( "onGalleryClick" === event)
        {
            this.navCtrl.push(GalleryImagePage);
        }
    }

    ngOnChanges(changes: { [propKey: string]: any }) {
        if (changes.data && changes.data.currentValue) {
            this.headerImage = changes.data.currentValue.headerImage;
        }
        this.subscribeToIonScroll();
    }

    ngAfterViewInit() {
        this.subscribeToIonScroll();
    }

    isClassActive() {
        return this.active;
    }

    subscribeToIonScroll() {
        if (this.content != null && this.content.ionScroll != null) {
            this.content.ionScroll.subscribe((d) => {
                if (d.scrollTop < 200) {
                    this.active = false;
                    return;
                }
                this.active = true;
            });
        }
    }
}