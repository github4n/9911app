import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultDetailPage } from './result-detail';

@NgModule({
  declarations: [
    ResultDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ResultDetailPage),
  ],
})
export class ResultDetailPageModule {}
