import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SessionDetailPage} from './session-detail';
import {routes} from './session-detail-routing';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [SessionDetailPage]
})
export class SessionDetailModule {
}
