import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/base.css";
import { Quasar } from "quasar";
import { VueAnimateOnScroll } from "vue-animate-onscroll";

import App from "./App.vue";
import router from "./router";

import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";
import "@quasar/extras/material-icons-round/material-icons-round.css";
import "quasar/dist/quasar.css";
// import @quasar/extras/animate/fadeIn.css
// import @quasar/extras/animate/fadeOut.css

const app = createApp(App);

app.use(Quasar, { plugins: {} });
app.use(VueAnimateOnScroll);
app.use(createPinia());
app.use(router);
app.mount("#app");
