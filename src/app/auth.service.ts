import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { myConfig }        from './auth.config';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock(myConfig.clientID, myConfig.domain, {});
  userProfile: Object;

  constructor() {
    this.userProfile = JSON.parse(localStorage.getItem('profile'));
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      // console.log(authResult);

      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
        console.log(profile);
        var temp:string = profile.urls.query;
        var soql: string = "SELECT+Id,Name,Pricebook2Id,Product2Id+FROM+PricebookEntry+"
                    + "where+Pricebook2Id='01s410000060yT5AAI'";
        temp = temp.replace("{version}","32.0");
        console.log(temp+soql);
        localStorage.setItem('queryUrl', temp+soql);
        localStorage.setItem('profile', JSON.stringify(profile));
      });
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
  };
}
