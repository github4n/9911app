import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HorseRacePage } from './horse-race';

@NgModule({
  declarations: [
    HorseRacePage,
  ],
  imports: [
    IonicPageModule.forChild(HorseRacePage),
  ],
})
export class HorseRacePageModule {}
