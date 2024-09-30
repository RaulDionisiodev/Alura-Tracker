<template>
    <div class="notificacoes">
        <article class="message" 
        :class="contexto[n.tipo]"
        v-for="n in notificacoes" 
        :key="n.id" >
            <div class="message-header">
                {{ n.titulo }}
            </div>
            <div class="message-body">
                {{ n.texto }}
            </div>
        </article>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import { TipoNotificacao } from '@/interfaces/INotificacao'

export default defineComponent({
    name: 'Notificacoes',
    data () {
        return {
            contexto: {
                [TipoNotificacao.SUCESSO] : 'is-success',
                [TipoNotificacao.FALHA] : 'is-danger',
                [TipoNotificacao.ATENCAO] : 'is-warning'
            }
        }
    },
    setup () {
        const store = useStore();
        return {
            notificacoes : computed(
                () => store.state.notificacoes
            )
        }
    }
})

</script>

<style scoped>
.notificacoes {
    position: absolute;
    right: 0;
    width: 300px;
    padding: 8px;
    z-index: 105;
}


</style>