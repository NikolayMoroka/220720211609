<template>
  <v-app>
    <v-main >
        <div id="app" style="max-width: 720px; margin: auto;">
            <div class="px-4 pt-4 pb-0">
              <Manager/>
              <Services/>
              <Feedback/>
              <Message/>
            </div>

            <div>
              <FormMessage/>
            </div>
            
        </div>
    </v-main>
  </v-app>
</template>

<script>
import Manager from "./components/Manager";
import Services from "./components/Services";
import Feedback from "./components/Feedback";
import Message from "./components/Message";
import FormMessage from "./components/FormMessage";

export default {
  name: "App",

  components: {
    Manager,
    Services,
    Feedback,
    Message,
    FormMessage
  },

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  font-family: Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  justify-content: center;
  max-width: 100%;
}

.bold_title_text {
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  color: #333333;
}

p {
  font-size: 12px;
  font-weight: 400;
  line-height: 1.67;
  color: #808080;
}

.text {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  color: #333333;
}
</style>
