import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SpeakerDetailPage} from './speaker-detail';
import {routes} from './speaker-detail-routing';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [SpeakerDetailPage]
})
export class SpeakerDetailModule {
}
