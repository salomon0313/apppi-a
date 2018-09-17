import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SectoresPage} from '../produccion/sectores/sectores';
import { ManualPage} from '../produccion/manual/manual';
import { TratamientoPage} from '../produccion/tratamiento/tratamiento';
import { DronePage} from '../produccion/drone/drone';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  miLista2 = [];
  constructor(public navCtrl: NavController) {

   

    this.miLista2 = [
      {
        'title': 'Sectores',
        'icon': 'map',
        'color': '#20AB33',

      },
      {
        'title': 'Manual de Activiades',
        'icon': 'book',
        'color': '#5183BF'
      },
      {
        'title': 'Tratamiento',
        'icon': 'bug',
        'color': '#F46529'
      },
      {
        'title': 'Drone',
        'icon': 'jet',
        'color': '#FFD439'
      },
      
      
    ]
    
  }
  otraPagina(){
    this.navCtrl.push(SectoresPage)
  }
  otraPagina2(){
    this.navCtrl.push(ManualPage)
  }
  otraPagina3(){
    this.navCtrl.push(TratamientoPage)
  }
  otraPagina4(){
    this.navCtrl.push(DronePage)
  }



}
