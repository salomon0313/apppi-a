import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';


/**
 * Generated class for the DronePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-drone',
  templateUrl: 'drone.html',
})
export class DronePage {
  url: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitize: DomSanitizer) {
    this.url = sanitize.bypassSecurityTrustResourceUrl("http://sccp.esy.es/ionic/mostrar/tab_agro.php");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DronePage');
  }

}
