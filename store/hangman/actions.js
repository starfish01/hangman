export default {
  startGame({ commit }) {
    let indexOfWord = Math.floor(Math.random() * 600);
    commit('RESET_HANGMAN', indexOfWord);
  },
  closeHint({ commit }) {
    commit('CLOSE_HINT');
  },

  addWin({commit}) {

  },
  addLose({commit}){
    
  }
  
  

};
