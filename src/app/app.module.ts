import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';

import { PoliticasPage } from '../pages/politicas/politicas';
import { TerminosPage } from '../pages/terminos/terminos';
import { SoportePage } from '../pages/soporte/soporte';
import { InfoPage} from '../pages/info/info';
import { SectoresPage} from '../pages/produccion/sectores/sectores';
import { ManualPage} from '../pages/produccion/manual/manual';
import { TratamientoPage} from '../pages/produccion/tratamiento/tratamiento';
import { DronePage} from '../pages/produccion/drone/drone';
import { PersonalPage} from '../pages/admin/personal/personal';
import { VentasPage} from '../pages/admin/ventas/ventas';
import { CostoPage} from '../pages/admin/costo/costo';
import { ClientesPage} from '../pages/admin/clientes/clientes';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ConfiguracionPage,
    PoliticasPage,
    TerminosPage,
    SoportePage,
    InfoPage,
    SectoresPage,
    ManualPage,
    TratamientoPage,
    DronePage,
    PersonalPage,
    VentasPage,
    CostoPage,
    ClientesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ConfiguracionPage,
    PoliticasPage,
    TerminosPage,
    SoportePage,
    InfoPage,
    SectoresPage,
    ManualPage,
    TratamientoPage,
    DronePage,
    PersonalPage,
    VentasPage,
    CostoPage,
    ClientesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
