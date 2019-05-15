import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {SchedulePage} from './schedule';
import {ScheduleFilterPage} from '../schedule-filter/schedule-filter';
import {routes} from './schedule-routing';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SchedulePage, ScheduleFilterPage],
  entryComponents: [ScheduleFilterPage]
})
export class ScheduleModule {
}
