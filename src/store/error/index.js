import getters from "../sort/getters";

export default {
  state: {
    errorCode: 0,
    errorMessage: ""
  },
  getters: {
    error: async state => {
      return state;
    }
  },
  mutations: {
    async confirmError(state, { code, message }) {
      let error = getters.error(state);
      error.errorCode = code;
      error.errorMessage = message;
    }
  },
  actions: {
    async fireError({ commit }, { code, message, swal }) {
      commit("confirmError", { code, message });
      await swal.fire({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        icon: "error",
        title: `${message}`,
        text: `${code}`,
        timer: 4000
      });
    }
  }
};
