import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { User } from '../../providers';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export class Infomation {
  uuid: string;
  app: string;
  model: string;
  manufacturer: string;
  platform: string;

  constructor(uuid: string,
    app: string,
    model: string,
    manufacturer: string,
    platform: string) {
    this.uuid = uuid;
    this.app = app;
    this.model = model;
    this.manufacturer = manufacturer;
    this.platform = platform;
  }
}

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  isDueDate: boolean = false;
  Id = '1681668';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public user: User) {
    this.checkDueDate();
    this.checkLogin();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
    this.presentLoadingDefault();
  }

  getUser() {
    this.storage.get('_userId').then((val) => {
      this.Id = val;
    });
  }

  setUser() {
    var id = '1681668';
    this.storage.set('_userId', id);
  }

  checkLogin() {
    let accountInfo = new Infomation('','','','','');
    this.user.login(accountInfo).subscribe((res: any) => {
      console.log(res);
      if (res.result != null) {
        console.log(res.result);
      }
      else {
        //this.fullAlert();
        console.log('Call API Fail');
      }
    }, (err) => {
    })
  }

  checkDueDate() {
    //Add code check Due Date
    this.isDueDate = true;
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
      if (this.isDueDate) {
        this.navCtrl.setRoot('HomePage');
      }
    }, 5000);
  }
}
