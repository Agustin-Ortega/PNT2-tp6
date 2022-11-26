import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

export default new VueX.Store({

    state:{
        colorGanador: "",
        rgb:"",
        colorInit:'steelblue'
    },

    actions: {
        getObtenerGanador({commit},colorGanador) {
            commit('obtenerGanador',colorGanador)
           
        },

        getColorsCuadrados({commit},array){
            commit('actualizarColorArray',array)
        },

    },
    mutations:{
        obtenerGanador(state, colorGanador) {
            state.colorGanador = colorGanador
            state.rgb = colorGanador
        },

        actualizarColorArray(state,array){
            state.getColorsCuadrados= array
        },
    }
})