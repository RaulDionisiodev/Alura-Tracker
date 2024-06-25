<template>
    <section>
        <strong class="display">
            {{ tempoDecorrido }}
        </strong>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'cronometro',
  props: {
    tempoEmSegundos:{
        type: Number,
        default: 0
    }
  },
  computed: {
        //O computed obsera uma informação e, sempre que essa informação for modificada ele atua
        tempoDecorrido() : string { // uma computed propertie é declarada como uma função
            return new Date(this.tempoEmSegundos * 1000).toISOString().substr(11,8)
        }   
    },
})
</script>

<style>
.display {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}
</style>