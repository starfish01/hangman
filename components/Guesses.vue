<template>
  <div>
    <h3 class="subtitle is-3">Guesses</h3>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Successful</p>
          <p>
            <template v-for="letter in getGuesses">
              <span v-if="wordData.indexOf(letter) != -1" :key="letter"> {{letter}},</span>
            </template>
          </p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Failed</p>
          <p>
            <template v-for="letter in getGuesses">
              <span v-if="wordData.indexOf(letter) === -1" :key="letter"> {{letter}},</span>
            </template>
          </p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      wordData: "hangman/getWord",
      getGuesses: "hangman/getGuesses"
    })
  }
};
</script>

<style></style>
