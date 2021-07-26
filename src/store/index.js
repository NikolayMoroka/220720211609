import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: [
        {
          id: 1,
          name: 'Самуил',
          content: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!',
          date: '13 октября 2011'
        },
        {
          id: 2,
          name: 'Лилия Семёновна',
          content: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?',
          date: '14 октября 2011'
        },
        {
          id: 3,
          name: 'Лилия Семёновна',
          content: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?',
          date: '14 октября 2011'
      },
        
    ]
  },

  mutations: {
    getMessage(state, message) {
      state.messages.push(message)
    }
  },

  actions: {
    addNewMessage({commit}, data) {
      commit('getMessage', data)
    }
  },
  getters: {
    MESSAGES(state) {
      return state.messages
    }
  },
});
