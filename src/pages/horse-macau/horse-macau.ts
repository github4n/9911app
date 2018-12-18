import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-horse-macau',
  templateUrl: 'horse-macau.html',
})
export class HorseMacauPage {
  url: SafeResourceUrl;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public sanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorseMacauPage');
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://apps.netmobile.me/keyphoneapp/horse/horse_info?lang=en&country=MY");
  }

}
