import { Component }from '@angular/core'; 
import { IonicPage, NavController, NavParams, LoadingController, Loading }from 'ionic-angular'; 
import { Storage } from '@ionic/storage';

import { DomSanitizer, SafeResourceUrl }from '@angular/platform-browser'; 
/**
 * Generated class for the Sin4dDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sin4d-detail',
  templateUrl: 'sin4d-detail.html',
})
export class Sin4dDetailPage {

  pageDetail='';
  pageTitle='';
  lang:any='en';
  url:SafeResourceUrl; 
  loading:Loading; 

  constructor(
    public navCtrl:NavController, 
    public sanitizer:DomSanitizer, 
    public loadingCtrl:LoadingController, 
    public navParams:NavParams,
    public storage: Storage) {
      this.pageDetail = navParams.get("page");
      console.log(this.pageDetail);

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
      if(this.pageDetail=="sin4DLive")
      { 
        this.pageTitle = (val=='en')?"Sin 4D Live":"sin4DLive";
        let sLink = "http://apps.netmobile.me/app/lottry/sin_live_draw?lang="+val;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(sLink); 
      }
      if(this.pageDetail=="sin4D")
      { 
        this.pageTitle = (val=='en')?"Sin 4D":"sin4D";
        let sLink = "http://apps.netmobile.me/app/lottry/singaporefourd?lang="+val;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(sLink); 
      }
      if(this.pageDetail=="sinToto")
      { 
        this.pageTitle = (val=='en')?"Sin Toto":"sinToto";
        let sLink = "http://apps.netmobile.me/app/lottry/sintoto?lang="+val;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(sLink); 
      }
      
    });
  }

  handleIFrameLoadEvent():void {
    this.loading.dismiss(); 
  }

}
