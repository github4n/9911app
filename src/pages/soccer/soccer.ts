import { Component, HostListener } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController }from 'ionic-angular'; 
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-soccer',
  templateUrl: 'soccer.html',
})
export class SoccerPage {
  odds = 'Odds';
  jalan = 'Jalan';
  eOdds = 'Early Odds';
  score = 'Score';
  lad = 'LadBroker';

  curId = 0;
  maxId = 5;

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
    });
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    var tempId = this.curId;
    var id = "soccer" + this.curId;
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
      this.curId += -3;
    } else if(event.key === 'ArrowDown') {
      this.curId += 3;
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
    id = "soccer" + this.curId;
    document.getElementById(id).classList.add('pageSelected');
  }

  transEnglish() {    
    this.odds = 'Odds';
    this.jalan = 'Jalan';
    this.eOdds = 'Early Odds';
    this.score = 'Score';
    this.lad= 'LadBroker';
  };

  transChinese() {
    this.odds = '球盘';
    this.jalan = '滚球';
    this.eOdds = '早盘';
    this.score = '比分';
    this.lad= '立博';
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
    this.navCtrl.push('SoccerDetailPage',{ page: page });
  }
}
