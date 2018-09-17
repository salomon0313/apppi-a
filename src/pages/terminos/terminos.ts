import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';
/**
 * Generated class for the TerminosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terminos',
  templateUrl: 'terminos.html',
})
export class TerminosPage {
  miLista = [];

  constructor(public nav: NavController) {
    this.miLista = [
      {
        'title': 'Información Relevante ',
        'icon': '',
        'description': 'Es un requisito necesario para la adquisición de los productos que se ofrecen en este sitio, que lea y acepte los siguientes Términos y Condiciones que a continuación se redactan. El uso de nuestros servicios así como la compra de nuestros productos implicará que usted ha leído y aceptado los Términos y Condiciones de Uso en el presente documento. Será necesario el registro por parte del usuario, con ingreso de datos personales fidedignos y definición de una contraseña. El usuario puede elegir y cambiar la clave para su acceso de administración de la cuenta en cualquier momento, en caso de que se haya registrado y que sea necesario para la compra de alguno de nuestros productos. PineAPP no asume la responsabilidad en caso de que entregue dicha clave a terceros.',
        'color': '#E63135'
      },
      {
        'title': 'Licencia',
        'icon': '',
        'description': 'Corporativo STIM a través de su sitio web concede una licencia para que los usuarios utilicen los productos que son vendidos en este sitio web de acuerdo a los Términos y Condiciones que se describen en este documento.',
        'color': '#0CA9EA'
      },
      {
        'title': 'Uso No Autorizado',
        'icon': '',
        'description': 'En caso de que aplique (para venta de software, templetes, u otro producto de diseño y programación) usted no puede colocar uno de nuestros productos, modificado o sin modificar, en un CD, sitio web o ningún otro medio y ofrecerlos para la redistribución o la reventa de ningún tipo.',
        'color': '#F46529'
      },
      {
        'title': 'Propiedad',
        'icon': '',
        'description': 'Usted no puede declarar propiedad intelectual o exclusiva a ninguno de nuestros productos, modificado o sin modificar. Todos los productos son propiedad de los proveedores del contenido. En caso de que no se especifique lo contrario, nuestros productos se proporcionan sin ningún tipo de garantía, expresa o implícita. Por ningún motivo esta compañía será responsables de ningún daño incluyendo pero no limitado a, daños directos, indirectos, especiales, fortuitos o consecuentes u otras pérdidas resultantes del uso o de la imposibilidad de utilizar nuestros productos.',
        'color': '#FFD439'
      },
      {
        'title': 'Políticas Reembolso y Garantía',
        'icon': '',
        'description': 'Los términos de la garantía están asociados a fallas de fabricación y funcionamiento en condiciones normales de los productos y sólo se harán efectivos estos términos si el equipo ha sido usado correctamente.',
        'color': '#FFD439'
      },
      {
        'title': 'Privacidad',
        'icon': '',
        'description': 'Esta aplicación PineAPP garantiza que la información personal que usted envía cuenta con la seguridad necesaria. Los datos ingresados por usuario o en el caso de requerir una validación de los pedidos no serán entregados a terceros, salvo que deba ser revelada en cumplimiento a una orden judicial o requerimientos legales.',
        'color': '#FFD439'
      },
    ]
  }
  
  openNavDetailsPage(item) {
    this.nav.push(InfoPage, { item: item });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TerminosPage');
  }

}
