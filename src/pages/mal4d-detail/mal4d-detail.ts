import { Component }from '@angular/core'; 
import { IonicPage, NavController, NavParams, LoadingController, Loading }from 'ionic-angular'; 
import { Storage } from '@ionic/storage';

import { DomSanitizer, SafeResourceUrl }from '@angular/platform-browser'; 
/**
 * Generated class for the Mal4dDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mal4d-detail',
  templateUrl: 'mal4d-detail.html',
})
export class Mal4dDetailPage {

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
      if(this.pageDetail=="Mal4DLive")
      { 
        this.pageTitle = (val=='en')?"Mal 4D Live":"Mal4DLive";
        let sLink = "http://apps.netmobile.me/app/lottry/mal_live_draw?lang="+val;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(sLink); 
      }
      if(this.pageDetail=="damacai")
      { 
        this.pageTitle = (val=='en')?"Damacai":"da ma cai";
        let sLink = "http://apps.netmobile.me/app/lottry/damacaionetree?lang="+val;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(sLink); 
      }
      if(this.pageDetail=="magnum")
      { 
        this.pageTitle = (val=='en')?"Magnum":"magnum";
        let sLink = "http://apps.netmobile.me/app/lottry/magnumfourdjackpot?lang="+val;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(sLink); 
      }
      if(this.pageDetail=="toto")
      { 
        this.pageTitle = (val=='en')?"Toto":"toto";
        let sLink = "http://apps.netmobile.me/app/lottry/totofourd?lang="+val;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(sLink); 
      }
      if(this.pageDetail=="cashSweep")
      { 
        this.pageTitle = (val=='en')?"Cash Sweep":"cashSweep";
        let sLink = "http://apps.netmobile.me/app/lottry/cashsweeponethreed?lang="+val;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(sLink); 
      }
      if(this.pageDetail=="stc4d")
      { 
        this.pageTitle = (val=='en')?"Sandakan 4D":"stc4d";
        let sLink = "http://apps.netmobile.me/app/lottry/sandakanford?lang="+val;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(sLink); 
      }
      if(this.pageDetail=="sabah")
      { 
        this.pageTitle = (val=='en')?"Sabah 88":"Sabah 88";
        let sLink = "http://apps.netmobile.me/app/lottry/sabah?lang="+val;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(sLink); 
      }
    });
  }

  handleIFrameLoadEvent():void {
    this.loading.dismiss(); 
  }

}
