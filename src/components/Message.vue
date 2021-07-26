<template>
    <div class="message">
        <v-row v-for="(message, index) in MESSAGES" :key="index">
            <v-col>
                <div class="text-left">
                    <p class="userName"> {{ message.name }} <span class="date ml-1"> {{ message.date }} </span></p>
                </div>

                <div class="messageBlock py-3 px-5 text-left">
                    <span class="textMessage">
                        {{ message.content }}
                    </span>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Message',
    data:() => ({
       
    }),

    computed: {
        ...mapGetters(['MESSAGES'])
    }
    
}
</script>

<style scoped>
.userName {
    font-size: 14px;
    font-weight: 700;
    line-height: 1.36;
    color: #333333;
}

.date {
    font-size: 12px;
    font-weight: 400;
    line-height: 1.67;
    color: #808080;
}

.messageBlock {
    background: #F2FBFF;
    border: 1px solid #C4CBCF;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(128, 128, 128, 0.1);
    position: relative;
}

.textMessage {
    font-size: 14px;
    color: #333333;
}

.messageBlock {
	position: relative;
    background: #F2FBFF;
	border: 1px solid #C4CBCF;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(128, 128, 128, 0.1);
}

.messageBlock::before { 
	content: ' '; 
	position: absolute; 
	width: 0; 
	height: 0; 
	top: -16px;
    border: 8px solid; 
	border-color:  transparent  transparent #C4CBCF #C4CBCF; 
}

.messageBlock::after { 
	content: ' '; 
	position: absolute; 
	width: 0; 
	height: 0; 
	left: 21px;
    top: -14px;
    border: 8px solid;
    border-color: transparent transparent #F2FBFF #F2FBFF; 
}


</style>