import { Component }from '@angular/core'; 
import { IonicPage, NavController, NavParams, LoadingController, Loading }from 'ionic-angular'; 
import { Storage } from '@ionic/storage';

import { DomSanitizer, SafeResourceUrl }from '@angular/platform-browser'; 
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
  lang:any='en';
  url:SafeResourceUrl; 
  loading:Loading; 

  constructor(
    public navCtrl:NavController, 
    public sanitizer:DomSanitizer, 
    public loadingCtrl:LoadingController, 
    public navParams:NavParams,
    public storage: Storage) {
      this.loading = this.loadingCtrl.create( {
        content:'Please wait...'
      }); 
      if(this.storage.get('_lang')==null)
      {
        this.storage.set('_lang',"en");
      }
      else {
        storage.get('_lang').then((val) => {
          this.lang = val;               
        });
      }

  }

  ionViewDidLoad():void  {
    this.loading = this.loadingCtrl.create({
      content:'Please wait...'
    }); 
    this.loading.present(); 
    this.storage.get('_lang').then((val) => {
      this.lang = val;
      console.log(val);
      let sLink = "http://apps.netmobile.me/keyphoneapp/horse/horse_info?lang="+val+"&&country=MY";
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(sLink); 
    });
  }

  handleIFrameLoadEvent():void {
    this.loading.dismiss(); 
  }

}
