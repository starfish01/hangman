<template>
  <section class="section">
    <div class="columns is-mobile is-multiline">
      <HangmanVisual v-if="wordData.length" class="column is-12" :key="visualKey" />
      <GuessInputKeyboard class="column is-12" v-if="getFailedGuesses <= 4 && !getWin" />
      <GuessFailed class="column is-12" v-if="getFailedGuesses > 4 && !getWin" />
      <GuessWin class="column is-12" v-if="getWin && wordData.length > 0" />
      <Guesses class="column is-12" />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import HangmanVisual from "@/components/HangmanVisual";
import Guesses from "@/components/Guesses";
import GuessFailed from "@/components/GuessFailed";
import GuessWin from "@/components/GuessWin";
import GuessInputKeyboard from "@/components/GuessInputKeyboard";

export default {
  name: "HomePage",
  components: {
    HangmanVisual,
    Guesses,
    GuessFailed,
    GuessWin,
    GuessInputKeyboard
  },
  computed: {
    ...mapGetters({
      wordData: "hangman/getWord",
      getFailedGuesses: "hangman/getFailedGuesses",
      getWin: "hangman/getWin",
      visualKey: "hangman/visualKey"
    })
  },
  methods: {
    ...mapActions({ startGame: "hangman/startGame" })
  },
  mounted() {
    this.startGame();
  }
};
</script>
