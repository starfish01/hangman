export default {
  getWordData({ commit }) {
    // todo get words with api
    const word = "Something".toLowerCase();

    commit("setWordData", word);
  }
};
