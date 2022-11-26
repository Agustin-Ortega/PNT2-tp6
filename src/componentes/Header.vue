<template>   
 
    <div id="header" :style= "{background: this.restart==null?'steelblue': this.headerColor}" >
		<h1>The Great <br>
			<span id="colorDisplay">{{this.pickedColor}}</span>
			<br>
			Guessing Game</h1>
  
<NavBar :gano="gano" @cambiarDificultad= "cambiarDificultad($event)"  :restartJuego="restart" :estaJugando="estaJugando" /> 
 <Colores :isHard ="isHard" @evaluarGanador="evaluarGanador($event)" @obtenerGanador="obtenerGanador($event)" @obtenerRestart="obtenerRestart($event)"/>  
  </div>
 
</template>

<script>

import Colores from './Colores.vue';
import NavBar from './NavBar.vue'

export default {
  name: 'src-componentes-header',
  components: {
    Colores,
    NavBar,
  },

  props: ['colorDisplay','header'],
  mounted() {

  },
  data() {
    return {
      isHard: true,
      pickedColor: "RGB",
      headerColor: "steelblue",
      estaJugando: false,
      gano: '',
      restart: "",
    }
  },
  methods: {

    cambiarDificultad(dificultad){
      this.isHard=dificultad;
      this.estaJugando =false
      },
      evaluarGanador(gano){
        this.gano=gano;
        this.estaJugando =true;
        if(gano==true){
          this.headerColor= this.pickedColor;
          this.headerColor= this.$store.state.colorGanador
        }
      },
       obtenerGanador(cuadradoGanador){
        this.pickedColor=cuadradoGanador;
        
        this.pickedColor = this.$store.state.rgb
        this.estaJugando =false
        
      },
      obtenerRestart(restart){
        this.headerColor= this.$store.state.colorInit
        this.restart=restart;
        this.estaJugando =false
        this.headerColor = 'steelblue'
      }
    

  },
  computed: {
    
  }
}


</script>

<style scoped lang="css">

#header {
	transition: all 0.3s;
	text-transform: uppercase;
	text-align: center;
	color: rgb(49, 49, 49);
}
h1 {
	font-weight: normal;
	line-height: 1.1;
	padding: 20px 0;
}
</style>
