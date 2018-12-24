import { Component }from '@angular/core'; 
import { IonicPage, NavController, NavParams, LoadingController, Loading }from 'ionic-angular'; 
import { Storage } from '@ionic/storage';

import { DomSanitizer, SafeResourceUrl }from '@angular/platform-browser'; 

/**
 * Generated class for the Sin4dPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sin4d',
  templateUrl: 'sin4d.html',
})
export class Sin4dPage {
  sin4DLive='SinD Live ';
  sin4D='Sin 4D';
  sinToto='Sin Toto';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl:LoadingController,     
    public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Mal4dPage');
    this.storage.get('_lang').then((val) => {
      this.translateToLang(val);
    });
  }

  transEnglish() {    
    this.sin4DLive='SinD Live ';
    this.sin4D='Sin 4D';
    this.sinToto='Sin Toto';
  
  };

  transChinese() {
    this.sin4DLive='SinD Live C';
    this.sin4D='Sin 4D C';
    this.sinToto='Sin Toto C';
  };

  translateToLang(lang:string)
  {
    if(lang=='en')
    {
      this.transEnglish();
    }
    else{
      this.transChinese();
    }
  }

  goTo(page)
  {
    this.navCtrl.push('Sin4dDetailPage',{ page: page });
  }
}
