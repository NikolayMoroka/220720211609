<template>
  <div class="manager">
      <v-row>
        <v-col 
        cols="12" 
        md="3" 
        class="d-flex justify-center justify-md-start" 
        
        >
          <v-avatar
           size="124"
          >
            <img
              src="../assets/photo2.png"
              alt="Avatar_Veronika"
            >
          </v-avatar>
          
        </v-col>
        <v-col cols="12" md="9" class="d-flex justify-center justify-sm-start">
           
        </v-col>
      </v-row>
      <v-row>
        <v-col 
        :class="{'colmanagerInfo-md': $vuetify.breakpoint.sm || $vuetify.breakpoint.xs}" 
        class="colmanagerInfo text-center text-md-left">
          <div class="pl-md-10  pl-2 pr-2">
              <h1 class="bold_title_text"> {{ name }} </h1>
              <p class="mb-1"> {{ position }} </p>
          </div>
          <div class="managerInfo py-1 pl-md-10 pl-2 pr-2">
            <span class="text">
                Подберу для вас самые лучшие предложения. <br v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"> Мои услуги абсолютно бесплатны.
            </span>
          </div>
        </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  name: 'Manager',

  data: () => ({
    name: 'Вероника Ростова',
    position: 'Менеджер по продажам',
  }),

  computed: {
  
  }
};
</script>

<style scoped>
  .managerInfo {
    background: #FFFBC8;
    border: 1px solid #DADADA;
    box-sizing: border-box;
    border-radius: 5px;
    text-align: left;
  }

  /* .managerInfo-sm {
    margin-top: 70px;
  } */

  .colmanagerInfo {
    margin-top: -140px;
    margin-left: 90px
  }

  .colmanagerInfo-md {
    margin-top: -40px;
    margin-left: 0px
  }

</style>
