<template>
  <section class="section">
    <div class="columns is-mobile is-multiline">
      <HangmanVisual v-if="wordData.length" class="column is-12" />
      <GuessInput class="column is-12" v-if="getFailedGuesses <= 4 && !getWin" />
      <GuessFailed class="column is-12" v-if="getFailedGuesses > 4 && !getWin" />
      <GuessWin class="column is-12" v-if="getWin" />
      <Guesses class="column is-12" />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import HangmanVisual from "@/components/HangmanVisual";
import Guesses from "@/components/Guesses";
import GuessInput from "@/components/GuessInput";
import GuessFailed from "@/components/GuessFailed";
import GuessWin from "@/components/GuessWin";

export default {
  name: "HomePage",
  components: {
    HangmanVisual,
    Guesses,
    GuessInput,
    GuessFailed,
    GuessWin
  },
  computed: {
    ...mapGetters({
      wordData: "hangman/getWord",
      getFailedGuesses: "hangman/getFailedGuesses",
      getWin: "hangman/getWin"
    })
  },
  methods: {
    ...mapActions({ getWordData: "hangman/getWordData" })
  },
  created() {
    this.getWordData();
  }
};
</script>
