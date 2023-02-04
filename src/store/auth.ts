import { POST } from '@/service';

export type State = { isLoggedIn: boolean, errorMsg: any };

const state: State = {
  isLoggedIn: false,
  errorMsg: {}
};

const auth = {
  state,
  getters: {
    isAuthenticated: (state: any) => !!state.isLoggedIn,
  },
  mutations: {
    GET_TOKEN() {
      state.isLoggedIn = true
    },
    INVALID_TOKEN() {
      state.isLoggedIn = false
    },
    SET_ERROR_MESSAGE(state: { errorMsg: [] }, data: any) {
      state.errorMsg = data;
    },
  },
  actions: {
    getToken({ commit }: any, payload: any) {
      console.log(payload,'aa2');
      
      POST(`api/Users/signin-token`, payload)
        .then((response) => {
          console.log('token', response.data);
          if (!response.data) {
            commit("INVALID_TOKEN", response.data)
          } else {
            console.log('token', response);
            
            localStorage.setItem("clubeez_session", response.data.accessToken);
            console.log(localStorage.getItem("clubeez_session"),'a123');
            
            commit("GET_TOKEN", response.data)
            // window.location.href = window.location.origin + process.env.BASE_URL;
          }
        }).catch((error) => {
          commit("SET_ERROR_MESSAGE", error.response.data.errors)
        })
    },
    getToken2({ commit }: any, payload: any) {
      console.log(payload,'aa2');
      
      POST(`api/ProductAttribute/CreateProductAttribute`, payload)
        .then((response) => {
          
        }).catch((error) => {
          commit("SET_ERROR_MESSAGE", error.response.data.errors)
        })
    }
  }
}
export default auth;