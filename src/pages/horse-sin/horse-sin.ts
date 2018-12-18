import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-horse-sin',
  templateUrl: 'horse-sin.html',
})
export class HorseSinPage {
  url: SafeResourceUrl;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public sanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorseSinPage');
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://apps.netmobile.me/keyphoneapp/horse/horse_info?lang=en&country=MY");
  }

}
