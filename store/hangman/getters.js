export default {
  getWord(state) {
    return state.word;
  },
  getGuesses(state) {
    return state.currentGuesses;
  },
  getFailedGuesses(state) {
    return state.failedGuess;
  },
  getKeys(state) {
    return state.guessableLetters;
  },
  getHintDisplay(sate) {
    return sate.displayHint;
  },
  getWin(state, getters) {
    let currentWordLength = state.word.length;
    let correctGuess = 0;
    let currentWordArray = state.word.split("");
    let currentGuessesString = state.currentGuesses.join("");

    _.forEach(currentWordArray, (value, key) => {
      if (currentGuessesString.indexOf(value) != -1) {
        correctGuess++;
      }
    });
    
    return correctGuess === currentWordLength;
  }
};
