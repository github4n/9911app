import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HorseSinPage } from './horse-sin';

@NgModule({
  declarations: [
    HorseSinPage,
  ],
  imports: [
    IonicPageModule.forChild(HorseSinPage),
  ],
})
export class HorseSinPageModule {}
