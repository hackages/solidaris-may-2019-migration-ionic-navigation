import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

import {TabsPage} from './tabs-page';
import {ScheduleModule} from '../schedule/schedule.module';
import {SessionDetailModule} from '../session-detail/session-detail.module';
import {SpeakerDetailModule} from '../speaker-detail/speaker-detail.module';
import {SpeakerListModule} from '../speaker-list/speaker-list.module';
import {RouterModule} from '@angular/router';
import {routes} from './tabs-page-routing';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ScheduleModule,
    SessionDetailModule,
    SpeakerDetailModule,
    SpeakerListModule,
  ],
  declarations: [TabsPage]
})
export class TabsModule {
}
