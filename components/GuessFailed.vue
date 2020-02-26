<template>
  <div>
    <h3 class="subtitle is-3">DEAD</h3>
    <p>
      The word was:
      <span class="has-text-weight-bold">{{wordData}}</span>
    </p>
    <br>
    <b-button @click="reset">Play Again?</b-button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      wordData: "hangman/getWord"
    })
  },
  methods:{
      reset() {
          alert('f');
      }
  }
};
</script>

<style>
</style>