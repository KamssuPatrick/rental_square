import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MenuProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MenuProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MenuProvider Provider');
  }

  getSideMenus()
  {
    return [{
      title: 'Home', component: "AdminPage"
    },
    {
      title: 'Topics',
      subPages: [{
        title: 'Topic1',
        component: "HomePage"
      },
    {
      title: 'Topic1',
      component: "HomePage" 
    }]
    }
  ];
  }

}
