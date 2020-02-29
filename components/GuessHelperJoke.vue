<template>
  <div>
    <b-button @click="displayHint = true">Do you need a hint?</b-button>
    <div v-if="displayHint">
      <b-button @click="closeHint">X</b-button>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&autoplay=1"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      displayHint: false
    };
  },
  computed: {
    ...mapGetters({
      wordData: "hangman/getWord"
    })
  },
  methods: {
    openHint() {},
    ...mapActions({ closeHint: "hangman/closeHint" })
  }
};
</script>

<style>
iframe {
  height: 350px;
}
</style>