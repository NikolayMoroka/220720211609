import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
    breakpoint: {
        thresholds: {
            xs: 370,
            sm: 480,
            md: 800,
            lg: 1280,
        },
        scrollBarWidth: 24,
    }    
});
