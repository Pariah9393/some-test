import { createStore } from 'vuex';
import axios from 'axios';

export const store = createStore({
  state: {
    items: [],
    searchValue: '',
    searchCount: 0,
    currentPage: 1,
    loading: false,
  },
  mutations: {
    setItems(state, payload) {
      state.items = payload;
    },
    setSearchCount(state, payload) {
      state.searchCount = payload;
    },
    setSearchValue(state, payload) {
      state.searchValue = payload;
    },
    setCurrentPage(state, payload) {
      state.currentPage = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
  },
  getters: {
    getItems(state) {
      return state.items;
    },
    getSearchValue(state) {
      return state.searchValue;
    },
    getSearchCount(state) {
      return state.searchCount;
    },
    getCurrentPage(state) {
      return state.CurrentPage;
    },
  },
  actions: {
    fetchItemsWithSearch(context, options) {
      try {
        context.commit('setLoading', true);
        axios
          .get(
            process.env.VUE_APP_BASE_URL +
              `&s=${options.s}` +
              `&page=${options.page}`
          )
          .then((response) => {
            context.commit('setItems', response.data.Search);
            context.commit('setSearchCount', response.data.totalResults);
            context.commit('setSearchValue', options.s);
          });
      } catch (e) {
        console.error(e);
      }
      context.commit('setLoading', false);
    },
  },
});
