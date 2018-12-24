import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EarlyTicDetailPage } from './early-tic-detail';

@NgModule({
  declarations: [
    EarlyTicDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(EarlyTicDetailPage),
  ],
})
export class EarlyTicDetailPageModule {}
