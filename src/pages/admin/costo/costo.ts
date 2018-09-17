import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';


/**
 * Generated class for the CostoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-costo',
  templateUrl: 'costo.html',
})
export class CostoPage {
  url: any;
  constructor(public navCtrl: NavController, private sanitize: DomSanitizer) {
    
    this.url = sanitize.bypassSecurityTrustResourceUrl("http://sccp.esy.es/ionic/mostrar/tab_costopro.php");
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CostoPage');
  }

}
