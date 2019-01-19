import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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
  isDueDate: boolean = false;
  Id = '1681668';
  userStatus: any;

  deviceInfo: {
    model: string, platform: string,
    uuid: string,
    manufacturer: string, serial: string, app: string
  } = {
      model: 'HM9E6',
      platform: 'iOS',
      uuid: 'ABC-10046',
      manufacturer: 'OcNet Corp.',
      serial: 'gggr5545454',
      app: 'HKHorse'
    };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    private device: Device,
    public user: User) {

    if (this.device.platform != undefined && this.device.platform != null) {
      this.deviceInfo.platform = this.device.platform;
      this.deviceInfo.uuid = this.device.uuid;
      this.deviceInfo.model = this.device.model;
      this.deviceInfo.manufacturer = this.device.manufacturer;
      this.deviceInfo.serial = this.device.serial;
    }

    this.checkDueDate();
    this.openapp();
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

  openapp() {
    let accountInfo = new Infomation('duong test', '9911App', 'Iphone', 'Apple', 'IOS');

    this.user.openapp(this.deviceInfo).subscribe((resp) => {
      console.log(resp);
      let res: any = resp;
      //this.openAppData = res;
      //this.userStatus = '';
      //this.storage.set("ContactNumber", res.appSettings.ContactNumber);
      //this.storage.set("ContactEmail", res.appSettings.ContactEmail);

      if (res.user != null && res.user != undefined) {
        console.log(res.user);
        let user = res.user;
        //this.storage.set("existedUser", user.UserId);
        let lasttime = user.CreatedDate;

        //let str = this.login_Lasttime + moment(lasttime).toNow() + "! ";

        this.userStatus = user.UserStatus;
        //not right login
        if (this.userStatus == '0') {

        }
        //right
        if (this.userStatus == '1') {
          this.isDueDate = true;
        }
        //locked
        else if (this.userStatus == '2') {

        }
        //not allow
        else if (this.userStatus == '3') {

        }
        //not isset UUID & insert SUCCESSFULL
        else if (this.userStatus == '4') {

        }
        //not isset UUID & insert ERROR
        else if (this.userStatus == '5') {

        }
        //duedate < today
        else if (this.userStatus == '6') {
          this.isDueDate = false;
        }

      }
    }, (err) => {
      /*let toast = this.toastCtrl.create({
        message: this.err_Server + "[openapp] ...",
        duration: 3000,
        position: 'top'
      });
      toast.present();*/
    });
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
