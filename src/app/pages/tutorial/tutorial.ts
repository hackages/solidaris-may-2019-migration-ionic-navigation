import { Component, ViewChild } from '@angular/core';

import { IonSlides, MenuController } from '@ionic/angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
  styleUrls: ['./tutorial.scss']
})
export class TutorialPage {
  showSkip = true;

  @ViewChild('slides') slides: IonSlides;

  constructor(public menu: MenuController, public storage: Storage) {}

  startApp() {
    this.storage.set('ion_did_tutorial', 'true');
    // TODO: navigate to /app/tabs/schedule
  }

  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }

  ionViewWillEnter() {
    this.storage.get('ion_did_tutorial').then(res => {
      if (res === true) {
        // TODO: navigate to /app/tabs/schedule
      }
    });

    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}
