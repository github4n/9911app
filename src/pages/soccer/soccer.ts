import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading }from 'ionic-angular'; 
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
