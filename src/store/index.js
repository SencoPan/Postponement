import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPersons: []
  },
  getters: {
    persons: (state) => {
      return state.currentPersons;
    }
  },
  mutations: {
    async assignPersons(state, persons) {
      state.currentPersons = persons.data;
    }
  },
  actions: {
    async getAllPersons({ commit }) {
      axios.get("http://localhost:3000/api/createPerson").then(allPersons => {
        commit("assignPersons", allPersons);
      });
    }
  },
  modules: {}
});
