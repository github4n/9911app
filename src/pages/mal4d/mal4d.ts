import { Component, HostListener } from '@angular/core';
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

  curId = 0;
  maxId = 7;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl:LoadingController,     
    public storage: Storage) {
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    var tempId = this.curId;
    var id = "btn" + this.curId;
    if(this.curId != 0) {
      document.getElementById(id).classList.remove('pageSelected');
    }
    if(event.key === 'ArrowRight') {
      this.curId += 1;
    } else if(event.key === 'ArrowLeft') {
      this.curId += -1;
    } else if(event.key === 'ArrowUp') {
      this.curId += -4;
    } else if(event.key === 'ArrowDown') {
      this.curId += 4;
    }
    if(event.key === 'Enter' || event.key === 'Ok' || event.key === ' '|| event.key === 'Accept') {
      document.getElementById(id).click();
    }
    if(this.curId <= 0) {
      this.curId = tempId;
    } else if(this.curId > this.maxId) {
      this.curId = tempId;
    }
    var id = "btn" + this.curId;
    document.getElementById(id).classList.add('pageSelected');
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
