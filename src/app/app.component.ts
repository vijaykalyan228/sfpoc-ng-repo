import { Component, Input } from '@angular/core';
import { Auth } from './auth.service';
import { RedirectComponent } from './redirect/redirect.component';
import OAuth from "forcejs/oauth";
import Service from 'forcejs/data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [Auth],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works! Hurray!';
  redirect = RedirectComponent;
  accountName: string;
  contacts: Contact[];
  result:any;
  constructor(public auth: Auth) {
    // var appId = "3MVG9szVa2RxsqBbTvNBM4YS1Pw_MLD._1AFJyJFif2PpBO.sXwzzWPRx3RPtL8On69KrgvECxlSoKcUe9c.L";
    // var proxyURL = "https://vijaykalyan228.github.io/sfpoc-ng/redirect";
    // var oauthCallbackURL = "https://vijaykalyan228.github.io/sfpoc-ng/oauth";
    //
    // let oauth = OAuth.createInstance(appId, "", oauthCallbackURL);
    // oauth.login().then(result => {
    //   this.result = result;
    //   console.log(result); // Prints access token, instance URL, and refresh token (if any)
    //   Service.createInstance(result);
    // });
  }
}

export interface Contact {
  Id: string;
  FirstName: string;
  LastName: string;
  Phone: string;
};

//ng build --prod --base-href /sfpoc-ng/ ngh
