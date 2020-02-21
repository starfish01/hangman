<template>
  <div class="is-inline-flex">
    <b-field label="Guess">
      <b-input v-model="name"></b-input>
    </b-field>
    <b-button
      :disabled="name.length != 1"
      class="m-a"
      @click.prevent="submitGuess"
      type="is-primary"
      >Submit Guess</b-button
    >
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";


export default {
  data() {
    return {
      name: ""
    };
  },
  methods: {
    submitGuess() {
      if (!this.name.length) {
        return;
      } else if (this.name.length > 1) {
        alert("No more than one letter");
        this.name = "";
        return;
      }
      if (this.getGuesses.indexOf(this.name.toLowerCase()) != -1) {
          alert('You have guessed this');
          this.name = "";
          return;
      }
      this.addGuess(this.name.toLowerCase());
      this.name = "";
    },
    ...mapMutations({
      addGuess: "hangman/addGuess"
    })
  },
    computed: {
    ...mapGetters({
      getGuesses: "hangman/getGuesses"
    })}
};
</script>

<style>
.m-a {
  margin: auto;
}
</style>
