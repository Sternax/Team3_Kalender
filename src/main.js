import { createApp } from "vue";
import router from "./router";
import "./style.css";
import App from "./App.vue";
import "v-calendar/style.css";
import VCalendar from "v-calendar";

createApp(App).use(router).use(VCalendar, {}).mount("#app");
