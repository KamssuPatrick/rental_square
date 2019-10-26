import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, LoadingController, AlertController } from 'ionic-angular';
import { ModifcationProduitPage } from '../modifcation-produit/modifcation-produit';
import { AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Tabs1Page } from '../tabs1/tabs1';
/**
 * Generated class for the ProduitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-produit',
  templateUrl: 'produit.html',
})
export class ProduitPage {

  params: any = {};
  ref: any;
  value:any;
  types: any;
  newVal

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public alertController: AlertController) {

    this.value = navParams.get('pat');
    
    console.log("isisssssss", this.value);

    this.newVal = this.value;

    this.presentLoading(this.newVal);

    this.params.events = {
      'onItemClick': function (item: any) {
         console.log("item");
         },
      'onShare': function (item: any) {
         console.log("Share");
         },
      'onButtonClick': function (item: any) {
         console.log("Refine");
         }
     };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProduitPage');
  }

  getAllUsers(values){ 
    if(values == 0)
    {
      this.types = "Villa";

      console.log("paa", this.types);
		let params={"titre" : this.types,"items":[]};
		let items=[]; 

      this.ref.on('value',  function(snapshot) {
        let i=0;
      
        
        let keyyy=[];
        let link: any;
        keyyy= Object.keys(snapshot.val());
        snapshot.forEach(function(data){
          let propic:any;
          let nn= firebase.database().ref(`files/villa/profile/${data.val().profilePic}`);
          nn.on('value', function(idPP){
            propic=idPP;
            console.log("propic: ",propic.val().fullPath);
            let urli=propic.val().fullPath;
            var storage = firebase.storage();
            var pathReference = storage.ref();
            //console.log("urli: ",urli);
            
            pathReference.child(urli).getDownloadURL().then(function(url) {
              link=url;
  
              params.items[i]={
                "uid": keyyy[i],
                "autre": data.val().autre,
                "avis": data.val().avis,
                "chambre": data.val().chambre,
                "cuisine": data.val().cuisine,
                "parking": data.val().parking,
                "prix": data.val().prix,
                "salon": data.val().salon,
                "surface": data.val().surface,
                "terrasse": data.val().terrasse,
                "toilette": data.val().toilette,
                "etage": data.val().etage,
                "image": link
              };
              
              i++;
              console.log("ImgUrl",link);
            }).catch(function(error) {
              // Handle any errors
              console.log("error admin: ",error)
            });
          });
  
        
        });
        
       
      });

      console.log("helllllllllooooooooooo",params)
	   return params;
    }

    if(values == 1)
    {
      this.types = "Appartement";

      console.log("paa", this.types);
		let params={"titre" : this.types,"items":[]};
		let items=[]; 

      this.ref.on('value',  function(snapshot) {
        let i=0;
      
        
        let keyyy=[];
        let link: any;
        keyyy= Object.keys(snapshot.val());
        snapshot.forEach(function(data){
          let propic:any;
          let nn= firebase.database().ref(`files/appt_non_meuble/profile/${data.val().profilePic}`);
          nn.on('value', function(idPP){
            propic=idPP;
            console.log("propic: ",propic.val().fullPath);
            let urli=propic.val().fullPath;
            var storage = firebase.storage();
            var pathReference = storage.ref();
            //console.log("urli: ",urli);
            
            pathReference.child(urli).getDownloadURL().then(function(url) {
              link=url;
  
              params.items[i]={
                "uid": keyyy[i],
                "autre": data.val().autre,
                "avis": data.val().avis,
                "chambre": data.val().chambre,
                "cuisine": data.val().cuisine,
                "parking": data.val().parking,
                "prix": data.val().prix,
                "salon": data.val().salon,
                "surface": data.val().surface,
                "terrasse": data.val().terrasse,
                "toilette": data.val().toilette,
                "etage": data.val().etage,
                "image": link
              };
              
              i++;
              console.log("ImgUrl",link);
            }).catch(function(error) {
              // Handle any errors
              console.log("error admin: ",error)
            });
          });
  
        
        });
        
       
      });

      console.log("helllllllllooooooooooo",params)
	   return params;

    }

    if(values == 2)
    {
      this.types = "Appartement meublé";

      console.log("paa", this.types);
		let params={"titre" : this.types,"items":[]};
		let items=[]; 

      this.ref.on('value',  function(snapshot) {
        let i=0;
      
        
        let keyyy=[];
        let link: any;
        keyyy= Object.keys(snapshot.val());
        snapshot.forEach(function(data){
          let propic:any;
          let nn= firebase.database().ref(`files/appt_meuble/profile/${data.val().profilePic}`);
          nn.on('value', function(idPP){
            propic=idPP;
            console.log("propic: ",propic.val().fullPath);
            let urli=propic.val().fullPath;
            var storage = firebase.storage();
            var pathReference = storage.ref();
            //console.log("urli: ",urli);
            
            pathReference.child(urli).getDownloadURL().then(function(url) {
              link=url;
  
              params.items[i]={
                "uid": keyyy[i],
                "autre": data.val().autre,
                "avis": data.val().avis,
                "chambre": data.val().chambre,
                "cuisine": data.val().cuisine,
                "parking": data.val().parking,
                "prix": data.val().prix,
                "salon": data.val().salon,
                "surface": data.val().surface,
                "terrasse": data.val().terrasse,
                "toilette": data.val().toilette,
                "etage": data.val().etage,
                "image": link
              };
              
              i++;
              console.log("ImgUrl",link);
            }).catch(function(error) {
              // Handle any errors
              console.log("error admin: ",error)
            });
          });
  
        
        });
        
       
      });

      console.log("helllllllllooooooooooo",params)
	   return params;
    }

    if(values == 3)
    {
      this.types = "Immeuble";

      console.log("paa", this.types);
		let params={"titre" : this.types,"items":[]};
		let items=[]; 

      this.ref.on('value',  function(snapshot) {
        let i=0;
      
        
        let keyyy=[];
        let link: any;
        keyyy= Object.keys(snapshot.val());
        snapshot.forEach(function(data){
          let propic:any;
          let nn= firebase.database().ref(`files/immeuble/profile/${data.val().profilePic}`);
          nn.on('value', function(idPP){
            propic=idPP;
            console.log("propic: ",propic.val().fullPath);
            let urli=propic.val().fullPath;
            var storage = firebase.storage();
            var pathReference = storage.ref();
            //console.log("urli: ",urli);
            
            pathReference.child(urli).getDownloadURL().then(function(url) {
              link=url;
  
              params.items[i]={
                "uid": keyyy[i],
                "autre": data.val().autre,
                "avis": data.val().avis,
                "chambre": data.val().chambre,
                "cuisine": data.val().cuisine,
                "parking": data.val().parking,
                "prix": data.val().prix,
                "salon": data.val().salon,
                "surface": data.val().surface,
                "terrasse": data.val().terrasse,
                "toilette": data.val().toilette,
                "etage": data.val().etage,
                "image": link
              };
              
              i++;
              console.log("ImgUrl",link);
            }).catch(function(error) {
              // Handle any errors
              console.log("error admin: ",error)
            });
          });
  
        
        });
        
       
      });

      console.log("helllllllllooooooooooo",params)
	   return params;

    }

    if(values == 4)
    {
      this.types = "Bureau";

      console.log("paa", this.types);
		let params={"titre" : this.types,"items":[]};
		let items=[]; 

      this.ref.on('value',  function(snapshot) {
        let i=0;
      
        
        let keyyy=[];
        let link: any;
        keyyy= Object.keys(snapshot.val());
        snapshot.forEach(function(data){
          let propic:any;
          let nn= firebase.database().ref(`files/bureau/profile/${data.val().profilePic}`);
          nn.on('value', function(idPP){
            propic=idPP;
            console.log("propic: ",propic.val().fullPath);
            let urli=propic.val().fullPath;
            var storage = firebase.storage();
            var pathReference = storage.ref();
            //console.log("urli: ",urli);
            
            pathReference.child(urli).getDownloadURL().then(function(url) {
              link=url;
  
              params.items[i]={
                "uid": keyyy[i],
                "autre": data.val().autre,
                "avis": data.val().avis,
                "chambre": data.val().chambre,
                "cuisine": data.val().cuisine,
                "parking": data.val().parking,
                "prix": data.val().prix,
                "salon": data.val().salon,
                "surface": data.val().surface,
                "terrasse": data.val().terrasse,
                "toilette": data.val().toilette,
                "etage": data.val().etage,
                "image": link
              };
              
              i++;
              console.log("ImgUrl",link);
            }).catch(function(error) {
              // Handle any errors
              console.log("error admin: ",error)
            });
          });
  
        
        });
        
       
      });

      console.log("helllllllllooooooooooo",params)
	   return params;
    }

    if(values == 5)
    {
      this.types = "Magasin";

      console.log("paa", this.types);
		let params={"titre" : this.types,"items":[]};
		let items=[]; 

      this.ref.on('value',  function(snapshot) {
        let i=0;
      
        
        let keyyy=[];
        let link: any;
        keyyy= Object.keys(snapshot.val());
        snapshot.forEach(function(data){
          let propic:any;
          let nn= firebase.database().ref(`files/magasin/profile/${data.val().profilePic}`);
          nn.on('value', function(idPP){
            propic=idPP;
            console.log("propic: ",propic.val().fullPath);
            let urli=propic.val().fullPath;
            var storage = firebase.storage();
            var pathReference = storage.ref();
            //console.log("urli: ",urli);
            
            pathReference.child(urli).getDownloadURL().then(function(url) {
              link=url;
  
              params.items[i]={
                "uid": keyyy[i],
                "autre": data.val().autre,
                "avis": data.val().avis,
                "chambre": data.val().chambre,
                "cuisine": data.val().cuisine,
                "parking": data.val().parking,
                "prix": data.val().prix,
                "salon": data.val().salon,
                "surface": data.val().surface,
                "terrasse": data.val().terrasse,
                "toilette": data.val().toilette,
                "etage": data.val().etage,
                "image": link
              };
              
              i++;
              console.log("ImgUrl",link);
            }).catch(function(error) {
              // Handle any errors
              console.log("error admin: ",error)
            });
          });
  
        
        });
        
       
      });

      console.log("helllllllllooooooooooo",params)
	   return params;
    }

    if(values == 6)
    {
      this.types = "Bail";

      console.log("paa", this.types);
		let params={"titre" : this.types,"items":[]};
		let items=[]; 

      this.ref.on('value',  function(snapshot) {
        let i=0;
      
        
        let keyyy=[];
        let link: any;
        keyyy= Object.keys(snapshot.val());
        snapshot.forEach(function(data){
          let propic:any;
          let nn= firebase.database().ref(`files/bail/profile/${data.val().profilePic}`);
          nn.on('value', function(idPP){
            propic=idPP;
            console.log("propic: ",propic.val().fullPath);
            let urli=propic.val().fullPath;
            var storage = firebase.storage();
            var pathReference = storage.ref();
            //console.log("urli: ",urli);
            
            pathReference.child(urli).getDownloadURL().then(function(url) {
              link=url;
  
              params.items[i]={
                "uid": keyyy[i],
                "autre": data.val().autre,
                "avis": data.val().avis,
                "chambre": data.val().chambre,
                "cuisine": data.val().cuisine,
                "parking": data.val().parking,
                "prix": data.val().prix,
                "salon": data.val().salon,
                "surface": data.val().surface,
                "terrasse": data.val().terrasse,
                "toilette": data.val().toilette,
                "etage": data.val().etage,
                "image": link
              };
              
              i++;
              console.log("ImgUrl",link);
            }).catch(function(error) {
              // Handle any errors
              console.log("error admin: ",error)
            });
          });
  
        
        });
        
       
      });

      console.log("helllllllllooooooooooo",params)
	   return params;

    }

       

    
    	



		
		
    }
    
    presentLoading(values) {
      const loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 1000
      });

      if(values == 0)
      {
        this.ref =  firebase.database().ref("services/villa");
        if(this.ref === 'null')
        {
          this.presentAlert();
        }
      }

      if(values == 1)
      {
        this.ref =  firebase.database().ref("services/appt_non_meuble");
        if(this.ref == null)
        {
          this.presentAlert();
        }
      }

      if(values == 2)
      {
        this.ref =  firebase.database().ref("services/appt_meuble");
        if(this.ref === 'null')
        {
          this.presentAlert();
        }
      }

      if(values == 3)
      {
        this.ref =  firebase.database().ref("services/immeuble");
        if(this.ref == null)
        {
          this.presentAlert();
        }
      }

      if(values == 4)
      {
        this.ref =  firebase.database().ref("services/bureau");
        if(this.ref == null)
        {
          this.presentAlert();
        }
      }

      if(values == 5)
      {
        this.ref =  firebase.database().ref("services/magasin");
        if(this.ref == null)
        {
          this.presentAlert();
        }
      }

      if(values == 6)
      {
        this.ref =  firebase.database().ref("services/bail");
        if(this.ref == null)
        {
          this.presentAlert();
        }
      }

      
    this.params.data = this.getAllUsers(values);
    loader.present();

    }

    async presentAlert() {
      const alert = await this.alertController.create({
        title: 'Pas de données',
        message: 'Aucune donnée n\'a été enregistrée',
        buttons: ['OK']
      });

      this.navCtrl.push(Tabs1Page);
  
      await alert.present();
    }

}
