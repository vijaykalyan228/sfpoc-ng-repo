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
  constructor(public auth: Auth) { }
}

export interface Contact {
  Id: string;
  FirstName: string;
  LastName: string;
  Phone: string;
};

//ng build --prod --base-href /sfpoc-ng/ ngh
