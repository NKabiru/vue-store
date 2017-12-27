import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const states = {
    carouselGameIDs: ['3030-54134', '3030-59203', '3030-52647', '3030-58573', '3030-54144'],
    gameImageUrls: [],
    tableGameIDs: ['3030-54134', '3030-59203', '3030-52647', '3030-58573', '3030-54144','3030-56733','3030-34407',
        '3030-48320', '3030-33394', '3030-30475', '3030-54979'],
    tableGameData: []
};

const getters = {
    getGameById: (state) => (id) =>{
        return state.tableGameData.find(game => game.guid === id)
    }
};

const mutations = {
    GET_METADATA: (state) => {

    }
};

const actions = {

};

export default new Vuex.Store({
    states,
    getters,
    mutations,
    actions
});