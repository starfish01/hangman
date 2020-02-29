<template>
  <div class="is-inline-flex">
    <div class="columns is-multiline is-mobile">
      <div class="column is-2" v-for="(key,index) in getKeys" :key="index">
        <b-button
          type="is-primary"
          class="button-input"
          size="is-small"
          @click="submitGuess(key)"
          :disabled="disabledKeys.includes(key)"
        >{{key}}</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      disabledKeys: []
    };
  },
  methods: {
    disableButton(key) {
      if (key === "a") {
        return true;
      }
      return false;
    },
    submitGuess(key) {
      this.disabledKeys.push(key);
      this.addGuess(key);
    },
    ...mapMutations({
      addGuess: "hangman/addGuess"
    })
  },
  computed: {
    ...mapGetters({
      getGuesses: "hangman/getGuesses",
      getKeys: "hangman/getKeys"
    })
  }
};
</script>

<style>
.m-a {
  margin: auto;
}
.button-input {
  width: 100%;
}
</style>
