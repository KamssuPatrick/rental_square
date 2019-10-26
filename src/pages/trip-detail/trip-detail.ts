import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
/*import {TripService} from "../../services/trip-service";
import {CheckoutTripPage} from "../checkout-trip/checkout-trip";

@Component({
  selector: 'page-trip-detail',
  templateUrl: 'trip-detail.html'
})
export class TripDetailPage {
  // trip info
  public trip: any;
  public tarif: any;
  // number of adult
  public adults = 2;
  // number of children
  public children = 0;

  public envoiData: any;

  constructor(public nav: NavController, public tripService: TripService, public navParams: NavParams) {
    // set sample data
    this.trip = tripService.getItem(1);
    this.tarif = this.navParams.data.lesservices;
  }

  // minus adult when click minus button
  minusAdult() {
    this.adults--;
  }

  // plus adult when click plus button
  plusAdult() {
    this.adults++;
  }

  // minus children when click minus button
  minusChildren() {
    this.children--;
  }

  // plus children when click plus button
  plusChildren() {
    this.children++;
  }

  // go to checkout page
  checkout(item) {
    //this.nav.push(CheckoutTripPage);
    this.envoiData = "[{'date':'03\/08\/2019','heure':09','nombrePersonne':1,'montant':3000,'numeroSiege':14,'statut':'Simple','client':{'id':1,'nom':'Simo','prenom':'Patrick','telephone':658742314,'reservation':[],'utilisateur':{'id':1,'username':'patson','usernameCanonical':'patson,'email':'p.arnold69@yahoo.fr','emailCanonical':'p.arnold69@yahoo.fr','enabled':true,'salt':'72\/jRqUDAUIlyjI10knLebW8wdoPIEY0szDzBuInZiU','password':'QkrVU5+bME8wIcZu23YsHWXV0\/\/oyKADadMjhWLXgLToEiTw0m1OktjKacR\/ueak3YwzNFbrrQK19eXROO55CA==','lastLogin':'2019-07-19T10:21:40+00:00','roles':[]}},'voyage':{'id':1,'itineraire':'Douala-Yaounde','dateDepart':'27\/08\/2019','heureDepart':'13 heures','tarif':3000,'lieuDepart':'Akwa','categorie':'Simple','agence':{'id':1,'nomAgence':'pat','localisation':'logbessou','position':'25 Long','societe':{'id':1,'nom':'KamssuCorps','agence':[]},'personnel':[{'id':1,'nom':'arnold','prenom':'ar','telephone':65478235,'email':'psdq','type_poste':{'id':1,'nom':'Chauffeur','personnel':[]},'personnel':[],'utilisateur':{'id':1,'username':'patson','usernameCanonical':'patson','email':'p.arnold69@yahoo.fr','emailCanonical':'p.arnold69@yahoo.fr','enabled':true,'salt':'72\/jRqUDAUIlyjI10knLebW8wdoPIEY0szDzBuInZiU','password':'QkrVU5+bME8wIcZu23YsHWXV0\/\/oyKADadMjhWLXgLToEiTw0m1OktjKacR\/ueak3YwzNFbrrQK19eXROO55CA==','lastLogin':'2019-07-19T10:21:40+00:00','roles':[]}}],'voyage':[],'bus':[{'id':1,'imatriculation':'4a5236','nbreSiege':72,'voyage':[]}]},'personnel':{'id':1,'nom':'arnold','prenom':'ar','telephone':65478235,'email':'psdq','agence':{'id':1,'nomAgence':'pat','localisation':'logbessou','position':'25 Long','societe':{'id':1,'nom':'KamssuCorps','agence':[]},'personnel':[],'voyage':[],'bus':[{'id':1,'imatriculation':'4a5236','nbreSiege':72,'voyage':[]}]},'type_poste':{'id':1,'nom':'Chauffeur','personnel':[]},'personnel':[],'utilisateur':{'id':1,'username':'patson','usernameCanonical':'patson','email':'p.arnold69@yahoo.fr','emailCanonical':'p.arnold69@yahoo.fr','enabled':true,'salt':'72\/jRqUDAUIlyjI10knLebW8wdoPIEY0szDzBuInZiU','password':'QkrVU5+bME8wIcZu23YsHWXV0\/\/oyKADadMjhWLXgLToEiTw0m1OktjKacR\/ueak3YwzNFbrrQK19eXROO55CA==','lastLogin':'2019-07-19T10:21:40+00:00','roles':[]}},'reservation':[],'nom_destination':{'id':1,'nom':'Mvan','ville':'Yaounde','voyage':[]},'bus':{'id':1,'imatriculation':'4a5236','nbreSiege':72,'agence':{'id':1,'nomAgence':'pat','localisation':'logbessou','position':'25 Long','societe':{'id':1,'nom':'KamssuCorps','agence':[]},'personnel':[{'id':1,'nom':'arnold','prenom':'ar','telephone':65478235,'email':'psdq','type_poste':{'id':1,'nom':'Chauffeur','personnel':[]},'personnel':[],'utilisateur':{'id':1,'username':'patson','usernameCanonical':'patson','email':'p.arnold69@yahoo.fr','emailCanonical':'p.arnold69@yahoo.fr','enabled':true,'salt':'72\/jRqUDAUIlyjI10knLebW8wdoPIEY0szDzBuInZiU','password':'QkrVU5+bME8wIcZu23YsHWXV0\/\/oyKADadMjhWLXgLToEiTw0m1OktjKacR\/ueak3YwzNFbrrQK19eXROO55CA==','lastLogin':'2019-07-19T10:21:40+00:00','roles':[]}}],'voyage':[],'bus':[]},'voyage':[]}},'code':{'id':1,'code':'12456398'},'paiement':{'id':1,'montant':3000,'operateur':'Orange'}}]";
    this.postData(this.envoiData); 
  }

  postData(data) {
    this.tripService.PostServices('http://127.0.0.1:8000/api/reservation', data).then(res => {
      //this.service = res;
      console.log(res);
    });
  }
}*/
