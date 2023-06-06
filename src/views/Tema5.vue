<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 5
      h1 Diagnóstico ambiental

    p(data-aos="fade-down").mb-5 Si una empresa quiere ser responsable, el primer paso es ser consecuente con los impactos de su actividad en el medio ambiente y en la sociedad. La gestión ambiental implica integrar las preocupaciones medioambientales en la toma de decisiones y operaciones de la organización. Para ello, es necesario el compromiso de la dirección, la medición y evaluación de impactos, el desarrollo de procesos y productos respetuosos con el entorno, y el diálogo y sensibilización con iniciativas que promuevan la sostenibilidad. Sin embargo, antes de abordar la gestión ambiental, es indispensable realizar un diagnóstico ambiental preliminar. 

    .row.justify-content-center.mb-5           
      .col-lg-7
        .bg26.p-4.mb-4.h-100.j
          p(data-aos="fade-down").mb-0 A partir de este diagnóstico ambiental, la organización podrá conocer e interpretar su impacto ambiental y determinar si sus actuaciones son o no aceptables desde este punto de vista. 
            br
            |#[b ¿Pero qué beneficios obtiene la organización con esta evaluación ambiental inicial ? Aquí se presentan algunos de ellos:] 
      .col-lg-5       
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/76.png', alt='')  

    h4.text-center(data-aos="fade-down").mb-5 Diagnóstico ambiental
    img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/77.svg', alt='') 

    .row.justify-content-center.align-items-center          
      .col-lg-10.bg12.p-5
        p(data-aos="fade-down") La evaluación ambiental inicial incluye una serie de aspectos genéricos que se deben evaluar, como el consumo de materias primas, energía y agua, las emisiones de contaminantes y la generación de residuos. Además, la empresa puede identificar y añadir otros problemas específicos relacionados con su actividad. 

        h5(data-aos="fade-down").mb-4 Un documento diagnóstico ambiental en una organización como mínimo debe tener lo siguiente:     
        .row.justify-content-center.align-items-center         
          .col-lg-7
            ul.lista-ul.fa-ul(data-aos="fade-down")
              li 
                i.fas.fa-check.c1
                | Características del sistema socio ecológico que rodea la empresa, descripción de los componentes ambientales y su afectación. 

              li 
                i.fas.fa-check.c1
                | Descripción de la organización proyecto y análisis del ciclo de vida de donde se identifiquen los aspectos ambientales significativos. 

              li 
                i.fas.fa-check.c1
                | Identificación de los requisitos legales ambientales que aplica a la organización. 

              li 
                i.fas.fa-check.c1
                | Conclusiones del diagnóstico.            
          .col-lg-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/78.png', alt='') 

</template>

<script>
export default {
  name: 'Tema5',
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
