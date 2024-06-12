<template>
    <div class="is-flex is-align-items-center is-justify-content-space-around">
        <cronometro :tempoEmSegundos="tempoEmSegundos" />
    
        <Botao :cronometroRodando="cronometroRodando" 
        :icon="'fas fa-play'" :type="'START'" 
        :text="'play'" @inicia="iniciarContagem" />

        <Botao :cronometroRodando="!cronometroRodando" 
        :icon="'fas fa-stop'" :type="'STOP'" 
        :text="'stop'" @termina="finalizarContagem" />
    
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Cronometro from './Cronometro.vue';
import Botao from './Botao.vue'
 
export default defineComponent({
    name: 'Temporizador',
    emits: ['aoTemporizadorFinalizado'],
    components: {
        Cronometro,
        Botao
    },
    data () {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        }
    },
   
    methods: {
        iniciarContagem () {
            this.cronometroRodando = true;
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1
            }, 1000)
        },
        finalizarContagem () {
            this.cronometroRodando = false
            clearInterval(this.cronometro)
            this.$emit("aoTemporizadorFinalizado", this.tempoEmSegundos)
            this.tempoEmSegundos = 0
        }
    }
})
</script>