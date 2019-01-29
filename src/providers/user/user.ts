import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Api } from '../api/api';

@Injectable()
export class User {
  _user: any;

  constructor(public api: Api) { }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */

  openapp(accountInfo: any) {
    let seq = this.api.post('newapp/commonapi_controller/check_Login', accountInfo).share();
    console.log(accountInfo);
    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        console.log(res);
        if (res.stt == 1 || res.stt ===1) {
          //console.log(res.stt);
          //this._loggedIn(res.res);
          //this.storage.set("existedUser", res.res.id);
        }
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }
}
