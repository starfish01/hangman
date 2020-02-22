<template>
  <div>
    <h3 class="subtitle is-3 text-sentence-case">
      {{ getLeftFalseGuesses }}/6
    </h3>
    <br />

    <canvas id="board-canvas"></canvas>
    <h3 class="subtitle is-3 text-sentence-case">
      <span v-for="letter in wordData" :key="letter">
        <template v-if="getGuesses.indexOf(letter) === -1"> _</template>
        <template v-else> {{ letter }}</template>
      </span>
    </h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      ctx: "",
      vueCanvas: null
    };
  },
  mounted() {
    var c = document.getElementById("board-canvas");
    this.vueCanvas = c.getContext("2d");
    this.vueCanvas.clearRect(0, 0, 400, 200);

    // structure
    this.vueCanvas.moveTo(100, 140);
    this.vueCanvas.lineTo(20, 140);
    this.vueCanvas.lineTo(20, 20);
    this.vueCanvas.lineTo(100, 20);
    this.vueCanvas.lineTo(100, 30);
    this.vueCanvas.stroke();
    // head
    this.vueCanvas.beginPath();
    this.vueCanvas.arc(100, 40, 10, 0, 2 * Math.PI);
    this.vueCanvas.stroke();
    //body
    this.vueCanvas.moveTo(100, 50);
    this.vueCanvas.lineTo(100, 100);
    this.vueCanvas.stroke();
    //hands
    this.vueCanvas.moveTo(70, 65);
    this.vueCanvas.lineTo(100, 70);
    this.vueCanvas.lineTo(130, 65);
    this.vueCanvas.stroke();

    //legs
    this.vueCanvas.moveTo(85, 120);
    this.vueCanvas.lineTo(100, 100);
    this.vueCanvas.lineTo(115, 120);
    this.vueCanvas.stroke();
  },
  computed: {
    ...mapGetters({
      wordData: "hangman/getWord",
      getGuesses: "hangman/getGuesses"
    }),
    getLeftFalseGuesses() {
      let badGuess = 0;

      _.forEach(this.getGuesses, (value, key) => {
        if (this.wordData.indexOf(value) === -1) {
          badGuess++;
        }
      });

      return badGuess;
    }
  }
};
</script>

<style>
.text-sentence-case {
  text-transform: capitalize;
}

#board {
  background-color: white;
  box-shadow: 0 2px 5px #d0d0d0;
  flex: 2 1 auto;
  margin: 10px 0 0 0;
  height: 300px;
  max-width: 500px;
  /* max-width: 500px;
  width: 95%;
  min-height: 400px; */
}
#board-canvas {
  background-color: white;
  box-shadow: 0 2px 5px #d0d0d0;
  height: 200px;
  width: 400px;
}
</style>
