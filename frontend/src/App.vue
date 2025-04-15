<template>
  <div>
    <h2>🗺️ KIRYU EVERYWHERE! 🗺️</h2>
    <div v-if="location_number <= location_count" :key="location_number">
      <h3>LOCATION #{{ getDayNumber() }}</h3>
      <p>{{ getGameName().toUpperCase() }}</p>
      <Game
        :map="getMap()"
        :number="location_number"
        :threshold="getThreshold()"
        :target="getTarget()"
        :debug_mode="debug_mode"
        :on_complete="onComplete()"
      />
      <div>
        <h2>PICK A DATE</h2>
        <input type="date" id="date_input" v-model="date_input" />
        <br />
        <button @click="updateLocation" class="date-button">
          TAKE ME BACK
        </button>
      </div>
      <br />
      <h3>
        <a href="https://forms.gle/L1vSvZaWFRmz6Vug7"
          >Fill out this Survey To help out!</a
        >
      </h3>
      <h3>THIS HAS NOTHING TO DO WITH SEGA</h3>
      <h3>MADE BY <a href="paul@sarda.dev">paul@sarda.dev</a></h3>
    </div>
    <div v-else>
      <h2 class="emergency_font">
        This is bad please email <a href="paul@sarda.dev">paul@sarda.dev</a> and
        tell him he forgot to update the site.
      </h2>
    </div>
    <DialogWrapper />
    <div v-if="dev_possible">
      <input type="checkbox" id="debug_checkbox" v-model="debug_mode" />
      <label for="debug_checkbox">Debug Mode: {{ debug_mode }}</label>
    </div>
    <div v-if="debug_mode">
      <p>Select location</p>
      <input v-model="location_number" />
      <br />
      <br />
      <button @click="resetGuessesCookie()">Reset Cookie</button>
      <p>Cookie: {{ current_cookie }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Game from "./components/Game.vue";
import { games } from "./games";
import { map_info } from "./maps";
import { getGuesses, resetGuessesCookie } from "./history";
import { DialogWrapper } from "vue3-promise-dialog";
import { getLocationNumber, getDayNumber } from "./misc";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Game,
    DialogWrapper,
  },
  data() {
    return {
      show: false,
      debug_mode: process.env.BASE_URL == "/",
      current_cookie: getGuesses(document),
      location_number: getLocationNumber(new Date()),
      location_count: Object.keys(games).length,
      dev_possible: process.env.BASE_URL == "/",
      date_input: new Date().toISOString(),
    };
  },
  methods: {
    onComplete() {
      console.log("Jobs done");
    },
    resetGuessesCookie() {
      resetGuessesCookie(document);
    },
    getMap() {
      return games[this.location_number].map;
    },
    getTarget() {
      return games[this.location_number].target;
    },
    getGameName() {
      return map_info[games[this.location_number].map].game_name;
    },
    getThreshold() {
      return map_info[games[this.location_number].map].threshold;
    },
    getDayNumber() {
      return getDayNumber(new Date(this.date_input));
    },
    updateLocation() {
      const date = new Date(this.date_input);
      if (date > new Date()) {
        alert("You can't pick a future date!");
        return;
      }
      this.location_number = getLocationNumber(date);
      this.current_cookie = getGuesses(document);
      this.location_count = Object.keys(games).length;
    },
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&display=swap");

#app {
  font-family: "Nanum Brush Script", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 10px;
}

a {
  color: lightgray;
}

body {
  background-color: #5c5c5c;
}

.emergency_font {
  font-family: Arial, Helvetica, sans-serif;
}

.location_select h2 {
  margin-bottom: 0px;
}

.location_select select {
  font-family: "Nanum Brush Script", cursive;
  font-size: 20px;
  background-color: #868686;
  color: white;
}

.date-button {
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
</style>
