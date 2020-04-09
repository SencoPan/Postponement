import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import sortState from "./sort";
import error from "./error";

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
      state.currentPersons = persons;
    },
    async assignPersonsAfterPost(state, persons) {
      state.currentPersons = persons;
    }
  },
  actions: {
    async getAllPersons({ commit, dispatch }) {
      const allPersons = await axios.get("http://localhost:3000/api/person");
      for (let i = 0; i < allPersons.data.length; i++) {
        allPersons.data[i].endOfDelay = await dispatch(
          "differenceBetweenDates",
          allPersons.data[i].delayTo
        );
      }
      commit("assignPersons", allPersons.data);
    },
    async differenceBetweenDates(
      context,
      firstDate,
      secondDate = Date.now().toString()
    ) {
      let date = {
        year: firstDate.substr(0, 4),
        month: firstDate.substr(5, 2),
        day: firstDate.substr(8, 2)
      };

      let first = new Date(date.year, +date.month - 1, date.day, 12, 0, 0, 0);

      let day = 8.64e7;
      return Math.round(Math.abs(first - secondDate) / day);
    },
    async addPersonAndGetAll({ dispatch }, { data, swal }) {
      axios({
        method: "post",
        url: "http://localhost:3000/api/person",
        data: data
      })
        .then(() => dispatch("getAllPersons"))
        .catch(error =>
          dispatch("fireError", { message: error.message, code: 3, swal })
        );
    },
    async deletePerson({ /*commit, */ dispatch }, { id, swal }) {
      axios
        .delete(`http://localhost:3000/api/person?id=${id}`)
        .then(() => dispatch("getAllPersons"))
        .catch(error =>
          dispatch("fireError", { message: error.message, code: 2, swal })
        );
    },
    async getCSRFToken({ commit, dispatch }, swal) {
      axios.get("http://localhost:3000/api/getToken").then(
        response => {
          commit("assignToken", response.data.csrfToken);
          axios.defaults.headers.common.xsrfCookieName = "_csrf";
          axios.defaults.headers.common["X-CSRF-TOKEN"] =
            response.data.csrfToken;
        },
        error => {
          dispatch("fireError", { message: error.message, code: 1, swal });
        }
      );
    }
  },
  modules: {
    sortState,
    error
  }
});
