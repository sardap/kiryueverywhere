<template>
  <div class="game">
    <img
      :src="`${public_path}games/${number}/${active_pic}.webp`"
      class="game_image"
    />
    <br />
    <div class="buttons">
      <div>
        <button
          @click="showLocationImage(1)"
          :class="getClassForLocationImage(1)"
        >
          1
        </button>
        <button
          @click="showLocationImage(2)"
          :class="getClassForLocationImage(2)"
        >
          2
        </button>
        <button
          @click="showLocationImage(3)"
          :class="getClassForLocationImage(3)"
        >
          3
        </button>
        <button
          @click="showLocationImage(4)"
          :class="getClassForLocationImage(4)"
        >
          4
        </button>
      </div>
    </div>
    <div v-if="this.getState() == `playing`">
      <h3>{{ guessesLeftCount() }} GUESSES LEFT</h3>
    </div>
    <div v-else>
      <div v-if="this.getState() == `win`">
        <h2>YOU WON</h2>
        <h3>WITH {{ guessesLeftCount() }} GUESSES LEFT</h3>
      </div>
      <div v-if="this.getState() == `lose`">
        <h2>YOU LOST</h2>
        <h3>TRY AGAIN TOMORROW!</h3>
      </div>
      <h3>NEXT LOCATION IN {{ countdownUntilTomorrow }}</h3>
    </div>
    <canvas id="canvas" v-on:click="canvasClick" />
    <br />
    <div v-if="this.getState() == `playing`">
      <button
        :class="this.selected_x == null ? `submit disabled` : `submit`"
        @click="submitButton"
      >
        SUBMIT
      </button>
    </div>
    <div v-else>
      <button @click="shareClick" class="submit">{{ this.share_text }}</button>
    </div>
    <img id="map" :src="`${public_path}maps/${map}.webp`" hidden="true" />
    <img
      id="target_icon"
      :src="`${this.public_path}images/blad_kiryu.webp`"
      hidden="true"
    />
    <div v-if="debug_mode">
      <p>DEBUG X: {{ this.click_debug_x }}</p>
      <p>DEBUG Y: {{ this.click_debug_y }}</p>
      <button @click="copyLocationClick" class="submit">Copy</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { position } from "../games";
import { FinalGuess, saveGuess, getGuessesForLocation } from "../history";
import { getDayNumber } from "../misc";
import mix from "mix-css-color";

const pic_count = 4;

@Options({
  props: {
    map: String,
    number: Number,
    target: {
      x: Number,
      y: Number,
    },
    threshold: Number,
    debug_mode: Boolean,
    on_complete: Function,
  },
  data() {
    return {
      active_pic: 1,
      canvas: null,
      selected_x: null,
      selected_y: null,
      center_x: null,
      center_y: null,
      guesses: [],
      state: "playing",
      share_text: "SHARE!",
      image_width: null,
      image_height: null,
      click_debug_x: null,
      click_debug_y: null,
      canvas_init: false,
      public_path: process.env.BASE_URL,
      countdownUntilTomorrow: ``,
      countdownUntilTomorrowTimer: null,
    };
  },
  mounted() {
    var c = document.getElementById("canvas") as HTMLCanvasElement;
    this.canvas = c.getContext("2d");

    this.timer = setInterval(() => {
      this.draw();
    }, 250);

    this.countdownUntilTomorrowTimer = setInterval(() => {
      this.countdownUntilTomorrow = this.countDownUntilNextLocation();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
    clearInterval(this.countdownUntilTomorrowTimer);
  },
  methods: {
    countDownUntilNextLocation() {
      let today = new Date();
      const tomorrow = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        0,
        0,
        0
      );
      tomorrow.setTime(tomorrow.getTime() + 24 * 60 * 60 * 1000);
      const dist = tomorrow.getTime() - today.getTime();
      const hours = Math.floor(
        (dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((dist % (1000 * 60)) / 1000);

      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    },
    getState() {
      const guesses = getGuessesForLocation(document, this.number);
      for (const guess of guesses) {
        if (guess.final_guess == FinalGuess.Win) {
          return "win";
        } else if (guess.final_guess == FinalGuess.Lose) {
          return "lose";
        }
      }

      return "playing";
    },
    guessesLeftCount() {
      return pic_count - getGuessesForLocation(document, this.number).length;
    },
    unlockedImage() {
      const length = getGuessesForLocation(document, this.number).length + 1;
      return Math.min(length, pic_count);
    },
    showLocationImage(num: number) {
      if (num <= this.unlockedImage() || this.getState() != "playing") {
        this.active_pic = num;
      }
    },
    unlockNext() {
      this.active_pic = Math.min(this.unlockedImage() + 1, pic_count);
    },
    getClassForLocationImage(num: number) {
      if (this.active_pic == num) {
        return "game_btn_active";
      }

      if (this.unlockedImage() >= num) {
        return "game_btn_unlocked";
      }

      if (this.getState() != "playing") {
        return "game_btn_unlocked_completed";
      }

      return "game_btn_inactive";
    },
    percentAsPos(x: number, y: number): position {
      return {
        x: (x / 100) * this.image_width + this.center_x,
        y: (y / 100) * this.image_height + this.center_y,
      };
    },
    posAsPercent(pos: position): position {
      return {
        x: ((pos.x - this.center_x) / this.image_width) * 100,
        y: ((pos.y - this.center_y) / this.image_height) * 100,
      };
    },
    correctGuess(pos: position) {
      const percent_pos: position = this.posAsPercent({
        x: pos.x,
        y: pos.y,
      });
      const dist_x = Math.abs(percent_pos.x - this.target.x);
      const dist_y = Math.abs(percent_pos.y - this.target.y);

      this.click_debug_x = `px: ${percent_pos.x}`;
      this.click_debug_y = `py: ${percent_pos.y}`;

      return dist_x <= this.threshold && dist_y <= this.threshold;
    },
    shareClick() {
      let text = `#KIRYU_EVERYWHERE #${getDayNumber(new Date())} 🗺️\n`;
      const guesses = getGuessesForLocation(document, this.number);
      for (let i = 0; i < guesses.length; i++) {
        const dist_x = Math.abs(guesses[i].x - this.target.x);
        const dist_y = Math.abs(guesses[i].y - this.target.y);
        let square: string;
        if (guesses[i].final_guess == FinalGuess.Win) {
          square = "🟢";
        } else {
          square = "🔴";
        }
        text += `\n#${i + 1}\t${square} distance:${(dist_x + dist_y).toFixed(
          2
        )}`;
      }
      for (let i = 0; i < this.guessesLeftCount(); i++) {
        text += `\n#${i + 1 + guesses.length}\t⚫`;
      }
      text += "\n\n";
      text += "https://sardap.github.io/kiryueverywhere/";
      navigator.clipboard.writeText(text);
      this.share_text = "COPPIED!";
      let share_text_timer = setInterval(() => {
        this.share_text = "SHARE!";
        clearInterval(share_text_timer);
      }, 250);
    },
    copyLocationClick() {
      let text = `target: { x: ${this.click_debug_x.substring(
        3
      )}, y: ${this.click_debug_y.substring(3)} },`;
      navigator.clipboard.writeText(text);
    },
    submitButton() {
      if (this.selected_x == null || this.selected_y == null) {
        return;
      }

      const percent_pos: position = this.posAsPercent({
        x: this.selected_x,
        y: this.selected_y,
      });
      console.log(`CLICK ${percent_pos.x}% ${percent_pos.y}%`);
      const dist_x = Math.abs(percent_pos.x - this.target.x);
      const dist_y = Math.abs(percent_pos.y - this.target.y);

      const image = document.getElementById("map") as HTMLImageElement;
      this.click_debug_x = `px:${percent_pos.x} sx:${this.selected_x} cx:${this.center_x} iw:${image.width}`;
      this.click_debug_y = `py:${percent_pos.y} sy:${this.selected_y} cy:${this.center_y} ih:${image.height}`;

      const guesses_length = getGuessesForLocation(
        document,
        this.number
      ).length;

      let f = FinalGuess.NotFinal;
      if (this.correctGuess({ x: this.selected_x, y: this.selected_y })) {
        console.log("win!");
        f = FinalGuess.Win;
      } else if (this.guessesLeftCount() - 1 == 0) {
        console.log("lose!");
        f = FinalGuess.Lose;
      } else {
        console.log(`unlock next! ${guesses_length}`);
        this.unlockNext();
        console.log(
          `failure!: dist_x:${dist_x}, dist_y:${dist_y}, threshold:${this.threshold}`
        );
      }

      saveGuess(document, this.number, percent_pos.x, percent_pos.y, f);

      this.selected_x = null;
      this.selected_y = null;
      this.draw();
    },
    canvasClick(event: any) {
      if (this.getState() != "playing") {
        return;
      }
      this.selected_x = event.offsetX;
      this.selected_y = event.offsetY;
      this.draw();
    },
    drawMap() {
      let ctx = this.canvas;

      const canvas_width = ctx.canvas.width;
      const canvas_height = ctx.canvas.height;

      ctx.clearRect(0, 0, canvas_width, canvas_height);

      const image = document.getElementById("map") as HTMLImageElement;
      const ratio = Math.min(
        canvas_width / image.width,
        canvas_height / image.height
      );

      this.image_width = image.width * ratio;
      this.image_height = image.height * ratio;
      const x = canvas_width / 2 - this.image_width / 2;
      const y = canvas_height / 2 - this.image_height / 2;
      this.center_x = canvas_width / 2;
      this.center_y = canvas_height / 2;

      ctx.drawImage(image, x, y, this.image_width, this.image_height);
    },
    draw() {
      let ctx = this.canvas;
      ctx.clearRect(0, 0, ctx.width, ctx.height);

      if (!this.canvas_init) {
        this.canvas_init = true;
        const canvas_width = window.innerWidth * 0.9;
        const canvas_height = window.innerHeight * 0.6;
        ctx.canvas.width = canvas_width;
        ctx.canvas.height = canvas_height;
      }

      this.drawMap();

      const guesses = getGuessesForLocation(document, this.number);
      const guess_size = ctx.canvas.height * 0.05;
      let i = 0;
      for (const guess of guesses) {
        const pos = this.percentAsPos(guess.x, guess.y);
        const dist_x = Math.abs(guess.x - this.target.x);
        const dist_y = Math.abs(guess.y - this.target.y);
        ctx.beginPath();
        let colour = "";
        if (dist_x <= this.threshold && dist_y <= this.threshold) {
          colour = "green";
        } else {
          const dist = dist_x + dist_y;
          if (dist < this.threshold * 6) {
            colour = mix(
              "red",
              "yellow",
              ((dist - this.threshold) / (this.threshold * 6)) * 100
            ).hex;
          } else {
            colour = "red";
          }
        }
        ctx.strokeStyle = colour;
        ctx.rect(
          pos.x - guess_size / 2,
          pos.y - guess_size / 2,
          guess_size,
          guess_size
        );
        ctx.stroke();
      }

      if (this.selected_x && this.selected_y) {
        ctx.beginPath();
        ctx.strokeStyle = "Black";
        ctx.rect(
          this.selected_x - guess_size / 2,
          this.selected_y - guess_size / 2,
          guess_size,
          guess_size
        );
        ctx.stroke();
      }

      if (this.getState() != "playing") {
        const image = document.getElementById(
          "target_icon"
        ) as HTMLImageElement;
        const pos = this.percentAsPos(this.target.x, this.target.y);
        ctx.beginPath();
        ctx.drawImage(
          image,
          pos.x - guess_size / 2,
          pos.y - guess_size / 2,
          guess_size,
          guess_size
        );
        ctx.stroke();
      }
    },
  },
})
export default class Game extends Vue {
  map!: string;
  number!: number;
  target!: position;
  threshold!: number;
  debug_mode!: boolean;
  on_complete!: () => void;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 5px;
}

.buttons {
  margin: 5px;
}

.buttons button {
  border: none;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 8px;
}

.submit {
  font-family: "Nanum Brush Script", cursive;
  border: none;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 8px;
  margin-top: 10px;
  font-size: 30px;
  background-color: #a8a8a8;
  color: white;
  transition-duration: 0.4s;
}

.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit:hover {
  background-color: lightgray;
  cursor: pointer;
}

.game_image {
  height: 22vh;
  border-radius: 5px;
}

.game_btn_active {
  background: #42b983;
}

.game_btn_unlocked {
  background: lightgray;
}

.game_btn_unlocked_completed {
  background: lightgray;
}

.game_btn_inactive {
  background: #63666a;
}

#canvas {
  border: 0px solid blue;
}

.map {
  height: 100%;
  margin-top: 10%;
}

h3 {
  margin: 0px;
}
</style>
