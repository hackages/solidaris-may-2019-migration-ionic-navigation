import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {IonicModule} from '@ionic/angular';
import {IonicStorageModule} from '@ionic/storage';
import {AppComponent} from './app.component';
import {TutorialPage} from './pages/tutorial/tutorial';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot()
  ],
  declarations: [AppComponent, TutorialPage],
  entryComponents: [TutorialPage],
  providers: [InAppBrowser, SplashScreen, StatusBar],
  bootstrap: [AppComponent]
})
export class AppModule {
}
