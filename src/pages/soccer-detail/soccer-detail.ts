import { Component }from '@angular/core'; 
import { IonicPage, NavController, NavParams, LoadingController, Loading }from 'ionic-angular'; 
import { Storage } from '@ionic/storage';

import { DomSanitizer, SafeResourceUrl }from '@angular/platform-browser'; 
/**
 * Generated class for the SoccerDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-soccer-detail',
  templateUrl: 'soccer-detail.html',
})
export class SoccerDetailPage {
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
      if(this.pageDetail=="odds")
      { 
        this.pageTitle = (val=='en')?"Odds":"球盘";
        let sLink = "http://apps.netmobile.me/app/soccer/earlymarket";
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(sLink); 
      }
      else if(this.pageDetail=="jalan")
      {
        this.pageTitle = (val=='en')?"Jalan":"滚球";
        let sLink = "http://apps.netmobile.me/app/soccer/live";
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(sLink); 
      }
      else if(this.pageDetail=="eOdds")
      {
        this.pageTitle = (val=='en')?"Early Odds":"早盘";
        let sLink = "http://apps.netmobile.me/app/soccer/main1";
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(sLink); 
      }
      else if(this.pageDetail=="score")
      {
        this.pageTitle = (val=='en')?"Score":"比分";
        let sLink = "http://apps.netmobile.me/app/soccer/live_score";
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(sLink); 
      }
      else if(this.pageDetail=="lad")
      {
        this.pageTitle = (val=='en')?"LadBroker":"立博";
        let sLink = "http://apps.netmobile.me/app/soccer/ladbrokes_score";
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(sLink); 
      }
    });
  }

  handleIFrameLoadEvent():void {
    this.loading.dismiss(); 
  }


}
