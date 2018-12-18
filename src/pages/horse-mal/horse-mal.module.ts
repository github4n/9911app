import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HorseMalPage } from './horse-mal';

@NgModule({
  declarations: [
    HorseMalPage,
  ],
  imports: [
    IonicPageModule.forChild(HorseMalPage),
  ],
})
export class HorseMalPageModule {}
