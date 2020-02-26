export default {
  setWordData(state, word) {
    state.word = word;
  },
  addGuess(state, letter) {
    
    state.currentGuesses.push(letter)

    // check if its a bad guess
    let badGuess = 0;
    let currentWord = state.word;
    // this.vueCanvas.clearRect(0, 0, 400, 200);

    _.forEach(state.currentGuesses, (value, key) => {
      if (currentWord.indexOf(value) === -1) {
        badGuess++;
      }
    });

    state.failedGuess = badGuess;

  }

}
