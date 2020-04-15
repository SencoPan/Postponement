import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import sortState from "./sort";
import error from "./error";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPersons: [],
    testPrt: []
  },
  getters: {
    persons: state => {
      return state.currentPersons;
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
      const allPersons = await axios.get(
        "https://postponements.herokuapp.com/api/person"
      );
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
      if (first - secondDate < 0) return 0;
      return Math.round(Math.abs(first - secondDate) / day);
    },
    async addPersonAndGetAll({ dispatch }, { data, swal }) {
      axios({
        method: "post",
        url: "https://postponements.herokuapp.com/api/person",
        data: { data }
      })
        .then(() => dispatch("getAllPersons"))
        .catch(error =>
          dispatch("fireError", { message: error.message, code: 3, swal })
        );
    },
    async deletePerson({ /*commit, */ dispatch }, { id, swal }) {
      axios({
        method: "DELETE",
        url: `https://postponements.herokuapp.com/api/person?id=${id}`
      })
        .then(() => dispatch("getAllPersons"))
        .catch(error =>
          dispatch("fireError", { message: error.message, code: 2, swal })
        );
    },
    async redactPersonField(
      { /*commit, */ dispatch },
      { redactValue, dbName, id },
      swal = this.$swal
    ) {
      const fieldName = dbName;
      axios({
        method: "PATCH",
        url: `https://postponements.herokuapp.com/api/person`,
        data: { redactValue, fieldName, id }
      })
        .then(() => dispatch("getAllPersons"))
        .catch(error =>
          dispatch("fireError", { message: error.message, code: 4, swal })
        );
    }
  },
  modules: {
    sortState,
    error
  }
});
