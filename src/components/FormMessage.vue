<template>
    <div class="form mt-6">
        <form class="mx-5 pt-7">
            <textarea 
            v-model="message" 
            @keyup.ctrl.enter="createNewMessage"
            class="pa-3"
            name="message" 
            id="message" 
            cols="30" 
            rows="7">
            </textarea>

            <v-btn
            rounded 
            dark 
            @click="createNewMessage" 
            color="#FDD639" 
            class="btn px-11 py-3 mt-6 mb-8" 
            style="color: #333333"
            >
                Написать консультанту
            </v-btn>
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'FormMessage',
    data: () => ({
        message: '',
    }),
    
    methods: {
        ...mapActions(['addNewMessage']),
        // this function creates a new message and adds it to the store
        createNewMessage() {
            
            let mon = new Date().toLocaleString('ru', { month: 'long'})
            let arr = mon.split('')
            let x = arr[arr.length-1]
            if(x == 'ь' || x == 'й') {
                arr.pop()
                arr.push('я')
            } else if(x == 'т') {
                arr.push('а')
            }
            let data = {
                id: Math.random(),
                name: 'User',
                content: this.message,
                date: `${new Date().getDate()} ${arr.join('')} ${new Date().getFullYear()}`,
            }
           
            this.addNewMessage(data)
            
        }
    }
}
</script>

<style scoped>
.form {
    background: #F2F2F2;
    
}

#message {
    width: 100%;
    border: 1px solid #000000;
    border-radius: 1px;
    background: #FFF;
    height: 65px;
}

.btn {
    text-transform: none;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.31;
    color: #333333;
    letter-spacing: 0;
    background: #FDD639;
    box-shadow: none;
}
</style>