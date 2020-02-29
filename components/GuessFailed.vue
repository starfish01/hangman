<template>
  <div>
    <h3 class="subtitle is-3">DEAD</h3>
    <p>
      The word was:
      <span class="has-text-weight-bold">{{wordData}}</span>
    </p>
    <br />
    <b-button @click="startGame">Play Again?</b-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      wordData: "hangman/getWord"
    })
  },
  methods: {
    ...mapActions({ startGame: "hangman/startGame" })
  }
};
</script>

<style>
</style>