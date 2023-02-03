// store.ts
import { POST } from '@/service';
// import { createStore } from 'vuex'

export type State = {
    count: number;
}

const state: State = {
    count: 0,
}
const store = {
    state, getters: {},
    mutations: {
        SET_SHOW_MESSAGE(state: { count: number }, data: any) {
            state.count++;
        },
    },

    actions: {
        increment({ commit }: { commit: Function }) {
            console.log('Abed');

            commit('SET_SHOW_MESSAGE')
        },
        //   getToken({ commit }: any, payload: any) {
        //     console.log(payload,'aa2');

        //     POST(`api/Users/signin-token`, payload)
        //       .then((response) => {
        //         if (!response.data.data) {
        //           commit("INVALID_TOKEN", response.data.data)
        //         } else {
        //           localStorage.setItem("clubeez_session", response.data.data.accessToken);
        //           commit("GET_TOKEN", response.data.data)
        //           window.location.href = window.location.origin + process.env.BASE_URL;
        //         }
        //       }).catch((error) => {
        //         commit("SET_ERROR_MESSAGE", error.response.data.errors)
        //       })
        //   }
    }
}

export default store;
