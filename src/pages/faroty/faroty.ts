import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Platform } from 'ionic-angular/platform/platform';
import { finalize } from 'rxjs/operators';
import { HTTP } from '@ionic-native/http/ngx';
import { from } from 'rxjs/observable/from';

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
  data = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private http: Http,
    public httpClient: HttpClient, private plt: Platform, private loadingCtrl: LoadingController,
    private nativeHttp: HTTP) {

    this.type = navParams.get('type');
    console.log(this.type);
  }

  

  async payWithfaroty()
  {

    /*console.log("test Faroty");
    this.http.post('https://api.faroty.com/index.php?r=site/payrequest', {
    content: 'hello',
    submittedBy: 'Josh'
}).subscribe((response) => {
    console.log(response);
});*/

  let loading = await this.loadingCtrl.create();
  await loading.present();

  let nativeCall = this.nativeHttp.get('https://api.faroty.com/index.php?r=site/payrequest', {}, {});

  from(nativeCall).pipe(
    finalize(()=> loading.dismiss)
  ).subscribe(data => {

    
    console.log('native data: ', data);
    this.data = JSON.parse(data.data);
  }, err => {
    console.log('error ', err);;
  })

  /*this.http.get('https://api.faroty.com/index.php?r=site/payrequest').pipe(
    finalize(()=> loading.dismiss())
  ).subscribe(data => {
    this.data = data['results'];
    console.log('resultat ', this.data);
  }, err => {
    console.log('JS Call error: ', err);
  });*/

  }

  

}
