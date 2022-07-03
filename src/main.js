import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/base.scss";
import VueAnimateOnScroll from "vue-animate-onscroll";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(VueAnimateOnScroll);
app.use(createPinia());
app.use(router);
app.mount("#app");
