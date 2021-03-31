import Vue from "vue";
import Vuex from "vuex";
import firebase from 'firebase'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    edades: [],
    fiambre: [],
  },
  mutations: {
    GET_DATA_USERS(state, users){
      state.users = users
    },
    GET_DATA_EDADES(state, edades){
      state.edades = edades
    },
    GET_DATA_FIAMBRE(state, fiambre){
      state.fiambre = fiambre
    },
  },
  actions: {
    async getDataEdades({ commit }) {
      try {
        await firebase
          .firestore()
          .collection("edades")
          .onSnapshot((snapshot) => {
            let edades = [];
            snapshot.forEach((p) => {
              edades.push({ id: p.id, data: p.data() });
            });
            commit("GET_DATA_EDADES", edades);
          });
      } catch (error) {
        console.log("error:", error);
      }
    },  



    async getDataUsers({ commit }) {
      try {
        await firebase
          .firestore()
          .collection("users")
          .onSnapshot((snapshot) => {
            let users = [];
            snapshot.forEach((p) => {
              users.push({ id: p.id, data: p.data() });
            });
            commit("GET_DATA_USERS", users);
          });
      } catch (error) {
        console.log("error:", error);
      }
    },

    async getDataFiambre({ commit }) {
      try {
        await firebase
          .firestore()
          .collection("fiambre")
          .onSnapshot((snapshot) => {
            let fiambre = [];
            snapshot.forEach((p) => {
              fiambre.push({ id: p.id, data: p.data() });
            });
            commit("GET_DATA_FIAMBRE", fiambre);
          });
      } catch (error) {
        console.log("error:", error);
      }
    },  


  },
  modules: {}
});
