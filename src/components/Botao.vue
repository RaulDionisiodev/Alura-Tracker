<template>
      <button class="button" @click="manipulaContador" :disabled="cronometroRodando">
            <span class="icon">
                <i :class="icon"></i>
            </span>
            <span> {{ text }} </span>
        </button>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Botao',
    props: { 
        cronometroRodando : {
            type: Boolean,
        }, 
        icon: {
            type: String,
            required: true
        }, 
        text: {
            type: String,
            required: true
        }, 
        type: {
            type: String,
            required: true
        }},
    emits: ['incia', 'termina'],
    methods: {
        manipulaContador() {
            if (this.type === 'START') {
                this.$emit('inicia')
                return
            }

            if (this.type ===  'STOP') {
                this.$emit('termina')
                return
            }
            
        }
    }



})




</script>

<style>
</style>