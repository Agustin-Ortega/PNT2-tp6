<template>
  <div id="container">
   <div v-for ="i in square" :key="i"> 
   <div class= "square" :style="colors[i-1]" @click= "(event)=> verificarColor(event)" > </div>
   </div>
   </div>

</template>

<script >

export default  {
    name: 'src-components-juego',
    props: ["isHard"],
    mounted () {
      this.crearColores();
      this.$emit("obtenerRestart",this.restart);
    },
    data () {
      return {
       square: this.isHard ? 6 : 3,
       colors: [],
       colorG: ""
      }
    },
    watch:{
      isHard : function(){ 
        this.isHard ? this.square=6 : this.square=3
        this.restart()
      }
    },
    methods: {
      createRandomStringColor(){
      return {background:"rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")"} ;
      },
      
      pickColor(){
        return Math.floor(Math.random() * this.square );
      },
      crearColores(){
        this.colors=[]
        
        for (let i = 0; i < this.square; i++) {
          this.colors.push(this.createRandomStringColor());
          
        }
        this.colorG=this.colors[this.pickColor()].background;
        this.$store.dispatch('getObtenerGanador',this.colorG)
        
      },
     
      randomInt(){
	return Math.floor(Math.random() * 256);
      },
    
    
    restart(){
      this.crearColores();
    },
    
      verificarColor(event){
        let cuadradroGanador = event.target.style.background == this.colorG
         this.$emit("evaluarGanador",cuadradroGanador)
        if(cuadradroGanador){
          this.cambiarCuadradorAlColorGanador(this.colorG)
          
        }else{
          event.target.style.background = "#232323"
        }
       
      },
      cambiarCuadradorAlColorGanador(colorG){
        this.colors.forEach(cuadrado => {
          cuadrado.background =colorG;
        });
        
         this.$store.dispatch('getColorsCuadrados',this.colors)
      }
}
}
</script>

<style scoped lang="css">
#container {
  margin: 20px auto;
  max-width: 600px;
}
 .square {
	width: 30%;
	background: blue;
	padding-bottom: 30%;
	float: left;
	margin: 1.66%;
	border-radius: 10%;
	transition: background 0.8s;
	-webkit-transition: background 0.8s;
	-moz-transition: background 0.8s;
}
</style>