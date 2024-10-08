import { INotificacao } from "@/interfaces/INotificacao";
import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "vue";
import { Store, createStore, useStore as vuexUseStore } from "vuex";
import { NOTIFICAR } from "./tipo-mutacoes";

interface Estado {
    projetos: IProjeto[]
    notificacoes: INotificacao[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state : {
        projetos: [],
        notificacoes: []
    },
    mutations: { //funções que podem adicionar coisas ao estado
        ADICIONA_PROJETO(state, nomeDoProjeto: string){
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            } as IProjeto

            state.projetos.push(projeto)
        },
        ALTERA_PROJETO(state, projeto: IProjeto){
            const index = state.projetos.findIndex(proj => proj.id === projeto.id)
            console.log(index)
            state.projetos[index] = projeto
        },
        EXCLUIR_PROJETO(state, id: string){
            state.projetos = state.projetos.filter(proj => proj.id !== id)
        },
        NOTIFICAR(state, novaNotificacao : INotificacao) {
            novaNotificacao.id = new Date().getTime()
            state.notificacoes.push(novaNotificacao)

            setTimeout(() => {
               state.notificacoes =  state.notificacoes.filter(notificacao => notificacao.id != notificacao.id)
            }, 3000)
        }
    }
})

export function useStore() : Store<Estado> {
    return vuexUseStore(key)
}