import Vuex from "vuex/dist/vuex.esm.browser";

export default class {
    configStore(vue) {
        vue.use(Vuex);
        return new Vuex.Store({
            state: {
                name: "",
                token: "",
                uid: ""
            },
            mutations: {
                name(state, name) {
                    state.name = name;
                },
                token(state, token) {
                    state.token = token;
                },
                uid(state, uid) {
                    state.uid = uid;
                }
            },
            getters: {
                name: state => state.name,
                token: state => state.token,
                uid: state => state.uid,
            }
        });
    }
}