<template>
  <section class="section">
    <div class="columns is-mobile is-multiline">
      <HangmanVisual v-if="wordData.length" class="column is-12" />
      <GuessInput class="column is-12" />
      <Guesses class="column is-12" />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import HangmanVisual from "@/components/HangmanVisual";
import Guesses from "@/components/Guesses";
import GuessInput from "@/components/GuessInput";

export default {
  name: "HomePage",
  components: {
    HangmanVisual,
    Guesses,
    GuessInput
  },
  computed: {
    ...mapGetters({ wordData: "hangman/getWord" })
  },
  methods: {
    ...mapActions({ getWordData : "hangman/getWordData" })
  },
  created() {
    this.getWordData();
  }
};
</script>
