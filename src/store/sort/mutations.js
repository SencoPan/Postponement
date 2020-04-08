import getters from "./getters";

export default {
  async changeDirection(state, payload) {
    let column = getters.getColumn(state, payload.name);
    column.sortState = payload.direction;
  }
};
