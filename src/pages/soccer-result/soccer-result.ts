import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-soccer-result',
  templateUrl: 'soccer-result.html',
})
export class SoccerResultPage {
  url: SafeResourceUrl;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public sanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoccerResultPage');
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://apps.netmobile.me/keyphoneapp/horse/horse_info?lang=en&country=MY");
  }

}
