import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class CheckTutorial {
  constructor(private storage: Storage) {}

  // TODO: check if ion_did_tutorial === true then redirect to /app/tabs/schedule else block
}
