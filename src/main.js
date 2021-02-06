import Vue from "vue";
import App from "./App.vue";
import VueFilterDateFormat from "@vuejs-community/vue-filter-date-format";
import VueObserveVisibility from "vue-observe-visibility";
import { VLazyImagePlugin } from "v-lazy-image";

Vue.use(VLazyImagePlugin);
Vue.use(VueObserveVisibility);

Vue.use(VueFilterDateFormat, {
  dayOfWeekNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  dayOfWeekNamesShort: ["Su", "Mo", "Tu", "We", "Tr", "Fr", "Sa"],
  monthNames: [
    "stycznia",
    "lutego",
    "marca",
    "kwietnia",
    "maja",
    "czerwca",
    "lipca",
    "sierpnia",
    "września",
    "października",
    "listopada",
    "grudnia",
  ],
  monthNamesShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  // Timezone offset, in minutes (0 - UTC, 180 - Russia, undefined - current)
  timezone: 0,
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
