import { Component, HostListener  } from '@angular/core';
import { IonicPage, NavController, NavParams  } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lang:any='en';

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
  zihua ='ZiHua';

  curId = 1;
  maxId = 16;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    var tempId = this.curId;
    var id = "btn" + this.curId;
    document.getElementById(id).classList.remove('pageSelected');
    
    if(event.key === 'ArrowRight') {
      this.curId += 1;
    } else if(event.key === 'ArrowLeft') {
      this.curId += -1;
    } else if(event.key === 'ArrowUp') {
      this.curId += -4;
    } else if(event.key === 'ArrowDown') {
      this.curId += 4;
    }
    if(event.key === 'Enter') {
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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage) {
      if(this.storage.get('_lang')==null)
      {
        this.storage.set('_lang',"en");
      }
      else {
        this.lang = this.storage.get('_lang');
      }
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
    this.lang = 'en';
    this.storage.set('_lang',this.lang);

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
    this.zihua ='ZiHua';
  };

  transChinese() {
    this.lang = 'cn';
    this.storage.set('_lang',this.lang);

    this.mal = '马来西亚';
    this.sin = '新加坡';
    this.hk = '香港';
    this.mc = '澳门';
    this.rs = '赛马成绩';
    this.et = '草票巴淡';
    this.wt = '配磅割马';
    this.rc = '马匹排位';
    this.m4d = '大马彩票';
    this.s4d = '新洲彩票';
    this.audio = '音频';
    this.soccer = '球赛资讯';
    this.sresult = '球赛成绩'
    this.chinese = '中文';
    this.english = '英语';
    this.zihua ='子华'
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

  gotoHorse(page) {
    if (page == 'MY') {
      this.navCtrl.push('HorseMalPage');
    } else if (page == 'SG') {
      this.navCtrl.push('HorseSinPage');
    } else if (page == 'HK') {
      this.navCtrl.push('HorseHongkongPage');
    } else if (page == 'MC') {
      this.navCtrl.push('HorseMacauPage');
    }
  }
  
}
