export default {
  startGame({ commit }) {

    let indexOfWord = Math.floor(Math.random() * 600);

    commit('RESET_HANGMAN', indexOfWord);
  }

};
