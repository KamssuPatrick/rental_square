import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the FarotyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-faroty',
  templateUrl: 'faroty.html',
})
export class FarotyPage {

  type

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private http: Http,
    public httpClient: HttpClient) {

    this.type = navParams.get('type');
    console.log(this.type);
  }

  

  payWithfaroty()
  {

    console.log("test Faroty");
    this.http.post('https://api.faroty.com/index.php?r=site/payrequest', {
    content: 'hello',
    submittedBy: 'Josh'
}).subscribe((response) => {
    console.log(response);
});
  }

  

}
