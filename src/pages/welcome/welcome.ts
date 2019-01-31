import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { User } from '../../providers';
import { Device } from '@ionic-native/device';

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
  redirect: boolean = false;
  Id = '1681668';
  userStatus: any;
  errMsgE = '';
  errMsgC = '';

  deviceInfo: {
    model: string, platform: string,
    uuid: string,
    manufacturer: string, serial: string, app: string,
    lang: string
  } = {
      model: 'HM9E6',
      platform: 'iOS',
      uuid: 'ABC-100469',
      manufacturer: 'OcNet Corp.',
      serial: 'gggr5545454',
      app: '9911App',
      lang: 'en'
    };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    private device: Device,
    public user: User,
    private toastCtrl: ToastController) {

    if (this.device.platform != undefined && this.device.platform != null) {
      this.deviceInfo.platform = this.device.platform;
      this.deviceInfo.uuid = this.device.uuid;
      this.deviceInfo.model = this.device.model;
      this.deviceInfo.manufacturer = this.device.manufacturer;
      this.deviceInfo.serial = this.device.serial;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
    this.getUser();
    this.presentLoadingDefault();
    this.openapp();
  }

  getUser() {
    this.storage.get('_userId').then((val) => {
      this.Id = val;
    });
  }

  setUser(deviceInfo : any) {
    this.storage.set('_userId', deviceInfo);
  }

  openapp() {
    this.user.openapp(this.deviceInfo).subscribe((resp) => {
      console.log(resp);
      let res: any = resp;
      this.userStatus = res.stt;
      let uuid: any = res.mes;

      //this.openAppData = res;
      //this.storage.set("ContactNumber", res.appSettings.ContactNumber);
      //this.storage.set("ContactEmail", res.appSettings.ContactEmail);
      //let user = res.user;
      //this.storage.set("existedUser", user.UserId);
      //let lasttime = user.CreatedDate;
      //let str = this.login_Lasttime + moment(lasttime).toNow() + "! ";
      //this.userStatus = user.UserStatus;

      //status=0:not right login
      //status=1:right
      //status=2:locked
      //status=3:not allow
      //status=4:not isset UUID & insert SUCCESSFULL
      //status=5:not isset UUID & insert ERROR
      //status=6:duedate < today
      if (this.userStatus == '1') {
        this.setUser(this.deviceInfo);
        this.storage.set('_uuid', uuid);
        this.redirect = true;
      } 
      else if(this.userStatus == '0') {
        this.errMsgE = 'Wrong login information. Please contact your agent. Thanks!';
        this.errMsgC = '错误的登录信息。 请联系代理。谢谢！';
        this.redirect = false;
      } 
      else if(this.userStatus == '2') {
        this.errMsgE = 'Your account has been locked. Please contact your agent. Thanks!';
        this.errMsgC = '您的帐户已被锁定。 请联系代理。谢谢！';
        this.redirect = false;
      }
      else {
        this.errMsgE = 'Your account is Overdue. Please contact your agent. Thanks!';
        this.errMsgC = '您的户口已过期。 请联系代理。谢谢！';
        this.redirect = false;
      }
    }, (err) => {
      let toast = this.toastCtrl.create({
        message: err.message,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
      if (this.redirect) {
        this.navCtrl.setRoot('HomePage');
        this.setUser(this.deviceInfo);
      }
    }, 2000);
  }
}