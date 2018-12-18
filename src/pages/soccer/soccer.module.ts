import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoccerPage } from './soccer';

@NgModule({
  declarations: [
    SoccerPage,
  ],
  imports: [
    IonicPageModule.forChild(SoccerPage),
  ],
})
export class SoccerPageModule {}
