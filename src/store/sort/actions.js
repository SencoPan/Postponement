import getters from "./getters";

export default {
  async sortTable({ state, commit }, name) {
    let column = getters.getColumn(state, name);
    let direction = column.sortState === "ASC" ? "DESC" : "ASC";
    let payload = {
      name,
      direction
    }
    commit("changeDirection", payload);
  }
};
