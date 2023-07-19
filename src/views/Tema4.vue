<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Métodos e instrumentos para la recolección de la información

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/58.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Los métodos y técnicas de recolección de datos pueden dividirse en dos categorías: métodos primarios de recolección de datos y métodos secundarios de recolección de datos. 

    .row.justify-content-start.mb-4        
      .col-auto.bg14.p-3(data-aos="flip-down")
        h5.mb-0(data-aos="fade-down") Métodos de recolección de datos primarios

    p(data-aos="fade-down").mb-5 los datos primarios se recolectan a partir de la experiencia de primera mano y no se basan en información previa. Esta información es específica, altamente auténtica y precisa. Los métodos de recolección de datos primarios se pueden dividir en dos categorías: #[b métodos cuantitativos y métodos cualitativos.]

    .bg15.mb-5.p-5
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10
          h5(data-aos="fade-down") Métodos cuantitativos 
          p(data-aos="fade-down").mb-5 los métodos cuantitativos utilizados para la investigación de mercados y la previsión de la demanda suelen emplear herramientas estadísticas. En este caso, el pronóstico de la demanda se basa en datos históricos. Estos métodos y técnicas de recolección de datos primarios se utilizan generalmente para hacer pronósticos a largo plazo, y son altamente confiables debido a que el elemento de subjetividad es mínimo.
          .row.justify-content-center.align-items-center.mb-5           
            .col-auto.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/72.png', alt='')
            .col.my-3
              p(data-aos="fade-down") El análisis de series cronológicas o temporales, las técnicas de suavizado y el método barométrico son herramientas fundamentales para las organizaciones que buscan prever la demanda futura de sus productos y servicios.  

              p(data-aos="fade-down").mb-0 A continuación, se presentan estos métodos  que permiten identificar patrones y tendencias en la variación de la demanda a lo largo del tiempo, lo que ayuda a las empresas a tomar decisiones informadas y a planificar sus operaciones de manera efectiva:   


          AcordionA(tipo="a" clase-tarjeta="tarjeta bg11")
            .row.justify-content-center.align-items-center(titulo="Análisis de series cronológicas o temporales")
              .col-7.my-3
                p.mb-0 Este término se refiere al orden secuencial de valores de una variable, conocido como tendencia, a intervalos de tiempo iguales. Utilizando las tendencias, una organización puede predecir la demanda de sus productos y servicios para un tiempo proyectado.              
              .col-auto.my-3  
                img.img-a.img-t(src="@/assets/curso/temas/69.png")

            .row.justify-content-center.align-items-center(titulo="Técnicas de suavizado")
              .col-7.my-3
                p.mb-0 En los casos en que la serie temporal carece de tendencias significativas, se pueden utilizar técnicas de suavizado para eliminar la variación aleatoria de la demanda histórica. Esto ayuda a identificar patrones y niveles de demanda que pueden ser utilizados para estimar la demanda futura.            
              .col-auto.my-3  
                img.img-a.img-t(src="@/assets/curso/temas/70.png")

            .row.justify-content-center.align-items-center(titulo="Método barométrico")
              .col-7.my-3
                p.mb-0 También conocido como enfoque de los indicadores principales, este método se utiliza para especular sobre las tendencias futuras en función de la evolución actual. Cuando un evento pasado se considera para predecir el evento futuro, el evento pasado actuaría como un indicador principal.             
              .col-auto.my-3  
                img.img-a.img-t(src="@/assets/curso/temas/71.png")

    .bg16.mb-5.p-5
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10
          h5(data-aos="fade-down") Métodos cualitativos
          p(data-aos="fade-down").mb-5 los métodos de recolección de datos cualitativos son especialmente útiles en situaciones en las que no se dispone de datos históricos y no se requieren números ni cálculos matemáticos. La investigación cualitativa está estrechamente relacionada con las palabras, los sonidos, los sentimientos, las emociones, los colores y otros elementos que no son cuantificables. Estas técnicas se basan en la experiencia, el juicio, la intuición, las conjeturas, las emociones, entre otros. 

          .row.justify-content-center.align-items-center.mb-5           
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/73.png', alt='')
            .col
              p(data-aos="fade-down") Estos métodos no proporcionan la razón detrás de las respuestas de los participantes, a menudo no llegan a las poblaciones subrepresentadas y pueden requerir largos períodos de tiempo para recopilar los datos. Por lo tanto, es mejor combinar métodos cuantitativos con métodos cualitativos. 

              h5(data-aos="fade-down") En el siguiente recurso encontrará algunos de los métodos de recolección de datos cualitativos, explórelos:   

          TabsA.color-acento-botones
            .tarjeta.color-acento-botones--borde.p-4(titulo="Encuestas")
              p.mb-0 Las encuestas se usan para recopilar información de la audiencia objetivo sobre sus preferencias, opiniones y elecciones en relación con los productos y servicios. Los programas de creación de encuestas ofrecen diversos tipos de preguntas y plantillas para ahorrar tiempo. Las encuestas en línea se pueden personalizar con el tema y logotipo de la empresa y se pueden distribuir a través de diversos canales. Los paneles de encuestas ofrecen estadísticas y opciones de exportación y uso compartido. 
            .tarjeta.color-acento-botones--borde.p-4(titulo="Sondeos")
              p.mb-0 Los sondeos se componen de una pregunta de opción única o múltiple. Cuando se requiere tener un pulso rápido de los sentimientos de la audiencia, puedes utilizar los sondeos. Debido a que son de corta duración, es más fácil obtener respuestas de la gente. También se pueden integrar en varias plataformas. Una vez que los encuestados responden a la pregunta, también se les puede mostrar cómo se encuentran en comparación con las respuestas de los demás.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Entrevistas")
              p.mb-0 En este método, el entrevistador hace preguntas cara a cara o por teléfono a los encuestados. En las entrevistas cara a cara, el entrevistador hace una serie de preguntas al entrevistado en persona y anota las respuestas. En caso de que no sea posible conocer a la persona, el entrevistador puede realizar la entrevista por teléfono. A diferencia de los otros métodos de recolección de datos, este es adecuado cuando sólo hay unos pocos encuestados.   
            .tarjeta.color-acento-botones--borde.p-4(titulo="Delphi")
              p.mb-0 En este método, los expertos del mercado reciben las estimaciones y suposiciones de los pronósticos realizados por otros expertos de la industria. Pueden reconsiderar y revisar sus propias estimaciones e hipótesis sobre la base de la información proporcionada.   
            .tarjeta.color-acento-botones--borde.p-4(titulo="<i>Focus Group</i>")
              p.mb-0 Es otro de los métodos y técnicas de recolección de datos en donde un pequeño grupo de personas, alrededor de 8-10 miembros, se reúnen para discutir las áreas comunes del problema con un moderador que regula la discusión. Cada participante aporta sus puntos de vista sobre el tema en cuestión. Al final de la discusión, el grupo llega a un consenso. 
            .tarjeta.color-acento-botones--borde.p-4(titulo="Cuestionario")
              p.mb-0 Un cuestionario es un conjunto impreso de preguntas, abiertas o cerradas, que los encuestados deben responder en función de sus conocimientos y experiencia con el tema. El cuestionario es parte de la encuesta, mientras que el objetivo final de un cuestionario puede o no ser una encuesta.           

    .row.justify-content-start.mb-4        
      .col-auto.bg14.p-3(data-aos="flip-down")
        h5.mb-0(data-aos="fade-down") Métodos y técnicas de recolección de datos secundarias  

    p(data-aos="fade-down").mb-5 Los métodos y técnicas de recolección de datos secundarios son los datos que se han utilizado en el pasado. El investigador puede obtener datos de las fuentes tanto internas como externas a la organización.  

    .titulo-sexto.color-acento-contenido
      h5 Figura 7.
      span Fuentes secundarios: 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-5(data-aos="fade-left").my-3
        .bg24.p-5.brad.h-100.text-white
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/74.svg', alt='')
          h4 Fuentes internas de datos secundarios:
          ul.lista-ul.fa-ul
            li 
              i.fas.fa-check.c1
              | Registros
            li 
              i.fas.fa-check.c1
              | Estados Financieros
            li 
              i.fas.fa-check.c1
              | Revistas
            li 
              i.fas.fa-check.c1
              | Informes
            li 
              i.fas.fa-check.c1
              | Resúmenes ejecutivos           

      .col-lg-5(data-aos="fade-right").my-3
        .bg25.p-5.brad.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/75.svg', alt='')
          h4 Fuentes externas de datos secundarios:
          ul.lista-ul.fa-ul
            li 
              i.fas.fa-check.c2
              | Informes de los gobiernos
            li 
              i.fas.fa-check.c2
              | Comunicados de prensa
            li 
              i.fas.fa-check.c2
              | Revistas de negocios
            li 
              i.fas.fa-check.c2
              | Bibliotecas
            li 
              i.fas.fa-check.c2
              | Internet           

    .bg2.p-4.mb-5
      p(data-aos="fade-down") La recolección de datos secundarios puede involucrar tanto técnicas cuantitativas como cualitativas. Estos datos son fácilmente accesibles, lo que los hace menos costosos y más rápidos en comparación con la recolección de datos primarios. Sin embargo, en el caso de la recolección de datos secundarios, no se puede verificar la autenticidad de los datos recopilados. 

    .row.justify-content-center.align-items-center          
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/41.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Lo invitamos a visualizar el siguiente video: SENA línea Produccion (2014, Julio 10). Recolección de Información. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=u_atFPU0DOY" target="_blank")
                    span Ver Video
                    i.fab.fa-youtube         

</template>

<script>
export default {
  name: 'Tema4',
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
