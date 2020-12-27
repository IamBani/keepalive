import * as types from "./mutation-type.js";

export default {
  [types.SET_INCLUDE](state, name) {
    state.include.push(name);
    state.include = Array.from(new Set(state.include));
  },
  [types.DEL_INCLUDE](state, name) {
    if (state.include.includes(name)) {
      const index = state.include.findIndex(d => d === name);
      state.include.splice(index, 1);
    }
  }
};
