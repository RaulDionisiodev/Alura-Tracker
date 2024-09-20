import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Tarefas from '../views/Tarefas.vue'
import Projetos from "@/views/Projetos.vue";
import Formulario from "@/views/Projetos/Formulario.vue";
import Lista from "@/views/Projetos/lista.vue";

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: Tarefas
    }, 
    {
        path: '/projetos',
        component: Projetos,
        children: [
            {
                path: '',
                name: 'Projetos',
                component: Lista
            },
            {
                path: 'novo',
                name: 'Novo Projeto',
                component: Formulario
            },
            {
                path: ':id',
                name: 'Editar Projeto',
                component: Formulario,
                props: true // pega o id da url e injeta no componente como uma propriedade
            }
        ]
    }
]

const roteador = createRouter({ 
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;