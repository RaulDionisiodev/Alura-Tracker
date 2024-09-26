<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Fomrulário para a criação de uma nova tarefa">
                <input type="text" class="input" 
                placeholder="Qual tarefa você deseja iniciar?" v-model="descriaco">
            </div>
            <div class="column is-3">
                <div class="select">
                    <select v-model="idProjeto">
                        <option value="">Selecione o projeto</option>
                        <option
                        :value="projeto.id"
                        v-for="projeto in projetos"
                        :key="projeto.id"
                        >
                        {{ projeto.nome }}
                    </option>
                </select>
            </div>
        </div>
        <div class="column">
            <Temporizador @aoTemporizadorFinalizado="finalizarTarefa" />
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import Temporizador from './Temporizador.vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import { TipoNotificacao } from "@/interfaces/INotificacao";
import { NOTIFICAR } from "@/store/tipo-mutacoes"

export default defineComponent ({
    name: 'Formulario',
    emits: ['aoSalvarTarefa'],
    components: {
        Temporizador
    },
    data () {
        return {
            descriaco: '',
            idProjeto: ''
        }
    },
    methods: {
        finalizarTarefa (tempoDecorrido : number) : void {
            const projeto = this.projetos.find((p) => p.id == this.idProjeto); // primeiro, buscamos pelo 
            
            if(!projeto) { // se o projeto não existe...
                this.store.commit(NOTIFICAR, {
                    titulo: 'Ops!',
                    texto: "Selecione um projeto antes de finalizar a tarefa!",
                    tipo: TipoNotificacao.FALHA,
                }); // notificamos o usuário
                return; // ao fazer return aqui, o restante do método salvarTarefa não será executado. chamamos essa técnica de early return :)
            }

            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descriaco,
                projeto: this.projetos.find(proj => proj.id === this.idProjeto)
            })
            this.descriaco = ''
        }
    },
    setup() {
        const store = useStore(key)
        return {
            projetos: computed( () =>  store.state.projetos),
            store
        }
    }
    
})

</script>

<style>

.formulario {
    color: var(--texto-primario);
    background-color: var(----bg-primario)
}
</style>