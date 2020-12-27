import * as types from "./mutation-type.js";

export default {
  AddInclude({ commit }, name) {
    commit(types.SET_INCLUDE, name);
  },
  DelInclude({ commit }, name) {
    commit(types.DEL_INCLUDE, name);
  }
};
