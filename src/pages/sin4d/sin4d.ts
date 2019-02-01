import { Component, HostListener }from '@angular/core'; 
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

  curId = 0;
  maxId = 3;

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
    this.curId = 0;
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
