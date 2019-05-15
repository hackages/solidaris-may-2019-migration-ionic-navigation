import {Routes} from '@angular/router';
import {TabsPage} from './tabs-page';
import {SchedulePage} from '../schedule/schedule';

/**
 * TODO: Setup these routes
 *  tabs -> TabsPage component
 *    schedule
 *      '' -> SchedulePage component
 *      session/:sessionId -> Lazy load SessionDetailModule
 *    speakers
 *      '' -> Lazy load SpeakerListModule
 *      session/:sessionId -> Lazy load SessionDetailModule
 *      speaker-details/:speakerId-> Lazy load SpeakerDetailModule
 *    '' -> redirect to /app/tabs/schedule
 */
export const routes: Routes = [];
