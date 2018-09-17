import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'page-sectores',
  templateUrl: 'sectores.html',
})
export class SectoresPage {
  url: any;
  constructor(public navCtrl: NavController, private sanitize: DomSanitizer) {
    
    this.url = sanitize.bypassSecurityTrustResourceUrl("http://sccp.esy.es/ionic/mostrar/tab_sector.php");
  }


}
