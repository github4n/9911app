import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoccerDetailPage } from './soccer-detail';

@NgModule({
  declarations: [
    SoccerDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SoccerDetailPage),
  ],
})
export class SoccerDetailPageModule {}
