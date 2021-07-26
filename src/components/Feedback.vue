<template>
    <div class="feedback mt-4">
        <v-row>
            <v-col cols="9" class="text-left">
                <span class="bold_title_text">Последние отзывы <a href="#" class="ml-2">Все отзывы</a></span>
            </v-col>

            <v-col cols="3" class="d-flex justify-end">
                <div class="mr-4">
                    <v-icon color="#73b4d5" small>
                        mdi-heart
                    </v-icon>
                    <span class="forStatistic">131</span>
                </div>
                <div>
                    <v-icon color="#73b4d5" small>
                        mdi-message-reply
                    </v-icon>
                    <span class="forStatistic">14</span>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'Feedback',
    data:() => ({

    })
    
}
</script>

<style scoped>
a {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.14;
}

.forStatistic {
    font-size: 12px;
    font-weight: 400;
    line-height: 1.17;
    color: #333333;
}

</style>