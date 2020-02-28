export default {

    getWord(state){
        return state.word;
    },
    getGuesses(state) {
        return state.currentGuesses;
    },
    getFailedGuesses(state) {
        return state.failedGuess;
    },
    getWin(state) {
        
      let currentWordLength = state.word.length;
      let correctGuess = 0;  
      let currentWord = state.word;

      _.forEach(state.currentGuesses, (value, key) => {
        if (currentWord.indexOf(value) != -1) {
            correctGuess++;
        }
      });

      return correctGuess === currentWordLength;

    }

}