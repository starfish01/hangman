<template>
  <h3 class="subtitle is-3 text-sentence-case">
    {{ getLeftFalseGuesses }}/6
    <br />
    <span v-for="letter in wordData" :key="letter">
      <template v-if="getGuesses.indexOf(letter) === -1"> _</template>
      <template v-else> {{ letter }}</template>
    </span>
  </h3>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      wordData: "hangman/getWord",
      getGuesses: "hangman/getGuesses"
    }),
    getLeftFalseGuesses() {
      let badGuess = 0;

      _.forEach(this.getGuesses, (value, key) => {
        if (this.wordData.indexOf(value) === -1) {
          badGuess++;
        }
      });

      return badGuess;
    }
  }
};
</script>

<style>
.text-sentence-case {
  text-transform: capitalize;
}
</style>
