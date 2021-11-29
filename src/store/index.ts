import { createStore } from "vuex"

export interface State {
    couter: number
}

const store = createStore({
    state: {
        count: 0,
    },
    mutations: {
        add(state) {
            state.count++
        }
    }
})

export default store;
