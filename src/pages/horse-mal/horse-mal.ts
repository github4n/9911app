import {Component }from '@angular/core'; 
import {IonicPage, NavController, NavParams, LoadingController, Loading }from 'ionic-angular'; 

import {DomSanitizer, SafeResourceUrl }from '@angular/platform-browser'; 
/**
 * Generated class for the HorseMalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on * Ionic pages and navigation. */

@IonicPage()
@Component( {
selector:'page-horse-mal', 
templateUrl:'horse-mal.html', 
})
export class HorseMalPage {
  url:SafeResourceUrl; 
  loading:Loading; 
//url:string='';

constructor(
  public navCtrl:NavController, 
  public sanitizer:DomSanitizer, 
  public loadingCtrl:LoadingController, 
  public navParams:NavParams) {
    this.loading = this.loadingCtrl.create( {
      content:'Please wait...'
    }); 
}

ionViewDidLoad():void  {
  this.loading = this.loadingCtrl.create( {
    content:'Please wait...'
  }); 

  this.loading.present(); 
  console.log('ionViewDidLoad HorseMalPage'); 
  this.url = this.sanitizer.bypassSecurityTrustResourceUrl("http://apps.netmobile.me/keyphoneapp/horse/horse_info?lang=en&&country="+"MY");  
}

handleIFrameLoadEvent():void {
  this.loading.dismiss(); 
}

}
