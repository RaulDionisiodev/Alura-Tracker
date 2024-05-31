<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Fomrulário para a criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?">
            </div>
            <div class="column">
                <div class="is-flex is-align-items-center is-justify-content-space-around">
                    <section>
                        <strong>
                            {{ tempoDecorrido }}
                        </strong>
                    </section>
                    <button class="button" @click="iniciarContagem">
                        <span class="icon">
                            <i class="fas fa-play"></i>
                        </span>
                        <span>play</span>
                    </button>
                    <button class="button" @click="finalizarContagem">
                        <span class="icon">
                            <i class="fas fa-stop"></i>
                        </span>
                        <span>stop</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    name: 'Formulario',
    data () {
        return {
            tempoEmSegundos: 0,
            cronometro: 0
        }
    },
    computed: {
        //O computed obsera uma informação e, sempre que essa informação for modificada ele atua
        tempoDecorrido() : string { // uma computed propertie é declarada como uma função
            return new Date(this.tempoEmSegundos * 1000).toISOString().substr(11,8)
        }   
    },
    methods: {
        iniciarContagem () {
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1
            }, 1000)
        },
        finalizarContagem () {
            clearInterval(this.cronometro)
        }
    }
})

</script>