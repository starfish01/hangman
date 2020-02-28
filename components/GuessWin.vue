<template>
  <div>
    <h3 class="subtitle is-3">Yayy you figured it out</h3>
    <br />
    <b-button @click="reset">Play Again?</b-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({ reset: "hangman/resetGame" })
  }
};
</script>

<style>
</style>