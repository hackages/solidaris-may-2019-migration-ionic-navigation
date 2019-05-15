import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

import {SpeakerListPage} from './speaker-list';
import {routes} from './speaker-list-routing';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [SpeakerListPage]
})
export class SpeakerListModule {
}
