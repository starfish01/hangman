export default {
    setWordData(state, word) {
        state.word = word;
    },
    addGuess(state, letter) {
        state.currentGuesses.push(letter)

        console.log(state.currentGuesses)
    }
    

}