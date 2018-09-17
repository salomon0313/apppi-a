import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../../info/info';

/**
 * Generated class for the TratamientoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tratamiento',
  templateUrl: 'tratamiento.html',
})
export class TratamientoPage {
  plagas = [];
  enfermedades = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public nav: NavController) {
    this.plagas = [
      {
        'title': 'Cochinilla harinosa',
        'icon': '',
        'description': ' (Dysmicoccus brevipes (Cochinilla rosada), Dysmicoccus neobrevipes (Cochinilla gris)).Taxonomía: Homóptera: Pseudococcidae. 								DESCRIPCIÓN DE LA PLAGA: Es una de las plagas más importante en el cultivo de piña. Son pequeños insectos blancos del orden de los Homópteros, que se localizan en las axilas de las hojas inferiores de la planta, las raíces y en el fruto Las hembras de este insecto son ápteras ovales, de 2-6 mm de diámetro, amarillentas o rosadas, cubiertas con una capa de cera con prolongaciones que se proyectan hacia los lados. Los machos poseen dos alas y un par de filamentos posteriores; son suaves y blancos. Los huevos son blancos, puestos en grupos hasta de 300, bajo una capa algodonosa de cera. 						HABITO Y DAÑO: Esta plaga ataca cualquier parte de la planta durante todo el ciclo del cultivo. Las hembras maduras y ninfas chupan savia de los tallos y raíces, secretando toxinas que provocan el retardo del crecimiento y el desecamiento de la planta. Los síntomas de la presencia de esta plaga se distribuyen en parches en la plantación. Las cochinillas son vectores del Pineapple Mealybug Wilt-associated virus (PMWaV), conocido como el virus de Wilt, que provoca un desecamiento del ápice hacia la base de la hoja y un enrollamiento en el borde de las hojas más afectadas. La plaga puede ingresar por las flores abiertas al interior de cada frutículo, lo que representa un problema de rechazo en planta empacadora de difícil control, por este motivo el período crítico de control se localiza entre la semana 7 y 10, después de la inducción floral.   								MÉTODOS DE CONTROL: Procurar una adecuada preparación de terreno para reducir la presencia de colonias de hormigas. Realizar monitoreo de las poblaciones de hormigas, en callejones y alrededores de los lotes de siembra. Para el monitoreo se utiliza pequeñas cantidades de cebo colocadas en vasos plásticos. Para el control de la hormiga se realizan la aplicación de cebos como las moléculas hidrometilnona y octaborato de sodio. Realizar una adecuada selección de áreas para semilleros, en los que no exista presencia de la plaga. La desinfección del material de siembra por inmersión, se realiza usualmente con el insecticida Diazinón.Se ha probado la utilización de cepas del hongo entomopatógeno Beauveria bassiana con buenos resultados para el control de adultos de la cochinilla. Monitoreo de la población de cochinillas en plantación y en frutas, para definir aplicaciones no programadas. Guía Identificación y MIP Muestreos. Sinfílido adulto. Daño de raíz (escoba de bruja). Realizar aplicaciones preventivas de moléculas como endosulfan (por ratificación en Convenio de Estocolmo Costa Rica debe buscar opciones para sustituir su uso), etoprofos, diazinón, aceite agrícola y sales potásicas (solamente los últimos 3 productos se pueden utilizar en la etapa de desarrollo de fruta).',
        'color': '#E63135'
      },
      {
        'title': 'Sinfílidos (Hanseniella spp, Scutigerella spp, Symphylella spp)',
        'icon': '',
        'description': 'Taxonomía: Synphylla: Myriapoda. DESCRIPCIÓN DE LA PLAGA: Los sinfílidos son pequeños artrópodos blancos, de cuerpo blando y antenas largas que se mueven muy rápido en el suelo. Los adultos miden entre 2 a 6 mm, y presentan 6 pares de patas cuando eclosionan y 12 cuando están desarrollados.  HABITO Y DAÑO: Los sinfílidos son una plaga de suelo distribuidos mundialmente. Se alimentan de las secciones más jovenes de las raíces, provocando el síntoma de escoba de bruja, con lo que se afecta la absorción de elementos nutritivos, y por tanto se reduce el crecimiento y los rendimientos del cultivo. Pueden vivir por varios años y resistir meses sin comer. Los suelos húmedos, profundos, sueltos y con alto contenido de materia orgánica favorecen su reproducción. Los primeros 3 meses de desarrollo de plantación son críticos para el control de esta plaga, su presencia se observa en la plantación como parches grandes y en caso avanzado los síntomas son generalizados en todo el cultivo.  CONTROL DE PLAGA: Realizar una adecuada preparación de terreno, que permita controlar que la humedad del suelo no sea excesiva, e incorporar los residuos de plantación. Construcción de drenajes eficientes dentro de las plantaciones para el control de humedad. Realizar muestreos de población en plantaciones jóvenes. Eliminar plantas de piña en crecimiento en etapas de preparación de terreno (plantas voluntarias). Las aplicaciones programadas de nematicidas permite el control cruzado de esta plaga.',
        'color': '#0CA9EA'
      },
      {
        'title': 'Caracol (Opeas pumilum, Cecilioides aperta). ',
        'icon': '',
        'description': 'Taxonomía: Achatinoide: Subulinidae. DESCRIPCION DE LA PLAGA: Los adultos de la especie O. pumilum pueden medir entre 6 a 9 mm (Figura 15), mientras que los de la especie C. aperta entre 4 a 6 mm. Los huevos son blancos y de menos de 1mm. Los caracoles son hermafroditas y presentan autofecundación, cada individuo puede producir aproximadamente 35 huevos mensuales. HABITO Y DAÑO: Los caracoles se localizan en los primeros 10 centímetros de suelo, cerca de las raíces donde se alimentan de los ápices principalmente. Se alimenta también de raíces de malezas como Rottboellia cochinchinensis, Eleusine indica y Emilia sp. Su daño provoca síntomas de enanismo, des-uniformidad en la plantación (parches), coloración rojiza y hojas angostas. Su ciclo de vida es de 64 días. Los ambientes húmedos con material en descomposición favorecen su reproducción. Las etapas iniciales (primeros 4 meses) son las más susceptibles a su daño. MÉTODOS DE CONTROL:  Realizar muestreos de los niveles de las poblaciones y del daño, para prevenir una incidencia mayor. Un manejo adecuado de la humedad de los terrenos con construcción de drenajes u otras prácticas. Eliminación de hijos voluntarios que sirvan de alimento en etapas de preparación de terreno. Una adecuada preparación de terreno que permita la eliminación de los residuos vegetales de la superficie del suelo. Realizar una aplicación preventiva con etoprofos o carbofuran en los primeros meses de desarrollo de plantación, para lotes con historial de presencia de la plaga.',
        'color': '#F46529'
      },
      {
        'title': 'Picudo (Metamasius dimidiatipennis)',
        'icon': '',
        'description': 'Taxomomía: Coléoptera: Curculionidae. DESCRIPCIÓN DE LA PLAGA: El adulto es de unos 2 cm de largo de color negro en la parte trasera y anaranjado de la mitad de su cuerpo hacia delante, con dos puntos negros a sus lados y un tercer punto en su cabeza. La larva es blanca con la cabeza oscura y sin patas. En el estado pupal o capullo, la larva se rodea de una cápsula fibrosa hasta convertirse en adulto de nuevo. HABITO Y DAÑO: Es una plaga esporádica en el cultivo de la piña, se produce en plantaciones abandonadas, o cuando existe un mal manejo, donde se dejan en campo hijos de siembra o frutas. Al comenzar a descomponerse atrae a los adultos por el olor.  Su mayor efecto se observa en la etapa de establecimiento de cultivo donde las larvas penetran y hacen galerías al tallo, causando pudriciones y posteriormente la muerte de la planta (Figura 19). Este síntoma es una advertencia de la presencia de la plaga dentro del cultivo. Las larvas incluso pueden atacar el fruto y la corona tierna. El adulto raspa las hojas y puede perforarlas. CONTROL: En caso de altas infestaciones difíciles de controlar se puede realizar aplicaciones de insecticidas aprobados en piña como carbaril, diazinón o Ethoprophos (este último producto es de uso restringido en Costa Rica, que solamente se puede adquirir bajo receta profesional), con volúmenes altos de agua (620 a 800 galones/ha), a las dosis recomendadas por la etiqueta del producto o por un especialista del área.',
        'color': '#F46529'
      },
      {
        'title': 'Nemátodos (Meloidogyne, Rotylenchulus, Helicotylenchus, Pratylenchus y Criconemoides)',
        'icon': '',
        'description': 'Taxonomía: Tylenchida: Tylenchoidea DESCRIPCIÓN DE LA PLAGA: Los nematodos son gusanos redondeados generalmente microscópicos, bilateralmente simétricos y cilíndricos en su sección transversal donde la hembra adulta se modifica, y puede observarse en forma de limón, pera, riñón entre otras; convirtiéndose en un parásito sedentario. Los nematodos parásitos de plantas o fitonematodos tienen una longitud entre 0.5 y 6.5. mm. HABITO Y DAÑO: Son extremadamente activos en condiciones favorables y sobreviven bien en condiciones desfavorables. Los síntomas que provocan una alta incidencia de nemátodos en plantaciones de piña son: disminución del crecimiento, pérdida de turgencia en bordes y puntas de hojas, flacidez del pedúnculo y frutos pequeños. En las raíces afectadas se observan secciones necrosadas, deformaciones, agallas y podredumbre. CONTROL DE PLAGA: Eliminar plantas muy afectadas, que presentan marchites y amarillamiento. En terrenos donde se presenten altas poblaciones se puede realizar entre 2 a 3 aplicaciones preventivas de nematicidas, una granular al suelo en el primer mes después de siembra y una o dos más (dependiendo del nivel infestación en ciclos anteriores) entre el segundo y cuarto mes después de siembra. Se debe tomar en cuenta que los productos utilizados estén debidamente autorizados a nivel nacional e internacional para su uso en piña. Además es importante rotar periódicamente los nematicidas utilizados, para reducir la resistencia que la plaga puede adquirir al producto.',
        'color': '#F46529'
      },
      {
        'title': 'Thecla o Barrenador del fruto (Strymon basilide.) ',
        'icon': '',
        'description': 'Taxonomía: Lepidóptera: Lycaneidae. DESCRIPCIÓN DE LA PLAGA: Es una pequeña mariposa de 2 cm de envergadura. Se reconoce esta familia por su prolongación en las alas, colocadas en el extremo posterior de éstas. El adulto es color gris azulado con puntos anaranjados con negro en los extremos inferiores de las alas. El huevo es elíptico de color claro y mide menos de 1mm. La larva es rosada y robusta, la pupa es obtecta  (característica de los lepidopteros) y de color café brillante.HABITO Y DAÑO: Estas mariposas son diurnas, se encuentran cerca de áreas boscosas, y donde existen malezas, principalmente Heliconeas, de las cuales chupan el néctar de las flores. En las plantaciones de la piña el adulto es atraído por las flores entre la semana  7 a 12 después de forzar (inducción floral). Los frutos afectados presentan una exudación gomosa de color ámbar la cual se endurece al contacto con el aíre. Al salir la larva deja un orificio en el fruto, el cual puede servir de entrada a hongos o bacterias. El daño de las larvas de la thecla en la mayoría de las fincas, oscilan entre un 5 y 10%, no obstante algunos lotes han alcanzado pérdidas de hasta el 50% cuando el control no se realiza adecuadamente. CONTROL: Eliminar de los alrededores de las plantaciones plantas hospederas de la thecla, como son las Heliconias. Aplicación de insecticida al inicio de la floración, entre las semanas 9 y 11 después de la inducción floral, cada 10 días. Se puede utilizar insecticidas químicos (como diazinón o carbaril) alternados con insecticidas a base de Bacillus thuringiensis.',
        'color': '#F46529'
      },
      {
        'title': 'Gusano soldado (Elaphria nucicolora) ',
        'icon': '',
        'description': 'Taxonomía: Lepidóptera: Noctuidae. DESCRIPCIÓN DE LA PLAGA: El adulto posee unas alas anteriores color café claro y las posteriores blancas, mide 1,5 cm.  El huevo de E. nucicolora  es cilíndrico, de color blancuzco, con un anillo color marrón en la parte superior. La larva presenta varios tonos de café y negro, rayas y formas triangulares más oscuras, mide hasta 3 cm de largo. HABITO Y DAÑO: El adulto de esta especie es de hábitos nocturnos; las larvas son muy activas en la noche, pero también atacan en el día. La hembra deposita sus huevos principalmente en las hojas bajeras y en las brácteas del fruto. Las larvas raspan y comen superficialmente la cáscara de la fruta, alrededor de los ojos las lesiones producen una gelatina o goma que puede ir de transparente a café oscuro. En la pulpa la lesión parece un golpe y se presenta oxidación del tejido.MÉTODOS DE CONTROL. Realizar muestreos semanales de larvas en la base de la fruta, desde la semana 6 después de forza hasta 2 semanas antes de cosecha, para evaluar la fluctuación de la población.  La utilización de la bacteria Bacilus thurigiensis ha dado muy buenos resultados para el control de la larva de E. nucicolora. Se puede intercalar conjuntamente con insecticidas químicos como el diazinón y realizar aplicaciones en conjunto, durante el control de thecla.',
        'color': '#F46529'
      },
      
   
      
    ]

    this.enfermedades = [
      {
        'title': 'Pudrición del fruto (Phytophthora cinnamomi) ',
        'icon': '',
        'description': ' Taxonomía: Oomycota: Pythiaceae. DESCRIPCIÓN DE LA ENFERMEDAD: Históricamente ésta ha sido la enfermedad más importante de la piña, ampliamente diseminada y comúnmente presente en las plantaciones. Phytophthora es un hongo imperfecto, oomycete, saprofito, que se reproduce mediante clamidiosporas, esporangios (zoosporas) y oosporas. La P. parasitica es común que se presente en etapas de aceleración del crecimiento de las plantas, entre los 45 y 60 días, y de los 5 a los 7 meses después de la siembra. Adicionalmente esta especie presenta mayor incidencia en temporada lluviosa, preferiblemente en días calurosos con precipitaciones. SÍNTOMAS DE P. PARASITICA: - FOLLAJE: clorosis o amarillamiento progresivo, hasta necrosis de las puntas de las hojas apicales, desprendimiento fácil de las hojas del centro de la planta, halo necrótico de 1 a 2 pulgadas, superior al punto del desprendimiento, corte de desgarre marcado, olor fuerte a descomposición del material vegetal necrótico - FRUTA: poca ocurrencia de esta enfermedad en fruta, necrosis basal progresiva, fruta momificada que al partirla presenta un halo necrótico. - TALLO: el corte longitudinal del tallo presenta un halo en la periferia del punto de emergencia de las hojas, avance progresivo muy acelerado del daño en este punto, llega a pudrir antes que el follaje.  RAÍZ: comúnmente se desprende al intentar sacar la planta, raíz necrótica no funcional. SÍNTOMAS DE P. CINNAMOMI: - FOLLAJE: clorosis de avance lento hacia necrosis de las puntas de las hojas apicales, desprendimiento no tan fácil de las hojas del centro de la planta, halo necrótico 1 a 2 pulgadas superior al punto del desprendimiento pero más irregular, corte de desgarre marcado, olor a descomposición menos fuerte que con P. parasitica. - FRUTA: presencia de tejido blando, necrótico, momificado. Generalmente los síntomas inician de forma basal, pero puede presentarse el inicio apicalmente, en estos casos las hojas de la corona se desprenden fácil, y hay presencia de halo. Cuando existe humedad alta se presenta un micelio blanco que cubre la fruta, esto es un signo característico para el diagnóstico de la enfermedad. - TALLO: el corte longitudinal presenta un halo necrótico que circunscribe un tejido blanco, duro y momificado, lo cual es una característica para su diagnóstico. - RAÍZ: comúnmente se desprende al intentar sacar la planta. La raíz se presenta necrótica no funcional. MÉTODOS DE CONTROL: El control de esta enfermedad inicia con una adecuada preparación de terreno, y construcción de drenajes eficientes que permitan la eliminación del exceso de humedad en los lotes de producción. Realizar una desinfección del material de siembra utilizando un fungicida específico para oomicetes (Fosetil al o metalaxyl).   El uso de inductores de resistencia como el fosfito de potasio reducen el efecto de la enfermedad sobre la planta.  Existe restricción en el mercado de moléculas eficaces para el control de hongos oomycetes, comúnmente se emplea de forma preventivamente el fosetyl Al y curativa el metalaxyl.',
        'color': '#E63135'
      },
      {
        'title': 'Fusarium (Fusarium sp)',
        'icon': '',
        'description': 'Taxonomía: Hypocreales: Nectriaceae. DESCRIPCIÓN DE LA ENFERMEDAD: Fusarium es el hongo fitopatógeno de mayor dispersión mundial, recientemente se identificó en el cultivo de la piña en Costa Rica, aunque aún no se determina la especie específica que ataca este cultivo. Se presenta en muy alta incidencia en las plantaciones y a nivel mundial existen especies muy agresivas para la piña, como es el caso de F. guttiforme en Brasil, que provocó el cierre de plantaciones. SÍNTOMAS: - FOLLAJE: clorosis de hojas basales, también puede afectar hojas apicales. Esta enfermedad es de avance lento, no en bandas marcadas y la necrosis que presenta es lenta para apreciarse. No hay desprendimiento foliar, ni olor característico. Se presentan síntomas de deshidratación foliar, similar a déficit hídrico: acucharamiento del follaje y emisión de espinas. Si la infección se da de forma temprana pueden ocasionar la muerte de la planta. - FRUTA: pobre desarrollo de la fruta, tamaño pequeño, momificación, y puede generar problemas internos en la fruta cuando existe interacción con otros patógenos.  - TALLO: lesión basal central que genera decoloración, amarillamiento a necrosis del tejido; generalmente con forma de avance oval que puede ser asintomática a nivel de follaje. Avance de la lesión llega a podrir el tallo y ocasionar hasta la muerte.  - RAÍZ: las plantas afectadas presentan escaso o nulo desarrollo radical, raíces necrosadas no funcionales. MÉTODOS DE CONTROL: Realizar una adecuada preparación de terreno que permita la incorporación total de los rastrojos de plantación y reduzca la presencia de exceso de humedad. La aplicación del hongo biocontrolador Trichoderma, en la etapa de preparación de terreno, o en los primeros meses de desarrollo de la plantación ha dado muy buenos resultados para reducir la incidencia de Fusarium en el cultivo. La dosis de aplicación depende de la concentración del producto utilizado, se puede utilizar de 400 a 620 galones de agua por hectárea dependiendo de las condiciones climáticas imperantes. Para el control químico se puede aplicar de forma preventiva las moléculas carbendazina, prochloraz y propiconazole, a la dosis y frecuencia que establezca un profesional del área agropecuaria.',
        'color': '#0CA9EA'
      },
      {
        'title': 'Pudrición bacterial del fruto (Erwinia chrysanthemi) ',
        'icon': '',
        'description': 'Toxanomía: Enterobacteriales: Enterobacteriaceae. DESCRIPCIÓN DE LA ENFERMEDAD: Todas las especies del género Erwinia son patógenas de plantas. Es una bacteria gram negativa, flagelada y móvil. Se considera la segunda enfermedad más conocida en el cultivo de piña, después de Phytophthora. Su incidencia puede ser de leve a moderada y generalmente se presenta en puntos de maltrato mecánico de las plantaciones como son: bordes, sitios de ingreso de personal o de maquinaria. Esta enfermedad afecta a la piña en los momentos de transición climática, con humedad suficiente y altas temperaturas (por ejemplo cuando se realiza riego en verano). SÍNTOMAS DE E. CAROTOVORA:  - FOLLAJE: puede iniciar en hojas basales (más común) o en el pito. En el pito se inicia con un doblamiento de las hojas apicales sin decoloración del follaje, con desprendimiento del pito sin desgarre, ni corte marcado, el punto basal de estas hojas se presenta “licuado” y con olor intenso a amoniaco (orina). Posteriormente, sobre las hojas se presenta una necrosis sin amarillamiento de avance rápido, con levantamiento de la epidermis en la parte basal (hoja de tamal). - Tallo: inicialmente se presenta un ablandamiento leve del tallo con una muy leve decoloración. Con forme avanza la enfermedad los tejidos se ablandan (licuados) hasta su descomposición. SÍNTOMAS E. CHRYSANTHEMI:  - FRUTA: externamente en la parte basal con avance apical se presenta una necrosis húmeda del tejido, que ablanda y licua la pulpa, al partir la fruta no se observan halos de avance, pero si la lisis del tejido. La fruta puede almacenar amoniaco dentro de la pulpa y expulsar este en forma de burbujas externamente. - FOLLAJE: las hojas brácteales pueden llegar a presentar el levantamiento de la epidermis (hoja de tamal). - Tallo: la lisis de tejido avanza desde el pedúnculo hasta el tallo, ablandandolos. MÉTODOS DE CONTROL: • Siempre es importante iniciar con una adecuada preparación de terreno y construcción de drenajes, que permita el desalojo del exceso de agua de los terrenos. • Existen varios bactericidas en el mercado, los cuales no son empleados en el cultivo por sus restricciones en uso y el costo que representan. Generalmente se emplea de forma preventiva cicatrizante como extractos de semilla de cítricos, y para un control curativo se utiliza sulfato de cobre.',
        'color': '#F46529'
      },
      {
        'title': 'Pudrición del tallo ',
        'icon': '',
        'description': 'DESCRIPCIÓN: El agente causal de esta enfermedad se considera que es una bacteria, pero no se conoce clasificación taxonomíca. Dentro de la plantación es mucho más común encontrar plantas afectadas en puntos de depresión del terreno, donde existe mal drenaje y exceso de agua. Las infecciones se dan en los periodos de mayor crecimiento vegetativo, desde su infección a la muerte la planta pueden pasar de 40-50 días. Los síntomas son más evidentes después de forza, y en épocas de verano se puede afectar el sistema vascular. SÍNTOMAS: - Los síntomas externos no siempre coinciden en severidad con los síntomas internos. - FOLLAJE: quema de puntas en hojas medias, que al avanzar afecta las hojas más activas (Hoja D), hasta llegar a afectar en condiciones severas, a las hojas centrales. La necrosis avanza con el tiempo al resto de la hoja, en la que se presenta una clorosis generalizada. En estas hojas se aprecia una necrosis de los haces vasculares y en la base de las mismas se observan unas estrías incoloras paralelas, que llegan a necrosar, estas hojas no presentan pudriciones acuosas, y son de difícil desprendimiento en los estados no severos. - FRUTA: generalmente la planta muere antes de cosecha, pero si la infección es tardía podría aprovecharse la fruta, condiciones intermedias generan una fruta momificada.  - TALLO: exudado al poner en agua, forma una necrosis de las heces vasculares y una pudrición seca y necrótica de color café cerca del rizoma, la cual en algunos estados de severidad muy leves no es perceptible, pero que tiende a formar un halo alrededor del tallo. Esta lesión tiene un olor similar al aserrín. - Raíz: necrosis radical, muy poca presencia de estas. MÉTODOS DE CONTROL: • Erradicación de plantas que presenten síntomas dentro de la plantación. • Construir y mantener buenos drenajes que permitan la evacuación eficiente del exceso de agua. • Realizar un adecuado manejo de los rastrojos de plantación: con incorporación del material vegetal en la etapa de preparación de terreno, y aplicación de microorganismos para acelerar su descomposición.',
        'color': '#F46529'
      },
      {
        'title': 'Pudrición acuosa o fruta bofa (Thelaviopsis paradoxa)',
        'icon': '',
        'description': ' Taxonomía: Ascomycota: Dematicaceae DESCRIPCIÓN DE LA ENFERMEDAD: Thielaviopsis paradoxa es un hongo que produce dos tipos de esporas: conidioesporas y clamidoesporas, estas últimas pueden sobrevivir durante mucho tiempo en el suelo. Se puede presentar en el campo, pero principalmente es un problema de poscosecha donde se pueden presentar pérdidas de hasta el 70% de las frutas para exportación en fresco. El inicio de la enfermedad se relaciona directamente con la presencia de heridas en las plantas o frutas.  Afecta el material de siembra, tallo, hojas y frutos. Penetra a través de las heridas, por un manejo bajo condiciones de alta temperatura y humedad. La presencia de este hongo en los hijos de siembra se distingue por un color gris oscuro en la base, y se presenta un moteado blanco. En los frutos esta enfermedad se caracteriza por una pudrición suave y acuosa, que inicia en un punto y se desarrolla por toda la fruta. Los tejidos del hongo se vuelven negros con el tiempo por la esporulación del micelio MÉTODOS DE CONTROL:  • Realizar un adecuado secado del corte de los hijos antes de ser utilizados. • Eliminar en campo las frutas que presenten esta enfermedad, para no ser llevadas a la planta empacadora. • Desinfectar los hijos de piña antes de la siembra. • Desinfectar adecuadamente las áreas de empaque donde se prepara y acondicionan los frutos para la exportación. • En los frutos que se destinan para la exportación se recomienda desinfectar la sección del pedúnculo. • Empacar todas las frutas cosechadas antes de las 8 horas de haber sido cosechadas.',
        'color': '#F46529'
      }
      
   
      
    ]
  }

  openNavDetailsPage(item) {
    this.nav.push(InfoPage, { item: item });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TratamientoPage');
  }

}