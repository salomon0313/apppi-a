import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { PoliticasPage } from '../politicas/politicas';
import { TerminosPage } from '../terminos/terminos';
import { SoportePage } from '../soporte/soporte';

/**
 * Generated class for the ConfiguracionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracion',
  templateUrl: 'configuracion.html',

})
export class ConfiguracionPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
  }
  otraPagina(){
    this.navCtrl.push(PoliticasPage);
  }
  otraPagina2(){
    this.navCtrl.push(TerminosPage);
  }
  otraPagina3(){
    this.navCtrl.push(SoportePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracionPage');
  }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Problemas!',
      message: 'En caso de problemas usted puede comunicarse al servicio técnico con el numero 283 121 6994',
      buttons: ['Ok']
    });
    alert.present()
  }


}
