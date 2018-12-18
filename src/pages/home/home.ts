import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mal = 'MAL';
  sin = 'SIN';
  hk = 'HK';
  mc = 'MC';
  rs = 'Result';
  et = 'Et & Bt';
  wt = 'Wt & Scr';
  rc = 'R Card';
  m4d = 'Mal 4D';
  s4d = 'Sin 4D';
  audio = 'Audio';
  soccer = 'Soccer';
  sresult = 'S Result';
  chinese = 'Chinese';
  english = 'English';

  constructor(public navCtrl: NavController) {

  }

  result() {
    this.navCtrl.push('ResultPage');
  }

  earlytic() {
    this.navCtrl.push('EarlyTicPage');
  }

  weight() {
    this.navCtrl.push('WeightPage');
  }

  race() {
    this.navCtrl.push('HorseRacePage');
  }

  mal4d() {
    this.navCtrl.push('Mal4dPage');
  }

  sin4d() {
    this.navCtrl.push('Sin4dPage');
  }

  time() {
    this.navCtrl.push('TimePage');
  }

  gotoSoccer() {
    this.navCtrl.push('SoccerPage');
  }

  soccerResult() {
    this.navCtrl.push('SoccerResultPage');
  }

  transEnglish() {
    this.mal = 'MAL';
    this.sin = 'SIN';
    this.hk = 'HK';
    this.mc = 'MC';
    this.rs = 'Result';
    this.et = 'Et & Bt';
    this.wt = 'Wt & Scr';
    this.rc = 'R Card';
    this.m4d = 'Mal 4D';
    this.s4d = 'Sin 4D';
    this.audio = 'Audio';
    this.soccer = 'Soccer';
    this.sresult = 'S Result'
    this.chinese = 'Chinese';
    this.english = 'English';
  };

  transChinese() {
    this.mal = '马来西亚';
    this.sin = '新加坡';
    this.hk = '香港';
    this.mc = '澳门';
    this.rs = '结果';
    this.et = '结果';
    this.wt = '结果';
    this.rc = '结果';
    this.m4d = '结果';
    this.s4d = '结果';
    this.audio = '音频';
    this.soccer = '音频';
    this.sresult = '音频'
    this.chinese = '中文';
    this.english = '英语';
  };

  gotoHorse(page) {
    if (page == 'MAL') {
      this.navCtrl.push('HorseMalPage');
    } else if (page == 'SIN') {
      this.navCtrl.push('HorseSinPage');
    } else if (page == 'HK') {
      this.navCtrl.push('HorseHongkongPage');
    } else if (page == 'MC') {
      this.navCtrl.push('HorseMacauPage');
    }
  }

}
