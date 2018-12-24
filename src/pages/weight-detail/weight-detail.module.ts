import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeightDetailPage } from './weight-detail';

@NgModule({
  declarations: [
    WeightDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(WeightDetailPage),
  ],
})
export class WeightDetailPageModule {}
