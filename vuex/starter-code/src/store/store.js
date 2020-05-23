import Vue from 'vue';
import Vuex from 'vuex';

// To enable Vuex
Vue.use(Vuex);

// To export the store made in vuex
export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + ' Clicks';
        }
    },
    mutations: {
        increment: state => {
            state.counter++;
        },
        decrement: state =>  {
            state.counter--;
        }
    }

});