import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PersonalPage} from '../admin/personal/personal';
import { VentasPage} from '../admin/ventas/ventas';
import { CostoPage} from '../admin/costo/costo';
import { ClientesPage} from '../admin/clientes/clientes';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  miLista = [];
  constructor(public navCtrl: NavController) {
    this.miLista = [
      {
        'title': 'Clientes',
        'icon': 'card',
        
        'color': '#E63135'
      },
      {
        'title': 'Personal',
        'icon': 'people',
        
        'color': '#0CA9EA'
      },
      {
        'title': 'Ventas',
        'icon': 'basket',
        
      },
      {
        'title': 'Costos de Produccion',
        'icon': 'stats',
      
        'color': '#0FCB9B'
      },
      
      
    ]
  }
  otraPagina(){
    this.navCtrl.push(ClientesPage)
  }
  otraPagina2(){
    this.navCtrl.push(PersonalPage)
  }
  otraPagina3(){
    this.navCtrl.push(VentasPage)
  }
  otraPagina4(){
    this.navCtrl.push(CostoPage)
  }


}
