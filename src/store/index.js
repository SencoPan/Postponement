import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPersons: []
  },
  getters: {
    persons: state => {
      return state.currentPersons;
    }
  },
  mutations: {
    async assignPersons(state, persons) {
      state.currentPersons = persons.data;
    },
    async assignPersonsAfterPost(state, persons) {
      state.currentPersons = persons;
    }
  },
  actions: {
    async getAllPersons({ commit }) {
      axios.get("http://localhost:3000/api/person").then(allPersons => {
        commit("assignPersons", allPersons);
      });
    },
    async addPersonAndGetAll({ dispatch }, data) {
      axios
        .post("http://localhost:3000/api/person", { data })
        .then(() => dispatch("getAllPersons"))
        .catch(error => console.error(error));
    },
    async deletePerson({ /*commit, */ dispatch }, id) {
      axios
        .delete(`http://localhost:3000/api/person?id=${id}`)
        .then(() => dispatch("getAllPersons"))
        .catch(error => console.error(error));
    }
  },
  modules: {}
});
