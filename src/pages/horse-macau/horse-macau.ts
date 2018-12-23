import { Component }from '@angular/core'; 
import { IonicPage, NavController, NavParams, LoadingController, Loading }from 'ionic-angular'; 
import { Storage } from '@ionic/storage';

import { DomSanitizer, SafeResourceUrl }from '@angular/platform-browser'; 

@IonicPage()
@Component({
  selector: 'page-horse-macau',
  templateUrl: 'horse-macau.html',
})
export class HorseMacauPage {
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
      let sLink = "http://apps.netmobile.me/keyphoneapp/horse/horse_info?lang="+val+"&&country=MC";
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(sLink); 
    });
  }

  handleIFrameLoadEvent():void {
    this.loading.dismiss(); 
  }
}
