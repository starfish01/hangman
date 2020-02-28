export default {
  getWordData({ commit }) {
    // todo get words with api
    const word = "Something".toLowerCase();

    commit("setWordData", word);
  },
  resetGame({ commit }) {
    console.log('dsdsds');
    commit('RESET_HANGMAN');
  }
};
