import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-soccer',
  templateUrl: 'soccer.html',
})
export class SoccerPage {
  url: SafeResourceUrl;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public sanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoccerPage');
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://apps.netmobile.me/keyphoneapp/horse/horse_info?lang=en&country=MY");
  }

}
