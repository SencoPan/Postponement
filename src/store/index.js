import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPersons: [],
    testPrt: [],
    csrfToken: ""
  },
  getters: {
    persons: state => {
      return state.currentPersons;
    },
    getCSRF: state => {
      return state.csrfToken;
    }
  },
  mutations: {
    async assignToken(state, token) {
      state.csrfToken = token;
    },
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
      axios({
        method: "post",
        url: "http://localhost:3000/api/person",
        data: data
      })
        .then(() => dispatch("getAllPersons"))
        .catch(error => console.error(error));
    },
    async deletePerson({ /*commit, */ dispatch }, id) {
      axios
        .delete(`http://localhost:3000/api/person?id=${id}`)
        .then(() => dispatch("getAllPersons"))
        .catch(error => console.error(error));
    },
    async getCSRFToken({ commit }) {
      axios.get("http://localhost:3000/api/getToken").then(
        response => {
          commit("assignToken", response.data.csrfToken);
          axios.defaults.headers.common.xsrfCookieName = "_csrf";
          axios.defaults.headers.common["X-CSRF-TOKEN"] =
            response.data.csrfToken;
        },
        err => {
          console.error(err);
        }
      );
    }
  },
  modules: {}
});
