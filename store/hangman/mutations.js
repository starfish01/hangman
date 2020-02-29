export default {
  setWordData(state, word) {
    state.word = word;
  },

  RESET_HANGMAN(state, indexOfWord) {
    state.word = '';
    state.currentGuesses = [];
    state.playerDetails = [];
    state.failedGuess = 0;
    state.visualKey = state.visualKey + 1;

    state.word = state.wordsToGuess[indexOfWord].toLowerCase();
  },

  addGuess(state, letter) {

    state.currentGuesses.push(letter)

    // check if its a bad guess
    let badGuess = 0;
    let currentWord = state.word;

    _.forEach(state.currentGuesses, (value, key) => {
      if (currentWord.indexOf(value) === -1) {
        badGuess++;
      }
    });

    state.failedGuess = badGuess;

  },
  CLOSE_HINT(state) {
    state.displayHint = false;
  }

}
