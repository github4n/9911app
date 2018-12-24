import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController }from 'ionic-angular'; 
import { Storage } from '@ionic/storage';


/**
 * Generated class for the Mal4dPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mal4d',
  templateUrl: 'mal4d.html',
})
export class Mal4dPage {
  Mal4DLive:string='Mal 4D-Live';
  damacai:string='Damacai';
  magnum:string='Magnum';
  toto:string='Toto';

  cashSweep:string='Cash Sweep';
  stc4d:string='Sandakan';
  sabah:string='Sabah 88';


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
    this.Mal4DLive='Mal 4D-Live';
    this.damacai='Damacai';
    this.magnum='Magnum';
    this.toto='Toto';

    this.cashSweep='Cash Sweep';
    this.stc4d='Sandakan';
    this.sabah='Sabah 88';
  };

  transChinese() {
    this.Mal4DLive='Mal 4D-Live';
    this.damacai='Damacai';
    this.magnum='Magnum';
    this.toto='Toto';

    this.cashSweep='Cash Sweep';
    this.stc4d='Sandakan';
    this.sabah='Sabah 88';  
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
    this.navCtrl.push('Mal4dDetailPage',{ page: page });
  }
}
