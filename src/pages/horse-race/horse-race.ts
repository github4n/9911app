import { Component, HostListener } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController }from 'ionic-angular'; 
import { Storage } from '@ionic/storage';


/**
 * Generated class for the HorseRacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-horse-race',
  templateUrl: 'horse-race.html',
})
export class HorseRacePage {

  mal = 'MAL';
  sin = 'SIN';
  hk = 'HK';
  mc = 'MC';

  curId = 0;
  maxId = 4;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl:LoadingController,     
    public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
    this.storage.get('_lang').then((val) => {
      this.translateToLang(val);
      console.log(val);
    });
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    var tempId = this.curId;
    var id = "hr" + this.curId;
    if(this.curId != 0) {
      document.getElementById(id).classList.remove('pageSelected');
    }
    if(this.curId == 0 && event.key != '') {
      this.curId = 1;
    } else if(event.key === 'ArrowRight') {
      this.curId += 1;
    } else if(event.key === 'ArrowLeft') {
      this.curId += -1;
    } else if(event.key === 'ArrowUp') {
      this.curId += -4;
    } else if(event.key === 'ArrowDown') {
      this.curId += 4;
    }
    if(event.key === 'Enter' || event.key === 'Ok' || event.key === ' '|| event.key === 'Accept') {
      document.getElementById(id).classList.remove('pageSelected');
      document.getElementById(id).click();
    }
    if(this.curId <= 0) {
      this.curId = tempId;
    } else if(this.curId > this.maxId) {
      this.curId = tempId;
    }
    id = "hr" + this.curId;
    document.getElementById(id).classList.add('pageSelected');
  }

  transEnglish() {    
    this.mal = 'MAL';
    this.sin = 'SIN';
    this.hk = 'HK';
    this.mc = 'MC';
  };

  transChinese() {
    this.mal = '马来西亚';
    this.sin = '新加坡';
    this.hk = '香港';
    this.mc = '澳门';    
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
    this.navCtrl.push('HorseRaceDetailPage',{ page: page });
  }

}
