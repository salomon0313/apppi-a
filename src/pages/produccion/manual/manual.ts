import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../../info/info';

/**
 * Generated class for the ManualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manual',
  templateUrl: 'manual.html',
})
export class ManualPage {
  miLista = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public nav: NavController) {
    this.miLista = [
      {
        'title': 'Preparación de suelo',
        'icon': '',
        'description': 'Lo primero que se realiza es la selección del terreno para la siembra, la preparación del suelo es de gran importancia para esta planta que cuenta con un sistema radicular frágil y superficial. Se recomienda dar un paso de subsolador en forma cruzada con una profundidad de 50 a 70 cm, con el propósito de romper el piso de arado y facilitar la aireación y el drenaje del suelo; un paso de rastra con el fin de incorporar la maleza, y por último un paso de pulidora. Una variante para preparar el suelo, consiste en dar dos o tres pasos de rastra pesada y posteriormente un barbecho con arado de reja; esto deja listo el terreno para la plantación y sustituye a la preparación convencional con arado de discos y permite una mejor cama de siembra en terrenos con un alto contenido de arena. •	Se debe dar varias pasadas de rastra en forma cruzada con el fin de lograr una mejor incorporación de la maleza. •	Dos (2) de subsuelo en forma cruzada de 30 a 40 cm. de profundidad con el fin de evitar la compactación. •	Una (1) pasada de rastra y 1 de roto cultivador para desmenuzar más el terreno. Es importante que el terreno quede libre de malezas y bien afinado. ',
        'color': '#E63135'
      },
      {
        'title': 'Encamado',
        'icon': '',
        'description': 'La formación de camas se puede hacer mecánicamente mediante el uso de una encamadora o en forma manual, de un ancho de 70 cm. y una altura de 30 cm.',
        'color': '#0CA9EA'
      },
      {
        'title': 'Drenaje',
        'icon': '',
        'description': 'Esta medida se toma para eliminar erosión por parte del agua y prevenir estancamiento de agua que van afectar el cultivo. Se debe trabajar siguiendo curvas a nivel con una red de drenaje secundarios con pendientes de 1% que llevaran las aguas a los drenajes primarios. Estos se hacen con surcador o ampliador. ',
        'color': '#F46529'
      },
      {
        'title': 'Siembra',
        'icon': '',
        'description': 'Se puede sembrar en cualquier época del año, siempre que se disponga de riego. Se recomienda sincronizar y escalonar las siembras para mantener una oferta permanente al mercado.  Sistema Hawaiano o de hileras dobles: En este sistema, las plantas se siembran en doble hileras separadas de 45 o 60 cm. y 70 u 80 cm. entre cada par de hileras: las plantas en una misma hilera se distancian 25 a 30 cm.',
        'color': '#F46529'
      },
      {
        'title': 'Control de maleza',
        'icon': '',
        'description': 'El control de malezas durante el ciclo de piña se basa en dos aplicaciones de los herbicidas Bromacil y Diuron (2.0 kg + 2.0 kg por hectárea, respectivamente), complementadas con sus correspondientes deshierbes manuales dos o tres meses después para eliminar las malezas que escaparon a dichos tratamientos.',
        'color': '#F46529'
      },
      {
        'title': 'Fertilización',
        'icon': '',
        'description': 'La piña es un cultivo que para su crecimiento y desarrollo requiere de una gran cantidad de nutrimentos. Cuando no se aplican, tanto la planta como el fruto presentan problemas de peso, forma y calidad. Una hectárea de piña extrae alrededor de 350 kilogramos de nitrógeno, 50 de fósforo, 450 de potasio, 80 de magnesio, 150 de calcio y 120 de azufre, La fertilización se distribuye durante todo el período de cultivo, realizando en promedio dos o tres aplicaciones al suelo y de ocho a 15 aplicaciones foliares, en aspersión total. El producto más utilizado para las fertilizaciones sólidas, es la mezcla física 12-8-12-4, a razón de 25 g por planta. Mientras, para las foliares, se utiliza urea, nitrato de amonio, nitrato de potasio, nitrato de calcio, fosfato diamónico (18-46-00), sulfato de potasio, sulfato de magnesio y una serie de productos como fuentes de micro-elementos (Fe, Ca, B, etc.); las concentraciones totales de las mezclas nunca deben rebasar el 5%, de preferencia aplicarlas al 2.5% cuando las plantas están pequeñas, se está en proceso de emisión de a inflorescencia o las temperaturas ambientales y de las plantas es elevada. Las dosis finales o totales de elemento por planta, es en promedio de 12-6-14-4 gramos de N-P-K-Mg, además del resto de micro-elementos requeridos. Las aplicaciones solidas se realizan en los meses dos y cuatro después de la siembra, mientras que las foliares a partir del mes seis hasta el 14, con una frecuencia quincenal. Posterior a la cosecha de fruta, se puede realizar una aplicación adicional si la plantación tiene como objetivo la reproducción de material vegetativo.',
        'color': '#F46529'
      },
      {
        'title': 'Tratamiento de inducción floral',
        'icon': '',
        'description': 'El uso de inductores de la floración en piña tiene muchas ventajas, las más importantes son: reducir el ciclo del cultivo; uniformizar y compactar el periodo de cosecha; y programar la producción de acuerdo a las necesidades del mercado y del productor. La principal época de floración natural de la piña en la región del Bajo Papaloapan ocurre durante los días más cortos y las temperaturas nocturnas más bajas del año: normalmente comprende de la segunda quincena de noviembre a la primera de abril. A medida que se acerca esta temporada, las plantas aumentan su susceptibilidad a la diferenciación floral y por lo tanto los tratamientos para inducirla son más efectivos en fechas cercanas a ella. Por el contrario, durante los meses de mayo a agosto, cuando los días son más largos y las temperaturas nocturnas más elevadas, la eficiencia de los tratamientos de inducción se reduce drásticamente. Para el tratamiento de inducción floral, de acuerdo al sistema de manejo del productor, generalmente se utiliza: • Carburo de Calcio: se aplica 0.5 g del producto por planta, al cogollo y se repite tres veces, en aplicaciones invariablemente nocturnas.  • Ethrel 250 + urea + bórax: se disuelven 3.0 litros, 17.5 kilos y 8.8 kilos de cada uno en 1,500 a 2,000 litros de agua; se hacen tres aplicaciones nocturnas, asperjado la planta completamente. • Etileno con Carbón Activado: se aplica mediante un equipo especializado en el que se mezclan 2 kilogramos de etileno puro con 10 a 15 kilogramos de carbón activado en 2,000 a 2,500 litros de agua, lo más fría posible (cercana a 4.0°C). Se hacen dos o tres aplicaciones nocturnas, procurando las horas más frescas de la noche.',
        'color': '#F46529'
      },
      {
        'title': 'Protección del fruto',
        'icon': '',
        'description': 'Durante todo el año, pero principalmente en los meses de febrero a noviembre, es común que la intensidad de la radiación solar produzca quemaduras o “golpes de sol” en los frutos de piña, los cuales pierden su valor comercial. En general, el fruto es más susceptible a sufrir estos daños durante los dos últimos meses de su desarrollo. Los daños llegan a afectar hasta el 60% de las frutas, debido a los extremos valores de radiación que se presentan en México. La quemadura al fruto se evita cubriéndolo oportunamente, ya sea con zacate, papel periódico o con las mismas hojas de la planta amarradas con rafia, lo cual reduce su exposición directa de su superficie al sol, sin embargo su corona y parte de su cáscara quedan finalmente expuestas y sufren un visible deterioro. En épocas de extremo calor e intensidad de radiación, el meristemo apical de las pequeñas coronas de los frutos en desarrollo se queman, por lo que se rebrotan yemas laterales y resultan en coronas múltiples, totalmente indeseables para el mercado fresco de exportación. Bajo los métodos convencionales, los frutos son cosechados con altos valores de temperatura interna, lo cual es uno de los motivos por lo que su vida de anaquel se reduce. Actualmente la opción más novedosa y efectiva para evitar todos esos problemas o inconvenientes, es el uso de Malla-Sombra 50%, color negro tipo rashel o monofilamento, que tiene en promedio 4-6 años de vida útil y puede amortizarse a razón de tres “puestas” por año. Además de ello, se puede utilizar para proteger a la planta durante su etapa de crecimiento, pre-inducción y en periodos de alto riesgo de floraciones prematuras. Esta última alternativa presenta mayores ventajas que las primeras, ya que durante la cosecha permite ver el tamaño y grado de madurez del fruto y presenta un porcentaje más bajo de frutos “manchados” que los otros métodos. Independientemente del método empleado, debe dársele mayor protección al lado del fruto que da al poniente.',
        'color': '#F46529'
      },
      {
        'title': 'Cosecha del fruto',
        'icon': '',
        'description': 'La cosecha de frutos de MD2 debe realizarse en total acuerdo con el comprador, ya que cada empresa exportadora y de comercialización nacional tiene sus propios requerimientos de calidad, tamaño del fruto y grados de madurez, interno y externo. Por lo general, los frutos de exportación son cosechados antes de que su madurez interna alcance el grado 2 de traslucidez y tengan al menos 10° Brix en promedio. Deben evitarse toda clase de golpes, raspaduras y presiones excesivas para que no se incremente el riesgo de daños por enfermedades durante su transporte y exhibición en los centros de consumo. Los frutos deben estar libres de semillas de malezas, insectos o restos extraños de cualquier origen, además, deberá garantizarse que durante su manipuleo en el proceso de cosecha y empaque, no existan riesgos de contaminación microbiológica y los frutos sean inocuos. Las exigencias de los mercados en México y el extranjero son cada vez mayores, por lo que es importante que los productores se informen sobre los diferentes programas de certificación que se ofrecen para ser más competitivos y con amplia demanda en ellos. Para implementar medidas de control, se deberá muestrear periódicamente el cultivo, al menos cada 2 meses, revisando una planta de cada mil. Se procede a arrancar la planta y a revisarla bien, iniciando por la raíz y el suelo adherido a ellas, buscando las plagas más frecuentes o bien los signos tales como nódulos, galerías, partes muertas, etc.; se continua con el tallo arrancando con precaución cada una de las hojas, las cuales se revisan por los dos lados (haz y envés), también las raíces adventicias, debido a que es un sitio adecuado para ciertas plagas, ya sea por refugio o alimentación. El muestreo debe ser representativo de cada una de las áreas que han sido definidas como diferentes por sus orígenes, manejo o características propias del lote. Las plantas a revisar, deberán ser entresacadas estratégicamente de cada sección. Para lograr un desarrollo sano de las plantas y los frutos, se aplican diversos productos, entre biológicos agroquímicos convencionales, especialmente durante los meses 0, 2, 4, 8, 11 y 15.',
        'color': '#F46529'
      },
   
      
    ]
  }
  openNavDetailsPage(item) {
    this.nav.push(InfoPage, { item: item });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ManualPage');
  }

}
