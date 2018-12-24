import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HorseRaceDetailPage } from './horse-race-detail';

@NgModule({
  declarations: [
    HorseRaceDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(HorseRaceDetailPage),
  ],
})
export class HorseRaceDetailPageModule {}
