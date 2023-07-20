<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Bases conceptuales de medio e impacto ambiental
      
    p(data-aos="fade-down").mb-5 El ambiente es todo lo que rodea a un organismo; lo constituyen componentes como el agua, el aire, los animales, las personas, el suelo, los cuales se relacionan entre sí. El efecto que produce una determinada actividad humana sobre el ambiente se denomina impacto ambiental. 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10.bg2.p-4
        .row.justify-content-center.align-items-center           
          .col-auto
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/1.svg', alt='')                      
          .col
            p(data-aos="fade-down").mb-0 #[b Con el transcurrir de los años el ser humano ha modificado el ambiente para su beneficio] por medio de la civilización y desarrollo tecnológico; sin embargo, esto también ha contribuido a perjudicar el ambiente. 

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/2.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Con el fin de comprender la complejidad del ambiente, es importante entender los conceptos básicos relacionados con la ecología y la biología. El individuo, como unidad fundamental de la vida, es capaz de realizar todas las funciones vitales: nutrición, relación y reproducción. Por otro lado, la especie es la forma en la que se agrupan los seres vivos. En la siguiente infografía se definen los conceptos básicos relacionados con la ecología y la biología, desde el nivel más elemental, que es el individuo, hasta el más complejo, que es el ecosistema:  

    SlyderF.text-center.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t.img-w(src='@/assets/curso/temas/3.svg' alt='')

        .tarjeta.color-primario.bg10.ts.h-100
          .p-4
            h4 Individuo 
            p.mb-0 Todo ser vivo, independientemente de su complejidad biológica, es un individuo, capaz de realizar todas las funciones vitales: nutrición, relación y reproducción.       
      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t.img-w(src='@/assets/curso/temas/4.svg' alt='')

        .tarjeta.color-primario.bg10.ts.h-100
          .p-4
            h4 Especie 
            p.mb-0 Es el conjunto de individuos que comparten características similares y pueden reproducirse entre ellos, dando lugar a descendencia fértil. Por ejemplo, los perros, los gatos, los leones y los humanos son especies diferentes.                
      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t.img-w(src='@/assets/curso/temas/5.svg' alt='')

        .tarjeta.color-primario.bg10.ts.h-100
          .p-4
            h4 Población 
            p.mb-0 Son todos los individuos de una misma especie que viven en un área geográfica determinada y que interactúan entre ellos. Por ejemplo, una población de osos en un bosque.      
      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t.img-w(src='@/assets/curso/temas/6.svg' alt='')

        .tarjeta.color-primario.bg10.ts.h-100
          .p-4
            h4 Comunidad 
            p.mb-0 Es el conjunto de poblaciones de diferentes especies que viven y interactúan en un mismo ecosistema. Por ejemplo, una comunidad de animales en un bosque o una comunidad de plantas en una pradera.       
      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t.img-w(src='@/assets/curso/temas/7.svg' alt='')

        .tarjeta.color-primario.bg10.ts.h-100
          .p-4
            h4 Ecosistema 
            p.mb-0 Un sistema complejo en el que interactúan entre sí los seres vivos y los elementos no vivos, un ecosistema puede ser un bosque, un río, o un océano.               

    p(data-aos="fade-down").mb-5 Como se mencionó anteriormente un ecosistema es un conjunto de seres vivos y su entorno físico y químico, que interactúan entre sí para mantener un equilibrio. El medio ambiente, por otro lado, es la generalidad que incluye todos los ecosistemas, incluyendo el ecosistema urbano creado por los seres humanos. Así,  se puede entender que un ecosistema es una parte importante del medio ambiente, pero no lo es todo. En el diagnóstico ambiental de una organización, se consideran no solo los recursos naturales, como la flora, fauna, agua, suelo y aire, sino también el aspecto social, incluyendo las actividades humanas.  

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8.bg3.p-5(data-aos="flip-down")
        .bloque-texto-b.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p(data-aos="fade-down").mb-0 #[b La definición específica de la Conferencia de las Naciones Unidas sobre Medio Ambiente en Estocolmo (1972) señala que] “el medio ambiente es un conjunto de componentes físicos, químicos, biológicos y sociales capaces de causar efectos directos o indirectos, en un plazo corto o largo, sobre los seres vivos y las actividades humanas”. 
            i.fas.fa-quote-right    

    .row.justify-content-center.mb-4          
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='') 
      .col-lg-6.my-3
        .bg4.p-4.h-100.j
          p(data-aos="fade-down").mb-0 En resumen, el ecosistema es un componente del medio ambiente, y ambos son importantes para entender la relación entre el ser humano y su entorno, así como para tomar medidas efectivas para proteger y conservar nuestro planeta. <br><br> Los conceptos relacionados con el medio ambiente son cada vez más importantes en la sociedad actual debido al creciente impacto de las actividades humanas sobre el planeta. Entre los términos fundamentales para entender la relación entre el hombre y su entorno se encuentran el cambio climático, el efecto invernadero, la capa de ozono, el calentamiento global, el impacto ambiental, la contaminación y los contaminantes. 

    .bg5.p-5
      h5(data-aos="fade-down").text-center.mb-5 En el siguiente recurso podrá conocer los problemas ambientales, lo cual resulta fundamental para tomar conciencia de los problemas ambientales actuales y buscar soluciones sostenibles para el futuro:    

      .row.justify-content-center.align-items-center          
        .col-lg-10
          ImagenInfografica.color-acento-botones(data-aos="fade-left")
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/9.svg', alt='La imagen presenta y describe diferentes temas relacionados con los problemas ambientales, como son: calentamiento global, efecto invernadero, cambio climático, impacto ambiental, contaminante, contaminación y capa de ozono.')

            .tarjeta.color-acento-botones.p-3(x="5.5%" y="84%" numero="")
              .h5.mb-2 Calentamiento global
              p.mb-0 Es el aumento gradual de la temperatura media en la superficie terrestre, así como en los océanos, y que se atribuye principalmente a la actividad humana, particularmente a la emisión de gases de efecto invernadero como el dióxido de carbono, metano y óxido nitroso. Estos gases atrapan el calor del sol en la atmósfera, lo que provoca un efecto invernadero que contribuye al calentamiento del planeta.     
            .tarjeta.color-acento-botones.p-3(x="20.5%" y="84%" numero="")
              .h5.mb-2 Efecto invernadero
              p.mb-0 Es el efecto radiactivo infrarrojo de todos los componentes de la atmósfera que absorben en el infrarrojo, por lo tanto los gases de efecto invernadero y las nubes y, en menor medida, los aerosoles absorben la radiación terrestre emitida por la superficie de la Tierra, esta modificación de la concentración de los gases de efecto invernadero debida a emisiones antropógenas contribuye a un aumento de la temperatura en la superficie o índice de calentamiento.    
            .tarjeta.color-acento-botones.p-3(x="35.5%" y="84%" numero="")
              .h5.mb-2 Cambio climático
              p.mb-0 La Convención Marco de las Naciones Unidas sobre el Cambio Climático (CMNUCC), en su artículo 1, define el cambio climático como “cambio de clima atribuido directa o indirectamente a la actividad humana que altera la composición de la atmósfera global y que se suma a la variabilidad natural del clima observada durante períodos de tiempo comparables”.  
            .tarjeta.color-acento-botones.p-3(x="50.5%" y="84%" numero="")
              .h5.mb-2 Impacto ambiental
              p.mb-0 Es cualquier alteración en el medio ambiente que resulte de las actividades humanas, ya sea directa o indirectamente, y que pueda tener un impacto negativo en los ecosistemas, la biodiversidad, la salud humana y otros aspectos del bienestar social y económico. Los impactos ambientales pueden ser el resultado de una amplia gama de actividades humanas, incluyendo la construcción de infraestructuras, la explotación de recursos naturales, la agricultura, la producción industrial, el transporte y el turismo, entre otros.    
            .tarjeta.color-acento-botones.p-3(x="65.2%" y="84%" numero="")
              .h5.mb-2 Contaminante
              p.mb-0 Es cualquier sustancia, agente o forma de energía que, al introducirse en el medio ambiente, puede producir efectos adversos en la salud humana, la calidad del aire, el agua, el suelo, la biodiversidad y otros elementos del medio ambiente.  
            .tarjeta.color-acento-botones.p-3(x="80.2%" y="84%" numero="")
              .h5.mb-2 Contaminación
              p.mb-0 Es la alteración del ambiente con sustancias o formas de energía puestas en él, por actividad humana o de la naturaleza, en cantidades, concentraciones o niveles capaces de interferir el bienestar y la salud de las personas, atentar contra la flora y la fauna, degradar la calidad del ambiente de los recursos de la nación o de los particulares.     
            .tarjeta.color-acento-botones.p-3(x="95%" y="84%" numero="")
              .h5.mb-2 Capa de ozono
              p.mb-0 La capa de ozono define que en la estratosfera contiene una capa en que la concentración de ozono es máxima, denominada capa de ozono. Esta capa abarca aproximadamente desde los 12 km hasta los 40 km por encima de la superficie terrestre. La concentración de ozono alcanza un valor máximo entre los 20 km y los 25 km aproximadamente. Esta capa ha sido mermada por efecto de las emisiones humanas de compuestos de cloro y de bromo.

    .row.justify-content-center.align-items-center.my-5           
      .col-lg-10.bg6.p-4
        p(data-aos="fade-down").mb-0 Los seres vivos presentan diversos niveles de organización que van desde el nivel atómico o molecular hasta el medio ambiente, que es todo lo que nos rodea. Entre ellos se encuentran la célula, los tejidos, los órganos, los organismos (seres vivos como tal que representan un individuo de una especie), la población (varios individuos de la misma especie), la comunidad (varias especies que conviven juntas y tienen interacciones como la cadena alimenticia, mutualismo, comensalismo, simbiosis, etc.) y el ecosistema (varias comunidades en un mismo ambiente específico).   

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/10.png', alt='')

    p(data-aos="fade-down").mb-5 Estos conceptos son relevantes para entender la diferencia en cuanto a problemas legales ambientales. Cuando se dice que una empresa acaba con un ecosistema, esta acción puede generar demandas millonarias debido a la pérdida de muchas especies y un medio ambiente específico con características únicas. 

    .row.justify-content-center.align-items-center.bg7.mb-5
      .col-lg-4.p-0
        img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/12.png', alt='')      
      .col-lg-8(data-aos="fade-down")
        .p-4
          p(data-aos="fade-down").mb-0 En muchas ocasiones, las empresas tratan de minimizar la connotación de su impacto ambiental al reducirlo a la afectación de una población o de un individuo, para así disminuir la multa. Sin embargo, esto no significa que sea menos importante, ya que puede tratarse de una especie en vía de extinción, importante para mantener el eslabón de la cadena alimenticia, una especie con funciones ecosistémicas esenciales, una cría o hembra, entre otros aspectos.

    .row.justify-content-center.mb-4
      .col-lg-7.my-3
        .bg4.p-5.h-100
          p(data-aos="fade-down") En función de cada caso, estas variables pueden generar multas millonarias, pero en ocasiones las empresas tienen los recursos para pagarlas. Por lo tanto, también existen sanciones de sellamiento y clausura.  
          p(data-aos="fade-down").mb-0 Reconocer los hábitats de las especies en el área de influencia de un proyecto u organización y evaluar cómo las actividades de esta afectan ese hábitat, ya sea de manera directa a la especie o indirecta al contaminar o afectar el agua, el suelo, el aire, es fundamental para identificar medidas de prevención y mitigación ambiental.                
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/13.png', alt='') 

        
    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1  Tipos de componentes ambientales   

    p(data-aos="fade-down").mb-5 Los componentes ambientales son los aspectos ambientales que constituyen un medio (ya sea abiótico o biótico, o socioeconómico), como, por ejemplo, el componente atmosférico, hidrológico, faunístico, demográfico, entre otros.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .row.justify-content-between.mx-0.bg13.mb-3(data-aos="flip-down")
          .col-auto.p-0
            img(data-aos="zoom-in")(src='@/assets/curso/temas/15.svg', alt='')
          .col
            .p-3.my-4.me-2
              p(data-aos="fade-down").mb-0 En el proceso de licenciamiento ambiental, los aspectos a evaluar para la determinación del área de influencia se deben plantear considerando una jerarquía de medio y componente, donde los medios son la división general del ambiente y la máxima categoría de abordaje, #[b mientras que los componentes corresponden a los elementos ambientales que constituyen un medio, como se presenta a continuación:]  

    .titulo-sexto.color-acento-contenido
      h5 Figura 1. 
      span  Componentes ambientales 

    .row.justify-content-center.mb-4           
      .col-lg-4.my-3
        .tarjeta.tarjeta-avatar.h-100
            img.img-a.img-t(src='@/assets/curso/temas/16.svg' alt='')

            .tarjeta.color-primario.bg8.bra.ts.h-100
              .p-4.pt-5
                h4.text-center Medio Abiótico 
                p.mb-0 Incluye los componentes geológicos, geomorfológico, paisajístico, suelo y uso del suelo,  hidrológico, hidrogeológico, oceanográfico, geotécnico y atmosférico entre otros.    

      .col-lg-4.my-3
        .tarjeta.tarjeta-avatar.h-100
            img.img-a.img-t(src='@/assets/curso/temas/17.svg' alt='')

            .tarjeta.color-primario.bg9.bra.ts.h-100
              .p-4.pt-5
                h4.text-center Medio Biótico 
                p.mb-0 Comprende los componentes flora, fauna e hidrobiotica.  

      .col-lg-4.my-3
        .tarjeta.tarjeta-avatar.h-100
            img.img-a.img-t(src='@/assets/curso/temas/18.svg' alt='')

            .tarjeta.color-primario.bg8.bra.ts.h-100
              .p-4.pt-5
                h4.text-center Medio socioeconómico 
                p.mb-0 Consta de los componentes demográfico, espacial, económico, cultural, arqueológico y político - organizativo. 

    p(data-aos="fade-down").mb-5 Para realizar un diagnóstico ambiental de la organización, es fundamental identificar los componentes ambientales que rodean su área de influencia directa e indirecta. #[b De esta manera, se podrá definir si estas actividades pueden estar afectando o pueden afectar los componentes ambientales.] 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .row.justify-content-between.mx-0.bg11.mb-3(data-aos="flip-down")
          .col-auto.p-0
            img(data-aos="zoom-in")(src='@/assets/curso/temas/19.svg', alt='')
          .col
            .p-3.my-4.me-2
              p(data-aos="fade-down").mb-0 Identificar los componentes ambientales en un área de estudios se conoce como línea base o inventario ambiental, y es una parte importante del diagnóstico ambiental en una organización.  

    .row.justify-content-center.align-items-center.bg12.mb-5
      .col-lg-6(data-aos="fade-down")
        .p-4
          p(data-aos="fade-down") La función del inventario es caracterizar el entorno en el que se localiza, identificar su evolución, los mecanismos de interacción, la calidad de los componentes ambientales y su fragilidad frente a diferentes tipos de actuaciones. Como se recordará, la calidad de los componentes ambientales (y por extensión del entorno) hace referencia al valor intrínseco del factor ambiental, de acuerdo con criterios de conservación, representatividad, exclusividad, función ambiental y/o interés social.
          .color-fondo-text.bg-color.p-1(data-aos="fade-down")
            .color-fondo-text__texto 
              p.mb-0 Es importante que el contenido del inventario sea completo y contemple al menos los factores ambientales básicos (agua, suelo, aire, flora y fauna), y que el grado y detalle del análisis se ajuste a las necesidades derivadas del tipo de medio en el que se actúa.         
      .col-lg-6.p-0
        img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/20.png')   


    .row.justify-content-start.mb-4        
      .col-auto.bg14.p-3(data-aos="flip-down")
        h5.mb-0(data-aos="fade-down") Ambiente físico

    p(data-aos="fade-down").mb-5 Se refiere a todos los elementos no vivos presentes en un lugar determinado, como la atmósfera, el agua, el suelo, la luz solar, la temperatura y los minerales.         

    .bg15.p-5.mb-5
      h5(data-aos="fade-down") Componentes abióticos: 
      p(data-aos="fade-down").mb-5 Son elementos físicos y químicos que se encuentran en el medio ambiente, incluyendo el suelo, el agua, el aire, la luz solar, la temperatura, la humedad, la presión atmosférica, los nutrientes y los minerales; son importantes para el funcionamiento del ecosistema y para el crecimiento y la supervivencia de los organismos vivos que habitan en él. En el siguiente video se pueden conocer a profundidad:     

      .row.justify-content-center.align-items-center           
        .col-lg-12(data-aos="fade-left")     
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/ofEpqjGW7Rk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)   
          figcaption Video. Componentes abióticos

    .bg16.p-5.mb-5
      h5(data-aos="fade-down") Componente  biótico:
      p(data-aos="fade-down") Hace referencia principalmente a los ecosistemas existentes y a la flora y fauna silvestre que habita en ellos. 

      p(data-aos="fade-down") Es importante identificar las especies de flora y fauna silvestre características de la zona, así como los diferentes ecosistemas y zonas de vida, destacando la forma en que estos contribuyen a la productividad biológica y la diversidad. Por ejemplo, se puede explicar cómo la vegetación sustenta la pesca y la vida silvestre, o cómo los hábitats de la vida silvestre permiten el ciclo de vida, incluyendo la reproducción, migración, alimentación y protección. 

      p(data-aos="fade-down").mb-5 Asimismo, se deben describir áreas únicas, zonas de transición (como los bordes) y otros recursos de especial importancia, así como el uso de los recursos biológicos para la agricultura, silvicultura, pesca, entre otros. 

      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/23.png', alt='') 


    .bg15.p-5.mb-5
      h5(data-aos="fade-down") Componente socioeconómico:
      p(data-aos="fade-down") Se refiere a las actividades humanas que se desarrollan dentro del ámbito del proyecto, incluyendo las actividades sociales, económicas y culturales. Los aspectos a considerar en esta categoría son el tamaño, distribución y características de la población humana, así como las actividades económicas (empleo, inversión, ingreso promedio, impuestos, etc.) en el área del proyecto. 
      h5(data-aos="fade-down").mb-5 Es importante describir: 

      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10
          .row.justify-content-between.mx-0.bg11.mb-3(data-aos="flip-down")
            .col-auto.p-0
              img(data-aos="zoom-in")(src='@/assets/curso/temas/19.svg', alt='')
            .col
              .p-3.my-4.me-2
                h4(data-aos="fade-down") Infraestructura socioeconómica 
                p(data-aos="fade-down").mb-0 Servicios e instalaciones públicas y privadas, el transporte, las viviendas, las escuelas, los parques, la protección policial y contra incendios, los servicios de salud, el abastecimiento de agua y desagüe, el manejo del agua de lluvia y los desechos sólidos.     

          .row.justify-content-between.mx-0.bg11.mb-3(data-aos="flip-down")
            .col-auto.p-0
              img(data-aos="zoom-in")(src='@/assets/curso/temas/19.svg', alt='')
            .col
              .p-3.my-4.me-2
                h4(data-aos="fade-down") El tráfico 
                p(data-aos="fade-down").mb-0 El proyecto podría tener impacto en el corto o largo plazo sobre las vías de acceso o los niveles de tráfico, así como los recursos energéticos y los materiales peligrosos.   

    .bg16.p-5.mb-5
      h5(data-aos="fade-down") Recursos culturales y estéticos: 
      p(data-aos="fade-down") En general, se incluye en esta categoría una discusión sobre la ubicación específica del proyecto desde el punto de vista arqueológico, histórico y estético, con un contexto narrativo que explique sus significados. Los recursos estéticos pueden incluir elementos del estilo de vida y los valores de la gente, como los recursos visuales y escénicos. 

      p(data-aos="fade-down") Es importante realizar un diagnóstico ambiental de los componentes presentes en el área de influencia del proyecto, obra o actividad, a fin de identificar los posibles impactos ambientales y mitigarlos. La caracterización de los sistemas socio ecológicos es una actividad fundamental que permite al equipo de trabajo conocer en detalle las características de la acción propuesta desde la perspectiva de las diferentes disciplinas involucradas. 

      p(data-aos="fade-down").mb-5 Para ello, una opción es realizar una salida de campo para visitar el sistema socio ecológico y así poder identificar y describir el entorno de manera más precisa. 

      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/24.png', alt='') 

    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2  Área de influencia ambiental y recolección de información 

    p(data-aos="fade-down").mb-5 Para  definir el área de influencia, es necesario estimar la localización, tipo e intensidad de uso de los recursos durante las distintas fases del desarrollo del proyecto, obra o actividad, así como considerar los impactos generados sobre estos y su variación en tiempo y espacio. (Arboleda, 2008, p.102).

    .row.justify-content-center.mb-4          
      .col-lg-5.my-3
        .tarjeta.tarjeta-avatar.h-100
            img.img-a.img-t.img-big(src='@/assets/curso/temas/25.png' alt='')

            .tarjeta.color-primario.bg17.bra.ts.h-100
              .p-4.pt-5
                h4.text-center Área de influencia directa (AID) 
                p.mb-0 El área de influencia directa es aquella donde se presentan los impactos generados en las fases de construcción y/o operación de un proyecto, obra o actividad; está relacionada con el sitio donde se ubica la organización y su infraestructura.  De acuerdo con el impacto generado el área puede o no cambiar y de acuerdo con esto se deben delimitar las áreas de influencia sobre todos los componentes.    

      .col-lg-5.my-3
        .tarjeta.tarjeta-avatar.h-100
            img.img-a.img-t.img-big(src='@/assets/curso/temas/26.png' alt='')

            .tarjeta.color-primario.bg18.bra.ts.h-100
              .p-4.pt-5
                h4.text-center Área de influencia indirecta (AII) 
                p.mb-0 El área donde los impactos se propagan hacia la zona externa al área de influencia directa y se extiende tanto como el efecto del impacto lo permita.    

    p(data-aos="fade-down").mb-5 La recolección de información de los componentes ambientales es un proceso esencial para identificar y mitigar posibles impactos que pueden ser causados por las labores humanas en el entorno. En este sentido, se requiere de una metodología adecuada que permita consultar información secundaria, realizar reconocimiento del área, identificar aspectos relevantes y establecer puntos de interés, definir y/o identificar las actividades propuestas y delimitar un área de influencia directa e indirecta. 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .row.justify-content-between.mx-0.bg13.mb-3(data-aos="flip-down")
          .col-auto.p-0
            img(data-aos="zoom-in")(src='@/assets/curso/temas/27.png', alt='')
          .col
            .p-3.my-4.me-2
              p(data-aos="fade-down").mb-0 A continuación, se describe en detalle la metodología para recolectar información de los componentes ambientales, incluyendo los criterios y variables necesarios para establecer el área donde se manifestarían los impactos ambientales significativos para cada uno de los componentes de los medios abiótico, biótico y socioeconómico:   

    .tarjeta.tarjeta--gris.p-4.my-5
      LineaTiempoC.color-acento-botones
        .row.justify-content-center(titulo="")
          .col-11.bg19.brad.p-5.h-100
            h5.mb-4 Consultar información del área de estudio  
            .row.justify-content-center.align-items-center.bg20.brad.p-4           
              .col-lg-auto.col-md-11.my-3 
                img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/28.png') 

              .col-lg.col-md-11.my-3
                p.mb-0 Consultar información secundaria del área de estudio, como cartografía de Googlemaps, Guía de Zonificación y Codificación de Cuencas Hidrográficas, planchas del Servicio Geológico Colombiano, fotografías satelitales e información oficial de índole local, regional y nacional, para cada uno de los componentes ambientales, considerando la ubicación del proyecto, obra o actividad.     
        .row.justify-content-center(titulo="")
          .col-11.bg19.brad.p-5.h-100
            h5.mb-4 Realizar reconocimiento del área  
            .row.justify-content-center.align-items-center.bg20.brad.p-4           
              .col-lg-auto.col-md-11.my-3 
                img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/29.png') 

              .col-lg.col-md-11.my-3
                p.mb-0 Realizar reconocimiento del área, con el fin de corroborar la información secundaria consultada y la establecida en las imágenes satelitales, haciendo uso de recorridos definidos y estableciendo y/o ratificando puntos de interés para el levantamiento de información y/o muestreos.      
        .row.justify-content-center(titulo="")
          .col-11.bg19.brad.p-5.h-100
            h5.mb-4 Identificar aspectos relevantes  
            p 
            .row.justify-content-center.align-items-center.bg20.brad.p-4           
              .col-lg-auto.col-md-11.my-3 
                img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/30.png') 

              .col-lg.col-md-11.my-3
                p.mb-0 Identificar aspectos relevantes y establecer puntos de interés por su vulnerabilidad o conservación ambiental y social de los medios físicos, como bióticos y socioeconómicos.     
        .row.justify-content-center(titulo="")
          .col-11.bg19.brad.p-5.h-100
            h5.mb-4 Definir las actividades propuestas  
            p 
            .row.justify-content-center.align-items-center.bg20.brad.p-4           
              .col-lg-auto.col-md-11.my-3 
                img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/31.png') 

              .col-lg.col-md-11.my-3
                p.mb-0 Definir las actividades propuestas para las diferentes fases, de acuerdo con las necesidades del proyecto, obra o actividad.   
        .row.justify-content-center(titulo="")
          .col-11.bg19.brad.p-5.h-100
            h5.mb-4 Identificar las unidades mínimas de análisis 
            .row.justify-content-center.align-items-center.bg20.brad.p-4           
              .col-lg-auto.col-md-11.my-3 
                img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/32.png') 

              .col-lg.col-md-11.my-3
                p.mb-0 Identificar las unidades mínimas de análisis para cada uno de los componentes (p.ej. hídrico, geológico, geomorfológico, flora, fauna, demográfico, espacial, cultural, entre otros), que se presenten como relevantes.     
        .row.justify-content-center(titulo="")
          .col-11.bg19.brad.p-5.h-100
            h5.mb-4 Definir área de influencia  
            .row.justify-content-center.align-items-center.bg20.brad.p-4           
              .col-lg-auto.col-md-11.my-3 
                img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/33.png') 

              .col-lg.col-md-11.my-3
                p.mb-0 Definir un área de influencia directa e indirecta para trazar un polígono que establezca el área donde se producirían los impactos ambientales en los componentes abióticos, bióticos y socioeconómicos. Entre los impactos a considerar están cambios de coberturas de la tierra, geoformas, puntos de convergencia de cuerpos de agua, entre otros. 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        p(data-aos="fade-down") Para obtener información más detallada sobre cómo realizar un inventario ambiental y crear un inventario ambiental o línea base ambiental para un proyecto, puede ingresar a: 

    .row.justify-content-center.align-items-center.mb-3           
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Inventario ambiental o línea base ambiental de los componentes ambientales, consulte la guía disponible en el siguiente enlace:
                .col-sm-auto
                  a.boton.color-acento-botones(href="http://www.andi.com.co/Uploads/guia_para_la_definicion_identificacion_y_delimitacion_del_area_de_influencia_0.pdf" target="_blank")
                    span Descargar
                    i.fas.fa-file-download   

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Para un estudio de impacto ambiental y obtener una licencia ambiental, es necesario seguir los términos de referencia establecidos por la Autoridad Nacional de Licencias Ambientales (ANLA). En el caso de proyectos específicos, se deben cumplir con los requisitos específicos exigidos por la autoridad ambiental.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.anla.gov.co/01_anla/normatividad/documentos-estrategicos/terminos-de-referencia" target="_blank")
                    span ver enlace
                    i.fas.fa-link

    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.3  Bases conceptuales impacto ambiental 

    p(data-aos="fade-down") El aspecto Ambiental es el elemento de las actividades, productos o servicios de una organización que puede interactuar con el medio ambiente. 
    p(data-aos="fade-down").mb-5 Los #[b tipos de aspecto ambiental] son considerados positivos si ayudan al medio ambiente o negativos si desfavorecen al medio ambiente. 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Tipos de aspecto ambiental       
        .row.justify-content-center.text-center
          .col-lg-3.col-md-6.my-3(data-aos="fade-left")
            .bcard1.p-5.h-100.j
              p.py-2.mb-0 Generación de residuos.  
          .col-lg-3.col-md-6.my-3(data-aos="fade-right")
            .bcard2.p-5.h-100.j
              p.py-2.mb-0 Consumo de agua. 
          .col-lg-3.col-md-6.my-3(data-aos="fade-left")
            .bcard3.p-5.h-100.j
              p.py-2.mb-0 Consumo de materiales.
          .col-lg-3.col-md-6.my-3(data-aos="fade-left")
            .bcard1.p-5.h-100.j
              p.mb-0 Vertimientos.  
          .col-lg-3.col-md-6.my-3(data-aos="fade-right")
            .bcard5.p-5.h-100.j
              p.mb-0 Generación de ruidos.
          .col-lg-3.col-md-6.my-3(data-aos="fade-left")
            .bcard2.p-5.h-100.j
              p.mb-0 Generación de residuos de aparatos eléctricos y electrónicos. 
          .col-lg-3.col-md-6.my-3(data-aos="fade-right")
            .bcard6.p-5.h-100.j
              p.mb-0 Generación de escombros y malos olores.           
          .col-lg-3.col-md-6.my-3(data-aos="fade-right")
            .bcard5.p-5.h-100.j
              p.mb-0 Publicidad exterior visual.
          .col-lg-3.col-md-6.my-3(data-aos="fade-left")
            .bcard7.p-5.h-100.j
              p.mb-0 Educación ambiental. (+)  
          .col-lg-3.col-md-6.my-3(data-aos="fade-right")
            .bcard4.p-5.h-100.j
              p.mb-0 Generación de calor.
          .col-lg-3.col-md-6.my-3(data-aos="fade-left")
            .bcard5.p-5.h-100.j
              p.mb-0 Criterios ambientales para la adquisición de insumos y materiales. (+)

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .bg20.p-4
          p(data-aos="fade-down").mb-0 #[b La Evaluación de Impacto Ambiental (EIA)] es el conjunto de estudios y sistemas técnicos que permiten estimar los efectos que la ejecución de un determinado proyecto, obra o actividad causa sobre el medio ambiente, el cual tiene la identificación de los aspectos e impactos ambientales por medio de metodologías cuantitativas y/o cualitativas como puede ser el desarrollo de matrices de impacto ambiental.  Por lo tanto, la EIA, debe cubrir cada una de las etapas del proyecto, obra o actividad, como instrumento para incorporar la variable ambiental. 

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Aspectos ambientales más comunes en los procesos manufactureros o industriales.

    .tabla-a.color-acento-botones.mb-2
      table
        thead
          tr(style='background-color: #BFE4DA')
            th Aspecto
            th Tipo
            th Aspecto
            th Tipo
        tbody
          tr(style='background-color: #F6F6F6')
            td.text-center Vertimientos 
            td 
              ul.lista-ul.fa-ul
                li 
                  i.lista-ul__vineta
                  | Aguas de proceso  
                li 
                  i.lista-ul__vineta
                  | Aguas de lavado  
                li 
                  i.lista-ul__vineta
                  | Aguas domésticas  
            td.text-center Consumos 
            td
              ul.lista-ul.fa-ul
                li 
                  i.lista-ul__vineta
                  | Agua
                li 
                  i.lista-ul__vineta
                  | Energía
                li 
                  i.lista-ul__vineta
                  | Materias primas  
                li 
                  i.lista-ul__vineta
                  | Combustibles                              
            tr(style='background-color: #FFF')
            td.text-center Emisiones
            td
              ul.lista-ul.fa-ul
                li 
                  i.lista-ul__vineta
                  | Material particulado  
                li 
                  i.lista-ul__vineta
                  | Gases  
                li 
                  i.lista-ul__vineta
                  | Olores ofensivos  
                li 
                  i.lista-ul__vineta
                  | Ruido  
                li 
                  i.lista-ul__vineta
                  | Calor              
            td(rowspan="2").text-center Peligros
            td(rowspan="2")
              ul.lista-ul.fa-ul
                li 
                  i.lista-ul__vineta
                  | Explosión 
                li 
                  i.lista-ul__vineta
                  | Incendio  
                li 
                  i.lista-ul__vineta
                  | Derrame (líquidos o sólidos)  
                li 
                  i.lista-ul__vineta
                  | Fuga (gases)  
                li 
                  i.lista-ul__vineta
                  | Inundación  
                li 
                  i.lista-ul__vineta
                  | Accidente vehicular                                        
          tr(style='background-color: #F6F6F6')
            td.text-center Residuos 
            td
              ul.lista-ul.fa-ul
                li 
                  i.lista-ul__vineta
                  | Residuos aprovechables 
                li 
                  i.lista-ul__vineta
                  | Residuos no aprovechables  
                li 
                  i.lista-ul__vineta
                  | Residuos peligrosos o especiales 

    figcaption.mb-5 Nota. Tomado de Arboleda. (2008, p.21).  

    .bg5.p-4.mb-5
      .row.justify-content-center.align-items-center           
        .col-lg-10(data-aos="flip-down")
          .row.justify-content-center.align-items-center        
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/35.svg', alt='')
            .col
              h5(data-aos="fade-down") EIA
              p.mb-0(data-aos="fade-down") La EIA es el enlace entre la gestión ambiental y la gestión técnica, económica y administrativa que requieren los proyectos. Igualmente, es uno de los instrumentos de gestión de los proyectos que aportan elementos para lograr su viabilidad global. Se puede concluir entonces que toda EIA se debe realizar siguiendo secuencialmente cuatro (4) grandes fases o componentes, como se muestra a continuación:    

    .titulo-sexto.color-acento-contenido
      h5 Figura 3.
      span La EIA instrumento para incorporar la variable ambiental
    img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/36.svg', alt='')
    figcaption.mb-5 Nota. Tomado de Arboleda. (2008, p.21).  

    p(data-aos="fade-down").mb-5 Los #[b tipos de impacto ambiental] se derivan de los aspectos ambientales. Se podría decir que los aspectos ambientales son las causas de la interacción del ser humano con el medio ambiente, mientras que el impacto es su consecuencia. #[b A continuación, se presentan algunos ejemplos de impactos:] 
    .titulo-sexto.color-acento-contenido
      h5 Figura 4.
      span Tipos de impacto ambiental  
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10.bg5.p-5.brad
        .row
          .col-lg-11
            .tarjeta-avatar-b.mb-3
              .tarjeta-avatar-b__img
                img.img-t(src='@/assets/curso/temas/37.svg' alt='')
              .tarjeta.tarjeta--azul.bgw
                .p-4
                  p #[b Aspecto ambiental:] tala de árboles (causa) y el impacto ambiental (consecuencia) deforestación y desplazamiento de especie.   

            .tarjeta-avatar-b.mb-3
              .tarjeta-avatar-b__img
                img.img-t(src='@/assets/curso/temas/38.svg' alt='')
              .tarjeta.tarjeta--azul.bgw
                .p-4
                  p #[b Generación de residuos] (causa) y el impacto ambiental (consecuencia) sobrepresión en el relleno sanitario.    

            .tarjeta-avatar-b.mb-3
              .tarjeta-avatar-b__img
                img.img-t(src='@/assets/curso/temas/39.svg' alt='')
              .tarjeta.tarjeta--azul.bgw
                .p-4
                  p #[b Generación de emisiones] (causa) y el impacto contaminación del aire (consecuencia).   

            .tarjeta-avatar-b
              .tarjeta-avatar-b__img
                img.img-t(src='@/assets/curso/temas/40.svg' alt='')
              .tarjeta.tarjeta--azul.bgw
                .p-4
                  p #[b Generación de vertimientos] (causa) y el impacto ambiental contaminación del agua (consecuencia).                                     
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
