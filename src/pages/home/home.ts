import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  url: any;
  constructor(public navCtrl: NavController, private sanitize: DomSanitizer) {
    
    this.url = sanitize.bypassSecurityTrustResourceUrl("http://sccp.esy.es/ionic/menu.php");
  }

}
