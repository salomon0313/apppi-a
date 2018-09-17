import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';

/**
 * Generated class for the PoliticasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-politicas',
  templateUrl: 'politicas.html',
})
export class PoliticasPage {
  miLista = [];

  constructor(public nav: NavController) {
    this.miLista = [
      {
        'title': 'Información que es Requeria ',
        'icon': '',
        'description': 'Nuestra aplicación podrá recolectar información personal por ejemplo: Nombre, información de contacto e información demográfica.',
        'color': '#E63135'
      },
      {
        'title': 'Uso de la Información Requerida',
        'icon': '',
        'description': 'Nuestra aplicación emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, y mejorar nuestros productos y servicios. Corporativo STIM está altamente comprometido para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado. Se declinan es posible que no pueda utilizar algunos de nuestros servicios. ',
        'color': '#0CA9EA'
      },
      {
        'title': 'Enlaces a Terceros',
        'icon': '',
        'description': 'Esta aplicación pudiera contener en laces a otros sitios que pudieran ser de su interés. Una vez que usted de clic en estos enlaces y abandone nuestra aplicación, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros. Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas.        ',
        'color': '#F46529'
      },
      {
        'title': 'Control de su Informacion Personal',
        'icon': '',
        'description': 'En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestra aplicación. Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.',
        'color': '#FFD439'
      },
      
    ]
  }
  
  openNavDetailsPage(item) {
    this.nav.push(InfoPage, { item: item });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoliticasPage');
  }

}
