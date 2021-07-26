<template>
    <div class="services" :class="{'services-md': $vuetify.breakpoint.sm || $vuetify.breakpoint.xs}">
        <v-row>
            <v-col class="text-left  pl-7 pl-md-10 mr-3 mt-10 mt-md-0">
                <v-row style="border-bottom: 0.5px solid #DADADA" class="mb-3">
                    <v-col cols="9"></v-col>
                    <v-col cols="3">
                        <div class="text-center">
                            <span class="servicesLabel">Услуги</span> 
                        </div>
                    </v-col>
                </v-row>

                <v-row v-for="(service, index) in servicesArr" :key="index" >
                    {{ procent }}
                    <v-col 
                    cols="9" 
                    :style="{background: service.procentLine}" 
                    class="py-0 mt-1"
                    >
                        <span class="serviceName">{{ service.serviceName }}</span>
                    </v-col>
                    <v-col 
                    cols="3"
                    class="py-0 mt-1"
                    >
                        <div class="text-center">
                            <span class="servicePoints pl-2">{{ service.points }}</span> 
                        </div>
                    </v-col>
                </v-row>

                

                <v-row style="border-top: 0.5px solid #DADADA" class="mt-7">
                    <v-col cols="9" class="pl-0">
                        <div>
                            <span class="bold_title_text text-left">Всего</span>
                        </div>
                    </v-col>
                    <v-col cols="3">
                        <div class="text-center">
                            <span class="bold_title_text">{{ sumPoints }}</span> 
                        </div>
                    </v-col>
                </v-row>
                
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'Services',
    data:() => ({
        servicesArr: [
            {
                serviceName: 'Ручное бронирование',
                points: 11,
                color: '#B1E19B'
            },
            {
                serviceName: 'Пакетные туры',
                points: 3,
                color: '#ACE2F8'
            },
            {
                serviceName: 'Отели',
                points: 1,
                color: '#ACE2F8'

            }
        ],
        oneProcent: 0,
    }),

    computed: {
        sumPoints() {
            let sum = 0
            let procent = 0
            
            this.servicesArr.forEach(element => {
                let point = element.points
                sum += point
            });
            this.oneProcent = 100 / sum 
            return sum
        },

        procent() {
            this.servicesArr.forEach(element => {
                let point = element.points
                element.procentLine = `linear-gradient(to right, ${element.color} ${this.oneProcent * point}%, white ${this.oneProcent * point}% 100%)`
                console.log(element)
            });
        }
    },
}
</script>

<style scoped>

  .services {
    margin-left: 90px
  }

  .services-md {
    margin-left: 0px
  }

  .servicesLabel {
    font-weight: 400;
    font-size: 13px;
    line-height: 1.15;
    color: #333333;
  }

  .serviceName {
    font-weight: 400;
    font-size: 13px;
    line-height: 2;
    color: #333333;
  }

  .servicePoints {
    font-weight: 700;
    font-size: 13px;
    line-height: 1.15;
    color: #333333;

  }

  .services-md {
    margin-top: -40px;
    margin-left: 0px
  }

</style>