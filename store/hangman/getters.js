export default {

    getWord(state){
        return state.word;
    },
    getGuesses(state) {
        return state.currentGuesses;
    },
    getFailedGuesses(state) {
        return state.failedGuess;
    }
}