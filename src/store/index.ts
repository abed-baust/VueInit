import Vuex from "vuex";
import auth from "./auth";
import store from "./store";
import { createStore } from "vuex";
export default new Vuex.Store({
  modules: {
    store,
    auth
  },
});
