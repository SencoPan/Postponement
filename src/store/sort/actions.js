export default {
  async sortTable({ commit }, name) {
    let column = await this.getters.getColumn(name);
    let direction = column === "ASC" ? "DESC" : "ASC";
    commit("changeDirection", column, direction);
  }
};
