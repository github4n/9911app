import { Component }from '@angular/core'; 
import { IonicPage, NavController, NavParams, LoadingController, Loading }from 'ionic-angular'; 
import { Storage } from '@ionic/storage';

import { DomSanitizer, SafeResourceUrl }from '@angular/platform-browser'; 
/**
 * Generated class for the ResultDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result-detail',
  templateUrl: 'result-detail.html',
})
export class ResultDetailPage {

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
      let sLink = "http://apps.netmobile.me/keyphoneapp/horse/Result_Detail?lang="+val+"&country="+this.pageDetail;
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(sLink); 
     
    });
  }

  handleIFrameLoadEvent():void {
    this.loading.dismiss(); 
  }
}
